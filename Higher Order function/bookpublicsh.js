
//  Lets create Objecte to books ( title, auth, year)

let books = [{
    title: "Programming: Principal",
    Auth: "bajarne stroustrup",
    year: 2014
},
{
    title: "Effective Java",
    Auth: "joshua Bloch",
    year: 2001
}
    ,
{
    title: "Secrets of the JavaScript",
    Auth: " john Resig ",
    year: 2008
}
,
{
    title: "Programming PHP ",
    Auth: "Rasmus Lerrdorf",
    year: 2008
}];

function filterByPublicationYear(books) {
    const currentYear = new Date().getFullYear(); // Get the current year
    const filteredBooks = books.filter((book) => book.year < 2010); // Filter out books published before 2010
    const capitalizedBooks = filteredBooks.map((book) => ({
      title: book.title,
      Auth: book.Auth.toUpperCase(),
      year: book.year,
    }
    ));

    // Capitalize author names in the filtered books
    return capitalizedBooks;
  }

  console.log(filterByPublicationYear(books));
