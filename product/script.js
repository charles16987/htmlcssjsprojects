let data =[
    {
        id:1,
        name:'Samsung Galaxy S8',
        btn:'remove',
        price:'$400',
        img:'https://images.pexels.com/photos/4621832/pexels-photo-4621832.png?auto=compress&cs=tinysrgb&w=150&h=150&dpr=1',
        quantity:1
    },
      {
        id:2,
        name:'Google Pixel',
        btn:'remove',
         price:'$400',
        img:'https://images.pexels.com/photos/4621832/pexels-photo-4621832.png?auto=compress&cs=tinysrgb&w=150&h=150&dpr=1 ',
        quantity:1
    },
      {
        id:3,
        name:'Xiaomi Redmi Note 2',
        btn:'remove',
         price:'$400',
        img:'https://images.pexels.com/photos/10774170/pexels-photo-10774170.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=1',
        quantity:1
    },
      {
        id:4,
        name:'Samsung Galaxy s7',
        btn:'<a onclick=removeElement(element_4)>Remove</a>',
         price:'$400',
        img:'https://images.pexels.com/photos/10774170/pexels-photo-10774170.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=1',
        quantity:1
    }
]





var total = document.querySelector(".total") 

function conent() {
  let countainer = document.querySelector('.container')




data.map((store ,indx) =>{
   const {id,name,btn,img,quantity,price} = store

   countainer.innerHTML += `
 <div class="col-12 mt-4 removeElement${id} propertyElement">
  <div class="card">
        <div class="d-flex justify-content-between align-items-center">
          <div class="d-flex gap-3">
              <div>
                  <img src="${img}" alt="">
              </div>
              <div>
              <h2 class="name">${name}</h2>
              <h4 class="amount"> ${price}</h4>
              <button class="text-muted h4 id='button'"><a href="#" onclick=removeElement(${id})>Remove</a></button>
              </div>
              </div>
              <div class="p-4 text-center">
                <i class="fas fa-solid fa-angle-up"onclick=addbtn(${id})></i>
                <p class="text-muted h4 counter${id}">0</p>
                <i class="fas fa-solid fa-angle-down"onclick=deltbtn(${id})></i>
              </div>
        </div>
    </div>
 </div>
`;
})
}
 var total = 0;

 function calculate(){
  var total = 0;
  element = document.querySelector('.propertyElement');
  console.log('element' , element);
 }



  function updateTotal(sub) {
   console.log(sub)
}

function updateTotal1(sub) {
  console.log(sub)
}







  function addbtn(id) {
    
    
    if(id == 1){
 let counter1 = document.querySelector('.counter1')
   
     subtotal =  counter1.innerHTML++ * 400
     updateTotal(subtotal)
    }
    if(id == 2){
      let counter2 = document.querySelector('.counter2')
   
       subtotal =  counter2.innerHTML++ * 400
       updateTotal1(subtotal)
    }

  }


  function deltbtn(id) {
    let counter1 = document.querySelector('.counter1')
    let total = document.querySelector('.total')

    total.innerHTML = '$'+ counter1.innerHTML * 400 
    

      if(counter1.innerHTML > 0){
       counter1.innerHTML -= 1  
    } if(counter1.innerHTML < 0){
         counter1.innerHTML = 0
    }
    
  }






function removeElement(id){

  if(id == 1 ){
     let element1 = document.querySelector(".removeElement1")
     element1.remove()
  }
  if(id == 2 ){
     let element2 = document.querySelector(".removeElement2")
     element2.remove()
  }
  if(id == 3 ){
     let element3 = document.querySelector(".removeElement3")
     element3.remove()
  }
  if(id == 4 ){
     let element4 = document.querySelector(".removeElement4")
     element4.remove()
  }
}


conent()

let clear = document.querySelector('.clear-all')


clear.addEventListener('click',() => {
  let element1 = document.querySelector(".removeElement1")
     element1.remove()
  let element2 = document.querySelector(".removeElement2")
  element2.remove()
  let element3 = document.querySelector(".removeElement3")
     element3.remove()
     let element4 = document.querySelector(".removeElement4")
     element4.remove()
})






 



















