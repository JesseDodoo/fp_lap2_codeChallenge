const form = document.querySelector('#new-message-form');

// form.addEventListener('submit', submitAnonMessage);

getAllMessages();

async function getAllMessages(){
    const response = await fetch('http://localhost:4000/users')
    const json =  await response.json()
    console.log(json)
    return json;
}
