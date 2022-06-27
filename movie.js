const addMovie = document.querySelector('.btn--movie');
const baseCancel = document.querySelector('.baseCancel');
const backdrop = document.querySelector('.backdrop');
const add = document.querySelector('.base1');
const movies = [];
const movieError = document.querySelector('.movie-error')
const urlError =document.querySelector('.url-error')
const rateError =document.querySelector('.rate-error')
const numberError = document.querySelector('.number-error')
const movieTitle = document.querySelector('.movTitle')
const imageUrl = document.querySelector('.imageUrl')
const rating = document.querySelector('.rating')


 
document.getElementById("div1").style.display="none";

function addMovieModal(){
    backdrop.classList.remove('hidden');
    document.getElementById("div1").style.display="block";
}

addMovie.addEventListener('click',addMovieModal);

baseCancel.addEventListener('clicK',function(){
    document.querySelector(".div1").style.display="none";
})

backdrop.addEventListener('click', function(){
    backdrop.classList.add('hidden');
    document.getElementById("div1").style.display="none";
})

function saveMovie(e){
    e.preventDefault()
    
    const movieTitle =  document.getElementById("movie").value;
    console.log(movieTitle);
    const image = document.getElementById("image").value;
    console.log(image);
    const rate =document.getElementById("rate").value;
    console.log(rate);
    if (!movieTitle){
        movieError.classList.remove('hidden')
        return;
    }

    if (!image){
        urlError.classList.remove('hidden')
        return;
    }

    if (!rate){
        rateError.classList.remove('hidden')
        return;
    }
    if (rate < 1 || rate > 5){
        numberError.classList.remove('hidden')
        return;
    }

    const movie = {title:movieTitle, url:image, rating:rate}
    movies.push(movie)
    console.log(movies);
   
    
 }

add.addEventListener('click',saveMovie)

 
document.body.appendChild(newElement);

