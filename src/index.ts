import {UserInfoResponse} from "./user"
interface LoginFormInput { 
    name: string;
    email: string;
};

interface JobFormInput { 
    role: string;
    pay: number;
};

function doSomething(a: LoginFormInput, b: number): UserInfoResponse
function doSomething(a: JobFormInput, b: string): UserInfoResponse

function doSomething(a: LoginFormInput | JobFormInput, b: number | string): UserInfoResponse {
    // do something with forms
    return ["logged in", {
        name: "amaan",
        email: "hello@amaan.codes"
    }]
}


doSomething({
    name :"example",
    email: "example@abc.com"
}, 1)

doSomething({
    role :"superman",
    pay: 100
}, "get me job")