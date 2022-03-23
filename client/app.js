const form = document.querySelector('#new-message-form');

form.addEventListener('submit', submitAnonMessage);

getAllMessages();

async function getAllMessages(){
    const response = await fetch('http://localhost:4000/users')
    const json =  await response.json()
    console.log(json)
    return json;
}


function submitAnonMessage(e){
    e.preventDefault();

    const messageData = {
        title: e.target.title.value,
        author: e.target.author.value,
        message: e.target.message.value
    }

    const options =  {
        method: 'POST', 
        body: JSON.stringify(messageData),
        headers: { "Content-Type": "application/json"}
    };

    fetch('http://localhost:4000/users', options)
        .then(r => r.json())
        .then(() => e.target.reset())
        .catch(console.log(err))
}
