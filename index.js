//This is my first javaScript code !
console.log('Hello World')

let person={
    name:'Tunde',
    age:30
};
person.name='Gabriel';
person['name'] = 'Rafiu';
console.log(person.name)

let selectedColors = ['red','blue'];
selectedColors[2] = 'green'
console.log(selectedColors);

function greet(name,lastName) {
    console.log('Hello' + name +''+lastName);
}
greet('Gabriel','Rafiu');

