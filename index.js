function getVisitTime() {
    const value = `lastVisit=`;
    const c = document.cookie.split(";")
                             .find(el => el.trim().startsWith(value));
    return c.slice(value.length);
}

function setVisitTime() {
    let d = new Date();
    const expires = `expires=Tue Dec 15 2021 15:45:00 UTC`;
    document.cookie = `lastVisit=${d};${expires};path=/`;
}

 function setAnimation(animationName){
    const expires = `expires=Tue Dec 15 2021 20:45:00 UTC`;
    document.cookie = `animName=${animationName};${expires};path=/`;
}

 function getAnimation() {
    const name = `animName=`;
    const c = document.cookie
                .split(";")
                .find(el => el.trim().startsWith(name));

    return c.slice(name.length + 1) || '';
}


function countVisitTime() {
    let broad = getVisitTime();
    let time = new Date() - new Date(broad);
    let forText = document.querySelector("p");

    if (!broad) {
        forText.innerText = "This is your first visit.";
    }

    if (time < 1000) forText.innerText = `Your last visit was ${time} ms ago`;

    if (time >= 1000 && time < 60000) forText.innerText = `Your last visit was ${Math.round(time / 1000)} second(s) ago`;

    if (time >= 60000 && time < 3600000) forText.innerText = `Your last visit was ${Math.round(time / 60000)} minute(s) ago`;

    if (time >= 3600000 && time < 86400000) forText.innerText = `Your last visit was ${Math.round(time / 3600000)} hour(s) ago`;

    if (time >= 86400000 && time < 2419200000) forText.innerText = `Your last visit was ${Math.round(time / 86400000)} month(s) ago`;

    if (time >= 2419200000) forText.innerText = `Your last visit was ${Math.round(time / 2419200000)} year(s) ago`;

}



countVisitTime();



const list = document.querySelector("#chooseAnim");
const demonstrationDiv = document.querySelector(".animSector");

function anim1(obj) {
    const symbols = ["⬅","⬆","➡","⬇"];
    if (obj.count === 4) obj.count = 0;
    demonstrationDiv.innerText = symbols[obj.count];
    document.title = symbols[obj.count];
    obj.count++;
}


function anim2(obj) {
    const symbols = ["▶ᐅᐅᐅ","ᐅ▶ᐅᐅ","ᐅᐅ▶ᐅ","ᐅᐅᐅ▶"];
    if (obj.count === 4) obj.count = 0;
    demonstrationDiv.innerText = symbols[obj.count];
    document.title = symbols[obj.count];
    obj.count++;
}

function anim3(obj) {
    const symbols = ["■","■ ■","■ ■ ■", ""];
    if (obj.count === 4) obj.count = 0;
    demonstrationDiv.innerText = symbols[obj.count];
    document.title = symbols[obj.count];
    obj.count++;
}


function anim4(obj) {
    const symbols = ["(●  )","( ● )", "(  ●)", ""];
    if (obj.count === 4) obj.count = 0;
    demonstrationDiv.innerText = symbols[obj.count];
    document.title = symbols[obj.count];
    obj.count++;
}

function anim5(obj) {
    const symbols = ["[═ ═ ═]","[═ ═  ]","[    ═]", ""];
    if (obj.count === 4) obj.count = 0;
    demonstrationDiv.innerText = symbols[obj.count];
    document.title = symbols[obj.count];
    obj.count++;
}

function anim6(obj) {
    const symbols = ["⦿⭘⭘","⭘⦿⭘", "⭘⭘⦿"];
    if (obj.count === 3) obj.count = 0;
    demonstrationDiv.innerText = symbols[obj.count];
    document.title = symbols[obj.count];
    obj.count++;
}

function anim7(obj) {
    const symbols = ["⬅", "↖","⬆", "↗","➡", "↘","⬇", "↙"];
    if (obj.count === 8) obj.count = 0;
    demonstrationDiv.innerText = symbols[obj.count];
    document.title = symbols[obj.count];
    obj.count++;
}

function anim8(obj) {
    const symbols = ["◔", "◒", "◕", "◓"];
    if (obj.count === 4) obj.count = 0;
    demonstrationDiv.innerText = symbols[obj.count];
    document.title = symbols[obj.count];
    obj.count++;
}

function anim9(obj) {
    const symbols = ["⢻","⢹", "⢸"];
    if (obj.count === 3) obj.count = 0;
    demonstrationDiv.innerText = symbols[obj.count];
    document.title = symbols[obj.count];
    obj.count++;
}

function anim10(obj) {
    const symbols = ["⠁", "⠂", "⠐", "⠈"];
    if (obj.count === 4) obj.count = 0;
    demonstrationDiv.innerText = symbols[obj.count];
    document.title = symbols[obj.count];
    obj.count++;
}


function addAnimToCookie(ev) {
    setAnimation(ev.target.value);
}


function useAnim() {
    let animFromCookie = getAnimation();
    switch(animFromCookie) {
        case "anim1": {
            demonstrationDiv.innerText = "";
            document.title = "";
            anim1({count: 0});
            setInterval(anim1, 1000, {count:1});
            break;
        }
        case "anim2": {
            demonstrationDiv.innerText = "";
            document.title = "";
            anim2({count: 0});
            setInterval(anim2, 1000, {count:1});
            break;
        }
        case "anim3": {
            demonstrationDiv.innerText = "";
            document.title = "";
            anim3({count: 0});
            setInterval(anim3, 1000, {count:1});
            break;
        }
        case "anim4": {
            demonstrationDiv.innerText = "";
            document.title = "";
            anim4({count: 0});
            setInterval(anim4, 1000, {count:1});
            break;
        }
        case "anim5": {
            demonstrationDiv.innerText = "";
            document.title = "";
            anim5({count: 0});
            setInterval(anim5, 1000, {count:1});
            break;
        }
        case "anim6": {
            demonstrationDiv.innerText = "";
            document.title = "";
            anim6({count: 0});
            setInterval(anim6, 1000, {count:1});
            break;
        }
        case "anim7": {
            demonstrationDiv.innerText = "";
            document.title = "";
            anim7({count: 0});
            setInterval(anim7, 1000, {count:1});
            break;
        }
        case "anim8": {
            demonstrationDiv.innerText = "";
            document.title = "";
            anim8({count: 0});
            setInterval(anim8, 1000, {count:1});
            break;
        }
        case "anim9": {
            demonstrationDiv.innerText = "";
            document.title = "";
            anim9({count: 0});
            setInterval(anim9, 1000, {count:1});
            break;
        }
        case "anim10": {
            demonstrationDiv.innerText = "";
            document.title = "";
            anim10({count: 0});
            setInterval(anim10, 1000, {count:1});
            break;
        }
    }   
}



list.addEventListener("input", addAnimToCookie);

useAnim();


setVisitTime();



