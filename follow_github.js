const expectPromise = () => {
    return new Promise((resolve, reject) => {
        const token = document.querySelectorAll('div[class="d-table-cell col-2 v-align-top text-right"] span form input[type="hidden"]')

        Array.from(token).forEach(e => {
            const button = document.querySelector(`input[value="${e.value}"] ~ input[type="submit"]`)
            if(button.value == 'Follow') {
                button.click()
            }
        })
        resolve(true)
    })
}

expectPromise().then(e => {
    if(e) {
        document.querySelector('.paginate-container .pagination ').children[1].click()
    }
})
