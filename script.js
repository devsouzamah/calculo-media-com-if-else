function calcular(){

    var n1, n2, n3, media;

    n1 = document.getElementById('nota_1').value;
    n2 = document.getElementById('nota_2').value;
    n3 = document.getElementById('nota_3').value;

    media = (parseFloat(n1) + parseFloat(n2) + parseFloat(n3)) / 3

    document.getElementById('media').innerHTML = media

    if(media >= 7){
        document.getElementById('status').innerHTML = 
        'APROVADO'

    }else if(media >= 6){
        document.getElementById('status').innerHTML = 
        'RECUPERAÇÃO'
    }else if(media <= 5){
        document.getElementById('status').innerHTML =
        'REPROVADO'
    }    
    
   
    

}
