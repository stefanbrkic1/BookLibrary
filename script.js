const btnCardLayout = document.getElementById('btnCardLayout')
const btnListLayout = document.getElementById('btnListLayout')
const gridContainer = document.getElementById('gridContainer')
const modalBtn = document.getElementById('modalBtn')
const closeModalBtn = document.getElementById('closeBtn')
const overlay = document.getElementById('overlay')
const modal = document.getElementById('modal')
const addBtn = document.getElementById('addBtn')
const form = document.getElementById('form')
const readingStatus = document.getElementsByName('readingStatus')
const radioReadInput = document.getElementById('radioRead')
const radioUnreadInput = document.getElementById('radioUnread')

window.onload = function(){
    displayBooks();
}

document.getElementById('form').addEventListener('submit', function (event) {
    event.preventDefault();

    let titleInput = document.getElementById('titleInput')
    let authorInput = document.getElementById('authorInput')
    let pagesInput = document.getElementById('pagesInput')

    let selectedStatus;
    for (i = 0; i < readingStatus.length; i++) {
        if (readingStatus[i].checked) {
            selectedStatus = readingStatus[i].value;
            break;
        }
    }

    let newBook = new Book(titleInput.value, authorInput.value, pagesInput.value, selectedStatus)

    myLibrary.push(newBook);

    closeModal(modal)
    displayBooks();
})


let myLibrary = [
    {
        title: 'Atomic Habbits',
        author: 'James Clear',
        pages: '245',
        status: 'Read'
    },
    {
        title: 'The 48 Laws of Power',
        author: 'Robert Greene',
        pages: '221',
        status: 'Read'
    },
    {
        title: 'Meditations',
        author: 'Marcus Aurelius',
        pages: '180',
        status: 'Read'
    },
    {
        title: 'The Idiot',
        author: 'Fyodor Dostoyevski',
        pages: '357',
        status: 'Read'
    },
];

function Book(title, author, pages, status) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.status = status;
}

function displayBooks(){
    gridContainer.innerHTML= '';
    if(btnCardLayout.classList.contains('white-border')){
        myLibrary.forEach(book => {
            const div = document.createElement('div');
            div.className = 'grid-card grid-item';
            div.innerHTML =    `<div class="card-text card-text-script">
                <div class="book-title-script book-title">${book.title}</div>
                <div class="author-script author">By ${book.author}</div>
                <div class="pages-number">Pages: ${book.pages}</div>
            </div>
            <div class="card-buttons-script card-buttons-container card-buttons">
                <button type="button" class="read-btn btn-read">${book.status}</button>
                <button type="button" class="remove-btn">Remove</button>
            </div>`;
    
        gridContainer.appendChild(div);
        })
    }
    else{
        myLibrary.forEach(book => {
            const div = document.createElement('div');
            div.className = 'grid-card grid-item-list';
            div.innerHTML =    `<div class="card-text-script card-text-list">
                <div class="book-title-script book-title-list">${book.title}</div>
                <div class="author-script author-list">By ${book.author}</div>
                <div class="pages-number author-list">Pages: ${book.pages}</div>
            </div>
            <div class="card-buttons-script card-buttons-container card-buttons-list">
                <button type="button" class="read-btn btn-read">${book.status}</button>
                <button type="button" class="remove-btn">Remove</button>
            </div>`;
    
        gridContainer.appendChild(div);
        })
    }
    gridItem = document.querySelectorAll('.grid-card')
    cardText = document.querySelectorAll('.card-text-script')
    authorText = document.querySelectorAll('.author-script')
    bookTitle = document.querySelectorAll('.book-title-script')
    pagesNumber = document.querySelectorAll('.pages-number')
    cardButtons = document.querySelectorAll('.card-buttons-script')
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
        console.log(cardText    )
        cardText.forEach(card => {
            card.classList.remove('card-text-list')
            card.classList.add('card-text')
        })
        authorText.forEach(author => {
            author.classList.remove('author-list')
            author.classList.add('author')
        })
        bookTitle.forEach(title => {
            title.classList.remove('book-title-list')
            title.classList.add('book-title')
        })
        pagesNumber.forEach(number => {
            number.classList.remove('author-list')
            number.classList.add('author')
        })
        cardButtons.forEach(card => {
            card.classList.remove('card-buttons-list')
            card.classList.add('card-buttons')
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
