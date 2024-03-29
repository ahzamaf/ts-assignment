function makesandwich(item:string[]){

console.log('making your sandwich with:');

    item.forEach((element: string) => console.log("- "+ element));

console.log('\n\nenjoy yor sandwich!');
}

makesandwich(['ham', 'cheese ', 'lettuce']);
makesandwich(['meat', 'egg ',]);
makesandwich(['sauce', 'jelly ']);
