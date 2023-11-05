function init () {
    const missionAbort = document.getElementById("abortMission");
    const button = document.getElementById("liftoffButton");
    const paragraph = document.getElementById("statusReport");

    // Put your code for the exercises here.
    // const abortMission = document.getElementById("abortMission");
    button.addEventListener('click', event => {
        paragraph.innerHTML = 'Houston! We have liftoff!';
     });
        missionAbort.addEventListener("mouseover", function () {
        abortMission.style.backgroundColor = "red";
     });
     missionAbort.addEventListener("mouseout", function() {
        missionAbort.style.backgroundColor = "";
     });
     missionAbort.addEventListener("click",function(){
        let response = window.confirm("Are you sure you want to abort the mission?");
     if (response === true){
        window.alert("Mission aborted! Space shuttle returning home");
     };
     });
}

window.addEventListener("load", init);
