//Variables fetching
const githubUserName = document.getElementById('github_user');
const personalToken = document.getElementById('personal_token')
const searchBtn = document.getElementById('search_github');
const response = document.getElementById('response');

const findUserInformation = (username, personalToken ="")=>{

const headers = personalToken ? { "Authorization": `Bearer ${personalToken}` } : {}; // Use an empty object when no token

fetch(`https://api.github.com/users/${username}`, { headers })
  .then(response => {
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return response.json();
  })
  .then(data =>
    { 
    
    console.log(data);
    const result = `
    <img class="profile" src="${data['avatar_url']}" alt="Github user profile">
    <div class="user-information">
       <p id="github_username">Github username:<strong>${data['login']}</strong></p>
       <a href="${data['html_url']}">Find on Github</a> 
    </div>
</div>`;
  response.innerHTML= result;

}
  )
  .catch(error => response.innerHTML = `Not Found, Please try again`);

}

searchBtn.addEventListener('click', (e)=>{
  const username = githubUserName.value;
  e.preventDefault();
  console.log(username);
  findUserInformation(username);
})