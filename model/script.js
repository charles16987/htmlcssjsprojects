const modalBtn = document.querySelector('.model-btn')
const modal = document.querySelector('.modal-overlay')
const closeBtn = document.querySelector('.close-btn')
console.log(modalBtn,modal,closeBtn);

modalBtn.addEventListener('click',() => {
    modal.classList.add("open-modal")

})

closeBtn.addEventListener('click',() => {
    modal.classList.remove("open-modal")
    
})