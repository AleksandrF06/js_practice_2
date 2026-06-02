const books = [
  { title: "Мастер и Маргарита", author: "Михаил Булгаков", genres: ["роман", "фантастика", "сатира"], isRead: true },
  { title: "Собачье сердце", author: "Михаил Булгаков", genres: ["роман", "сатира"], isRead: false },

  { title: "1984", author: "Джордж Оруэлл", genres: ["антиутопия", "политика"], isRead: true },
  { title: "О дивный новый мир", author: "Олдос Хаксли", genres: ["антиутопия", "политика"], isRead: false },

  { title: "Преступление и наказание", author: "Фёдор Достоевский", genres: ["роман", "психология"], isRead: false },
  { title: "Игра в бисер", author: "Герман Гессе", genres: ["роман", "психология"], isRead: true },

  { title: "Дюна", author: "Фрэнк Герберт", genres: ["фантастика", "приключения"], isRead: false },
  { title: "Автостопом по галактике", author: "Дуглас Адамс", genres: ["фантастика", "приключения"], isRead: true },

  { title: "Гарри Поттер", author: "Дж. К. Роулинг", genres: ["фэнтези", "приключения"], isRead: true },
  { title: "Властелин колец", author: "Дж. Р. Р. Толкин", genres: ["фэнтези", "приключения"], isRead: false },
];


function getBooksByGenre(genre) {
    const filteredBooksByGenre = books.filter((element) => {
        if (element.genres.includes(genre)) {
            return element
        }
    })
    if (filteredBooksByGenre.length == 0) {
        return "Книг с таким жанром, к превеликому сожалению, нет"
    }

    return filteredBooksByGenre
}

function markAsRead(title) {
    for (let book of books) {
        if (book.title == title) {
            book.isRead = true
            return book
        }
    }
}

console.log(getBooksByGenre("фэнтези"))
console.log(markAsRead("Властелин колец"))