const readBtn = document.querySelectorAll('.read-btn')
const btnCardLayout = document.getElementById('btnCardLayout')
const btnListLayout = document.getElementById('btnListLayout')
const gridContainer = document.getElementById('gridContainer')
const gridItem = document.querySelectorAll('.grid-card')
const cardText = document.querySelectorAll('.card-text')
const authorText = document.querySelectorAll('.author')
const bookTitle = document.querySelectorAll('.book-title')
const pagesNumber = document.querySelectorAll('.pages-number')
const cardButtons = document.querySelectorAll('.card-buttons')
const modalBtn = document.getElementById('modalBtn')
const closeModalBtn = document.getElementById('closeBtn')
const overlay = document.getElementById('overlay')
const modal = document.getElementById('modal')


let myLibrary = [];

function Book(title, author, pages, status) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.status = status;
}

function addBookToLibrary() {
    // do stuff here
}

modalBtn.addEventListener('click', () => {
    openModal(modal)
})

closeModalBtn.addEventListener('click', () => {
    closeModal(modal)
})

overlay.addEventListener('click', () => {
    closeModal(modal)
})

function openModal(modal) {
    if (modal == null) return
    modal.classList.add('active')
    overlay.classList.add('active')
}

function closeModal(modal) {
    if (modal == null) return
    modal.classList.remove('active')
    overlay.classList.remove('active')
}

readBtn.forEach(button => {
    button.addEventListener('click', () => {
        if (button.classList.contains('btn-read')) {
            button.classList.remove('btn-read')
            button.textContent = "Unread";
        } else {
            button.classList.add('btn-read')
            button.textContent = "Read";
        }
    })
})

btnCardLayout.addEventListener('click', () => {
    if (!btnCardLayout.classList.contains('white-border')) {
        btnCardLayout.classList.add('white-border')
        btnListLayout.classList.remove('white-border')
        gridContainer.classList.remove('grid-container-list')
        gridContainer.classList.add('grid-container')
        gridItem.forEach(card => {
            card.classList.remove('grid-item-list')
            card.classList.add('grid-item')
        })
        cardText.forEach(card => {
            card.classList.remove('card-text-list')
        })
        authorText.forEach(author => {
            author.classList.remove('author-list')
        })
        bookTitle.forEach(title => {
            title.classList.remove('book-title-list')
        })
        pagesNumber.forEach(number => {
            number.classList.remove('author-list')
        })
        cardButtons.forEach(card => {
            card.classList.remove('card-buttons-list')
        })
    }
})

btnListLayout.addEventListener('click', () => {
    if (!btnListLayout.classList.contains('white-border')) {
        btnListLayout.classList.add('white-border')
        btnCardLayout.classList.remove('white-border')
        gridContainer.classList.remove('grid-container')
        gridContainer.classList.add('grid-container-list')
        gridItem.forEach(card => {
            card.classList.remove('grid-item')
            card.classList.add('grid-item-list')
        })
        cardText.forEach(card => {
            card.classList.add('card-text-list')
        })
        authorText.forEach(author => {
            author.classList.add('author-list')
        })
        bookTitle.forEach(title => {
            title.classList.add('book-title-list')
        })
        pagesNumber.forEach(number => {
            number.classList.add('author-list')
        })
        cardButtons.forEach(card => {
            card.classList.add('card-buttons-list')
        })
    }
})
