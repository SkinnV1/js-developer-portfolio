
function updateProfileData(profileData) {
  const photo = document.getElementById('profile.photo')
  photo.src = profileData.photo
  photo.alt = profileData.name

  const name = document.getElementById('profile.name')
  const job = document.getElementById('profile.job')
  const location = document.getElementById('profile.location')
  const phone = document.getElementById('profile.phone')
  const email = document.getElementById('profile.email')
  
  name.innerText = profileData.name
  job.innerText = profileData.job
  phone.innerText = profileData.phone
  phone.href = 'tel:${profile.phone}'
  location.innerText = profileData.location
  email.innerText = profileData.email
  email.href = 'mailto:${profileData.email}'
}

function updateSkill(profileData) {
  const hardSkills = document.getElementById(`profile.skills.hardskills`)
  hardSkills.innerHTML = profileData.skills.hardSkills.map(skill => `<li>
  <img src="${skill.logo}" alt="${skill.name}" title="${skill.name}">
  </li>`).join('')

  const softSkills = document.getElementById('profile.skills.softskills')
  softSkills.innerHTML = profileData.skills.softSkills.map(skill =>`<li>${skill}</li>`).join('')
}

function updateLanguage(profileData){
  const language = document.getElementById('profile.languages')
  language.innerHTML = profileData.languages.map( language => `<li>${language}</li>`).join('')
}

function updatePortfolio(profileData) {
  const portfolio = document.getElementById('profile.portfolio')
  portfolio.innerHTML = profileData.portfolio.map(project => `<li><h3 class="title">${project.name}</h3>
  <a href="${project.url}" target="_blank" rel="noopener noreferrer">${project.url}</a></li>`).join('')
}

(async () =>{
  const profileData = await fethcProfileData()
  updateProfileData(profileData)
  updateSkill(profileData)
  updateLanguage(profileData)
  updatePortfolio(profileData)

})()