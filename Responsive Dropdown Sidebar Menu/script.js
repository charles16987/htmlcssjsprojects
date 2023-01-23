const arrow = document.querySelectorAll('.arrow')


arrow.forEach((e) => {
    e.addEventListener('click',(e) => {
        let arrowParent = e.target.parentElement.parentElement
        arrowParent.classList.toggle("showMenu")
    })

})

let sidebar = document.querySelector('.sidebar')
let sidebarBtn = document.querySelector(".bx-menu")
sidebarBtn.addEventListener("click",() => {
    sidebar.classList.toggle("close")
})
console.log(sidebar)

