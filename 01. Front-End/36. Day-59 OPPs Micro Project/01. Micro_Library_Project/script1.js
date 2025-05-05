
class Library{
    constructor(){
        this.books = []   // Saari books ks record yaha pe hai
    }

    addBook(book){
        this.books.push(book)
    }
    listAllBooks(){
        this.books.forEach((book)=>{
            console.log("Name : ",book.name);
            console.log("ISBN : ",book.isbn);
            console.log("Price : ",book.price);
            console.log("Author : ",book.author);
        })
    }
}

let jhansiLibrary = new Library()
let bhopalLibrary = new Library()

jhansiLibrary.addBook("Do epic shit")
jhansiLibrary.addBook("Health is Money")
jhansiLibrary.addBook("Adventures life")

bhopalLibrary.addBook("Do epic shit")
bhopalLibrary.addBook("Do something crazy")
bhopalLibrary.addBook("welth")


jhansiLibrary.listAllBooks()
bhopalLibrary.listAllBooks()