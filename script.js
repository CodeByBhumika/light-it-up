let bulb = document.querySelector('.bulb')
let On = document.querySelector('.btn1')
let Off = document.querySelector('.btn2')
let parent = document.querySelector('.parent')

On.addEventListener('click', function(){
    bulb.src = "./bulb-on-removebg-preview.png";
    parent.style.backgroundColor = 'white'
})
Off.addEventListener('click', function(){
    bulb.src = "./off_bulb-removebg-preview.png";
    parent.style.backgroundColor = 'black'
})