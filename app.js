"use strict";

window.addEventListener("load", ready);

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
}

function addCharacter(character) {
    const characterHTML = /*html*/ `
            <td>
                <span>${character.name}</span>
            </td>
            <td>
                <span>${character.nickname}</span>
            </td>
            <td>
                <span>${character.occupation}</span>
            </td>
            <td>
                <span>${character.age}</span>
            </td>
            <td>
                <span>${character.voicedBy}</span>
            </td>
            <td>
                <span>${character.gender}</span>
            </td>
            <td>
                <span>${character.religion}</span>
            </td>
            <td>
                <span>${character.catchPhrase}</span>
            </td>
            <td>
                <span>${character.hairColor}</span>
            </td>
            <td>
                <span>${character.schoolGrade}</span>
            </td>
            <td>
                <span>${character.episodes}</span>
            </td>
            <td>
                <span>${character.appearances}</span>
            </td>
            <td>
                <span>${character.firstAppearance}</span>
            </td>
            <td>
                <img src="${character.image}">
            </td>
    `
    document.querySelector("#students").insertAdjacentHTML("beforeend", characterHTML);
}