function calcular(){
    
    var nome = document.getElementById("cxnome").value;

    var n1 = document.getElementById("n1").value;

    var n2 = document.getElementById("n2").value;

    var n3 = document.getElementById("n3").value;

    var faltas =  parseInt(document.getElementById("cxfaltas").value);

    alert("Seu nome é " +nome);

    var media = (parseFloat(n1)+parseFloat(n2)+parseFloat(n3) ) / 3;
                 
    document.getElementById("cxresultado").value = media;

    if(media >= 7 && faltas <= 20){
        document.getElementById("cxsituacao").value = "Aprovado";
    }else{
        document.getElementById("cxsituacao").value = "Reprovado";
    }
    
}