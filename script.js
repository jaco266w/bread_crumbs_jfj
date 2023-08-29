"use strict";

const knap = document.querySelector("#knap");
const list = document.querySelector("ul");
const bc = [  
{ name: "Hvidevarer", link: "/hvidevarer" },  
{ name: "Vaskemaskiner", link: "/hvidevarer/vaskemaskiner" },  
{ name: "Bosch", link: "/hvidevarer/vaskemaskiner/bosch/" },
];

window.addEventListener("load", sidenVises);

function sidenVises() {
    console.log("siden vises");
    knap.addEventListener("click", toggleMenu);
}

function toggleMenu() {
    console.log("toggle menu");
    bc.forEach((item) => {
        if (item.name === "Bosch") {
            let li = document.createElement("li");
            li.textContent = item.name ;
            list.appendChild(li);
        }
        else {
            let li = document.createElement("li");
            let a = document.createElement("a");
            a.textContent = item.name;
            a.href = item.link;
            li.appendChild(a);
            list.appendChild(li);
        }
    });
}

