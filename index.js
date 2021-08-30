// Add your code here
const configurationObject = {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    },
    body: JSON.stringify({
        dogName: 'Byron',
        dogBreed: 'Poodle'
    })
};

fetch('http://localhost:3000/dogs', configurationObject)
.then(resp => resp.json())
.then(obj => console.log(obj))
.catch(function(error){
    alert('bad Things! ragnarok!');
    console.log(error.message);
});

function submitData(userName, userEmail){
    const userObj = {
        name: userName,
        email: userEmail
    }

    const configObj = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify(userObj)
    }

    return fetch('http://localhost:3000/users', configObj)
    .then(resp => resp.json())
    .then(function(obj){
        handleResp(obj)
    })
    .catch(error => handleError(error));
}

function handleResp(object){
    let h1 = document.createElement('h1');
    let body = document.querySelector('body');
    h1.textContent = (object.id);
    body.appendChild(h1);
}

function handleError(err){
    let h1 = document.createElement('h1');
    let body = document.querySelector('body');
    h1.textContent = err.message;
    body.appendChild(h1);
    // console.log(err);
}