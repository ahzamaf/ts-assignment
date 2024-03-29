let number:number[]= [1,2,3,4,5,6,7,8,]

for(let num of number){
let ordinalEndings:string;
if( num === 1){
    ordinalEndings= "st"
}
else if( num === 2){
    ordinalEndings= "nd"
}
else if( num === 3){
    ordinalEndings= "rd"
}
else {
    ordinalEndings= "th"
}

console.log(`${num}${ordinalEndings}`);
}
