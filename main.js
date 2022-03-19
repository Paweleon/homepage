alert('Co taaaaaaaaam? hakujemy Kasi fejsa?')
console.log ('siema');
const name= 'Paweł';
const age= 35;
console.log(name);
console.log(age);

console.log(`nazywam się ${name} i mam ${age} lat`);
if ('javascript' != 'java'){
  console.log('to prawda!')}

if (age > 20) {
   console.log('masz więcej niż 20 lat');                                                          
} else {
   console.log('masz mniej niż 20 lat');
  }
switch (age) {
    case 20:
    console.log('masz 20 lat')
    break;
    case 30:
        console.log('masz 30 lat')
    break;
    default:
        console.log(`masz ${age} lat`);
          
    break;
}

const amIOld = (age > 70) ? 'yes' : 'no';
console.log(amIOld);

function calculate(x) {
 x = x + 3;
 console.log(x);
 return x*7
}

console.log(calculate(2));
const myCalculation  = calculate(4);
console.log(myCalculation);
 
const calculatefat = x => (x+3)*7;

console.log(calculatefat(2));