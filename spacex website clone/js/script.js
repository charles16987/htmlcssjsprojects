const btn = document.getElementById('menu-btn')
const overlay = document.querySelector('.overlay')
const menu = document.getElementById('moblie-menu')
const counters = document.querySelectorAll(".counter");
let scrollStarted = false;

document.addEventListener('scroll',scrollPage)

btn.addEventListener('click' ,() => {
  btn.classList.toggle('open')
  overlay.classList.toggle('overlay-show')
  document.body.classList.toggle('stop-scrolling');
  menu.classList.toggle('show-menu')
})

function scrollPage() {
   const scrollPos = window.scrollY
   if(scrollPos > 100 && !scrollStarted){
      counterNumber()
      scrollStarted = true
   }else if (scrollPos < 100 && scrollStarted) {
     reset();
     scrollStarted = false
   }
}

function counterNumber(){

  counters.forEach((counter) => {
    counter.innerHTML = '0'

    const updateCounter = () => {
      // get count target
      const target = Number(counter.getAttribute('data-target'))
      //get current counter value
      const c = +counter.innerHTML

      //Create an increment
      const increment = target / 100;
      // if counter is less than target, add increment
      if(c < target){
        // round up and set counter value
        counter.innerText = `${Math.ceil(c + increment)}`

        setTimeout(updateCounter,45)
      }else{
        counter.innerText = target
      }
    }
    updateCounter()
  })

}

function reset() {
  counters.forEach((counter) => (counter.innerHTML = '0'))
}


