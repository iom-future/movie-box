//doing a filter for a movie app; when you pass in a parameter like genre
//it returns all that genre


let movieList = [
    { tittle: "Thunderbolt",
      genre: "Action",
      rating:7,
      year: "2025"
    },
    { tittle: "Kingdom of the planet of apes",
        genre: "Thriller",
        rating:6,
        year: "2024"
    },
    { tittle: "Absolutely anything",
        genre: "Comedy",
        rating:8.5,
        year: "2015"
    },
    { tittle: "TOver the moon",
        genre: "Romance",
        rating:7,
        year: "2020"
    },
    { tittle: "Mastermind",
        genre: "Action",
        rating:5,
        year: "2016"
    },
    { tittle: "God of war",
        genre: "Action",
        rating:9,
        year: "2017"
    },
    { tittle: "Inception",
        genre: "Sci-fi",
        rating:7,
        year: "2018"
    },
    { tittle: "The hit man",
        genre: "Rom-com",
        rating:9.5,
        year: "2021"
    },
    { tittle: "King of kings",
        genre: "Animation",
        rating:10,
        year: "2025"
    },
    { tittle: "Ballerina",
        genre: "Action",
        rating:6,
        year: "2025"
    },
    { tittle: "The matrix",
        genre: "Action",
        rating:9,
        year: "2002"
    },
    { tittle: "The iron man",
        genre: "Action",
        rating:10,
        year: "2004"
    },
    { tittle: "Nimona",
        genre: "Animation",
        rating:8,
        year: "2023"
    },
    { tittle: "Straw",
        genre: "Tradegy",
        rating:9,
        year: "2025"
    },
    { tittle: "Iron heart",
        genre: "Action",
        rating:2,
        year: "2025"
    }
]

//SEARCH FUNCTION --> allows you to search movies
function searchMovie(nameOfMovie){

}

//FILTER FUNCTION -->  get movie based on rating and/or genre
function getMovieBasedOnFilter(...filters) {
    let pickedMovie = [];
    //the first for of loop picks the elements of the filter array
    let i = 0;
    for (let filter of filters) {
        //the second for of loop picks the elements(which is an object ) from the movieList array
        //it allows you iterate over the movieList array
        while (i<movieList.length) {
            let movie = movieList[i];
            //the for in loop below allows you iterate over the property in the movie object
            for (let movieListKey in movie) {
                if (filter === movie[movieListKey]) {
                    pickedMovie.push(movie);
                    break;
                }

            }
            i++;

            if(i===movieList.length){
                movieList=pickedMovie;
                pickedMovie=[];
            }

        }
    }
    return pickedMovie;
}
//.join removes the braces from the array(pickedMovie) and put the passed argument ","
console.log(getMovieBasedOnFilter(9,"Tragedy"));
