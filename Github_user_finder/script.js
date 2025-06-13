//Variables fetching
const githubUserName = document.getElementById('github_user');
const personalToken = document.getElementById('personal_token')
const form = document.getElementById('form');
const response = document.getElementById('response');

const findUserInformation = async (username)=>{
try{
  const res = await fetch(`https://api.github.com/users/${username}`);
  if (!res.ok){
    throw new Error("User not found");
  }
  const data = await res.json();
  response.innerHTML = 
  `
    <img src="${data.avatar_url}" width="100" />
    <h2>${data.name || data.login}</h2>
    <p>${data.bio ?? "No bio available."}</p>
    <p> 👥 Followers: ${data.followers} | Following: ${data.following} </p>
    <p> 📁 Public Repos: ${data.public_repos} </p>
    <a href="${data.html_url}" target="_blank">Connect with ${data.login}</a>
  `
}catch(err){
  response.innerHTML = `<p>User not found </p> ❌`;
}



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

form.addEventListener('submit', async (e)=>{
  
  //disableButton();
  e.preventDefault();
  const username = sanitizeInput(githubUserName.value);
  checkEmptyInput(username);

  console.log(username);

  response.innerHTML = "<p>Loading...</p>";

  findUserInformation(username);
  enableButton();
})