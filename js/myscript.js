var Media = [{
        title: "Harry Potter and the Philosopher's Stone",
        type: "Book",
        author: "Joanne K. Rowling",
        genre: "Fantasy",
        publisher: "Bloomsbury",
        image: "img/HP1.png",
        rating: "&#9733; &#9733; &#9733; &#9733; &#9734;"
    },

    {
        title: "Harry Potter and the Chamber of Secrets",
        type: "Book",
        author: "Joanne K. Rowling",
        genre: "Fantasy",
        publisher: "Bloomsbury",
        image: "img/HP2.png",
        rating: "&#9733; &#9733; &#9733; &#9734; &#9734;"
    },

    {
        title: "Harry Potter and the Prisoner of Azkaban",
        type: "Book",
        author: "Joanne K. Rowling",
        genre: "Fantasy",
        publisher: "Bloomsbury",
        image: "img/HP3.png",
        rating: "&#9733; &#9733; &#9733; &#9733; &#9733;"
    },

    {
        title: "Calvin & Hobbes",
        type: "Comic",
        author: "Bill Watterson",
        genre: "Humour",
        publisher: "Carlsen",
        image: "img/calvin-hobbes.png",
        rating: "&#9733; &#9733; &#9733; &#9734; &#9734;"
    },

    {
        title: "Asterix & Obelix",
        type: "Comic",
        author: "René Goscinny & Albert Uderzo",
        genre: "Humour",
        publisher: "Dargaud",
        image: "img/asterix-obelix.png",
        rating: "&#9733; &#9733; &#9734; &#9734; &#9734;"
    },

    {
        title: "Ironman",
        type: "Comic",
        author: "Marvel Comics",
        genre: "Action",
        publisher: "Marvel Comics",
        image: "img/ironman.png",
        rating: "&#9733; &#9733; &#9733; &#9734; &#9734;"
    },

    {
        title: "Taffe Mädels",
        type: "DVD",
        author: "",
        genre: "Comedy",
        publisher: "20th Century Fox",
        image: "img/taffe-maedels.png",
        rating: "&#9733; &#9733; &#9733; &#9733; &#9733;"
    },

    {
        title: "Fack ju Göhte",
        type: "DVD",
        author: "",
        genre: "Comedy",
        publisher: "Constantin Film",
        image: "img/fack-ju-goehte.png",
        rating: "&#9733; &#9733; &#9733; &#9733; &#9734;"
    },

    {
        title: "Fack ju Göhte 2",
        type: "DVD",
        author: "",
        genre: "Comedy",
        publisher: "Constantin Film",
        image: "img/fack-ju-goehte-2.png",
        rating: "&#9733; &#9733; &#9733; &#9733; &#9733;"
    },

    {
        title: "Tuesday",
        type: "CD",
        author: "Reamonn",
        genre: "Pop",
        publisher: "EMI",
        image: "img/reamonn-tuesday.jpg",
        rating: "&#9733; &#9733; &#9733; &#9733; &#9733;"
    },

    {
        title: "Wish",
        type: "CD",
        author: "Reamonn",
        genre: "Pop",
        publisher: "EMI",
        image: "img/reamonn-wish.png",
        rating: "&#9733; &#9733; &#9733; &#9734; &#9734;"
    },

    {
        title: "On the Way to Wonderland",
        type: "CD",
        author: "Sunrise Avenue",
        genre: "Pop",
        publisher: "EMI",
        image: "img/sunrise-avenue.png",
        rating: "&#9733; &#9733; &#9733; &#9733; &#9734;"
    },
];


$(document).ready(function() {

    for (i = 0; i < Media.length; i++) {
        $(".card-img").eq(i).append('<img src="' + Media[i].image + '">');
        $(".card-title").eq(i).append(Media[i].title);
        $(".card-author").eq(i).append(Media[i].author);
        $(".card-publisher").eq(i).append(Media[i].publisher);
        $(".media-type").eq(i).append(Media[i].type);
        $(".genre").eq(i).append(Media[i].genre);
        $(".text-success").eq(i).append(Media[i].rating);
    }

    $("form").submit(function() {
        $("#new-title").val().console.log();

        // $(".row").append('<div class="col-lg-4 col-md-6 col-sm-12 mb-4">' + newTitle + '</div>');

    });



});