let calculateUl= document.getElementById("calculate-ul")
let createBtn = document.getElementById("create-btn")
let submitBtn = document.getElementById("submit-btn")
let header3El = document.getElementById("header3-El")
let storeGrade = 0
let storeUnit = 0
let credit = []


createBtn.addEventListener("click", function(){
    let amountOfCoursesElement = parseInt(document.getElementById("amountOfCourses-El").value)

    if(!amountOfCoursesElement){
        alert("Amount field cannot be null")
        return false
    }

    if(amountOfCoursesElement <= 0){
        alert("Amount field must be more than 0")
        return false
    }

    let list = ""
    for(let i = 0; i < amountOfCoursesElement; i++){
        list += `<li>
        <input type="text" placeholder="Grade" id="grade-textbox-${i}" class="calculate">
        <input type="number" placeholder="Unit" id="unit-textbox-${i}" class="calculate">
    </li>`
    }
    calculateUl.innerHTML = list
    submitBtn.style.display = "block"

    submitBtn.addEventListener("click", submitButton)
})

function validation(){
    let grades = ["A", "B", "C", "D", "E", "F", "a", "b", "c", "d", "e", "f"]
    let containsNonText = grades.some(item => typeof item !== 'string');
    let amountOfCoursesElement = parseInt(document.getElementById("amountOfCourses-El").value)

    if(containsNonText){
        alert("Field does not accept numbers")
        return false
    }

    for(let i = 0; i < amountOfCoursesElement; i++){
        if(!document.getElementById(`grade-textbox-${i}`).value){
            alert("Grade field cannot be null")
            return false
        }
    
        if(!grades.includes(document.getElementById(`grade-textbox-${i}`).value)){
            alert("Field can only accept letters from A to F")
            return false
        }

        if(!document.getElementById(`unit-textbox-${i}`).value){
            alert("Unit field cannot be null")
            return false
        }

        if(document.getElementById(`unit-textbox-${i}`).value <= 0){
            alert("Unit field cannot be less than 0 or 0")
            return false
        }
        return true
    }
}

function valueOfGrade(){
    let amountOfCoursesElement = parseInt(document.getElementById("amountOfCourses-El").value)

    for(let i = 0; i < amountOfCoursesElement; i++){
        if(document.getElementById(`grade-textbox-${i}`).value === "A" || document.getElementById(`grade-textbox-${i}`).value === "a"){
            storeGrade = 5
            credit.push(storeGrade) 
        }
        if(document.getElementById(`grade-textbox-${i}`).value === "B" || document.getElementById(`grade-textbox-${i}`).value === "b"){
            storeGrade = 4
            credit.push(storeGrade) 
        }
        if(document.getElementById(`grade-textbox-${i}`).value === "C" || document.getElementById(`grade-textbox-${i}`).value === "c"){
            storeGrade = 3
            credit.push(storeGrade) 
        }
        if(document.getElementById(`grade-textbox-${i}`).value === "D" || document.getElementById(`grade-textbox-${i}`).value === "d"){
            storeGrade = 2
            credit.push(storeGrade) 
        }
        if(document.getElementById(`grade-textbox-${i}`).value === "E" || document.getElementById(`grade-textbox-${i}`).value === "e"){
            storeGrade = 1
            credit.push(storeGrade) 
        }
        if(document.getElementById(`grade-textbox-${i}`).value === "F" || document.getElementById(`grade-textbox-${i}`).value === "f"){
            storeGrade = 0
            credit.push(storeGrade) 
        }
    }
}

function AddUnits(){
    let amountOfCoursesElement = parseInt(document.getElementById("amountOfCourses-El").value)
    let sumOfUnits = 0
    let unit = []

    for(let i = 0; i < amountOfCoursesElement; i++){
        storeUnit = parseInt(document.getElementById(`unit-textbox-${i}`).value)
        unit.push(storeUnit)
        sumOfUnits += unit[i]
    }

    return sumOfUnits;
}


function submitButton(){
    if(!validation()){
        header3El.innerHTML = ` `
        return
    }
    valueOfGrade()
    let amountOfCoursesElement = parseInt(document.getElementById("amountOfCourses-El").value)
    let sumOfUnits = AddUnits();
    let sumOfValues = 0
    let storeValues = 0

    for(let i = 0; i < amountOfCoursesElement; i++){
        storeValues = parseInt(document.getElementById(`unit-textbox-${i}`).value) * credit[i]
        sumOfValues += storeValues
    }

    let GPA = sumOfValues/sumOfUnits

    if(!GPA){
        header3El.innerHTML = ` `
        return
    }
    else{
        header3El.innerHTML = `Your GPA is: ${GPA.toFixed(2)}`
    }
}

