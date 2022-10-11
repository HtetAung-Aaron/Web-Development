let x;

var button = document.querySelector('button');



button.addEventListener('click',random());


function random(){

    x = Math.floor(Math.random()* 100)+1 ;
    document.querySelector('h3').innerHTML = x;

}
