let year = new Date().getUTCFullYear();
let tmonth = new Date().getMonth(); // change
let date = new Date().getDate();
let tday = new Date().getUTCDay(); // change
const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"];
const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];


function toMonth(req){
    return months[req];
}

function toDay(req){
    return days[req];
}

let dayShow = document.getElementById("day");
dayShow.innerHTML = toDay(tday);

let fullDate = `${year} ${toMonth(tmonth)} ${date}, ${toDay(tday)}`
document.getElementById("dayRight").innerHTML = fullDate

// YALA

monday = {
    1: "Nepali",
    2: "Chemistry, D",
    3: "English",
    4: "Computer, S",
    5: "Physics, A",
    6: "Physics, U"
}
tuesday = {
    1: "English",
    2: "Math, R",
    3: "Chemistry, RDP",
    4: "Math, B",
    5: "Physics, M",
    6: "Physics Mz"
}
wednesday = {
    1: "Chemitry, RDP",
    2: "English",
    3: "Math, R",
    4: "Computer, S",
    5: "Math, B",
    6: "Nepali, T"
}
thursday = {
    1: "Math, B",
    2: "Physics, A",
    3: "Chemistry, S",
    4: "Nepali",
    5: "Physics U",
    6: "Math, R"
}
friday = {
    1: "Math, B",
    2: "Chemistry, S",
    3: "Computer, S",
    4: "Chemistry, D",
    5: "Physics, Mz",
    6: "Physics, M"
}

let td = new Date().getDay();
classes = document.getElementById("routine");

function tomorrow(){
    if(td == 1){
        tuesdayShow()
    }
    if(td == 2){
        wednesdayShow()
    }
    if(td == 3){
        thursdayShow()
    }
    if(td == 4){
        fridayShow()
    }
    if(td == 5){
        saturdayShow()
    }
    if(td == 0){
        mondayShow()
    }
}


function show(_data) {
    classes.innerHTML = `
    <div id="container">
        <div class='each'>${_data["1"]}</div>
        <div class='each'>${_data["2"]}</div>
        <div class="break">Break</div>
        <div class='each'>${_data["3"]}</div>
        <div class='each'>${_data["4"]}</div>
        <div class="break">Lunch Break</div>
        <div class='each'>${_data["5"]}</div>
        <div class='each'>${_data["6"]}</div>
    </div>    
    `
}


function mondayShow() {
    show(monday);
    dayShow.innerHTML = "Monday";
};

function tuesdayShow() {
    show(tuesday);
    dayShow.innerHTML = "Tuesday";
    
};

function wednesdayShow() {
    show(wednesday);
    dayShow.innerHTML = "Wednesday";
    
};

function thursdayShow() {
    show(thursday);
    dayShow.innerHTML = "Thursday";
    
};

function fridayShow() {
    show(friday);
    dayShow.innerHTML = "Friday";
     
};
function sundayShow() {
    classes.innerHTML = "No Classes on Sunday!";
    dayShow.innerHTML = "Sunday";
     
};
function saturdayShow() {
    classes.innerHTML = "No Classes Saturday!";
    dayShow.innerHTML = "Saturday";
     
};


if (td == 1) {
    mondayShow()
}
if (td == 2) {
    tuesdayShow()
}
if (td == 3) {
    wednesdayShow()
}
if (td == 4) {
    thursdayShow()
}
if (td == 5) {
    fridayShow()
}
if(td == 6){
    saturdayShow()
}
if(td == 0){
    sundayShow()
}
