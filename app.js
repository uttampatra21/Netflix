const APIURL ="https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1";
const IMGPATH = "https://image.tmdb.org/t/p/w1280";
const SEARCHAPI = "https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=";

const container = document.querySelector(".container");

const getApi = async(api) =>{
    const response = await fetch(api);
    const data = await response.json(); 
    enterData(data.results);
}

const enterData = (data) =>{
    container.innerHTML = "";

    data.forEach((item)=>{
        console.log(item);
        const movieBox = document.createElement("div");
        movieBox.classList.add("moviesBox");

        movieBox.innerHTML = `
        <img src="${IMGPATH + item.poster_path}">
        
        `;

        container.appendChild(movieBox);
    })
}

const searchBox = document.querySelector("#search");

searchBox.addEventListener("keyup",(event)=>{
    console.log(event.target.value);
    if(event.target.value != ""){
        getApi(SEARCHAPI + event.target.value);
    }else{
        getApi(APIURL); 
    }
})


// init call
getApi(APIURL);