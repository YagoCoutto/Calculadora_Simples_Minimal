function insert(num){
    document.getElementById('resultado').innerHTML += num;
}
function clean(){
    document.getElementById('resultado').innerHTML = '';
}
function res(){
    let resultado = document.getElementById('resultado').innerHTML;
    if(resultado){
        document.getElementById('resultado').innerHTML = eval(resultado)
    }

    document.getElementById('inf').innerHTML = resultado
}
