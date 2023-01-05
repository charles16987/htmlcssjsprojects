let select = document.getElementById('select')
let div1 = document.querySelector('.div1')
let div2 = document.querySelector('.div2')






select.addEventListener('click',() => {
    console.log(select.value)
    value = select.value

    if(select.value == div1.className){
        div1.style.display = 'block'; 
        div2.style.display ='none' 
    }

     if(select.value == div2.className){
        div1.style.display = 'none'; 
        div2.style.display ='block' 
    }
      if(select.value == "select"){
        div1.style.display = 'none'; 
        div2.style.display ='none' 
    }

})

