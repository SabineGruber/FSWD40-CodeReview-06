var SabinesMedia = [{
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

    for (i = 0; i < SabinesMedia.length; i++) {
        $(".card-img").eq(i).append('<img src="' + SabinesMedia[i].image + '">');
        $(".card-title").eq(i).append(SabinesMedia[i].title);
        $(".card-author").eq(i).append(SabinesMedia[i].author);
        $(".card-publisher").eq(i).append(SabinesMedia[i].publisher);
        $(".media-type").eq(i).append(SabinesMedia[i].type);
        $(".genre").eq(i).append(SabinesMedia[i].genre);
        $(".text-success").eq(i).append(SabinesMedia[i].rating);
    };


    $("form").on("submit", function(e) {
        e.preventDefault();
        var newType = $("#new-type").val()
        var newGenre = $("#new-genre").val()
        var newTitle = $("#new-title").val()
        var newAuthor = $("#new-author").val()
        var newPublisher = $("#new-publisher").val()
      $("#newItem").append('<div class="col-lg-4 col-md-6 col-sm-12 mb-4"><div class="card-container"><div class="card-body"><span class="media-type">' + newType + '</span> / <span class="genre">' + newGenre + '</span><h4 class="card-title">' + newTitle + '</h4><p class="card-author">' + newAuthor + '</p><p class="card-publisher"><small>' + newPublisher + '</small></p></div><div class="card-footer"></div></div></div>');
    });


});