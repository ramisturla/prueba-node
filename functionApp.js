const moviesDh = require("./movies");

const funcionesPeliculas = {
  listMovies: function () {
   return moviesDh.map((movie) => movie.title);
  },
  searchMovie:function(dato){
    let pelicula = moviesDh.find(movie => movie.id == dato || movie.title == dato)
    if (pelicula == undefined){
        return null
    }else {
        return pelicula
    }
},
    searchMoviesByGenre:function(datoG){
    let peliculas = moviesDh.filter(movie => movie.genre  == datoG)
    if (peliculas.length == 0){
        return null
    }else {
        return peliculas
    }
},
    totalPrice : function(){
        let precios = moviesDh.map((movie) => movie.price)
        let price = precios.reduce((acum,num)=>acum+num)
        return price
},
    changeMovieGenre: function(peliculaId,genero){
        let busqueda = this.searchMovie(peliculaId)
        if (busqueda != null){
             busqueda.genre = genero
             return "El genero de la pelicula cambio"
        }else {
            return "No se encontro la pelicula"
        }

    }


};



console.log(funcionesPeliculas.listMovies())
module.exports = funcionesPeliculas;
