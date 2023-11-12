// obectlar arrayda

const movies = [
    {name: "Avatar", likes: 456},
    {name: "Harry Potter", likes: 4846},
    {name: "Titanic", likes: 987},
    {name: "Sherloc", likes: 574},
]

movies.forEach((move) => {
    const result = `Kino nomi ${move.name} 🎥, Likes ${move.likes} ❤️`
    console.log(result);
})