// 6kyu, 7kyu, 8kyu
// KATA 1 8kyu
// https://www.codewars.com/kata/571f1eb77e8954a812000837
const animal = obj => `This ${obj.color} ${obj.name} has ${obj.legs} legs.`;

console.log(animal({name:"dog",legs:4,color:"white"}));

// KATA 2 8kyu
// https://www.codewars.com/kata/571f832f07363d295d001ba8
const trueOrFalse = val => Boolean(val).toString();

// a & b provided in kata test console.log(trueOrFalse(a > b));

// KATA 3 8kyu
//https://www.codewars.com/kata/57202aefe8d6c514300001fd/train/javascript
 const saleHotdogs = n => n * (n < 5 ? 100 : n < 10 ? 95 : 90);

console.log(saleHotdogs(8));
console.log(saleHotdogs(111));
console.log(saleHotdogs(10));
console.log(saleHotdogs(1));

// KATA 4 8kyu
//  https://www.codewars.com/kata/572059afc2f4612825000d8a
const howManydays = month => {
  switch(month) {
    case 2: 
      return 28
      break;
    case 4: 
    case 6: 
    case 9: 
    case 11: 
      return 30
      break;
    default: 
      return 31;
      break;
  }
}

console.log(howManydays(3));  
console.log(howManydays(2));  
console.log(howManydays(11));  

// KATA 5 8kyu
// https://www.codewars.com/kata/57216d4bcdd71175d6000560/train/javascript
const padIt = (str, n) => {  
  while (n > 0) {
    if (n % 2 === 0) {
     str = str + '*';
    } 
    else  {
     str = '*' + str;
    }
    n--; 
    }   
  return str;
}

console.log(padIt("a",1));
console.log(padIt("a",5));


