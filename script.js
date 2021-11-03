//Menu functionality 

console.log(document.querySelector('.burgerMenu'))
document.querySelector('.burgerMenu').addEventListener('pointerover', function(){
    document.querySelector('.burgerMenu').style = 'opacity:50%';   
}); 

document.querySelector('.burgerMenu').addEventListener('pointerout', function(){
    document.querySelector('.burgerMenu').style = 'opacity:1'; 
}); 

document.querySelector('.burgerMenu').addEventListener('click', function(){
    document.querySelector('header nav ul').style = 'display:inline-block; background-color:rgba(246,168,35, 0.95); position:absolute; top:5%; z-index:3';
}); 

document.querySelector('header nav ul').addEventListener('mouseleave', function(){
    document.querySelector('header nav ul').style = 'visibiliy:hidden'; 
}); 

//Menu functionality 