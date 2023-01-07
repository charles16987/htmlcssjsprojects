var min = document.querySelector('.mintes')
var sec = document.querySelector('.sec')
let start = document.querySelector('.start')
let pause = document.querySelector('.pause')
let reset = document.querySelector('.reset')






var interval = null


  var totalsec =0

function counter(minute,seconds) {

    ++totalsec

    
       var hour = Math.floor(totalsec /3600);
       var minute = Math.floor((totalsec - hour*3600)/60);
       var seconds = totalsec - (hour*3600 + minute*60);

       

       if(minute < 10){
            min.innerHTML = '0'+ minute
       }else{
        min.innerHTML = minute
       }
    

       if(seconds < 10){
            sec.innerHTML = '0'+ seconds
       }else{
        sec.innerHTML = seconds
       }

}


pause.addEventListener('click',()=> {
   clearInterval(interval)
   interval = null
})
start.addEventListener('click', () => {
    
    if(interval){
        return
    }
    interval = setInterval(counter ,1000)
    console.log(interval)
})


reset.addEventListener('click',() => {
    totalsec = 0
    clearInterval(interval)
   interval = null

    min.innerHTML = '00'
    sec.innerHTML = '00'
    
})

