// Given 
let cities = ['city01', 'city02','city03','city04','city05'];

// Convert array into object

let city = {};

for(let i=0; i<cities.length; i++){
    city[cities[i]] ='';
}
console.log(city);