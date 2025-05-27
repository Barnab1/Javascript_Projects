//Variables fetching
const githubUserName = document.getElementById('github_user');
const personalToken = document.getElementById('personal_token')
const searchBtn = document.getElementById('search_github');


const findUserInformation = (username, personalToken ="")=>{

const headers = personalToken ? { "Authorization": `Bearer ${personalToken}` } : {}; // Use an empty object when no token

fetch(`https://api.github.com/users/${username}`, { headers })
  .then(response => {
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return response.json();
  })
  .then(data => console.log("User Info:", data))
  .catch(error => console.error("Error fetching user info:", error));

}

searchBtn.addEventListener('click', (e)=>{
  const username = githubUserName.value;
  e.preventDefault();
  console.log(username);
  findUserInformation(username,"");
})