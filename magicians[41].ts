let magician:string[] = ['harry potter', 'hermione granger', 'ron weasly', 'albus dumbledore']

function make_great (magicianarray:string[]){
for(let i = 0; i<magicianarray.length; i ++){
   magician[i]=  ' The Great '  +  magicianarray[i]
}
    
}





function showmagicians(magicians: string[]){
    magicians.forEach(element => {
        console.log(element)
    });
}

make_great(magician);
showmagicians(magician)