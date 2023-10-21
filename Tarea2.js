class Libro{
    constructor(titulo, autor, estado){
        this.titulo = titulo;
        this.autor = autor;
        this.estado = estado;
    }
}

class Biblioteca{
    constructor(){
        this.libros = new Map;
    }

    //Para agregar un libro a la biblioteca
    agregarLibro(libro){
        let id = Math.random().toString(36).substring(2);
        return this.libros.set(id, libro);
    }

    //Para aliminar un libro
    eliminarLibro(id){
        return this.libros.delete(id);
    }

    //Para buscar libro por titulo
    buscarLibroTitulo(titulo){
        for(const [id, libro] of this.libros) {
            if(libro.titulo == titulo){
                console.log(`Clave: ${id}`);
                console.log(`título: ${libro.titulo}
                autor: ${libro.autor}
                estado: ${libro.estado}`);
            }
        }
    }

    //Para buscar libro por autor
    buscarLibroAutoro(autor){
        for(const [id, libro] of this.libros) {
            if(libro.autor == autor){
                console.log(`Clave: ${id}`);
                console.log(`título: ${libro.titulo}
                autor: ${libro.autor}
                estado: ${libro.estado}`);
            }
        }
    }

    //Para imprimir todos los libros de la biblioteca
    imprimirBiblioteca(){
        for(const [id, libro] of this.libros) {
            console.log(`Clave: ${id}`);
            console.log(`título: ${libro.titulo}
            autor: ${libro.autor}
            estado: ${libro.estado}`);
        }  
    }

    //Para prestar libro
    prestarLibro(id){
        const libro = this.libros.get(id);
        if(libro.estado == "disponible"){
            libro.estado = "prestado";
            eliminarLibro(id);
            this.libros.set(id, libro);
        }
        else
        console.log(`Ya se encuantra prestado`);
    }

    //Para devolver libro
    devolverLibro(id){
        const libro = this.libros.get(id);
        libro.estado = "disponible";
        eliminarLibro(id);
        this.libros.set(id, libro);
    }
}

const libro1 = new Libro("EL Principito", "Saint-Exupéry", "disponible");
const libro2 = new Libro("Mesias Ario", "Mario Escobar", "prestado");

const biblioteca = new Biblioteca();
biblioteca.agregarLibro(libro1);
biblioteca.agregarLibro(libro2);
biblioteca.imprimirBiblioteca();