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
    backdrop.classList.add('hidden');
    document.getElementById("div1").style.display="none";
})

backdrop.addEventListener('click', function(){
    backdrop.classList.add('hidden');
    document.getElementById("div1").style.display="none";
})
let id=1

function saveMovie(e){
    e.preventDefault()
    

    
    const titleOfMovie =  document.getElementById("movie").value;
    console.log(titleOfMovie);
    const image = document.getElementById("image").value;
    console.log(image);
    const rate =document.getElementById("rate").value;
    console.log(rate);
    if (!titleOfMovie){
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

    const movie = {id:id,title:titleOfMovie, url:image, rating:rate}
    
    movies.push(movie)
 
    console.log(movies);
    const movieList = document.querySelector('.movie-list')

    const newMovie =document.createElement('div')
    newMovie.classList.add('new-movie')

    const movieId =document.createElement('span')
    movieId.textContent=id;
    movieId.classList.add('movie-id')
    newMovie.append(movieId)

    const newMovieTitle =document.createElement('span')
    newMovieTitle.textContent = titleOfMovie;
    newMovie.append(newMovieTitle)

    const movieImage = document.createElement('img')
    movieImage.src = image
    movieImage.classList.add('movie-image')
    newMovie.append(movieImage)

    const ratin =document.createElement('span')
    ratin.textContent = rate
    ratin.classList.add('rat-in')
    newMovie.append(ratin)


    movieList.appendChild(newMovie)
    id++

    document.getElementById("movie").value = '';
    document.getElementById("image").value = '';
    document.getElementById("rate").value = '';
   
    backdrop.classList.add('hidden');
    document.getElementById("div1").style.display="none";
    
 }

add.addEventListener('click',saveMovie)





