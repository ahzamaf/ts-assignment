let magician:string[] = ['harry potter', 'hermione granger', 'ron weasly', 'albus dumbledore']

function copyarray(arr:string[]){

return [...arr]

}










function make_great (magicianarray:string[]){
for(let i = 0; i<magicianarray.length; i ++){
   magicianarray[i]=  ' The Great '  +  magicianarray[i]
}
    
}





function showmagicians(magicians: string[]){
    magicians.forEach(element => {
        console.log(element)
    });
}
const copymagicianarray = copyarray(magician)



make_great(copymagicianarray);
console.log('\n\nthis is original');
showmagicians(magician)
console.log('\n\nthis is copy');
showmagicians(copymagicianarray);