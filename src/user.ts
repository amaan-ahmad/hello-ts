function flipCoins(): "heads" | "tails" {
    if(Math.random() > 0.5){
        return "heads";
    } else {
        return "tails";
    }
}

interface UserInfo {
    name: string;
    email: string;
}

type UserInfoResponse  = [
 string,
 UserInfo | Error
]


function mayGetInfo(): UserInfoResponse {
    if(flipCoins() === "heads"){
        return [
            "success",
            {
                name: "Amaan Ahmad",
                email: "hello@amaan.codes"
            },
        ]
    }
    else {
        return [
            "error",
            new Error("Could not fetch user info.")
        ]
    }
}
