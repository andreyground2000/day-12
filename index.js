function get() {
    const value = `lastVisit=`;
    const c = document.cookie.split(";")
                             .find(el => el.trim().startsWith(value));
    return c.slice(value.length);
}

let forText = document.querySelector("p");

let broad = get();

if (!broad) {
forText.innerText = "This is your first visit.";
}

let time = new Date() - new Date(broad);

if (time < 1000) forText.innerText = `Your last visit was ${time} ms ago`;

if (time >= 1000 && time < 60000) forText.innerText = `Your last visit was ${Math.round(time / 1000)} second(s) ago`;

if (time >= 60000 && time < 3600000) forText.innerText = `Your last visit was ${Math.round(time / 60000)} minite(s) ago`;

if (time >= 3600000 && time < 86400000) forText.innerText = `Your last visit was ${Math.round(time / 3600000)} hour(s) ago`;

if (time >= 86400000 && time < 2419200000) forText.innerText = `Your last visit was ${Math.round(time / 86400000)} month(s) ago`;

if (time >= 2419200000) forText.innerText = `Your last visit was ${Math.round(time / 2419200000)} year(s) ago`;




function set() {
    let d = new Date();
    const expires = `expires=Tue Dec 15 2021 15:45:00 UTC`;
    document.cookie = `lastVisit=${d};${expires};path=/`;
}

set();



