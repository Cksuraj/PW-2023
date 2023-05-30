// Creating the objects for books 

const books = [
    {
        title: "JavaScript",
        Authore: "Netscape",
        year: 1994,
    }
    ,

    {
        title: "HTML",
        Authore: " Sir Tim Berners-Leepe",
        year: 1991,
    },

    {
        title: "CSS",
        Authore: " Hakon Wium Lie ",
        year: 1994,
    }
    ,
    {
        title: "JAVA",
        Authore: "James Gosling at Sun Microsystems",
        year: 1995,
    }
    ,
    {
        title: "JavaScript",
        Authore: "Netscape",
        year: 1994
    }
];

// Creating funtion for arrangeing them in alphabetical order by callback 

function Displaytitle(titles) {
    titles.sort(); // calling sort method on title element of books object
    console.log(titles.join(', ')); 
}

// creating  function for books and sorting them with it's title 

function extracttitles(books, callback) {
    const ordertitle = books.map((book) => book.title);
    callback(ordertitle);
}

// printing the output 
extracttitles(books, Displaytitle);

