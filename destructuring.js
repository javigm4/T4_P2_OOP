import Book from "./Books.js";


const books = [
  new Book("La vida del Lazarillo de Tormes", "Anonymous", "1554"),
  new Book("The NeverEnding Story", "Michael Ende", "1984"),
  new Book("The Lord of the Rings", "J. R. R. Tolkien", "1954"),
  new Book("Beowulf", "Anonymous", "900"),
];

//---------------------------------------

export const getAllAtributesLazarillo = () => {
  const libro = new Book(
    "La vida del Lazarillo de Tormes",
    "Anonymous",
    "1554"
  );

  return {
    title: libro.getTitle(),
    author: libro.getAuthor(),
    published: libro.published,
  };
};
//---------------------------------------

export const getAllAtributesNeverEnding = () => {
  const libro = new Book("NeverEnding Story", "Michael Ende", "1984");

  return {
    title: libro.getTitle(),
    author: libro.getAuthor(),
    published: libro.published,
  };
};

//---------------------------------------

export const getAllAtributesLOR = () => {
  const libro = new Book("The Lord of the Rings", "J. R. R. Tolkien", "1954");

  return {
    title: libro.getTitle(),
    author: libro.getAuthor(),
    published: libro.published,
  };
};
