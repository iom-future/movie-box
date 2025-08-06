//doing a filter for a movie app; when you pass in a parameter like genre
//it returns all the movie in that  genre
let movieList = [
    { tittle: "Thunderbolt",
      genre: "action",
      rating:9,
      year: "2025"
    },
    { tittle: "Kingdom of the planet of apes",
        genre: "thriller",
        rating:6,
        year: "2024"
    },
    { tittle: "Absolutely anything",
        genre: "comedy",
        rating:8.5,
        year: "2015"
    },
    { tittle: "Over the moon",
        genre: "romance",
        rating:7,
        year: "2020"
    },
    { tittle: "Mastermind",
        genre: "action",
        rating:7,
        year: "2016"
    },
    { tittle: "God of war",
        genre: "action",
        rating:9,
        year: "2017"
    },
    { tittle: "Inception",
        genre: "sci-fi",
        rating:7,
        year: "2018"
    },
    { tittle: "The hit man",
        genre: "rom-com",
        rating:9.5,
        year: "2021"
    },
    { tittle: "King of kings",
        genre: "animation",
        rating:10,
        year: "2025"
    },
    { tittle: "Ballerina",
        genre: "action",
        rating:6,
        year: "2025"
    },
    { tittle: "The matrix",
        genre: "action",
        rating:9,
        year: "2002"
    },
    { tittle: "The iron man",
        genre: "action",
        rating:10,
        year: "2004"
    },
    { tittle: "Nimona",
        genre: "animation",
        rating:8,
        year: "2023"
    },
    { tittle: "Straw",
        genre: "tragedy",
        rating:9,
        year: "2025"
    },
    { tittle: "Iron heart",
        genre: "action",
        rating:2,
        year: "2025"
    }
]

//FILTER FUNCTION -->  get movie based on rating and/or genre
function getMovieBasedOnFilter(filters) {
    //[Tragedy,9,2025]
    let pickedMovie = [];
    let i =0;
    let keysOfFilter = Object.keys(filters);
    let  lastKeysOfFilter=keysOfFilter.at(-1)
    while(i<movieList.length) {
        for (let element in filters) {
            if (filters[element] !== movieList[i][element]) {
                break;
            } else {
                if(!pickedMovie.includes(movieList[i])&&element===lastKeysOfFilter ) {
                    pickedMovie.push(movieList[i]);
                }
            }
        }
        i++
    }
    return pickedMovie;
}
let filterOption ={
    genre : 'action',
   // rating :9,
   //year :'2025'
}

//.join removes the braces from the array(pickedMovie) and put the passed argument ","
console.log(getMovieBasedOnFilter(filterOption));