submitBtn.addEventListener("click", submitButton)


/*
CHATGBT CORRECTED VERSION 

// Attach event listener to calculateUl (parent element)
calculateUl.addEventListener("click", function(event) {
    if (event.target.classList.contains("calculate")) {
        submitButton();
    }
});

createBtn.addEventListener("click", function(){
    let amountOfCoursesElement = parseInt(document.getElementById("amountOfCourses-El").value)
    let list = ""
    for(let i = 0; i < amountOfCoursesElement; i++){
        list += `<li>
        <input type="text" placeholder="Grade" id="grade-textbox-${i}" class="calculate">
        <input type="number" placeholder="Unit" id="unit-textbox-${i}" class="calculate">
    </li>`
    }
    calculateUl.innerHTML = list
    submitBtn.style.display = "block"
})

function validation(){
    let grades = ["A", "B", "C", "D", "E", "F", "a", "b", "c", "d", "e", "f"]
    let containsNonText = grades.some(item => typeof item !== 'string');
    let amountOfCoursesElement = parseInt(document.getElementById("amountOfCourses-El").value)

    if(containsNonText){
        alert("Field does not accept numbers")
        return
    }

    for(let i = 0; i < amountOfCoursesElement; i++){
        if(!document.getElementById(`grade-textbox-${i}`).value){
            alert("Grade field cannot be null")
            return
        }
    
        if(!grades.includes(document.getElementById(`grade-textbox-${i}`).value)){
            alert("Field can only accept letters from A to F")
            return
        }

        if(!document.getElementById(`unit-textbox-${i}`).value){
            alert("Unit field cannot be null")
            return
        }
    }
}

function valueOfGrade(){
    let amountOfCoursesElement = parseInt(document.getElementById("amountOfCourses-El").value)

    for(let i = 0; i < amountOfCoursesElement; i++){
        if(document.getElementById(`grade-textbox-${i}`).value === "A" || document.getElementById(`grade-textbox-${i}`).value === "a"){
            storeGrade = 5
            credit.push(storeGrade) 
        }
        if(document.getElementById(`grade-textbox-${i}`).value === "B" || document.getElementById(`grade-textbox-${i}`).value === "b"){
            storeGrade = 4
            credit.push(storeGrade) 
        }
        if(document.getElementById(`grade-textbox-${i}`).value === "C" || document.getElementById(`grade-textbox-${i}`).value === "c"){
            storeGrade = 3
            credit.push(storeGrade) 
        }
        if(document.getElementById(`grade-textbox-${i}`).value === "D" || document.getElementById(`grade-textbox-${i}`).value === "d"){
            storeGrade = 2
            credit.push(storeGrade) 
        }
        if(document.getElementById(`grade-textbox-${i}`).value === "E" || document.getElementById(`grade-textbox-${i}`).value === "e"){
            storeGrade = 1
            credit.push(storeGrade) 
        }
        if(document.getElementById(`grade-textbox-${i}`).value === "F" || document.getElementById(`grade-textbox-${i}`).value === "f"){
            storeGrade = 0
            credit.push(storeGrade) 
        }
    }
}

function AddUnits(){
    let amountOfCoursesElement = parseInt(document.getElementById("amountOfCourses-El").value)
    let sumOfUnits = 0
    let unit = []

    for(let i = 0; i < amountOfCoursesElement; i++){
        storeUnit = parseInt(document.getElementById(`unit-textbox-${i}`).value)
        unit.push(storeUnit)
        sumOfUnits += unit[i]
    }

    return sumOfUnits;
}

function submitButton(){
    validation()
    valueOfGrade()
    let amountOfCoursesElement = parseInt(document.getElementById("amountOfCourses-El").value)
    let sumOfUnits = AddUnits();
    let sumOfValues = 0
    let storeValues = 0

    for(let i = 0; i < amountOfCoursesElement; i++){
        storeValues = parseInt(document.getElementById(`unit-textbox-${i}`).value) * credit[i]
        sumOfValues += storeValues
    }

    let GPA = sumOfValues/sumOfUnits

    header3El.innerHTML = `Your GPA is: ${GPA.toFixed(2)}`
}

*/