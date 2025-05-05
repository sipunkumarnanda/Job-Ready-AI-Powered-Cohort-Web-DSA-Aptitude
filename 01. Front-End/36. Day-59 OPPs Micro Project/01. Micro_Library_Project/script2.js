
class Library{
    constructor(){
        this.books = []   // Saari books ka record yaha pe hai
    }

    addBooks(books){
        this.books.push(...books)
    }
    listAllBooks(){
        this.books.forEach((book, index)=>{
            console.log(`${index + 1}. ${book.name} by ${book.author}`);
        })
    }
}

class Book{
    constructor(name , isbn, price , author){
        this.name = name
        this.isbn = isbn
        this.price = price
        this.author = author
        this.readStatus = false
    }

    info(){
        console.log(
            `${this.readStatus ? "✅" : "❌"} ${this.name}, is written by ${this.author} and you have ${this.readStatus ? "read it" : "not read this book "} and is available at amazon at price range of ${this.price}`
        );
    }

    chnageReadStatus(){
        this.readStatus = !this.readStatus
    }
}


let jhansiLibrary = new Library()
let bhopalLibrary = new Library()


let book1 = new Book("Welth is life", "2355623532ghsghdghsd", "120", "Harsh Shrama")
let book2 = new Book("Do epic shit", "2355623532ghsghdghsd", "150", "Ankur wariko")
let book3 = new Book("Adventure life", "2355623532ghsghd35623sd", "1500", "Harish Gupta")


// jhansiLibrary.addBook(book1)
// jhansiLibrary.addBook(book2)
// jhansiLibrary.addBook(book3)

// The problem is that here we are doing addBook again and again , but here we dont want to do that instead we can do - 

jhansiLibrary.addBooks([book1, book2, book3])