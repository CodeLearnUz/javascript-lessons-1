const user = {
    name: 'Doston',
    age: 24,
    email: 'dostonweb@gmail.com',
    location: 'Samarqand',
    langs: ['uzbek', 'russian', 'english'],
    login: function(){
        console.log('Siz bu sytdagi sahifangizga kirdingiz');
    },
    logout: function(){
        console.log('Siz bu saytdagi sahifngizni tark etdingiz');
    },
    speak: function(){
        // console.log(this.langs);
        console.log("I can speak:");
        this.langs.forEach((lang) => {
            console.log(lang);
        })
    },
} 

user.speak()

