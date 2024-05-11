let myCookie = document.cookie
myCookie = myCookie.split(';');
let obj ={}


myCookie.forEach((elem, i) => {
    elem = elem.split("=");
    // console.log(elem);
    obj[`${elem[0].trim()}`] = elem[1]
});

console.log(obj);
function setCookie(name,value,expiresIn,path) {
    let time = new Date();
    time = time.setTime(time.getTime() + (expiresIn * 24 * 60 * 60 * 1000))
    time = time.toUTCString;
    let theCookie = document.cookie = `${name} =${value};expires=${expiresIn};path=${path}`
    if (theCookie) {
        console.log("cookie has created");
    }
}

function getCookie (name){
    console.log(obj["username"]);

    if (obj[`${name}`]) {
        return obj[`${name}`]
    }
 
}

function deleteCookies (name,value){
    document.cookie =`${name}=${value};expires=Thu, 18 Dec 2013 12:00:00 UTC;`;
}


export {setCookie,getCookie,deleteCookies}