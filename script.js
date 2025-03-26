var btn = document.querySelector('button');
var percent = document.querySelector('#percent');
var growth = document.querySelector('#growth');

var grow = 0 
btn.addEventListener('click',function(){
    var int =  setInterval(function(){
        grow++;
        percent.innerHTML = grow + '%';
        growth.style.width = grow + '%'
     },40)
    
    setTimeout(function(){
        clearInterval(int)
        btn.innerHTML= 'downloaded'
        btn.style.opacity = 0.7
    },4000)
})