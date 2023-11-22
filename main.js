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
    1: "Adv Programming",
    2: "Adv Programming",
    3: "English",
    4: "Computer, S",
    5: "Physics, A",
    6: "Nepali, Tej K",
    7: "Physics, U",
    8: "Nepali"
}
tuesday = {
    1: "Basic Programming",
    2: "Basic Programming",
    3: "Chemistry, RDP",
    4: "Computer, S",
    5: "Physics Practical",
    6: "Physics Practical",
    7: "English",
    8: "Math, B"
}
wednesday = {
    1: "Chemitry, RDP",
    2: "English",
    3: "Math, R",
    4: "Computer, S",
    5: "Nepali, Tej K",
    6: "DSS Talk",
    7: "English",
    8: "Math, B"
}
thursday = {
    1: "Math, B",
    2: "Physics, A",
    3: "Chemistry, S",
    4: "Nepali",
    5: "Math, R",
    6: "Physics U",
    7: "Chemistry Practical",
    8: "Chemistry Practical"
}
friday = {
    1: "Math, B",
    2: "Chemistry, S",
    3: "Computer, S",
    4: "Chemistry, D",
    5: "English",
    6: "Physics, M",
    7: "Math, R",
    8: "Nepali"
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



function mondayShow() {
    classes.innerHTML = `${monday["1"]} <br> ${monday["2"]} <div id="break">Break</div> ${monday["3"]} <br> ${monday["4"]} <div id="break">Lunch Break</div>  ${monday["5"]} <br> ${monday["6"]} <div id="break">Break</div> ${monday["7"]} <br> ${monday["8"]} `;
    dayShow.innerHTML = "Monday";
};

function tuesdayShow() {
    classes.innerHTML = `${tuesday["1"]} <br> ${tuesday["2"]} <div id="break">Break</div> ${tuesday["3"]} <br> ${tuesday["4"]} <div id="break">Lunch Break</div> ${tuesday["5"]} <br> ${tuesday["6"]} <div id="break">Break</div> ${tuesday["7"]} <br> ${tuesday["8"]} `;
    dayShow.innerHTML = "Tuesday";
     
};

function wednesdayShow() {
    classes.innerHTML = `${wednesday["1"]} <br> ${wednesday["2"]} <div id="break">Break</div> ${wednesday["3"]} <br> ${wednesday["4"]} <div id="break">Lunch Break</div> ${wednesday["5"]} <br> ${wednesday["6"]} <div id="break">Break</div> ${wednesday["7"]} <br> ${wednesday["8"]} `;
    dayShow.innerHTML = "Wednesday";
     
};

function thursdayShow() {
    classes.innerHTML = `${thursday["1"]} <br> ${thursday["2"]} <div id="break">Break</div> ${thursday["3"]} <br> ${thursday["4"]} <div id="break">Lunch Break</div>  ${thursday["5"]} <br> ${thursday["6"]} <div id="break">Break</div> ${thursday["7"]} <br> ${thursday["8"]} `;
    dayShow.innerHTML = "Thursday";
     
};

function fridayShow() {
    classes.innerHTML = `${friday["1"]} <br> ${friday["2"]} <div id="break">Break</div> ${friday["3"]} <br> ${friday["4"]} <div id="break">Lunch Break</div>  ${friday["5"]} <br> ${friday["6"]} <div id="break">Break</div> ${friday["7"]} <br> ${friday["8"]} `;
    dayShow.innerHTML = "Friday";
     
};
function sundayShow() {
    classes.innerHTML = "No Classes today!";
    dayShow.innerHTML = "Sunday";
     
};
function saturdayShow() {
    classes.innerHTML = "No Classes today!";
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
