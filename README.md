# Aplicación web de indexado de la API de iTunes

## General

Esta aplicación tiene el objetivo de conseguir datos sobre los álbumes de la API de la tienda de iTunes y listar los resultados a través de un término de búsqueda.

## Prerrequisitos:

Asegurarnos de tener Node.js instalado. Podemos descargar Node.js de: https://nodejs.org/. La versión en la que corre la aplicación es: Python 3.10.11

## Instalar dependencias

(Dentro de la carpeta del proyecto):\
```properties
npm install
```  

## Iniciar la aplicación

```properties
npm start
``` 

Abrimos: [http://localhost:3000](http://localhost:3000) para ver la aplicación en nuestro buscador.

## Uso

- Seleccionamos la opción de "Buscar álbumes".
- Insertamos en el TextBox el álbum/es que queremos buscar y le damos "Buscar".
- Podemos cambiar las páginas con los botones "Anterior" y "Siguiente"
- Podemos darle a "Ver todos" para ver el listado de todos los álbumes encontrados.

## Sobre la API

- artworkUrl100: link a la imágen del álbum.
- artistName: nombre del artista del álbum.
- collectionName: nombre del álbum.
- currency: moneda del precio del álbum.
- collectionPrice: precio del álbum.

## Arquitectura del código

La aplicación corre en App.js que maneja la Home page y contiene el routing de la app, tiene otros archivos que manejan componentes visuales, 'fetching' y display de los componentes.
- AlbumCard.js: componente visual para mostrar la imágen, título, etc.
- SearchResults.js: despliega los álbumes en formato de AlbumCard, aquí también se maneja el checkbox de 'SeeAll' para ver todos los resultados y la paginación.
- itunesService.js: consulta la API para conseguir los datos de los álbumes y se encarga de eliminar duplicados posibles.

