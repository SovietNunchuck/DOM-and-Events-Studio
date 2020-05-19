let takeoff = null;
let landing = null;
let abort = null;
let flight_status = null;
let shuttle_background = null;
let height = null;
let upArrow = null;
let downArrow = null;
let leftArrow = null;
let rightArrow = null;
let rocketImage = null;
let horizontalCounter = 0;
let verticalCounter = 250;

function init() {
    takeoff = document.getElementById("takeoff");
    landing = document.getElementById("landing");
    abort = document.getElementById("missionAbort");
    flight_status = document.getElementById("flightStatus");
    shuttle_background = document.getElementById("shuttleBackground");
    height = document.getElementById("spaceShuttleHeight");
    upArrow = document.getElementById("up");
    downArrow = document.getElementById("down");
    leftArrow = document.getElementById("left");
    rightArrow = document.getElementById("right");
    rocketImage = document.getElementById("rocket");

    takeoff.addEventListener("click", function() {
        if (flight_status.innerHTML === "Shuttle in flight.") {
            alert("The shuttle's already flying! PAY ATTENTION!");
        } else {
            let confirmation = window.confirm("Confirm that the shuttle is ready for takeoff.");
            if (confirmation) {
                flight_status.innerHTML = "Shuttle in flight.";
                shuttle_background.style.backgroundColor = "blue";
                heightIncrease();
            }
        }
    });

    landing.addEventListener("click", function() {
        alert("The shuttle is landing. Landing gear engaged.");
        flight_status.innerHTML = "The shuttle has landed.";
        returnToDefault();
    });

    abort.addEventListener("click", function() {
        let confirmation = window.confirm("Confirm that you want to abort the mission.");
        if (confirmation) {
            flight_status.innerHTML = "Mission aborted.";
            returnToDefault();
        }
    });

    rightArrow.addEventListener("click", function() {
        horizontalCounter += 10;
        rocketImage.style.left = horizontalCounter + "px";
    });

    leftArrow.addEventListener("click", function() {
        horizontalCounter -= 10;
        rocketImage.style.left = horizontalCounter + "px";
    });

    upArrow.addEventListener("click", heightIncrease);

    downArrow.addEventListener("click", heightDecrease);

}

function heightIncrease() {
    let temp = Number(height.innerHTML) + 10000;
    height.innerHTML = temp;
    verticalCounter -= 10;
    rocketImage.style.top = verticalCounter + "px";
}

function heightDecrease() {
    let temp = Number(height.innerHTML) - 10000;
    height.innerHTML = temp;
    verticalCounter += 10;
    rocketImage.style.top = verticalCounter + "px";
}

function returnToDefault() {
    shuttle_background.style.backgroundColor = "green";
    rocketImage.style.top = "250px";
    rocketImage.style.left = "0px";
    height.innerHTML = 0;
    verticalCounter = 250;
    horizontalCounter = 0;
}

window.onload = init;