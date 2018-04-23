class GitHub{
    constructor(){
        this.client_id='14120f28df3aebba86fb';
        this.client_secret='9a3d55f26256e88971a212832bdc9716916a3e6b';
        this.repo_count = 5;
        this.repo_sort = 'created: asc';
    }

    async getUser(user){
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

        const reposResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repo_count}&sort=${this.repo_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);

        // const profileData = await profileResponse.json();
        const profile = await profileResponse.json();
        const repos = await reposResponse.json();

        return {
            // profile: profileData
            // profile: profile
            profile,
            repos
        };
    }
}