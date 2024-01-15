const getUser = async (userName) => {
    const resUser = await fetch(`https://api.github.com/users/${userName}`);
    const user = await resUser.json();

    const resRepos = await fetch(`https://api.github.com/users/${userName}/repos?sort=update`);

    const reposData = await resRepos.json();
    const repos = reposData.map(repo => {
        const {id, full_name, language} = repo;
        return {
            id,
            full_name,
            language,        
        }
    });

    return {
        repos,
        user,
    }
}

export default getUser;