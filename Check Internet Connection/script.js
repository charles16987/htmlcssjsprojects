let popup = document.querySelector('.popup')
let wifi = document.querySelector('.icon i')
let popuptitle = document.querySelector('.popup .title')
let popupdesc = document.querySelector('.desc')

let isOnline = true,intevalId,timer =10;

const checkConnection = async () => {
    try{
        // Try to fetch random data frm the api. if the status is between 
        // 200 and 300 , the netwrok connection is considered online
        const response = await fetch('https://jsonplaceholder.typicode.com/posts')
        isOnline = response.status >=200 && response.status < 300;

    }
    catch(error){
        isOnline = false// if there is an error, the connection is considered offline
    }
    timer = 10;
    clearInterval(intevalId)
    handlePopup(isOnline)
}

const handlePopup = (status) => {
    if(status){
        popuptitle.innerText = "Restored Connection";
        popupdesc.innerText = "Your device is now sucessfully connect to the internet."
        return setTimeout(() => popup.classList.remove('show'),2000);
    }
    popuptitle.innerText = "Lost Connection";
    popup.classList.add('show')


    intevalId = setInterval(() => {
        // set an interval to dexcrease the timer by 1 every sec
        timer--;
        if(timer === 0) checkConnection(); // if the timer reaches, 0 check the coonection again
        popup.querySelector('.desc b').innerText = timer
    },1000)
}

// only if isonline is ture, check the connection status every 3 seconds

setInterval(() => isOnline && checkConnection(),3000)