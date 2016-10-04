var cats = ['Murchik', 'Pushok', 'Barsik'];
cats[50] = 'Bebe';
cats.push('Belchik');
cats.push('Asya');

// for (var i = 0; i < cats.length; i++) {
//     document.writeln(cats[i] + '<br>');
// }

// cats.forEach(function (e) {
//     document.writeln(e + '<br>');
// });

var dogs = {
    'Bobik': 3,
    'Max': 5,
    'Sirko': 7
}

var age = dogs['Max'];
document.write('Max\'s age: ' + age + '<br>');

dogs['Nika'] = 4;

for (var key in dogs) {
    document.write(key + ': ' + dogs[key] + '<br>');    
}

var dog = {
    name: 'Max',
    age: 7,
    bark: function () {
        document.write(this.name + 'Bark! Bark!');
    }
}

dog.bark();

function Dog(name, age) {
    this.name = name;
    this.age = age;
    this.bark = function () {
        document.write(this.name + 'Bark! Bark!' + '<br>');
    }
    return this;
}

var snizhok = new Dog('Snizhok', 3);
var sirko = new Dog('Sirko', 5);
sirko.bark();

mylink.addEventListener('click', function(e) {
    alert('It\'s a joke!');
    //e.preventDefault();
})