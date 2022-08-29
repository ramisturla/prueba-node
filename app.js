const funcionesPeliculas = require("./functionApp");
let accion = process.argv[2];
let busqueda = process.argv[3];
let cambio = process.argv[4];



switch (accion) {
    case "Lista":
        console.log (funcionesPeliculas.listMovies())
        break;
    case "busqueda":
        console.log (funcionesPeliculas.searchMovie(busqueda))
        break;
    case "Genero":
        console.log (funcionesPeliculas.searchMoviesByGenre(busqueda))
        break;
    case "Total":
        console.log(funcionesPeliculas.totalPrice())
        break
}