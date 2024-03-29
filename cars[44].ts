function storecarinfo(manufacturor:string , modelname:string, ...extraoption: {[key:string] : any} []) {

    const carinfo= {
manufacturor,
modelname,
...Object.assign({}, ...extraoption)
    }
    return carinfo;
};

 let answer = storecarinfo('honda', 'civic', {color:'black'}, {features: ['navigation', 'power window']})
 console.log(answer);