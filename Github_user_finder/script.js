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
       <a href="${data['html_url']}" target="_blank">Find on Github</a> 
    </div>
</div>`;
  response.innerHTML= result;

}
  )
  .catch(error => response.innerHTML = `Github User not Found, Please try again`);

}
const sanitizeInput = userInput =>{
  return userInput.trim();
}

const checkEmptyInput = userInput =>{
  if(userInput === ""){
    alert("Provide Github user's name");
    return;
  }
}

const disableButton = ()=>{
  searchBtn.disabled = true;
  searchBtn.style.backgroundColor = 'whitesmoke';
  searchBtn.style.color = "#000";
}

const enableButton = ()=>{
  searchBtn.disabled = false;
  searchBtn.style.backgroundColor = 'rgb(58, 184, 230)';
  searchBtn.style.color = "#000";
}

searchBtn.addEventListener('click', (e)=>{
  
  disableButton();
  e.preventDefault();
  const username = sanitizeInput(githubUserName.value);
  checkEmptyInput(username);

  console.log(username);
  findUserInformation(username);
  enableButton();
})