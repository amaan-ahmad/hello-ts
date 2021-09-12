type NestedType = number | NestedType[]

function fn(arg: NestedType){
    if(typeof arg != "number"){
        arg.push(10)
        console.log(...arg);
    } else {
        console.log(arg + 1, " just incremented the argument by 1");
    }
}

(async function(){
    fn(1);
    fn([1, 3, 4, [2], 1])
})();