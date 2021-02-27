var person = {
    firstName: "Jake",
    lastName: "Fenlason",
    hobby: "craft beer"
};
console.log(person);
var fullName = person.firstName + ' ' + person.lastName;

console.log("The person's name is:", fullName + '.');

person.job = 'professional soccer player';

console.log("The person's current job is: " + person.job + '.');

person.previousjob = "Beertender";

console.log("The person's previous job is: " + person.previousjob + '.');

console.log('The complete person object: ', person);

var myCar = {
  make:'Tesla',
  model: 'S3',
  year: '2021'
};

console.log('Car information ', myCar);

myCar['owner'] = fullName;

console.log('My name is ' + myCar['owner'] + 'and I drive a ' + myCar['year'] + ' ' + myCar['make'] + ' ' + myCar['model'] + '.');

myCar['color'] = 'white';

console.log('My full car info: ', myCar);
