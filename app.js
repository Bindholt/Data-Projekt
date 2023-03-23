"use strict";

window.addEventListener("load", readyPotter);

function ready() {
    //fetchData()
    //displayList(array) -> loop thru data, displayObject for each -> add eventlistener (click) på objekter -> showDialog()
    //displayObject(object)
    //showDialog(id)
    //closeDialog()
    const cartman = {
        name: "Eric Cartman",
        nickname: "The Coon",
        image: "https://upload.wikimedia.org/wikipedia/en/7/77/EricCartman.png",
        occupation: "Student",
        age: 10,
        voicedBy: "Trey Parker",
        gender: "Male",
        religion: "Roman Catholic", 
        catchPhrase: "Screw you guys, I'm going home!",
        hairColor: "Brown",
        schoolGrade: 4,
        episodes: null,
        appearances: undefined,
        firstAppearance: "S01E01",
    };
    addCharacter(cartman);
    addCharacter(cartman);
    addCharacter(cartman);
    addCharacter(cartman);
    addCharacter(cartman);
    addCharacter(cartman);
    addCharacter(cartman);
    addCharacter(cartman);
    addCharacter(cartman);
    addCharacter(cartman);
    addCharacter(cartman);
    addCharacter(cartman);
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







/*------------------ POTTER -------------------------------*/

async function readyPotter() {
    const harry = await getCharacter("cartman.json");

    console.log(harry);
    addCharacter(harry);

}

async function getCharacter(url) { 
    const response = await fetch(url);
    const data = await response.json();
    return data;
}

{
    
}