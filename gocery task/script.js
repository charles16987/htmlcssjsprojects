

var btn = document.querySelector('.btn')

var close = document.getElementsByClassName("fa-trash");
var edit = document.getElementsByClassName("fa-pen-to-square")

function editClick(val) {
    [...edit].forEach((e ,idx) => {

        e.addEventListener('click',() => {
            
            span = document.querySelectorAll('.edit-content')
          
            
              e = span[idx]
              var d = document.createElement('input');
              d.value=val
               d.innerHTML = e.innerHTML;

               e.parentNode.insertBefore(d, e);
               e.parentNode.removeChild(e);

           
        })
        
    })
}



function btnClick() {
   [...close].forEach((e ,indx) => {
 
     e.addEventListener('click', (el ,index) => {
         var li = document.querySelectorAll('.content')
        
       li[indx].remove()
       
    
     })
 })
}




btn.addEventListener('click',() => {

    var li = document.createElement('li')
    li.classList.add('content')
var inputvalue = document.querySelector('.input').value
var t = document.createTextNode(inputvalue)




var span2 = document.createElement('span')
span2.classList.add('edit-content')
span2.setAttribute('value',inputvalue)

span2.appendChild(t)
span2.classList.add('text-center')

li.appendChild(span2)



if(inputvalue === ''){
    alert('you must write something')
}else{
    document.getElementById('element').appendChild(li)
}

document.querySelector('.input').value=''
var span1 = document.createElement('span')
 span1.innerHTML = '<i class="fas fa-sharp fa-solid fa-pen-to-square"></i>'

 li.appendChild(span1)

var span = document.createElement('span')
 span.innerHTML = '<i class="fas fa-solid fa-trash ms-4" ></i>'
 li.appendChild(span)

editClick(inputvalue)
btnClick()



})










