var texto = document.getElementById("texto_lineas");
var boton = document.getElementById("botoncito");
boton.addEventListener("click",dibujoPorClick);//para decir que evento tendra el boton (exuchador de eventos)

var d= document.getElementById("dibujito");
var ancho = d.width;
var lienzo= d.getContext("2d");

function dibujoPorClick()
{
    var lineas=parseInt(texto.value);
    var l=0;
    var yi, xf;
    var colorcito="blue";
    var espacio =  ancho / lineas;

    for(l=0; l<lineas; l++)
    {
      yi = espacio * l;
      xf = espacio * (l + 1);
      dibujarLineas(colorcito,0,yi,xf,300);
      console.log(lineas); //ver los procesos que ejecuta
    }

    dibujarLineas(colorcito,1,1,1,299);
    dibujarLineas(colorcito,1,300,299,299);
    dibujarLineas(colorcito,299,1,1,1);
    dibujarLineas(colorcito,300,1,299,299);

    function dibujarLineas(color, xinicial, yinicial, xfinal, yfinal)
    {
      lienzo.beginPath();
      lienzo.strokeStyle=color;//linea color rojo
      lienzo.moveTo(xinicial, yinicial); //desde donde se quiere dibujar
      lienzo.lineTo(xfinal, yfinal); //trazar la linea
      lienzo.stroke(); //se cierra la lienea
      lienzo.closePath(); //se termina de dibujar (levantar lapiz)
    }
}
