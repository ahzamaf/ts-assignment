function make_shirt(size:string = 'large', text:string = 'i love ts'){
    console.log(`creating a ${size} shirt with message: ${text}`)
}
make_shirt();
make_shirt('medium');
make_shirt('small', 'i love python')