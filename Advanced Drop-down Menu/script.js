const dropdown = document.querySelector('.drop-btn')
const menuWrapper = document.querySelector(".wrapper")
const menuBar = document.querySelector(".menu-bar")
const settingDrop = document.querySelector(".setting-drop")
const helpDrop = document.querySelector(".help-drop")

const settingItem = document.querySelector(".setting-item")
const helpItem = document.querySelector(".help-item")


const backSettingBtn = document.querySelector(".back-setting-btn")
const backHelpBtn = document.querySelector(".back-help-btn")





dropdown.addEventListener('click' ,() => {
    menuWrapper.classList.toggle('show')
})

settingItem.addEventListener('click',() => {

    menuBar.style.marginLeft = "-400px"
    setTimeout(() => {
        settingDrop.style.display ="block"
    })

})

helpItem.addEventListener('click',() => {

    menuBar.style.marginLeft = "-400px"
    setTimeout(() => {
        helpDrop.style.display ="block"
    })

})

backSettingBtn.addEventListener('click',() => {

    menuBar.style.marginLeft = "0px"
    settingDrop.style.display ="none"

})

backHelpBtn.addEventListener('click',() => {

    menuBar.style.marginLeft = "0px"
    helpDrop.style.display ="none"

})