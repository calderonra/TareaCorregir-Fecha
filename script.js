// Object Literal
var person = {
    /* property: value*/
    name: "Néstor",
    lastname: "Aldana",
    birthday: Date.now()
}; // JSON (JavaScript Object Notation)

// Access to propertys
console.log(person.name);
// Change object's property value
person.birthday = new Date(1994, 0, 11); // 11 - Jan - 1994
console.log(person.birthday);

console.log(person.dui) // undefined
person.dui = "000000000" // Assign 
console.log(person.dui) // 000000000

// Example
function createPerson(name, lastname, birthday, dui) {
    return {
        name,
        lastname,
        birthday,
        dui
    }
}

let list = [] // To save persons

// To Add 10 fake persons
for (let i = 0; i < 10; i++) {
    list.push(createPerson(`Name ${i}`, `Lastname ${i}`, new Date().setFullYear(1990 + i + Math.floor(Math.random() * 5)), `000000${i}`));
}

console.table(list);

// Array Higher function
// Show only the name persons
console.table(list.map(({
    name
}) => name));

// Get average age
console.log("Average age %i", list.reduce((sum, {
    birthday
}) => {
    var ageDifMs = Date.now() - birthday;
    var ageDate = new Date(ageDifMs); // miliseconds from epoch
    return Math.abs(ageDate.getUTCFullYear() - 1970) + sum;
}, 0) / list.length);


// More readable

function getAge(birthday) {
    var ageDifMs = Date.now() - birthday;
    var ageDate = new Date(ageDifMs); // miliseconds from epoch
    return Math.abs(ageDate.getUTCFullYear() - 1970);
}

console.log("Average age %i", list.reduce((sum, {
    birthday
}) => getAge(birthday) + sum, 0) / list.length);


function edadReal(birthday){
    let hoy = new Date();
    let nacimiento = new Date(birthday);
    let edad=   hoy.getFullYear()-nacimiento.getFullYear();
    let verificacionM = hoy.getMonth() - nacimiento.getMonth() ;
     /* aqui guardamos la resta de los meses para posteriormente hacer verificaciones 
     primero que si la resta es mayor que cero significa que nos pasamos del mes de cumple y falta 
     11 meses o menos para su cumple.
     Luego necesitamos verificar el dia en que estamos en el mes y es igual que la verificacion anterior 
     entonces si una de estas en true le tendremos que restar a la edad porque todavia no cumple annos;
     */
    if (verificacionM>0 || (verificacionM===0 && hoy.getDate()<nacimiento.getDate())){
        edad--;
    }
    return edad;
}

console.log(edadReal(person.birthday));