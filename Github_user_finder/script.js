//Variables fetching

const githubUserName = document.getElementById('github_user').value.trim().toLowerCase();
const personalToken = document.getElementById('personal_token')
const searchBtn = document.getElementById('search_github');

const findUserInformation = (username, personalToken="")=>{

const headers = personalToken ? { "Authorization": `Bearer ${token}` } : {}; // Use an empty object when no token

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