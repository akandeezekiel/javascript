let myName = "Kunle"
const test = async()=>{
    await delay()
    console.log(myName);
}
const delay = ()=>{
    setTimeout(() => {
        myName = "Sola"
     }, 3000);
}
const endpoint = "https://jsonplaceholder.typicode.com/users"
const endpoint2 = "https://api.github.com/users"
const text = async()=>{
    let response = await fetch(endpoint2)
    let jsonResponse = await response.json()
    console.log(jsonResponse)
    jsonResponse.map((item)=>{
        disp.innerHTML +=`
        <h1>${item.login}</h1>
        <img src="${item.avatar_url}"/>
        `
        
    })
}
const getLocation = ()=>{
    navigator.geolocation.getCurrentPosition((position)=>{
        console.log(position.coords.latitude)
        console.log(position.coords.longitude)
    })
}