# Practica03-Javascript
Uso De Javascript

 	
Realizado por:
John Tenesaca Criollo
	
PRÁCTICA DE LABORATORIO
CARRERA: INGENIERIA DE SISTEMA/COMPUTACION	ASIGNATURA: HIPERMEDIAL
NRO. PRÁCTICA:	3	TÍTULO PRÁCTICA: Resolución de problemas sobre JavaScript
OBJETIVO
•	Entender y organizar de una mejor manera los sitios de web en Internet
•	Diseñar adecuadamente elementos gráficos en sitios web en Internet.
•	Crear sitios web aplicando estándares actuales.


















INSTRUCCIONES	A partir de los siguientes problemas se pide implementar soluciones basadas en el lenguaje de programación de JavaScript usando funciones y eventos.

1.	Se pide construir una calculadora en el lenguaje de programación de JavaScript con base a un formulario HTML usando botones y una caja de texto. Además, para que permita realizar operaciones aritméticas de complejidad básica, como: suma, resta, multiplicación, división, raíz cuadrada, entre otros. A continuación, se muestra un ejemplo de las operaciones que debe realizar la calculadora
 

2.	Diseñar una interfaz en HTML que permita ingresar los siguientes campos en un formulario: cedula, nombres, apellidos, dirección, teléfono, fecha de nacimiento y correo electrónico. Luego, usando funciones de JavaScript se debe validar que todos los campos han sido ingresados, además; que los valores ingresados en cada campo del formulario sean correctos teniendo en cuenta las siguientes condiciones:
a.	Se debe validar qué, en el campo de la cedula, se ingrese sólo número y que la misma sea correcta, en base, al último dígito verificador.
b.	Se debe validar qué, en el campo del nombres, ingrese únicamente dos
nombres y que permita ingresar sólo letras.
 

c.	Se debe validar qué, en el campo del apellidos, ingrese únicamente dos apellidos y que permita ingresar sólo letras.
d.	Se debe validar qué, en el campo del teléfono, permita ingresar sólo números.
e.	Se debe validar que la fecha de nacimiento ingrese en el formato dd/mm/yyyy.
f.	Se debe validar qué, en el campo correo electrónico, permita ingresar un correo válido. Se considera un correo válido, cuando comienza por tres o más valores alfanuméricos, luego un @, seguido por la extensión “ups.edu.ec” o “est.ups.edu.ec”.

Indicaciones:
•	Para realizar las validaciones de solo letras, o sólo números. Se las debe realizar en tiempo real, es decir, a medida que el usuario escribe en el campo.
•	Todos los campos de entrada dentro del formulario deben de ser de tipo “text”.
•	Las demás validaciones se realizarán al momento de “enviar” (submit) la información del formulario hacia una página php. Si no cumple las validaciones, se mostrará un mensaje debajo de cada campo con el error y se pintara el campo con un borde rojo que representará que el campo tiene un error. Si se cumple las validaciones, se enviará a una página php, en donde se mostrará únicamente un mensaje que diga “Bienvenido, ¡pasaste las validaciones!”.

