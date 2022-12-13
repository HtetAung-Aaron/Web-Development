let select = document.querySelector('select');
let number = document.querySelector('input');
let h3 = document.querySelector('h3');
let paragraph = document.querySelector('p');
let button = document.querySelector('button');

button.addEventListener('click',foods);

function foods(){
    let choosen = select.value;
    
    if(choosen === "coffee"){
        h3.textContent = number.value + " of " + choosen + " is on order! " ;
        paragraph.textContent = 'Thanks for purchasing from us!';
    } 
    else if(choosen === "drink"){
        h3.textContent = number.value + " of " + choosen + " is on order! " ;
        paragraph.textContent = 'Thanks for purchasing from us!';
    }
    else if(choosen === "fries"){
        h3.textContent = number.value + " of " + choosen + " is on order! " ;
        paragraph.textContent = 'Thanks for purchasing from us!';
    }
    else if(choosen === "burger"){
        h3.textContent = number.value + " of " + choosen + " is on order! " ;
        paragraph.textContent = 'Thanks for purchasing from us!';
    }
    else if(choosen === "chicken"){
        h3.textContent = number.value + " of " + choosen + " is on order! " ;
        paragraph.textContent = 'Thanks for purchasing from us!';
    }
    
}





