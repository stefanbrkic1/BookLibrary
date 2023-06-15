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
        pages: '250',
        status: 'Read'
    },
    {
        title: 'The 48 Laws of Power',
        author: 'Robert Greene',
        pages: '452',
        status: 'Read'
    },
    {
        title: 'Meditations',
        author: 'Marcus Aurelius',
        pages: '410',
        status: 'Read'
    },
    {
        title: 'The Idiot',
        author: 'Fyodor Dostoyevski',
        pages: '768',
        status: 'Read'
    },
    {
        title: 'The Art Of War',
        author: 'Sun Tzu',
        pages: '260',
        status: 'Read'
    },
    {
        title: 'Republic',
        author: 'Plato',
        pages: '692',
        status: 'Read'
    },
    {
        title: 'Tao Te Ching',
        author: 'Laozi',
        pages: '84',
        status: 'Read'
    },
    {
        title: '12 Rules for Life',
        author: 'Jordan Peterson',
        pages: '409',
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
    gridContainer.innerHTML=''
 myLibrary.forEach((book, index) => {
    const cardDiv = document.createElement('div');
    cardDiv.classList.add('grid-item-script', 'grid-item');

    const cardTextDiv = document.createElement('div');
    cardTextDiv.classList.add('card-text-script', 'card-text');

    const cardBookTitleDiv = document.createElement('div');
    cardBookTitleDiv.classList.add('book-title-script', 'book-title');
    cardBookTitleDiv.textContent = book.title; // Set book title

    const cardBookAuthorDiv = document.createElement('div');
    cardBookAuthorDiv.classList.add('author-script', 'author');
    cardBookAuthorDiv.textContent = book.author; // Set book author

    const cardBookPagesDiv = document.createElement('div');
    cardBookPagesDiv.classList.add('pages-number-script', 'pages-number');
    cardBookPagesDiv.textContent = book.pages; // Set book pages

    const cardButtonsDiv = document.createElement('div');
    cardButtonsDiv.classList.add('card-buttons-script', 'card-buttons');

    const cardStatusBtn = document.createElement('button');
    cardStatusBtn.classList.add('btn-status');
    cardStatusBtn.dataset.index = index;
    if(book.status === 'Read'){
        cardStatusBtn.textContent = 'Read'
        cardStatusBtn.classList.add('btn-read')
    }
    else{
        cardStatusBtn.textContent = 'Unread'
    }

    const cardRemoveBtn = document.createElement('button');
    cardRemoveBtn.classList.add('remove-btn');
    cardRemoveBtn.textContent = 'Remove'
    cardRemoveBtn.dataset.index = index;

    gridContainer.appendChild(cardDiv)
    cardDiv.appendChild(cardTextDiv)
    cardDiv.appendChild(cardButtonsDiv)
    cardTextDiv.appendChild(cardBookTitleDiv)
    cardTextDiv.appendChild(cardBookAuthorDiv)
    cardTextDiv.appendChild(cardBookPagesDiv)
    cardButtonsDiv.appendChild(cardStatusBtn)
    cardButtonsDiv.appendChild(cardRemoveBtn)

    if(btnListLayout.classList.contains('white-border')){
        cardDiv.classList.remove('grid-item');
        cardDiv.classList.add('grid-item-list');
        cardTextDiv.classList.remove('card-text');
        cardTextDiv.classList.add('card-text-list');
        cardBookTitleDiv.classList.remove('book-title');
        cardBookTitleDiv.classList.add('book-title-list');
        cardBookAuthorDiv.classList.remove('author');
        cardBookAuthorDiv.classList.add('author-list');
        cardBookPagesDiv.classList.remove('pages-number');
        cardBookPagesDiv.classList.add('author-list');
        cardButtonsDiv.classList.remove('card-buttons');
        cardButtonsDiv.classList.add('card-buttons-list');
    }

    statusButtons = document.querySelectorAll('.btn-status')
    gridItem = document.querySelectorAll('.grid-item-script')
    cardText = document.querySelectorAll('.card-text-script')
    authorText = document.querySelectorAll('.author-script')
    bookTitle = document.querySelectorAll('.book-title-script')
    pagesNumber = document.querySelectorAll('.pages-number-script')
    cardButtons = document.querySelectorAll('.card-buttons-script')
 })  
}

gridContainer.addEventListener('click', function(event) {
    const target = event.target;
    
    // Check if the clicked element has the class 'btn-status'
    if (target.classList.contains('btn-status')) {
      const index = target.dataset.index;
      // Access the book object using the index and update the status
      const book = myLibrary[index];
      if (book.status === 'Read') {
        book.status = 'Unread';
      } else {
        book.status = 'Read';
      }
      displayBooks(); // Update the display to reflect the status change
    }
    
    // Check if the clicked element has the class 'remove-btn'
    if (target.classList.contains('remove-btn')) {
      const index = target.dataset.index;
      // Remove the book from the myLibrary array using the index
      myLibrary.splice(index, 1);
      displayBooks(); // Update the display after removing the book
    }
  });
  

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


