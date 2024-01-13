let popupTitle = document.getElementById('popupTitle');
let popupDescription = document.getElementById('popupDescription');
let editBtn = document.getElementById('editBtn');
let newNoteBtn = document.getElementById('newNoteBtn');
let popup = document.getElementById('popup');
let deleteBtn = document.getElementById('deleteBtn');
let isEdit = false;
let lastClickedId = 0;
let noErrors = true;
let userNameDiv = document.getElementById('userNameDiv');
let userMenu = document.getElementById('userMenu');
let deleteUser = document.getElementById('deleteUser');
<<<<<<< HEAD

userNameDiv.innerText = getCookie('name');

userNameDiv.addEventListener('click', function(e) {
if(userMenu.classList.contains("open")) {
    userMenu.classList.remove("open");
    userMenu.style.transform = "translate(0px, -200%)";
} else {
    userMenu.classList.add("open");
    userMenu.style.transform = "translate(0px, -23%)";
=======
let closeBtn = document.getElementById('close');
let isPortratit = window.screen.orientation.type == "portrait-primary" || window.screen.orientation.type == "portrait-secondary";

let server = "https://nazar624.bsite.net/";

userNameDiv.innerText = getCookie('name');

console.log(isPortratit);

userNameDiv.addEventListener('click', function(e) {
    
    isPortratit = window.screen.orientation.type == "portrait-primary" || window.screen.orientation.type == "portrait-secondary";

    if(userMenu.classList.contains("open")) {
    userMenu.classList.remove('open');
    userMenu.style.transform = "translate(0px, -200%)";
} else {
    userMenu.classList.add('open');
        userMenu.style.transform = "translate(0px, 0px)";
    
>>>>>>> a5d7544 (Maui app added)
}

});

<<<<<<< HEAD
=======
closeBtn.addEventListener('click', function (e) {
    popup.classList.remove('open');
});

>>>>>>> a5d7544 (Maui app added)
popup.addEventListener('click', function(e) {
    if(!e.target.closest('.popupContent')){
        popup.classList.remove('open');
        document.body.style.overflowY = "auto";
        deleteBtn.style.display = 'block';
    }
});

document.addEventListener('click', function(e) {
    let targ = this.getElementById(e.target.id);
    if(!e.target.contains(document.body) && targ.classList.contains("title")) {
        let x = this.getElementById(e.target.id + 'd');
        lastClickedId = e.target.id;
        popupTitle.value = targ.innerText;
        popupDescription.value = x.innerText;
        if(!popup.classList.contains("open")) {
            popup.classList.add("open");
            document.body.style.overflowY = "hidden";
<<<<<<< HEAD
=======
            // document.body.style.overflowX = "hidden";
            window.scrollX(0);
>>>>>>> a5d7544 (Maui app added)
            popupTitle.readOnly = true;
    popupDescription.readOnly = true;
    editBtn.innerText = "Edit";//.classList.add("overfhidden"); //style.overflow = "hidden";
        }
    }
});

if(navigator.cookieEnabled == false){
    navigator.cookieEnabled = true;
}


function setCookie(name, value) {
    document.cookie = `${name}=${value}; expires=Fri, 31 Dec 9999 23:59:59 GMT; path=/`;
}
function deleteCookie(name) {
    setCookie(name, null);
}
function getCookie(name){
    const cDecoded = decodeURIComponent(document.cookie);
    const cArray = cDecoded.split("; ");
    let result = null;
    
    cArray.forEach(element => {
        if(element.indexOf(name) == 0){
            result = element.substring(name.length + 1)
        }
    })
    return result;
}
function getNotes() {

    const userid = getCookie('userId');
<<<<<<< HEAD
    fetch(`https://localhost:7055/api/Notes/GetUserNotes/${getCookie('userId')}/${getCookie('password')}`)
=======
    fetch(`${server}api/Notes/GetUserNotes/${getCookie('userId')}/${getCookie('password')}`)
>>>>>>> a5d7544 (Maui app added)
.then((resu) => resu.json())
.then(data => {
    if(data.value == "Password changed") {
        deleteCookie('userId');
        window.location.reload();
    }
    data.forEach(note => {
        const mackup = `
        <h3 class="title hand" id="${note.id}">${note.title}</h3>
        <div class="noteDescription" id="${note.id}d">${note.description}</div>`;
        document.getElementById('noteContainer').insertAdjacentHTML('beforeend',mackup);
    })
})
};

newNoteBtn.addEventListener('click', function(e) {
    popup.classList.add("open");
    document.body.style.overflowY = "hidden";
    let editBtn = document.getElementById('editBtn');
    popupTitle.value = "";
    popupDescription.value = "";
    popupTitle.readOnly = false;
    popupDescription.readOnly = false;
    editBtn.innerText = "Save";
    deleteBtn.style.display = 'none';
});
editBtn.addEventListener('click', function(e) {
    if(editBtn.innerText == "Save") {
        if(isEdit == true) {
            isEdit = false;
            let data = {
                id: lastClickedId,
                userId: getCookie('userId'),
                title: popupTitle.value,
                description: popupDescription.value
        };
<<<<<<< HEAD
fetch(`https://localhost:7055/api/Notes/updateNote/${lastClickedId}`, {
=======
        
fetch(`${server}api/Notes/updateNote/${lastClickedId}`, {
>>>>>>> a5d7544 (Maui app added)
    method: 'PUT',
    body: JSON.stringify(data),
    headers:{
        "Content-type": "application/json"
    }
})
.then((resu) => {
    if(resu.status == 400 || resu.status == 500){
        noErrors = false;
    };
    return resu.json();
})
.then((datas) => {
    if(noErrors == true){
        window.location.reload();
    } else {
        let errort = datas.value;
        let errorText = document.getElementById('errorText');
        let errorH = document.getElementById("error");
        errorText.innerText = errort;
        errorH.classList.add("open");
        noErrors = true;
    }

});
        } else {
            let data = {
                id: 0,
                userId: getCookie('userId'),
                title: popupTitle.value,
                description: popupDescription.value
              };

<<<<<<< HEAD
    fetch('https://localhost:7055/api/Notes/CreateNote', {
=======
    fetch(`${server}api/Notes/CreateNote`, {
>>>>>>> a5d7544 (Maui app added)
        method: "POST",
        body: JSON.stringify(data),
        headers:{
            "Content-type": "application/json"
        }
    })
    .then((resu) => {
        if(resu.status == 400){
            noErrors = false;
        };
        return resu.json();
    })
    .then((datas) => {
        if(noErrors == true){
            window.location = "../index.html";
        } else {
            let errort = datas.value;
            let errorText = document.getElementById('errorText');
            let errorH = document.getElementById("error");
            errorText.innerText = errort;
            errorH.classList.add("open");
            noErrors = true;
        }
    
    })
        }
    }
    if(editBtn.innerText == "Edit") {
        popupTitle.readOnly = false;
        popupDescription.readOnly = false;
        isEdit = true;
        editBtn.innerText = "Save";
    }
});


deleteBtn.addEventListener('click', function(e) {
    let data = {
        id: lastClickedId,
        userId: getCookie('userId'),
        title: popupTitle.value,
        description: popupDescription.value
      };
<<<<<<< HEAD
fetch(`https://localhost:7055/api/Notes/${lastClickedId}`, {
=======
fetch(`${server}api/Notes/${lastClickedId}`, {
>>>>>>> a5d7544 (Maui app added)
method: "DELETE",
body: JSON.stringify(data),
headers:{
    "Content-type": "application/json"
}
})
.then((resu) => {
if(resu.status == 400){
    noErrors = false;
};
return resu.json();
})
.then((datas) => {
console.log(datas.value);
if(noErrors == true){
    window.location.reload();
} else {
    let errort = datas.value;
    let errorText = document.getElementById('errorText');
    let errorH = document.getElementById("error");
    errorText.innerText = errort;
    errorH.classList.add("open");
    noErrors = true;
}

})
});

<<<<<<< HEAD
userNameDiv.addEventListener('click', function(e) {

    e.preventDefault();

});
=======
>>>>>>> a5d7544 (Maui app added)

deleteUser.addEventListener('click', function(e) {
    var result = confirm('Are you sure?');
    if(result == true) {
        let data = {
            name: getCookie('name'),
            password: getCookie('password')
    };
<<<<<<< HEAD
        fetch(`https://localhost:7055/api/User/delete/${getCookie('userId')}`, {
=======
        fetch(`${server}api/User/delete/${getCookie('userId')}`, {
>>>>>>> a5d7544 (Maui app added)
    method: 'DELETE',
    body: JSON.stringify(data),
    headers:{
        "Content-type": "application/json"
    }
})
.then((resu) => {
    if(resu.status == 400 || resu.status == 500){
        noErrors = false;
    };
    return resu.json();
})
.then((datas) => {
    if(noErrors == true){
        deleteCookie('userId');
        window.location.reload();
    } else {
        let errort = datas.value;
        let errorText = document.getElementById('errorText');
        let errorH = document.getElementById("error");
        errorText.innerText = errort;
        errorH.classList.add("open");
        noErrors = true;
    }

})
    }
});

document.getElementById('LogOut').addEventListener('click', function (e) {
    deleteCookie('userId');
    window.location.reload();
});