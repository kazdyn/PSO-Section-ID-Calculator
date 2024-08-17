//NO CAPITOLssss
const psobbClasses = [

    {number: 0, name: "RAcaseal"},
    {number: 1, name: "FOmarl"},
    {number: 2, name: "FOnewm"},
    {number: 3, name: "FOnewearl"},
    {number: 4, name: "HUcaseal"},
    {number: 5, name: "HUmar"},
    {number: 5, name: "FOmar"},
    {number: 6, name: "HUnewearl"},
    {number: 6, name: "RAmarl"},
    {number: 7, name: "HUcast"},
    {number: 8, name: "RAmar"},
    {number: 9, name: "RAcast"},
];

const sectionIds = [
    {number: 0, name: "Viridia"},
    {number: 1, name: "Greenill"},
    {number: 2, name: "Skyly"},
    {number: 3, name: "Bluefull"},
    {number: 4, name: "Purplenum"},
    {number: 5, name: "Pinkal"},
    {number: 6, name: "Redria"},
    {number: 7, name: "Oran"},
    {number: 8, name: "Yellowboze"},
    {number: 9, name: "Whitill"},
];

function calculateName(name) {
    let sum = 0

    for (let i = 0; i < name.length; i++) {

     sum += name[i].charCodeAt() % 10

    };

    return sum;

    };

//Make shit go with the DOM
let input = document.querySelector(".characterName"); //Character Name Box

let dropDown = document.querySelector("select"); //Dropdown List of Classes

let button = document.querySelector(".calculateNameButton"); //Calulate Button

let sectionIdVisibility = document.querySelector(".sectionId"); // Section id <p> for visibility

let sectionIdText = document.querySelector(".sectionId");

let sectionIdColor = document.querySelector(".sectionId");

let dropDownOptions = document.querySelector(".dropDown");

let versionCheckBox = document.querySelector(".versionButton");

let sectionId = null;

// Checks if the checkbox is marked or not and turns on and off the dropdown list
versionCheckBox.addEventListener("input", (event) => {
    if (versionCheckBox.checked === true) {
        //if the checkbox is TRUE - turn the table on (remove disabled)
        console.log("Checkbox: Should be True", versionCheckBox.checked)
        console.log("Select: Should be True", dropDown.disabled)
        dropDown.removeAttribute("disabled");
        
    } else {
        //if the checkbox is not TRUE - turn the table off (add disabled)
        console.log("Checkbox: Should be False", versionCheckBox.checked)
        console.log("Select: Should be False", dropDown.disabled)
        dropDown.setAttribute("disabled", "");

    };

});

//doesn't work because not "event"

// versionCheckBox.addEventListener("input", (event) => {
//     if (event.checked === true) {
//         //if the checkbox is TRUE - turn the table on (remove disabled)
//         console.log("Checkbox: Should be True", versionCheckBox.checked)
//         console.log("Select: Should be True", dropDown.disabled)
//         dropDown.removeAttribute("disabled");
        
//     } else {
//         //if the checkbox is not TRUE - turn the table off (add disabled)
//         console.log("Checkbox: Should be False", versionCheckBox.checked)
//         console.log("Select: Should be False", dropDown.disabled)
//         dropDown.setAttribute("disabled", "");

//     };

// });

//Checks if there is a string in the Input box or not and turns button on and off
input.addEventListener("input", (event) => {
//  event.target

// console.log("it's running")

    if (event.target.value !== "") {
        //string is not blank then enable the button
        button.removeAttribute("disabled");
    } else { 
        //if string is blank then disable the button
        button.setAttribute("disabled", "");
    };

});

button.addEventListener("click", ()  => {

    let inputNameNumber = null;
    
    if (input.value !== "" && typeof input.value === "string") {
        inputNameNumber = calculateName(input.value.substr(0,12));
    };


    console.log("inputNameNumber", inputNameNumber);

    let dropDownClass = dropDown.value;

    let findClass = psobbClasses.find(function (element) { 
    
        return element.name === dropDownClass
    
    });


    // let findClassNumber = findClass?.number ;
let findClassNumber = findClass !== undefined ? findClass.number : 0; //This is probably a bad idea, huh?

if (versionCheckBox.checked !== true) {
    findClassNumber = 0;
}

let sectionIdNumber = (inputNameNumber + findClassNumber) % 10;

sectionId = sectionIds.find((element) => element.number === sectionIdNumber).name;

if (sectionId != null && inputNameNumber !== null) {

    sectionIdText.innerHTML = sectionId.toString();
    sectionIdVisibility.style.visibility = "visible"
    sectionIdColor.setAttribute("id", sectionId.toString());

    } else if (sectionIdVisibility.style.visibility = "visible") {
        sectionIdVisibility.style.visibility = "hidden"
    };


    // if (sectionId != null) {
    //     for (let i = 0; i < 10; i++) {
    //         sectionIdList[i].find((element) => element.value === sectionId).value;
    //     }
    //     return sectionIdList
    // }

    

    console.log("Character Name in Event Listener", input.value);
    
    console.log("Character Number in Event Listener", inputNameNumber);

    console.log("Character Class in Event Listener", dropDownClass);

    console.log("Character Class Number in Event Listener", findClassNumber);

    console.log("Section ID Number in Event Listener", sectionIdNumber);

    console.log("Section ID in Event Listener", sectionId);

});

