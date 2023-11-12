// const button = document.querySelector('button')

// button.addEventListener('click', () => {
//     console.log("You are clicked me !");
// })

const ul = document.querySelector('ul')
// ul.remove()

const button = document.querySelector('button')

button.addEventListener('click', () => {
    // ul.innerHTML += '<li>Something new text 😀</li>'

    const li = document.createElement('li')
    li.textContent = 'Something new text 😀'
    ul.appendChild(li)
})


const items = document.querySelectorAll('li')

// items.forEach((item) => {
//     item.addEventListener('click', (e) => {
        // e.target.style.textDecoration = 'line-through'
        // e.target.style.opacity = '0.8'
        // e.stopPropagation()
//     })
// })

ul.addEventListener('click', (e) => {
    e.target.remove()
    if(e.target.nodeName == 'LI'){
        e.target.remove()
    }
})