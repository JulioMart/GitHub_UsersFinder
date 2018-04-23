class UI{
    constructor() {
        this.profile = document.querySelector('#profile');
    }

    showProfile(user){
    this.profile.innerHTML = `
    <div class="card card-body mb-3">
        <div class="row">
            <div class="col-md-3">
                <img src="${user.avatar_url}" class="img-fluid mb-2">
                <a href="${user.html_url}" target="_blank" class="btn btn-primary btn-block mb-3">View Profile</a>
            </div>
            <div class="col-md-9">
                <span class="badge badge-danger">Public Repos: ${user.public_repos}</span>
                <span class="badge badge-warning">Public Gists: ${user.public_gists}</span>
                <span class="badge badge-success">Followers: ${user.followers}</span>
                <span class="badge badge-info">Following: ${user.following}</span>
                <br><br>
                <ul class="list-group">
                    <li class="list-group-item">Company: ${user.company}</li>
                    <li class="list-group-item">Website: <a href="${user.blog}" target="_blank">${user.blog}</a></li>
                    <li class="list-group-item">Location: ${user.location}</li>
                    <li class="list-group-item">Member Since: ${user.created_at}</li>
                </ul>
            </div>
        </div>
    </div>

    <h3 class="page-heading mb-3">Latest Repo</h3>
    <div id="repos"></div>
    `;        
    }

    //Show repos
    showRepos(repos){
        let output = '';

        repos.forEach(repo => {
            output += `
            <div class="card card-body mb-2">
            <div class="row">
                <div class="col-md-6">
                    <a href="${repo.html_url}" target="_blank">${repo.name}</a>
                </div>
                <div class="col-md-6">
                <span class="badge badge-danger">Stars: ${repo.stargazers_count}</span>
                <span class="badge badge-warning">Watchers: ${repo.watchers}</span>
                <span class="badge badge-success">Forks: ${repo.forms_count}</span>
                </div>
            </div>
            </div>
            `;
        });

        document.querySelector('#repos').innerHTML = output;
    }

    // Show Alert Message
    showAlert(msg, className){
        // Clear Alert
        this.clearAlert();

        // Create div
        const div = document.createElement('div');
        div.className = className;
        div.appendChild(document.createTextNode(msg));

        // Get Parent
        const container = document.querySelector('.searchContainer');
        // Get Search
        const search = document.querySelector('.search');

        //Insert Div
        container.insertBefore(div, search);

        //Timeout
        setTimeout(()=>{
            this.clearAlert();
        }, 2500);
    }

    // Clear Alert
    clearAlert(){
        const alertMSG = document.querySelector('.alert');
        if(alertMSG){
            alertMSG.remove();
        }
    }

    // clear Profile
    clearProfile(){
        this.profile.innerHTML = '';
    }
}