//Inst GitHub
const github = new GitHub;
//Inst UI
const ui = new UI;

//Get input
const searchUser = document.querySelector('#searchUser');

//Search event
searchUser.addEventListener('keyup', (e) => {
    //Get text
    const userText = e.target.value;

    if(userText !== ''){
        github.getUser(userText)
            .then(data => {
                if(data.profile.message === 'Not Found'){
                    //Alert
                    ui.showAlert('User not found', 'alert alert-danger');

                    //Clear Profile
                    ui.clearProfile();
                } else {
                    //Show profile
                    ui.showProfile(data.profile);
                    ui.showRepos(data.repos);
                }
            })
    } else {
        // Clear profile
        ui.clearProfile();
    }  
});