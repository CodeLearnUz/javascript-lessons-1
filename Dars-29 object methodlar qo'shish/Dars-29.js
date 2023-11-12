const user = {
    name: 'Doston',
    age: 24,
    email: 'dostonweb@gmail.com',
    location: 'Samarqand',
    lang: ['uzbek', 'russian', 'english'],
    login: function(){
        console.log('Siz bu sytdagi sahifangizga kirdingiz');
    },
    logout: function(){
        console.log('Siz bu saytdagi sahifngizni tark etdingiz');
    },
    speak: function(){
        this.lang
    }
} 

user.login()
user.logout()