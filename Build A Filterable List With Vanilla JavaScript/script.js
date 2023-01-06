// Get input element

var filterInput = document.getElementById('filterInput')

// add event listener

filterInput.addEventListener('keyup', filterNames)


function filterNames(){
    let filter = filterInput.value.toUpperCase()
   



// get name ul

let ul = document.getElementById('names');

// Get lis from ul

let li = ul.querySelectorAll('li.collection-item')

// loop through collection-item lis

 li.forEach((item,index) => {

   let a = li[index].getElementsByTagName('a')[0]
   
   if(a.innerHTML.toUpperCase().indexOf(filter) > -1){
    li[index].style.display =''
   }else{
    li[index].style.display ='none'
   }

   
    
 })

} 


