function cookieGet(name){
    const value = `${name}=`;
    const c = document.cookie.split(/;\s?/)
              .find(el => el.startsWith(value)) || '';

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

function countVisitTime() {
    let broad = cookieGet('lastVisit');
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

function addAnimToCookie(ev) {
    clearInterval(id);
    setAnimation(ev.target.value);
    useAnim();
}

function useAnim() {
    let animFromCookie = cookieGet('animName');

    demonstrationDiv.innerText = "";
    document.title = "";

    animations[animFromCookie]({count: 0});
    id = setInterval(animations[animFromCookie], 1000, {count:1});
}

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

const list = document.querySelector("#chooseAnim");
const demonstrationDiv = document.querySelector(".animSector");
let id = 0;

const animations = {
    anim1 : anim1,
    anim2 : anim2,
    anim3 : anim3,
    anim4 : anim4,
    anim5 : anim5,
    anim6 : anim6,
    anim7 : anim7,
    anim8 : anim8,
    anim9 : anim9,
    anim10 : anim10 
};

countVisitTime();
list.addEventListener("input", addAnimToCookie);

useAnim();
setVisitTime();
