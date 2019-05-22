var imagenes = ['Imagenes/1.jpg', 'Imagenes/2.jpg', 'Imagenes/3.jpg', 'Imagenes/4.jpg', 'Imagenes/5.jpg','Imagenes/6.jpg','Imagenes/7.jpg','Imagenes/8.jpg','Imagenes/9.jpg', 'Imagenes/10.jpg'],

cont = 0;

var nuevo=0 ;
function cambio(contenedor) 
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

contmax=0;
contmin=0;
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



