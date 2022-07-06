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
                console.error(`Deu pau 😔`)
                clearInterval(initSetTimer);
                reject(false)
            }       
        })
        resolve(true)
    })
}

const finalList = () => {
    console.warn('Sucesso! A lista Acabou 🚀')
    clearInterval(initSetTimer);
}

const buttonNext = document.querySelector('.paginate-container .pagination').children[1]

const initSetTimer = setInterval(() => {
        followUsers().then(funcitonResolve => {
            if (funcitonResolve) {
                buttonNext.classList.value === '' ? buttonNext.click() : finalList()
            } else {
                console.error('ocorreu um erro 😔')
                clearInterval(initSetTimer);
            }
        })
    }, 4300)
