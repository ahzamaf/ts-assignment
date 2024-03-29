import { normalize } from "path"

let current_users:string[] = ['maaZ' , 'talha' , 'ayAn' , 'fahad', 'kabir']


let new_users:string[]= ['kabir' , 'maaZ' , 'naeem', 'rafay', 'najaf']


new_users.forEach(newusernames => {
let lowercase:string = newusernames.toLowerCase()
if(current_users.map(c_user => c_user.toLowerCase()).includes(lowercase)){
    console.log(`the username ${newusernames} is not available. please write a different username`);

}
else{
    console.log(`the username ${newusernames} is  available. `);

}

})