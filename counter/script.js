let counter = document.querySelector('.counter')

let incre = document.querySelector('.increse')
let dec = document.querySelector('.decrese')
let reset = document.querySelector('.reset')


incre.addEventListener('click',() => {
    counter.innerHTML++
} )


dec.addEventListener('click', () => {

    if(counter.innerHTML > 0){
       counter.innerHTML -= 1  
    } if(counter.innerHTML < 0){
         counter.innerHTML = 0
    }

    
        
    
})

reset.addEventListener('click' , () => {
    counter.innerHTML = 0
})