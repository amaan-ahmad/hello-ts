function timeout(n: number){
    return new Promise(res => setTimeout(res, n));
}

export async function add(a: number, b: number): Promise<number> {
    timeout(500)
    return a + b;   
}

export function concat(a: string, b: string): string{
    return a + b;
}

const addTest: Function = test(add, [1, 2], 4);
const concatTest: Function = test(concat, ["hello", "world"], "helloworld");

(async function(){
    await addTest("adding two numbers");
    await concatTest("concatinating two strings");
})();


function test(fn: Function, args: Array<any>, expects: any): Function{
    return async function(message: string): Promise<boolean> {
        console.log("TEST: ", message);
        if(await (await fn(...args)) == expects){
            console.log("TEST PASSED ✔\n");
            return true;
        } else {
            console.log("TEST FAILED ❌\n");
            return false;
        }
    }
}