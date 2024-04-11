// Sample array of books (dummy data)
let books = [
    { title: "HTML:A Beginner's Guide", author: "by Wendy Willard", price: 19.99, imageUrl: "book1.jpg" },
    { title: "HTML & CSS", author: "by Jon Duckett", price: 24.99, imageUrl: "book2.jpg" },
    { title: "JavaScript:The Definitive Guide", author: "by David Flanagan", price: 14.99, imageUrl: "book3.jpg" },
    { title: "CSS:The Missing Manual", author: "by David McFarland", price: 26.99, imageUrl: "book4.jpg" },
];

// Function to display books on the webpage
function displayBooks() {
    const booksSection = document.getElementById("books");
    booksSection.innerHTML = ""; // Clear existing books

    books.forEach(book => {
        const bookDiv = document.createElement("div");
        bookDiv.classList.add("book");

        bookDiv.innerHTML = `
            <img src="${book.imageUrl}" alt="${book.title}">
            <h3>${book.title}</h3>
            <p>${book.author}</p>
            <p>Price: $${book.price.toFixed(2)}</p>
            <button onclick="addToCart('${book.title}')">Add to Cart</button>
        `;

        booksSection.appendChild(bookDiv);
    });
}

function addBook() {
    // Get input values
    var title = document.getElementById("titleInput").value;
    var author = document.getElementById("authorInput").value;
    var price = document.getElementById("priceInput").value;
    var imageUrl = document.getElementById("imageInput").value;

    // Create book element
    var book = document.createElement("div");
    book.classList.add("book");
    book.innerHTML = `
        <img src="${imageUrl}" alt="${title}">
        <h3>${title}</h3>
        <p>by ${author}</p>
        <p>Price: $${price}</p>
        <button onclick="addToCart('${title}')">Add to Cart</button>
    `;

    // Append book element to the main section
    var booksContainer = document.getElementById("books");
    booksContainer.appendChild(book);
}

// Function to search books by title
function searchBooks(query) {
    const filteredBooks = books.filter(book =>
        book.title.toLowerCase().includes(query.toLowerCase())
    );

    // Display filtered books
    displayBooks(filteredBooks);
}

// Function to handle adding a book to the cart
function addToCart(title) {
    // Dummy function, replace with actual logic to add to cart
    alert(`Added "${title}" to cart!`);
}

// Initial display of books
displayBooks();