3.	Diseñar una interfaz en HTML que tenga tres botones que diga “Anterior”, “Iniciar”, “Siguiente”, y una imagen. Luego, desde JavaScript se debe controlar para al hacer clic sobre uno de los botones realice una acción relacionada a una galería de imágenes (ver ejemplo, https://gihp4c.blog.ups.edu.ec/)














Indications:
•	Se debe tener, un arreglo con los nombres de diez imágenes, previamente descargadas y almacenadas en una carpeta llamada “imagen”.
•	La galería de imágenes debe visualizar exclusivamente 5 imágenes.
•	Cada vez que se haga clic en el botón iniciar se deben escoger de manera aleatoria cinco imágenes de las diez que se mostrarán en la galería de imágenes.
 

	•	Al hacer clic en el botón siguiente y haber llegado a la última imagen disponible, el botón siguiente deberá ser deshabilitado (sólo cuando se ha llegado a la última imagen el botón siguiente deberá estar deshabilitado)
•	Al hacer clic en el botón anterior y haber llegado a la primera imagen disponible, el botón anterior deberá ser deshabilitado (sólo cuando se ha llegado a la última imagen y cuando se inicie la galería de imágenes el botón anterior deberá estar
rehabilitator)

ACTIVIDADES POR DESARROLLAR
1. Crear un repositorio en GitHub con el nombre “Practica03 – JavaScript”
2. Crear una carpeta para la solución de cada ejercicio antes mencionado
3. Realizar un commit y push por cada requerimiento de los puntos antes descritos.
4. Luego, se debe crear el archivo README del repositorio de GitHub.
5.	Generar informe de los resultados en el formato de prácticas. Debe incluir:
a.	El desarrollo de cada uno de los requerimientos antes descritos.
b.	La evidencia del correcto diseño de las páginas HTML usando CSS. Para lo cuál, se puede generar fotografías instantáneas (pantallazos).
c.	La evidencia del correcto funcionamiento de cada una de las funciones de JavaScript
d.	El informe debe incluir conclusiones apropiadas.
e.	En el informe se debe incluir la información de GitHub (usuario y URL del repositorio de la práctica)
f.	En el informe se debe incluir la firma digital del estudiante.
6. En el archivo README del repositorio debe constar la misma información del informe de resultados de la
práctica que se indica en el punto anterior.
RESULTADO(S) OBTENIDO(S):
•	Tener el conocimiento suficiente para que el estudiante pueda entender y organizar de una mejor manera los sitios de web y de negocios en Internet
CONCLUSIONES:
•	Los estudiantes podrán organizar sitios web basados en el lenguaje de etiquetado HTML, CSS y JavaScript
RECOMENDACIONES:
•	Probar la solución de la práctica en al menos tres navegadores web; Google Chrome, Firefox y Safari



Docente: Ing. Gabriel León Paredes, PhD.
Firma:   Firma:  
 

•	Se pide construir una calculadora en el lenguaje de programación de JavaScript con base a un formulario HTML usando botones y una caja de texto. Además, para que permita realizar operaciones aritméticas de complejidad básica, como: suma, resta, multiplicación, división, raíz cuadrada, entre otros. A continuación, se muestra un ejemplo de las operaciones que debe realizar la calculadora
   
Para la creación de la Calculadora ocupamos las siguientes etiquetas:
Como Primer paso Creamos una tabla la Cual vamos a dividir en 6 partes para agregar los diferentes botones: Suma, Resta, Multiplicación…Etc.
Index.Html

<body onload="init();">
<table class="calculadora">
    <tr>
        <td colspan="4"> <span id="resultado"> </span>
            
        </td>
    </tr> 
    <tr>
        <td><button id="cuadrado">x^2</button>  </td>
        <td><button id="cubo">x^3</button>  </td>
        <td><button id="punto">.</button>  </td>
        <td><button id="quitar">←</button>  </td>
    </tr>
    <tr>
        <td><button id="siete">7</button>  </td>
        <td><button id="ocho">8</button>  </td>
        <td><button id="nueve">9</button>  </td>
        <td><button id="division">/</button>  </td>
    </tr>
    <tr>
            <td><button id="cuatro">4</button>  </td>
            <td><button id="cinco">5</button>  </td>
            <td><button id="seis">6</button>  </td>
            <td><button id="multiplicacion">*</button>  </td>
        </tr>
        <tr>
                <td><button id="uno">1</button>  </td>
                <td><button id="dos">2</button>  </td>
                <td><button id="tres">3</button>  </td>
                <td><button id="resta">-</button>  </td>
            </tr>

            <tr>
                    <td><button id="igual">=</button>  </td>
                    <td><button id="reset">C</button>  </td>
                    <td><button id="cero">0</button>  </td>
                    <td><button id="suma">+</button>  </td>
                </tr>
    </table>
    <script src="js/funcionalidad.js"></script>


•	Como Podemos observar creamos una Tabla dividida en 6 pilas con 4 columnas
Pero debemos tener en cuenta que la primera Fila Y Columna es la Pantalla en tal caso ocupamos un 
Colspan Que nos permite juntar 4 columnas, Filas en una sola.

 

•	Como segundo objetivo para poder obtener la información creamos botones definiendo un id para poder obtener cada una de sus pulsaciones y poder realizar la acción deseada por el Usuario.
Estos deben estar definidos es una posición exacta dentro de nuestra tabla para poder mejorar nuestro diseño.
Código:

           <td><button id="suma">+</button>  </td>

•	Para poder realizar nuestras Operaciones de Forma Dinamica Ocuparemos un JavaScript Que nos permita Realizar Las operaciones De forma mas Facil. Para Poder llamar Nuestro JS Debemos Agregar el siguiente código.

<script src="js/funcionalidad.js"></script>
 



















Funcionalidad.js
•	Para realizar nuestro js necesitamos crear diferentes funciones con las cuales vamos a trabajar para las diferentes acciones que deseamos en nuestra calculadora.
function init()
{
    alert("Calculadora John ");
    //Variables
    var aux=0;
    var resultado = document.getElementById("resultado");
    var suma = document.getElementById("suma");
    var resta = document.getElementById("resta");
    var division = document.getElementById("division");
    var multiplicacion = document.getElementById("multiplicacion");
    var reset = document.getElementById("reset");
    var igual = document.getElementById("igual");
    var uno = document.getElementById("uno");
    var dos = document.getElementById("dos");
    var tres = document.getElementById("tres");
    var cuatro = document.getElementById("cuatro");
    var cinco = document.getElementById("cinco");
    var seis = document.getElementById("seis");
    var siete = document.getElementById("siete");
    var ocho = document.getElementById("ocho");
    var nueve = document.getElementById("nueve");
    var cero = document.getElementById("cero");
   uno.onclick=function(e){
       resultado.textContent = resultado.textContent +"1";
   }
   dos.onclick=function(e){
    resultado.textContent = resultado.textContent +"2";
    }
    tres.onclick=function(e){
    resultado.textContent = resultado.textContent +"3";
    }
    cuatro.onclick=function(e){
    resultado.textContent = resultado.textContent +"4";
    }
    cinco.onclick=function(e){
    resultado.textContent = resultado.textContent +"5";
    }
	    seis.onclick=function(e){
    resultado.textContent = resultado.textContent +"6";
    }
    siete.onclick=function(e){
    resultado.textContent = resultado.textContent +"7";
    }
    ocho.onclick=function(e){
    resultado.textContent = resultado.textContent +"8";
    }
    nueve.onclick=function(e){
    resultado.textContent = resultado.textContent +"9";
    }
    cero.onclick=function(e){
    resultado.textContent = resultado.textContent +"0";
    }
    punto.onclick=function(e){
    resultado.textContent = resultado.textContent +".";
    }
        suma.onclick=function(e){
        resultado.textContent = resultado.textContent +"+";
        }
        resta.onclick=function(e){
        resultado.textContent = resultado.textContent +"-";
        }
        multiplicacion.onclick=function(e){
        resultado.textContent = resultado.textContent +"*";
        }
        division.onclick=function(e){
        resultado.textContent = resultado.textContent +"/";
        }
        

        cuadrado.onclick=function(e){
        resultado.textContent = eval(resultado.textContent * resultado.textContent);
        }
        cubo.onclick=function(e){
            aux=resultado.textContent;
            alert(aux);
        resultado.textContent = eval(resultado.textContent  * resultado.textContent * aux);

        }
  //Respuesta
       igual.onclick=function(e){
            resultado.textContent = eval(resultado.textContent); 
            }
//Reset
        reset.onclick=function(e)
        {
    resultado.textContent = "" ;
     }

    quitar.onclick=function(e)
    {
        var cadena = resultado.textContent.length; 
     resultado.textContent = resultado.textContent.slice(0,(resultado.textContent.length-1));
     }}

•	Como primer paso tenemos que agregar las function para que sea llamada desde el html en este caso es init 
•	Debemos agregar el siguiente código para obtener la información de cada uno de los botones al ser pulsados
cinco.onclick=function(e){
    resultado.textContent = resultado.textContent +"5";
    }

•	Para realizar las operaciones ocupamos una concatenación de todos los datos ingresados de tal forma obtenemos toda la información 
       igual.onclick=function(e){
            resultado.textContent = eval(resultado.textContent); 
            }
•	Nos apoyamos de la funcion Eval para lograr realizar cada una te las operaciones que fueron concatenadas.



2*-  Diseñar una interfaz en HTML que permita ingresar los siguientes campos en un formulario: cedula, nombres, apellidos, dirección, teléfono, fecha de nacimiento y correo electrónico. Luego, usando funciones de JavaScript se debe validar que todos los campos han sido ingresados, además; que los valores ingresados en cada campo del formulario sean correctos teniendo en cuenta las siguientes condiciones:
•	Se debe validar qué, en el campo de la cedula, se ingrese sólo número y que la misma sea correcta, en base, al último dígito verificador.
•	Se debe validar qué, en el campo del nombres, ingrese únicamente dos nombres y que permita ingresar sólo letras. 
•	Se debe validar qué, en el campo del apellidos, ingrese únicamente dos apellidos y que permita ingresar sólo letras.
•	Se debe validar qué, en el campo del teléfono, permita ingresar sólo números.
•	Se debe validar que la fecha de nacimiento ingrese en el formato dd/mm/yyyy.
•	Se debe validar qué, en el campo correo electrónico, permita ingresar un correo válido. Se considera un correo válido, cuando comienza por tres o más valores alfanuméricos, luego un @, seguido por la extensión “ups.edu.ec” o “est.ups.edu.ec”.

Indicaciones:
•	Para realizar las validaciones de solo letras, o sólo números. Se las debe realizar en tiempo real, es decir, a medida que el usuario escribe en el campo.
•	Todos los campos de entrada dentro del formulario deben de ser de tipo “text”.
•	Las demás validaciones se realizarán al momento de “enviar” (submit) la información del formulario hacia una página php. Si no cumple las validaciones, se mostrará un mensaje debajo de cada campo con el error y se pintara el campo con un borde rojo que representará que el campo tiene un error. Si se cumple las validaciones, se enviará a una página php, en donde se mostrará únicamente un mensaje que diga “Bienvenido, pasaste las validaciones!”.


•	Se debe validar qué, en el campo de la cedula, se ingrese sólo número y que la misma sea correcta, en base, al último dígito verificador.
•	Se debe validar qué, en el campo del teléfono, permita ingresar sólo números.

Para realizar estes dos puntos ocupamos el siguiente código.

var aux2 =0
function validarnumeros(elemento)    
{
    if (elemento.value.length > 0)
    var miAscii = elemento.value.charCodeAt(elemento.value.length-1)
    console.log(miAscii)
    if ((miAscii >=48 && miAscii <=57) && aux2 <10)
    {      
        aux2=aux2+1
        return  true
    }
    else
    {
        elemento.value=elemento.value.substring(0,elemento.value.length-1)
        return false
    }
}
Este código nos permite validar solo números
•	Lo verificamos con el código ascii que es desde el 48 hasta el 57 los números 0123456789 los demás son caracteres por la cual si es un carácter lo mandamos a borrar.
•	De misma forma un numero de cedula debe tener hasta 10 dígitos por lo cual ocupamos un contador para saber qué cantidad de números están ingresando 

((miAscii >=48 && miAscii <=57) && aux2 <10

•	Se debe validar qué, en el campo del nombre, ingrese únicamente dos nombres y que permita ingresar sólo letras.
•	Se debe validar qué, en el campo del apellido, ingrese únicamente dos apellidos y que permita ingresar sólo letras.
Para Realizar estos dos puntos utilizamos la misma lógica del anterior punto solo que tenemos que cambiar nuestro código ASCII a solo letras.

var aux =0
function validarLetras(elemento)    
{

    if (elemento.value.length > 0)
    
    var miAscii = elemento.value.charCodeAt(elemento.value.length-1)
    console.log(miAscii)
    if ((miAscii >=97 && miAscii <=122) || (miAscii == 32  && aux == 0) )
    {   
            if(miAscii == 32 )
            {
                aux =aux+1;
            }
            return  true
    }
    else
    {
        elemento.value=elemento.value.substring(0,elemento.value.length-1)
        return false
    }
    
}
•	Como podemos observar ocupamos entre los valores 97 al 122 y del 32 
Así podemos validar que sean solo letras y de la misma forma el 32 que es el espacio con un contador que solo exista uno para que existan 2 palabras.

•	Se debe validar que la fecha de nacimiento ingrese en el formato dd/mm/yyyy.
Para esto utilizamos un campo tipo fecha de dd/mm/yyyy asi no se podrá colocar de otro formato la fecha y hora de la siguiente manera.

<input type="date"id="fechaNacimiento"name="fechaNacimiento"value=""placeholder="Ingrese su fecha de nacimiento ..."
    />
•	Se debe validar qué, en el campo correo electrónico, permita ingresar un correo válido. Se considera un correo válido, cuando comienza por tres o más valores alfanuméricos, luego un @, seguido por la extensión “ups.edu.ec” o “est.ups.edu.ec”.
Para relizar este punto utilizamos el siguiente código que nos permite dividir según que un carácter específico.


       
function validarCorreo(){
    var x = document.getElementById("correo").value
    var correo = x.split("@")
    
    if(x == correo){
    }if((correo[0].length >= 3 ) && (correo[1] == "ups.edu.ec" || correo[1] == "est.ups.edu.ec") )
    {
        alert("Si cumple")
        return true
    }
    else
    {
        alert("No cumple")
        return false
    }
    
}

•	Lo separamos con el uso de  Split que cos permite definir un carácter para poder separarlo.
•	En este caso lo separamos por el @ que nos permite saber si tiene mas de 3 caracteres y si es de la Ups
var correo = x.split("@")



3.Diseñar una interfaz en HTML que tenga tres botones que diga “Anterior”, “Iniciar”, “Siguiente”, y una imagen. Luego, desde JavaScript se debe controlar para al hacer clic sobre uno de los botones realice una acción relacionada a una galería de imágenes (ver ejemplo, https://gihp4c.blog.ups.edu.ec/)

Indicaciones:
•Se debe tener, un arreglo con los nombres de diez imágenes, previamente descargadas y almacenadas en una carpeta llamada “imagen”.
•La galería de imágenes debe visualizar exclusivamente 5 imágenes.
•Cada vez que se haga clic en el botón iniciar se deben escoger de manera aleatoria cinco imágenes de las diez que se mostrarán en la galería de imágenes.
•Al hacer clic en el botón siguiente y haber llegado a la última imagen disponible, el botón siguiente deberá ser deshabilitado (sólo cuando se ha llegado a la última imagen el botón siguiente deberá estar deshabilitado)
•Al hacer clic en el botón anterior y haber llegado a la primera imagen disponible, el botón anterior deberá ser deshabilitado (sólo cuando se ha llegado a la última imagen y cuando se inicie la galería de imágenes el botón anterior deberá estar
deshabilitado)

•Se debe tener, un arreglo con los nombres de diez imágenes, previamente descargadas y almacenadas en una carpeta llamada “imagen”.

Como primer paso debemos agregar las imágenes a una carpeta para poder llamar a cada una de ellas
Creación del arreglo
var imagenes = ['Imagenes/1.jpg', 'Imagenes/2.jpg', 'Imagenes/3.jpg', 'Imagenes/4.jpg', 'Imagenes/5.jpg','Imagenes/6.jpg','Imagenes/7.jpg','Imagenes/8.jpg','Imagenes/9.jpg', 'Imagenes/10.jpg'],


•Cada vez que se haga clic en le botón iniciar se deben escoger de manera aleatoria cinco imágenes de las diez que se mostrarán en la galería de imágenes.

Para realizar este unto debemos crear numero aleatorias para poder llamar a cada una de als diferentes imágenes y crear un arreglo con 5 imágenes de la siguiente manera.
function Cambio(contenedor) 
{
    var m = imagenes.length;

    

    for (var i =0;i<5;i++) 
    {
       
      aleatorio = Math.floor(Math.random() * m--);

      nuevo=nuevo+","+aleatorio;
     
    }
    alert (nuevo)
    alert(imagenes[nuevo[0] ])

    alert(imagenes[nuevo[2] ])
    alert(imagenes[nuevo[4] ])
    alert(imagenes[nuevo[6] ])
    alert(imagenes[nuevo[8] ])

  }
  

  document.addEventListener("DOMContentLoaded", () => {
    let contenedor = document.querySelector('.contenedor');
    carrousel(contenedor);
})


De la siguiente forma atraves de una math.radonm obtenemos diferentes números aleatorias.

•Al hacer clic en el botón siguiente y haber llegado a la última imagen disponible, el botón siguiente deberá ser deshabilitado (sólo cuando se ha llegado a la última imagen el botón siguiente deberá estar deshabilitado)
Debemos realizar un contador que nos permita saltar de piosicion de nuestro vector randon 
function siguiente () 
    { 
        if(contmax<10)
        {
            contmax=contmax+2;
         document.getElementById('ima').src =imagenes[nuevo[contmax]] ;
        }
        else
        alert("Ultimillo")
        
    }

•Al hacer clic en el botón anterior y haber llegado a la primera imagen disponible, el botón anterior deberá ser deshabilitado (sólo cuando se ha llegado a la última imagen y cuando se inicie la galería de imágenes el botón anterior deberá estar
deshabilitado)
Debemos realizar un contador que nos permita restar de posición de nuestro vector ramdon 

function anterior () 
    {
        if(contmax >0)
        {
            contmax=contmax-2;
            document.getElementById('ima').src = imagenes[nuevo[contmax]];
        }
        else
        alert("Ultimillo")
 

    }



Conclusion;
Durante esta práctica comprendí de mejor manera el uso de JavaScript dentro de HTML mejorando la autonomía de la página lo cual nos ayuda a no recargar la página para realizar una acción de esta. Gracias al punto 3 que nos permite mejorar nuestro conocimiento sobre el trato a las imágenes en JavaScript y el uso del math ramdon para realizar diferentes operaciones. El punto uno permitió mejorar mi conocimiento sobre como obtener la información de un botón.








