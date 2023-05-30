// Start Header Section 

let body = document.body;

let profile = document.querySelector('.header .flex .profile');

document.querySelector('#user-btn').onclick = ()=>{
    profile.classList.toggle('active');
    searchForm.classList.remove('active');
}

let searchForm = document.querySelector('.header .flex .search_form');

document.querySelector('#search-btn').onclick = ()=>{
    searchForm.classList.toggle('active');
    profile.classList.remove('active');
}

let sideBar = document.querySelector('.side-bar');

document.querySelector('#menu-btn').onclick = ()=>{
    sideBar.classList.toggle('active');
    body.classList.toggle('active');
}

document.querySelector('.side-bar .close-side-bar').onclick = ()=>{
    sideBar.classList.remove('active');
    body.classList.remove('active');
}

window.onscroll = function(){
    profile.classList.remove('active');
    searchForm.classList.remove('active');

    if(window.innerWidth < 1200){
        sideBar.classList.remove('active');
        body.classList.remove('active');
    }

}

// End Header Section 


// Start Dark Mode 

const gettogglebtn = document.getElementById('toggle-btn');
const darkmode = localStorage.getItem('darkmode');

function enabledarkmode(){
    gettogglebtn.classList.replace('fa-sun','fa-moon');
    body.classList.add('dark');
    localStorage.setItem('darkmode','enable');
}

function disabledarkmode(){
    gettogglebtn.classList.replace('fa-moon','fa-sun');
    body.classList.remove('dark');
    localStorage.setItem('darkmode','disable');
}

if(darkmode === 'enable'){
    enabledarkmode();
}

gettogglebtn.onclick = (e)=>{
    const darkmode = localStorage.getItem('darkmode');
    if(darkmode === 'disable'){
        enabledarkmode();
    }else{
        disabledarkmode();
    }
}


// End Dark Mode 