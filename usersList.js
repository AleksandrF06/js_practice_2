const users = [
  { id: 1, name: "Алексей Смирнов", email: "alexey@mail.ru" },
  { id: 2, name: "Мария Иванова", email: "maria@gmail.com" },
  { id: 3, name: "Дмитрий Козлов", email: "dmitry@yandex.ru" },
  { id: 4, name: "Анна Петрова", email: "anna@mail.ru" },
  { id: 5, name: "Сергей Новиков", email: "sergey@gmail.com" },
  { id: 6, name: "Елена Морозова", email: "elena@yandex.ru" },
  { id: 7, name: "Павел Волков", email: "pavel@mail.ru" },
  { id: 8, name: "Ольга Соколова", email: "olga@gmail.com" },
  { id: 9, name: "Никита Лебедев", email: "nikita@yandex.ru" },
];

function findUsersById(users, id) {
    const filteredUsers = users.filter((element) => {
        if (element.id === id) {
            return true
        }
        return null
    })

    return filteredUsers
}

console.log(findUsersById(users, 1))