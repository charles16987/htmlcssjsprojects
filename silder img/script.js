const silde = document.querySelectorAll('.silde')
const next = document.querySelector('.fa-caret-right')
const prev = document.querySelector('.fa-caret-left')
const btns = document.querySelectorAll('.btn')

const length = silde.length


var index = 0

var automate = function(auto){
    
    silde.forEach((sil) => {
        sil.classList.remove('active')
        btns.forEach((b) => {
            b.classList.remove('active')
        })
    })

    silde[auto].classList.add('active')
    btns[auto].classList.add('active')

}

btns.forEach((b,i)=> {
    b.addEventListener('click',() => {
        automate(i)
        index = i
    })
})

// settimeout function

var repeat = function(activeClass){
    let active = document.getElementsByClassName('active')
    let i =1

    var repeater = () => {
        setTimeout(function(){
            [...active].forEach((activeSlide) => {
                activeSlide.classList.remove('active')
            })
            silde[i].classList.add('active')
            btns[i].classList.add('active')
            i++
            if(silde.length == i){
                i=0;
            }
            if(i >= silde.length){
                return;
            }
            repeater()
        },10000);
       
    }
     repeater()
}
repeat()


// next prev button functions

next.addEventListener('click', () => {
    silde.forEach((silde) => {
        silde.classList.remove('active')
         btns.forEach((b) => {
            b.classList.remove('active')
        })
    })
    index++
    if(index > length -1){
        index = 0
    }
    silde[index].classList.add('active')
    btns[index].classList.add('active')
})

prev.addEventListener('click', () => {
    silde.forEach((silde) => {
        silde.classList.remove('active')
         btns.forEach((b) => {
            b.classList.remove('active')
        })
    })
    index--
    if(index < 0){
        index = length -1
    }
    silde[index].classList.add('active')
    btns[index].classList.add('active')
})




