<br />
<div align="center">
  <a>
    <img src="https://res.cloudinary.com/dm0qsdpr8/image/upload/v1673872160/imagenes/logo_polibooks_mjs7x6.png" alt="Logo" width="80" height="80">
  </a>

  <h3 align="center"><b>POLIBOOKS</b></h3>

  <p> Registrador de lectura virtual </p>
  
   <img src="https://blog.cosasmolonas.com/wp-content/uploads/2015/04/registro-lectores-imprimible.jpg" alt="Logo" width="380" height="340">
 
</div>


## Sobre proyecto
<div align="center">
    <img src="https://res.cloudinary.com/dm0qsdpr8/image/upload/v1673872949/imagenes/portada_polibooks_lq15te.png" >
    <br></br>
</div>



El proyecto consiste en la implementación de un CRUD en Ionic. 

La temática del CRUD consiste en una agenda de libros virtuales para almacenar información sobre libros leidos por el usuario. Estos datos registrados se almacenarán dentro de una base de datos en Firebase

Como parte de las funcionalidades del CRUD se tiene:
<ul>
    <li><a href="#agregar-libro-a-la-lista">Agregar libro a la lista</a></li>
    <li><a href="#ver-lista-de-libros">Ver lista de libros</a></li>
    <li><a href="#ver-detalle-de-libro">Ver detalle de libro</a></li>
    <li><a href="#editar-información-de-libro">Actualizar información de libro</a></li>
    <li><a href="#eliminar-información-de-libro">Eliminar información de libro </a></li>
</ul>

## IMPORTANTE!!

Para poder visualizar la información de los libros, el usuario deberá iniciar sesión a través del formulario que se muestra a continuación:

<div align="center">
    <img src="https://res.cloudinary.com/dm0qsdpr8/image/upload/v1673874856/imagenes/login_polibooks1_y4dabe.png" >

</div>

### Agregar libro a la lista

Para agregar un nuevo libro a la lista, se debe llenar un formulario que cuenta con los campos:
<ul>
    <li>Nombre del libro</li>
    <li>Autor del libro</li>
    <li>Categoria a la que pertenece el libro</li>
    <li>Resumen</li>
    <li>Valoración</li>
</ul>

### Ver lista de libros

La lista de los libros registrados se muestran a continuación de que el usuario haya iniciado sesión en su cuenta en la página principal.

<div align="center">
    <img src="https://res.cloudinary.com/dm0qsdpr8/image/upload/v1673877267/imagenes/mostrar-info_gbneoj.png" alt="lista-libros">
</div>

En esta página además se encuentran los botones que nos permiten acceder a los módulos: <a href="#agregar-libro-a-la-lista">Añadir libro</a> y <a href="#ver-detalle-de-libro">Ver más información del libro</a>.

### Ver detalle de libro

Al acceder a esté módulo, se debe dar clic en el botón "Ver info" que se muestra del apartado <a href="#ver-lista-de-libros">🖼</a>

Realizada esa acción se mostrará la siguiente información

<div align="center">
    <img src="https://res.cloudinary.com/dm0qsdpr8/image/upload/v1673877267/imagenes/ver-detalle_fxow1m.png" alt="detalle">
</div>

En este apartado se puede acceder a los módulos de <a href="#editar-información-de-libro">Editar</a> y <a href="#eliminar-información-de-libro">Eliminar</a> información del libro a través de los botones que se encuentran en la parte inferior de la imagen.

### Editar información de libro

Dentro de este apartado se encuentra el siguiente formulario, en donde se podrá actualizar la información que se requiera

<div align="center">
    <img src="https://res.cloudinary.com/dm0qsdpr8/image/upload/v1673877267/imagenes/editar-info_re8jeu.png" alt="editar">
</div>

### Eliminar información de libro

Como último apartado tenemos el eliminar información.

Una vez que se presione el botón de "Eliminar" mostrado en la imagen <citar imagen>, se presentará un modal para Confirmar o Cancelar la acción

<div align="center">
    <img src="https://res.cloudinary.com/dm0qsdpr8/image/upload/v1673877267/imagenes/eliminar-info_yhp53y.png" alt="eliminar">
</div>

## FIREBASE

La información se almacena dentro de una base de datos en Firebase.

![image](https://user-images.githubusercontent.com/74751902/212698343-fa1feefd-d6a5-40ac-ab6c-261db29d8e43.png)


