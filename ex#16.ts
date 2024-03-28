

let guest :string[] = ['Arif Afridi' , 'Shahid Afridi' , 'Naseem Shah'];

// for(let i=0; i<guest.length; i++){
//     console.log('Dear Mr. '+ guest[i] + ',\n\nit is my pleasure to invite you at dinner.\n\n Thanks!\n\n')
// } ;
let absent_guest:string = 'Arif Afridi' ;
let new_guest:string = 'Shaheen Afridi' ;
guest[0]= new_guest;

// for(let i=0; i<guest.length; i++){
//     console.log('Dear Mr. '+ guest[i] + ',\n\nit is my pleasure to invite you at dinner.\n\n Thanks!\n\n')
// } ;
console.log(`Mr. ${absent_guest} is not coming.`)
console.log('Good News! we have found a bog table so we are inviting 3 more guests')
//3 add
guest.unshift('Naseem Shah')
guest.splice(2,0, 'Ubaid Shah')
guest.push('Waseem Jnr')
//6 guest k array ko print krwaya hn
for(let i=0; i<guest.length; i++){
    console.log('Dear Mr. '+ guest[i] + ',\n\nit is my pleasure to invite you at dinner.\n\n Thanks!\n\n')
} ;
//sorryyy guest for not inviting
console.log('\n sorry we can not arrange a big table, only two people would be invited.')
// guest remove kiye hn
while(guest.length >2){
 let remove_guest =   guest.pop();
 console.log(`Sorry Mr. ${remove_guest}, you are not invited`);
}
//bachy hwe 2 guest
for(let i=0; i<guest.length; i++){
    console.log('Dear Mr. '+ guest[i] + ',\n\nyou are still invited.\n\n Thanks!\n\n')
} ;
//mene sare guest kata dye :)
guest.splice(0 , 2);
console.log(guest);
