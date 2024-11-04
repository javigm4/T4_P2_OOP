class Book {
  #title;
  #author;
  published;

  constructor(title, author, published) {
    this.#title = title;
    this.#author = author;
    this.published = published;
  }

  getTitle() {
    return this.#title;
  }

  getAuthor() {
    return this.#author;
  }
}

export default Book;
