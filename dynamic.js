const months = [ 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31 ];
function ageCalculate(){
    let today = new Date();
    let inputDate = new Date(document.getElementById("date-input").value);
    let birthMonth, birthDay, birthYear;

    let birthDetails = {
        date:inputDate.getDate(),
        month:inputDate.getMonth()+1,
        year:inputDate.getFullYear()
    }
    let currentYear = today.getFullYear();
    let currentMonth = today.getMonth()+1;
    let currentDay = today.getDate();

// leapyear checking...
    leapChecker(currentYear);
    if(
        birthDetails.year > currentYear || (birthDetails.month > currentMonth && birthDetails.year == currentYear) || (birthDetails.date > currentDay && birthDetails.month == currentMonth && birthDetails.year == currentYear)
    ){
        alert("Not Born Yet. Please Check Birthdate 🧐");
        displayResult("-", "-", "-");
        return;
    }

// Validate Input Date
    birthYear = currentYear - birthDetails.year;

    if(currentMonth >= birthDetails.month){
        birthMonth = currentMonth - birthDetails.month;
    }
    else{
        birthYear--;
        birthMonth = 12 + currentMonth - birthDetails.month;
    }

    if(currentDay >= birthDetails.date){
        birthDay = currentDay - birthDetails.date;
    }
    else{
        birthMonth--;
        let days = months[currentMonth - 2];
        birthDay = days + currentDay - birthdetails.Date;
        if(birthMonth < 0){
            birthMonth = 11;
            birthYear--;
        }
    }
// Display Age Result
    displayResult( birthDay, birthMonth, birthYear);
}

function displayResult(bDay, bMonth, bYear){
    document.getElementById("years").textContent = bYear;
    document.getElementById("months").textContent = bMonth;
    document.getElementById("days").textContent = bDay;
}

// leapyear checking...
function leapChecker(year){
    if(year % 4 == 0 || (year % 100 == 0 && year % 400 == 0)){
        months[1] = 29;
    }
    else{
        months[1] = 28;
    }
}