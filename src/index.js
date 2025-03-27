// 1
let timeOne = 0;
const intervall = setInterval(() => {
    console.log("hello world");
    timeOne++ 
    if (timeOne === 5 ) {
        clearInterval(intervall)
    }
})

// 2


const box2El = document.querySelector('#box1')


setInterval(() => {


    const red = Math.floor(Math.random() * 256)
    const green = Math.floor(Math.random() * 256)
    const blue = Math.floor(Math.random() * 256)

    box2El.style.backgroundColor = `rgb(${red},${green},${blue})`
}, 500)

// 3

const gameBtnEl = document.querySelector('.game-btn')
const counterTextEl = document.querySelector('.counter')
const whatBoxText = document.querySelector('.what-box-text')
const largeContainer = document.querySelector('.large-box')

let time = 0
let counter = 0

gameBtnEl.addEventListener('click', (e) => {
    gameBtnEl.disabled = true

    largeContainer.firstElementChild.classList.add('animation-first-mid-box')
    largeContainer.lastElementChild.classList.add('animation-small-box')
    largeContainer.firstElementChild.nextElementSibling.classList.add('animation-sec-mid-box')

    let statusGame = 'started'
    counter = 0
    counterTextEl.textContent = `Результат: ${counter}`


    let currentBox = largeContainer.children[Math.floor(Math.random() * largeContainer.children.length)]
    whatBoxText.textContent = currentBox.id

    largeContainer.addEventListener('click', (e) => {
        if (e.target.id === currentBox.id && statusGame === 'started') {
            counter++
            counterTextEl.textContent = `Результат: ${counter}`

            currentBox = largeContainer.children[Math.floor(Math.random() * largeContainer.children.length)]
            whatBoxText.textContent = currentBox.id
        }
    })

    const interval = setInterval(() => {
        time++
        if (time === 10) {
            largeContainer.firstElementChild.classList.remove('animation-first-mid-box')
            largeContainer.lastElementChild.classList.remove('animation-small-box')
            largeContainer.firstElementChild.nextElementSibling.classList.remove('animation-sec-mid-box')
            clearInterval(interval)
            gameBtnEl.disabled = false
            time = 0
            statusGame = 'stop'
            whatBoxText.textContent = ''
        }
    }, 1000)
})



// 4

const inputTime = document.querySelector('.input-time')

inputTime.addEventListener('change', () => {
    const time4 = inputTime.value
    setTimeout(() => {
        alert(`це повідомлення прийшло через ${time4} мілісекунд`)
    }, time4)
    inputTime.value = ''
})