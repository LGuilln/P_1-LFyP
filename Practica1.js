var letras = document.getElementById("letras");
var numeros = document.getElementById("numeros");
var simbolos = document.getElementById("simbolos");
var tipo = "ERROR";
var p_letras = 0, p_Simbolos = 0, p_Numeros = 0, inicio = false;

function Iniciar(){
    
    if(cadena == ""){
        alert("casilla");
    }
    else{
        analizar();
        }
}

/*Para llamar una funcion(){
    
    p_letras = 0, p_Simbolos = 0, p_Numeros = 0, principio = false;
    }
*/
function analizar(){
    var cadena = document.getElementById("No.1").value;
    var cadena2 = new String(cadena);
    var contNum = 0;
    var contLetras = 0;
    var contSimbolo = 0;

    console.log(cadena2)
    for(var i = 0; i < cadena2.length; i++){
        if(cadena2.charCodeAt(i)>= 65 && cadena2.charCodeAt(i) <= 90 || cadena2.charCodeAt(i)>=97 && cadena2.charCodeAt(i) <= 122){
            
            contLetras++;
        }
        else if(cadena2.charCodeAt(i)>= 48 && cadena2.charCodeAt(i) <=59   ){
           contNum++;
        }
        else if((cadena2.charCodeAt(i)>=32 && cadena2.charCodeAt(i)<=47) || (cadena2.charCodeAt(i)>=58 && cadena2.charCodeAt(i)<=64) || (cadena2.charCodeAt(i)>=91 && cadena2.charCodeAt(i)<=96) || (cadena2.charCodeAt(i)>=123 && cadena2.charCodeAt(i)<=126)) {
            contSimbolo++;
        } 
        
    }

    console.log(contLetras+"===>num"+contNum+">>>>>>>>>>>"+contSimbolo+"size"+cadena2.length)
    if((contNum)==cadena2.length){
        console.log("NUMERO")
        var numero = "Números";
        document.getElementById("tbl").insertRow(-1).innerHTML = '<tr><td></td><td>'+cadena2+'</td><td>'+numero+'</td><td></td></tr>';
        alert("Numeros")
    }else if((contLetras)==cadena2.length){
        console.log("LETRAS")
        var letra = "Letras";
        document.getElementById("tbl").insertRow(-1).innerHTML = '<tr><td></td><td>'+cadena2+'</td><td>'+letra+'</td><td></td></tr>';
        alert("Letras")
    }else if((contSimbolo)==cadena2.length){
        console.log("SIMBOLO")
        var simbolo = "Letras";
        document.getElementById("tbl").insertRow(-1).innerHTML = '<tr><td></td><td>'+cadena2+'</td><td>'+simbolo+'</td><td></td></tr>';
        alert("Simbolo")
    }else{
        console.log("ERROR")
        var error = "Error";
        document.getElementById("tbl").insertRow(-1).innerHTML = '<tr><td></td><td>'+cadena2+'</td><td>'+error+'</td><td></td></tr>';
        alert("Error")
        //document.getElementById("his").innerHTML("Error");
    }
}
// document.getElementById("tabla").insertRow(-1).innerHTML = '<tr><td></td><td>'+lo que el ingreso+'</td><td>'+letra o symbol o error+'</td><td></td></tr>';
//}