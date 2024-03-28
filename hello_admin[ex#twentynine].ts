const usernames: string[] = ['admin','nice','sakka hai','tom','oggy'];

for(let i=0; i<usernames.length; i++){
if(usernames[i] === 'admin'){

    console.log('hello admin, wouldyou like tosee status report?')
    
}
else{
    console.log(`hello ${usernames[i]}, thank you for logging in again`)
}
}