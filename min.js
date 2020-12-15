const tabItems = document.querySelectorAll('.tab-item')
const tabContents = document.querySelectorAll('.tab-content')
tabItems.forEach(item => {
    item.addEventListener('click', selectItem)
})

function selectItem(e) {
    const itemId = this.id
    removeActive();
    removeBorder();
    document.querySelector(`#${itemId}-content`).classList.add('active')
    this.classList.add('border-active')
}

function removeActive() {
    tabContents.forEach(item => {
        item.classList.remove('active')
    })
}

function removeBorder() {
    tabItems.forEach(item => {
        item.classList.remove('border-active')
    })
}