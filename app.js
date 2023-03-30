"use strict";

window.addEventListener("load", ready);

async function ready() {
    const cast = await getCharacters("https://cederdorff.github.io/dat-js/05-data/southpark.json");
    getCharacter(cast);
}

async function getCharacters(url) { 
    const response = await fetch(url);
    const data = await response.json();
    return data;
}

function getCharacter(cast) {
    cast.forEach(addCharacter)
}

function addCharacter(character) {
    document.querySelector("#characters").insertAdjacentHTML(
        "beforeend",
        /*html*/ `
            <article>
                <img src="${character.image}">
                <h2>${character.name}</h2>
                <p>${character.occupation}</p>
            </article>
        `
    );
    
    document.querySelector("#characters article:last-child").addEventListener("click", characterClicked);

    function characterClicked() {
        showClickedCharacter(character);
    }
}

function showClickedCharacter(character) {
    document.querySelector("#dialog-image").src = character.image;
    document.querySelector("#dialog-name").textContent = character.name;
    document.querySelector("#dialog-name2").textContent = character.name;
    document.querySelector("#dialog-gender").textContent = character.gender;
    document.querySelector("#dialog-occupation").textContent = character.occupation;
    document.querySelector("#dialog-age").textContent = character.age;
    document.querySelector("#dialog-religion").textContent = character.religion;
    document.querySelector("#dialog-nickname").textContent = character.nickname;
    document.querySelector("#dialog-catch-phrase").textContent = character.catchPhrase;
    document.querySelector("#dialog-hair-color").textContent = character.hairColor;
    document.querySelector("#dialog-school-grade").textContent = character.schoolGrade;
    document.querySelector("#dialog-episodes").textContent = character.episodes;
    document.querySelector("#dialog-appearances").textContent = character.appearances;
    document.querySelector("#dialog-first-appearance").textContent = character.firstAppearance;
    document.querySelector("#dialog-voiced-by").textContent = character.voicedBy;

    document.querySelector("#dialog-character").showModal();
}