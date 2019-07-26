
var cadena = document.getElementById("cadena").value.toString();

var clasificacion = document.getElementById("clasificacion");
var AZ = document.getElementById("AZ");
var letras = document.getElementById("letras");
var numeros = document.getElementById("numeros");
var simbolos = document.getElementById("simbolos");
var tipo = "ERROR";
var cletras = 0, contieneSimbolos = 0, cNumeros = 0, inicio = false;

function d(){

    if(text == ""){
        alert("casilla");
    }
    else{
        iniciar();
        analizar();

    }

}

function iniciar(){
    
    cletras = 0, contieneSimbolos = 0, cNumeros = 0, inicio = false;
    tipo = "ERROR";
    console.log("Panjoj chupabolas")
}

function analizar(){
    var text;
    text = document.getElementById("cadena").value.toString();
    for(var i = 0; i < text.length; i++){
        if(text.charCodeAt(i)> 64 && text.charCodeAt(i) < 91 || text.charCodeAt(i)>96 && text.charCodeAt(i) < 123){
            if(i == 0){
                inicio = true;
            }
            cletras++;
        }
        else if(text.charCodeAt(i)> 47 && text.charCodeAt(i) <53   ){
            cNumeros++;
        }
        else{
            contieneSimbolos++;
        } 
        
    }
    alert("hola ptos")
}

function s(){
    alert(cadena.value);
}
