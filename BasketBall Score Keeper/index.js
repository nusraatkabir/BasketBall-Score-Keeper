let countHome = document.getElementById("countHome");
let countGuest = document.getElementById("countGuest");

let newCountHome = 0;
let newCountGuest = 0;

function increment1Home(){
    newCountHome = newCountHome + 1;
    countHome.textContent = newCountHome;
    
}

function increment2Home(){
    newCountHome = newCountHome + 2;
    countHome.textContent = newCountHome;
    
}

function increment3Home(){
    newCountHome = newCountHome + 3;
    countHome.textContent = newCountHome;
    
}

function increment1Guest(){
    newCountGuest = newCountGuest + 1;
    countGuest.textContent = newCountGuest;
}

function increment2Guest(){
    newCountGuest = newCountGuest + 2;
    countGuest.textContent = newCountGuest;
}
function increment3Guest(){
    newCountGuest = newCountGuest + 3;
    countGuest.textContent = newCountGuest;
}
