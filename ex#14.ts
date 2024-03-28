

let guest :string[] = ['Arif Afridi' , 'Shahid Afridi' , 'Naseem Shah'];

for(let i=0; i<guest.length; i++){
    console.log('Dear Mr. '+ guest[i] + ',\n\nit is my pleasure to invite you at dinner.\n\n Thanks!\n\n')
} ;
let absent_guest:string = 'Arif Afridi' ;
let new_guest:string = 'Shaheen Afridi' ;
guest[0]= new_guest;

for(let i=0; i<guest.length; i++){
    console.log('Dear Mr. '+ guest[i] + ',\n\nit is my pleasure to invite you at dinner.\n\n Thanks!\n\n')
} ;
console.log(`Mr. ${absent_guest} is not coming.`)