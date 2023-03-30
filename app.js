"use strict";

window.addEventListener("load", ready);

async function ready() {
    const characters = await fetchListOfCharacters("https://cederdorff.github.io/dat-js/05-data/southpark.json");
    showAllCharacters(characters);
    document.querySelectorAll("img").forEach((img) => {
        img.onerror = function() {
            this.src = "images/placeholder.png";
    }
});
}

async function fetchListOfCharacters(url) { 
    const response = await fetch(url);
    const data = await response.json();
    return data;
}

function showAllCharacters(characters) {
    characters.forEach(showCharacter)
}

function showCharacter(character) {
    document.querySelector("#characters").insertAdjacentHTML(
        "beforeend",
        /*html*/ `
            <article>
                <div>
                    <img src="${character.image}">
                    <h2>${character.name}</h2>
                    <p>${character.occupation}</p>
                </div>
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
    document.querySelector("#dialog-gender").textContent = character.gender;
    document.querySelector("#dialog-occupation").textContent = character.occupation;
    document.querySelector("#dialog-age").textContent = character.age;
    document.querySelector("#dialog-religion").textContent = character.religion;
    document.querySelector("#dialog-nickname").textContent = character.nickname;
    document.querySelector("#dialog-catch-phrase").textContent = character.catchPhrase;
    document.querySelector("#dialog-hair-color").textContent = character.hairColor;
    document.querySelector("#dialog-school-grade").textContent = character.schoolGrade;
    document.querySelector("#dialog-episodes").textContent = character.episodes;
    document.querySelector("#dialog-appearances").textContent = (character.appearances === 0) ? "undefined" : character.appearances;
    document.querySelector("#dialog-first-appearance").textContent = character.firstAppearance;
    document.querySelector("#dialog-voiced-by").textContent = `${character.name} is voiced by ${character.voicedBy}`;

    document.querySelector("#dialog-character").showModal();
}