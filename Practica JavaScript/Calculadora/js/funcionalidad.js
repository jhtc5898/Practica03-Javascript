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

   //Eventos

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





//Operaciones 

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
     }






}