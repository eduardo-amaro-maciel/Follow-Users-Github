const followUsers = () => {
    return new Promise((resolve, reject) => {
        
        const token = document.querySelectorAll('div[class="d-table-cell col-2 v-align-top text-right"] span form input[type="hidden"]')
        
        Array.from(token).forEach(e => {
            
            const button = document.querySelector(`input[value="${e.value}"] ~ input[type="submit"]`)

            try {
                if (button.value == 'Follow') {
                    button.click()
                }
            } catch(err) {
                console.log(`Deu pau 😔`)
                reject(false)
            }       
        })
        resolve(true)
    })
}

const buttonNext = document.querySelector('.paginate-container .pagination').children[1]

setInterval(() => {
    followUsers().then(funcitonResolve => {
        if (funcitonResolve) {
            buttonNext.classList.value === '' ? buttonNext.click() : console.log('A lista Acabou')
        } else {
            console.log('ocorreu um erro')
        }
    })
}, 4300)

