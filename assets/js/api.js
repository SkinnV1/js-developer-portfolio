
async function fethcProfileData(){
  const url = 'https://raw.githubusercontent.com/SkinnV1/js-developer-portfolio/main/data/profile.json'
  const fetching = await fetch(url)
  return await fetching.json()
}