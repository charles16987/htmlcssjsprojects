const stars = document.querySelectorAll(".stars i")

stars.forEach((star, index) => {
    star.addEventListener('click',() => {
        stars.forEach((star,indx) => {
            index >= indx ? star.classList.add('active') : star.classList.remove('active')
            console.log(index,indx);
        })
    })
})