//init empty array to store books in library
let myLibrary = [];
//var to grab form
var newBookForm = document.getElementById('newBookForm');
//var to grab library container GRID
var libraryContainer = document.getElementById('libraryContainer');


//constructor function to take inputs from form and create book object for library array
function Book(title, author, pages, isRead, note){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.isRead = isRead;
    //this.note = note;
    
}
//function to grab each of the form inputs
function grabInputs(){
    Title = newBookForm.elements.item(0).value;
    Author = newBookForm.elements.item(1).value;
    Pages = newBookForm.elements.item(2).value;
    IsRead = newBookForm.elements.item(3).value;
    //Note = newBookForm.elements.item(4).value;
}
//function to reset form inputs
function resetFormInputs(){
    newBookForm.reset();
    /*
    Title = "";
    Author = "";
    Pages = "";
    IsRead = "";
    Note = "";
    */
}



//function to add new book to the library upon form submit
function addBookToLibrary(){
    
    grabInputs();
    newBookAdded = new Book(Title, Author, Pages, IsRead);
    myLibrary.push(newBookAdded);

    console.log(myLibrary.length);
    console.log(`Title: ${myLibrary[(myLibrary.length-1)].title}, Author: ${myLibrary[(myLibrary.length-1)].author}`);
    
    //console.log(myLibrary);
    resetFormInputs(Title, Author, Pages, IsRead);
    
    //addBookDisplay(myLibrary);
    console.log(myLibrary);
    console.log(newBookAdded.isRead);
    closeForm();
    addBookDisplay(myLibrary);
}

//append child to libraryContainer for each new book added to library
function addBookDisplay(myLibrary){

    const container = document.querySelector("#libraryContainer");

    clearLibrary(container);

    for (i = 0; i < myLibrary.length; i++){

    const bookToAdd = document.createElement("div");
    bookToAdd.classList.add("bookEntry");

    //bookToAdd.textContent = "This is a Book Card for: " + myLibrary[i].title;
    bookToAdd.innerHTML = `Title: '${myLibrary[i].title}' <br>
                            Author: ${myLibrary[i].author} <br>
                            Pages: ${myLibrary[i].pages} <br>
                            Read: <input type="checkbox">`;
    container.appendChild(bookToAdd);

    const deleteButton = document.createElement("div");
    deleteButton.classList.add("deleteButton");
    deleteButton.textContent = "Delete";
    deleteButton.addEventListener("click", deleteThisBook);
    bookToAdd.appendChild(deleteButton);


    }
}
function deleteThisBook(){
    let parentElement = this.parentElement;
    parentElement.remove();
    
    console.log("Book Deleted");
    
}



//clear library before adding new entry
function clearLibrary(parent){
    while (parent.firstChild){
        parent.removeChild(parent.firstChild);
    }
}










function openForm() {
    document.getElementById("newBookFormDiv-popup").style.display = "block";
}

function closeForm() {
    document.getElementById("newBookFormDiv-popup").style.display = "none";
}