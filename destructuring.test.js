import Book from "./Books.js";

const books = [
  new Book("La vida del Lazarillo de Tormes", "Anonymous", "1554"),
  new Book("The NeverEnding Story", "Michael Ende", "1984"),
  new Book("The Lord of the Rings", "J. R. R. Tolkien", "1954"),
  new Book("Beowulf", "Anonymous", "900"),
];

describe("OOP", () => {
  //---------------------------------------

  it("should get title, author and published for La vida del Lazarillo de Tormes", () => {
    expect(books[0].getTitle()).toBe("La vida del Lazarillo de Tormes");
    expect(books[0].getAuthor()).toBe("Anonymous");
    expect(books[0].published).toBe("1554");
  });
  //---------------------------------------

  it("should get title, author and published for the NeverEnding Story", () => {
    expect(books[1].getTitle()).toBe("The NeverEnding Story");
    expect(books[1].getAuthor()).toBe("Michael Ende");
    expect(books[1].published).toBe("1984");
  });
  //---------------------------------------

  it("should get title, author and published for the Lord of the Rings", () => {
    expect(books[2].getTitle()).toBe("The Lord of the Rings");
    expect(books[2].getAuthor()).toBe("J. R. R. Tolkien");
    expect(books[2].published).toBe("1954");
  });
  //---------------------------------------

  it("should get title, author and published for Beowulf", () => {
    expect(books[3].getTitle()).toBe("Beowulf");
    expect(books[3].getAuthor()).toBe("Anonymous");
    expect(books[3].published).toBe("900");
  });
  //---------------------------------------
});
