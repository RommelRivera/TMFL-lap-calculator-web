// Generic display settings changer for elements
function contentDisplay(element, display) {
    tabelement = document.getElementsByClassName(element);
    for (i = 0; i < tabelement.length; i++) {
        tabelement[i].style.display = display; // Changes the display setting of all elements with the same name
    }
}

// Basic function for displaying the content of the tabs
function openPage(pageName) {
    contentDisplay("tabcontent", "none"); // Hides the page contents

    // Show the specific tab content
    document.getElementById(pageName).style.display = "block";
}

// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();

// Track data
var laps = 0;
var currentRace = "";
var prologue = [1,0.1,0.1,0.1,1,0.1,0.1,0.1,1,0.1,0.1,0.1,1,0.1,0.1,0.1];
var race1 = [1,0.1,0.1,0.1,1,0.1,0.1,0.1,1,0.1,0.1,0.1,1,0.1,0.1,0.1];
var race2 = [1,0.1,0.1,0.1,1,0.1,0.1,0.1,1,0.1,0.1,0.1,1,0.1,0.1,0.1];
var race3 = [1,0.1,0.1,0.1,1,0.1,0.1,0.1,1,0.1,0.1,0.1,1,0.1,0.1,0.1];
var race4 = [1,0.1,0.1,0.1,1,0.1,0.1,0.1,1,0.1,0.1,0.1,1,0.1,0.1,0.1];
var race5 = [1,0.1,0.1,0.1,1,0.1,0.1,0.1,1,0.1,0.1,0.1,1,0.1,0.1,0.1];
var race6 = [1,0.1,0.1,0.1,1,0.1,0.1,0.1,1,0.1,0.1,0.1,1,0.1,0.1,0.1];
var race7 = [1,0.1,0.1,0.1,1,0.1,0.1,0.1,1,0.1,0.1,0.1,1,0.1,0.1,0.1];
var race8 = [1,0.1,0.1,0.1,1,0.1,0.1,0.1,1,0.1,0.1,0.1,1,0.1,0.1,0.1];
var race9 = [1,0.1,0.1,0.1,1,0.1,0.1,0.1,1,0.1,0.1,0.1,1,0.1,0.1,0.1];
var race10 = [1,0.1,0.1,0.1,1,0.1,0.1,0.1,1,0.1,0.1,0.1,1,0.1,0.1,0.1];
var trackarray = [prologue,race1,race2,race3,race4,race5,race6,race7,race8,race9,race10];
var track = 0;

// Set the number of laps of selected track in header
function setLaps(value) {
    laps = value;
    document.getElementById("Data").children['laps'].innerHTML = laps;
}

// Makes sure tyre input is always an integer
function intCheck(val) {
    var input = document.getElementById(val).children[1].children[0];

    if(!Number.isInteger(input.value)) {
        input.focus();
        input.value = "";
        
        switch(val){
            case "dryslow1":
                input.value = trackarray[track][0];
                break;
            case "dryfast1":
                input.value = trackarray[track][4];
                break;
            case "rainslow1":
                input.value = trackarray[track][8];
                break;
            case "rainfast1":
                input.value = trackarray[track][12];
                break;
        }
    }

    if(input.value < 1) {
        input.focus();
        input.value = "";
        input.value = 1;
    }

    if(input.value > 100) {
        input.focus();
        input.value = "";
        input.value = 100;
    }
}

// Makes sure all float inputs are within range
function floatCheck(val, index) {
    var input = document.getElementById(val).children[index].children[0];

    if(input.value < 0.1) {
        input.focus();
        input.value = "";
        input.value = 0.1;
    }

    if(input.value > 100.0) {
        input.focus();
        input.value = "";
        input.value = 100.0;
    }
}

// Sets the current active track for setting the data
function setRace(race) {
    currentRace = race

    switch(race) {
        case "prologue":
            track = 0;
            break;
        case "race1":
            track = 1;
            break;
        case "race2":
            track = 2;
            break;
        case "race3":
            track = 3;
            break;
        case "race4":
            track = 4;
            break;
        case "race5":
            track = 5;
            break;
        case "race6":
            track = 6;
            break;
        case "race7":
            track = 7;
            break;
        case "race8":
            track = 8;
            break;
        case "race9":
            track = 9;
            break;
        case "race10":
            track = 10;
            break;
    }
}

// Just so I don't repeat code all the time
function counterHelper(index) {
    tyrecounter = parseInt(trackarray[track][index]);
    fuelcounter = parseFloat(trackarray[track][index + 1]);
    timecounter = parseFloat(trackarray[track][index + 2]); 
    boxcounter = parseFloat(trackarray[track][index + 3]); 

    return [tyrecounter, fuelcounter, timecounter, boxcounter];
}

// Taking this function out bc it's long and it bothers me
function stintDataUpdater() {
    var stints = document.getElementById("Stintdesigner").getElementsByClassName("table");
    var stintlaps;
    var rawtext;
    var tyrecounter = 0;
    var fuelcounter = 0.0;
    var timecounter = 0.0;
    var boxcounter = 0.0; // Might get rid of this
    var helper;

    for(i = 0; i < stints.length; i++) {
        stintlaps = stints[i].children[1].children[2].children;
        
        if(stintlaps.length > 0) {
            for(j = 0; j < stintlaps.length; j++) {
                rawtext = stintlaps[j].className;
                rawtext = rawtext.split(',');

                switch(rawtext[0]) {
                    case "ds":
                        stintlaps[j].className = "ds," + trackarray[track][0] + "," + trackarray[track][1] + "," + trackarray[track][2] + "," + trackarray[track][3];
                        helper = counterHelper(0);
                        break;
                    case "df":
                        stintlaps[j].className = "df," + trackarray[track][4] + "," + trackarray[track][5] + "," + trackarray[track][6] + "," + trackarray[track][7];
                        helper = counterHelper(4);
                        break;
                    case "rs":
                        stintlaps[j].className = "rs," + trackarray[track][8] + "," + trackarray[track][9] + "," + trackarray[track][10] + "," + trackarray[track][11];
                        helper = counterHelper(8);
                        break;
                    case "rf":
                        stintlaps[j].className = "ds," + trackarray[track][12] + "," + trackarray[track][13] + "," + trackarray[track][14] + "," + trackarray[track][15];
                        helper = counterHelper(12);
                        break;
                }

                tyrecounter += helper[0];
                fuelcounter += helper[1];
                timecounter += helper[2];
                boxcounter += helper[3];
            }
            var result = stintlaps[0].parentNode.parentNode.children[3].getElementsByClassName("result");
            result[0].innerHTML = 100 - tyrecounter + "%";
            result[1].innerHTML = 100.0 - fuelcounter + " L";
            result[2].innerHTML = Math.floor(timecounter / 60) + "m, " + Math.round((timecounter % 60) * 100) / 100 + "s";
        }
    }
}

// Lord help me with this function
function idfk(name, laps, timem, times) {
    stints = document.getElementById("Stintdesigner").getElementsByClassName("table");

    for(counter = 0; counter < stints.length; counter++) {
        if(stints[counter].children[0].children[0].children[0].children[0].value == name) {
            laps += parseInt(stints[counter].children[1].children[2].getAttribute("name"));
            stintfuel = parseFloat(stints[counter].getElementsByClassName("result")[1].innerHTML);
            stinttime = stints[counter].getElementsByClassName("result")[2].innerHTML.split(',');
            stinttimem += parseInt(stinttime[0].substring(0,stinttime[0].length - 1));
            stinttimes += parseFloat(stinttime[1].substring(1,stinttime[1].length - 1));
            
            stinttime = times + Math.floor((100.0 - stintfuel) / 4);
            
            if(stinttime >= 60) {
                stinttimem += Math.floor(stinttime / 60);
                stinttimes = Math.round((stinttime % 60) * 100) / 100;
            } else {
                stinttimes += Math.floor((100.0 - stintfuel) / 4);
            }
        }
    }

    return [laps, timem, times];
}

// Making another updater cause i want to
function raceplanDataUpdater() {
    var raceplans = document.getElementById("Raceplans").getElementsByClassName("table");
    var planstints;
    var stints;
    var name;
    var stintlaps = parseInt(document.getElementById("Raceplans").getElementsByClassName("stints")[0].getAttribute("name"));
    var stintfuel = 0;
    var stinttime = document.getElementById("Raceplans").getElementsByClassName("result")[0].innerHTML.split(',');
    var stinttimem;
    var stinttimes;
    var results;

    if(stinttime.length == 1) {
        stinttimem = 0;
        stinttimes = 0;
    } else {
        stinttimem = parseInt(stinttime[0].substring(0,stinttime[0].length - 1));
        stinttimes = parseFloat(stinttime[1].substring(1,stinttime[1].length - 1)); 
    }

    for(i = 0; i < raceplans.length; i++) {
        planstints = raceplans[i].children[1].children[0].children;

        if(planstints.length == 0) {
            return;
        }

        for(j = 0; j < planstints.length; j++) {
            name = planstints[j].innerHTML;
            results = idfk(name,stintlaps,stinttimem,stinttimes);
            stintlaps = results[0];
            stinttimem = results[1];
            stinttimes = results[2];
        }

        document.getElementById("Raceplans").getElementsByClassName("stints")[0].setAttribute("name", stintlaps);
        stintfuel = Math.round((laps - stintlaps) * trackarray[track][5] * 100) / 100;
        
        if(stintfuel > 0.0 && stintfuel < 100.0) {
            raceplans[i].getElementsByClassName("result")[1].innerHTML = parseFloat(stintfuel) + " L";
            stinttime = Math.round((laps - stintlaps) * trackarray[track][6] * 100) / 100;
            stinttimem += Math.floor(stinttime / 60);console.log(stinttimes);
            stinttimes += Math.round((stinttime % 60) * 100) / 100;
            console.log(stinttimes);
        }

        raceplans[i].getElementsByClassName("result")[0].innerHTML = stinttimem + "m, " + stinttimes + "s";

        updateDropdown(raceplans[i].children[0].children[0].children[1].children[0]);
    }
}

// Sets the values for every input box, based on the current active track
function setLapValues() {
    trackarray[track][0] = Math.floor(document.getElementById("dryslow1").children[1].children[0].value);
    trackarray[track][1] = document.getElementById("dryslow1").children[3].children[0].value;
    trackarray[track][2] = document.getElementById("dryslow2").children[1].children[0].value;
    trackarray[track][3] = document.getElementById("dryslow2").children[3].children[0].value;
    trackarray[track][4] = document.getElementById("dryfast1").children[1].children[0].value;
    trackarray[track][5] = document.getElementById("dryfast1").children[3].children[0].value;
    trackarray[track][6] = document.getElementById("dryfast2").children[1].children[0].value;
    trackarray[track][7] = document.getElementById("dryfast2").children[3].children[0].value;
    trackarray[track][8] = document.getElementById("rainslow1").children[1].children[0].value;
    trackarray[track][9] = document.getElementById("rainslow1").children[3].children[0].value;
    trackarray[track][10] = document.getElementById("rainslow2").children[1].children[0].value;
    trackarray[track][11] = document.getElementById("rainslow2").children[3].children[0].value;
    trackarray[track][12] = document.getElementById("rainfast1").children[1].children[0].value;
    trackarray[track][13] = document.getElementById("rainfast1").children[3].children[0].value;
    trackarray[track][14] = document.getElementById("rainfast2").children[1].children[0].value;
    trackarray[track][15] = document.getElementById("rainfast2").children[3].children[0].value;

    stintDataUpdater();
    raceplanDataUpdater();
}

// Populates dropdown with all available stints, still need to validate stints
function populateDropdown(menu) {
    while(menu.firstChild) {
        menu.removeChild(menu.firstChild);
    }

    var stints = document.getElementById("Stintdesigner").getElementsByClassName("table");
    var maxlaps = laps - parseInt(document.getElementById("Raceplans").getElementsByClassName("stints")[0].getAttribute("name"));
    var stintlaps;
    var name;

    for(i = 0; i < stints.length; i++) {
        name = stints[i].children[0].children[0].children[0].children[0].value;
        stintlaps = parseInt(stints[i].children[1].children[2].getAttribute("name"));
        if(stintlaps <= maxlaps) {
            menu.insertAdjacentHTML("beforeend", "<option value='" + name + "'>" + name + "</option>");
        }
    }
}

// This removes a stint from the already populated dropdown if its lap amount exceeds whats allowed
function updateDropdown(menu) {
    var stints = document.getElementById("Stintdesigner").getElementsByClassName("table");
    var maxlaps = laps - parseInt(document.getElementById("Raceplans").getElementsByClassName("stints")[0].getAttribute("name"));
    var stintlaps;
    var name;

    for(i = 0; i < menu.children.length; i++){ 
        for(j = 0; j < stints.length; j++) {
            name = stints[j].children[0].children[0].children[0].children[0].value;
            stintlaps = parseInt(stints[j].children[1].children[2].getAttribute("name"));
            if(stintlaps > maxlaps && name == menu.children[i].value) {
                menu.removeChild(menu.children[i]);
            }
        }
    } 
}

// Maybe theres a better way to include the HTML code, but I'll leave this shit as is until I'm sure I won't change anything to avoid stupid
// refactoring every time I change something

// Neither of these functions do anything fancy, they just paste in a new element

// Have to add a delete button as well as a way for the raceplans to figure out the amount of laps in the stints within them DONE, to determine whether
// or not another stint will be allowed to be added, as well as which stints, based on their lap count. Also have to figure out how to make the dropdown
// menu work, which I suspect will be absolute ass.
function addRacePlan() {
    var raceplans = document.getElementById("Raceplans").getElementsByClassName("table").length + 1;
    document.getElementById("raceanchor").insertAdjacentHTML("beforebegin","<br><table border='2' class='table'><thead><th colspan='10'><input type='text' value='Race plan "
    + raceplans + "' style='float: left;' class='designer'></th></thead><tbody><tr><td><select class='designer'></select><button onclick='addStint()' class='designer'>Add stint</button>"
    + "</td></tr><tr><td colspan='5'>Estimated race time (min, s):&nbsp;<p style='display: inline-block;'>test</p></td><td colspan='5'>Estimated fuel required for final stretch:&nbsp;"
    + "<p style='display: inline-block;'>test</p></td></tr></tbody></table><br>");
}

// Iterates through all the stints in the raceplan, and tallies up the amount of laps, the total time required to complete the race (including all pitstops), and the amount of fuel required for the final stretch of the race
function addStint(element) {
    var name = element.parentNode.parentNode.children[0].children[0].children[1].children[0].value;
    var stintlaps = parseInt(document.getElementById("Raceplans").getElementsByClassName("stints")[0].getAttribute("name"));
    var stintfuel = 0;
    var stinttime;// = document.getElementById("Raceplans").getElementsByClassName("result")[0].innerHTML.split(',');
    var stinttimem=0;
    var stinttimes=0;
    var results;
    var godhelpme = document.getElementById("Raceplans").getElementsByClassName("stints");
    // gotta fixc this idk
    for(i = 0; i < godhelpme.length; i++) {
        stints = document.getElementById("Stintdesigner").getElementsByClassName("table");

        for(j = 0; j < stints.length; j++) {
            stintlaps += parseInt(stints[j].children[1].children[2].getAttribute("name"));
            stintfuel = parseFloat(stints[j].getElementsByClassName("result")[1].innerHTML);
            stinttime = stints[j].getElementsByClassName("result")[2].innerHTML.split(',');
            stinttimem += parseInt(stinttime[0].substring(0,stinttime[0].length - 1));
            stinttimes += parseFloat(stinttime[1].substring(1,stinttime[1].length - 1));
            
            stinttime = stinttimes + Math.floor((100.0 - stintfuel) / 4);
            
            if(stinttime >= 60) {
                stinttimem += Math.floor(stinttime / 60);
                stinttimes = Math.round((stinttime % 60) * 100) / 100;
            } else {
                stinttimes += Math.floor((100.0 - stintfuel) / 4);
            }
            console.log(stinttimes);
        }
    }

    element.insertAdjacentHTML("beforeend", "<td>" + name + "</td>");
    element.parentNode.getElementsByClassName("result")[0].innerHTML = stinttimem + "m, " + stinttimes + "s";

    /*if(stinttime.length == 1) {
        stinttimem = 0;
        stinttimes = 0;
    } else {
        stinttimem = parseInt(stinttime[0].substring(0,stinttime[0].length - 1));
        stinttimes = parseFloat(stinttime[1].substring(1,stinttime[1].length - 1)); console.log(stinttimes);
    }

    if(name != "") {
        stints = document.getElementById("Stintdesigner").getElementsByClassName("table");

        for(i = 0; i < stints.length; i++) {
            if(stints[i].children[0].children[0].children[0].children[0].value == name) {
                stintlaps += parseInt(stints[i].children[1].children[2].getAttribute("name"));
                stintfuel = parseFloat(stints[i].getElementsByClassName("result")[1].innerHTML);
                stinttime = stints[i].getElementsByClassName("result")[2].innerHTML.split(',');
                stinttimem += parseInt(stinttime[0].substring(0,stinttime[0].length - 1));
                stinttimes += parseFloat(stinttime[1].substring(1,stinttime[1].length - 1));
                
                stinttime = stinttimes + Math.floor((100.0 - stintfuel) / 4);
                
                if(stinttime >= 60) {
                    stinttimem += Math.floor(stinttime / 60);
                    stinttimes = Math.round((stinttime % 60) * 100) / 100;
                } else {
                    stinttimes += Math.floor((100.0 - stintfuel) / 4);
                }
            }
        }
        
        document.getElementById("Raceplans").getElementsByClassName("stints")[0].setAttribute("name", stintlaps);
        stintfuel = Math.round((laps - stintlaps) * trackarray[track][5] * 100) / 100;
        
        if(stintfuel > 0.0 && stintfuel < 100.0) {
            element.parentNode.getElementsByClassName("result")[1].innerHTML = parseFloat(stintfuel) + " L";
            stinttime = Math.round((laps - stintlaps) * trackarray[track][6] * 100) / 100;
            stinttimem += Math.floor(stinttime / 60);
            stinttimes += Math.round((stinttime % 60) * 100) / 100;
        }

        element.insertAdjacentHTML("beforeend", "<td>" + name + "</td>");
        element.parentNode.getElementsByClassName("result")[0].innerHTML = stinttimem + "m, " + stinttimes + "s";

        //raceplanDataUpdater();
        updateDropdown(element.parentNode.parentNode.children[0].children[0].children[1].children[0]);
    }*/
}

// Don't know why I'm counting the amount of stints created but I won't delete it just yet in case I use it
function addStintDesigner() {
    var stintdesigners = document.getElementById("Stintdesigner").getElementsByClassName("table").length + 1;
    document.getElementById("stintanchor").insertAdjacentHTML("beforebegin","<br><table border='2' class='table'><thead><th colspan='10'><input type='text' value='Stint " 
    + stintdesigners + "' style='float: left;' class='designer'><button class='designer' id='stintdelete' disabled style='float: right;'>Delete stint</button></th></thead><tbody><tr>"
    + "<th colspan='2'>No Rain</th><th colspan='2'>Rain</th></tr><tr><td><button onclick='addLap(false, false, this.parentNode.parentNode.parentNode.children[2])' class='designer'>Add slow lap</button></td><td><button class='designer'>"
    + "Add fast lap</button></td><td><button class='designer'>Add slow lap</button></td><td><button class='designer'>Add fast lap</button></td></tr><tr></tr><tr><td>"
    + "Estimated remaining tyres (%):&nbsp;<p style='display: inline-block;'>test</p></td><td>Estimated remaining fuel (L):&nbsp;<p style='display: inline-block;'>test</p></td></tr></tbody></table><br>");
    document.getElementById("stintanchor").setAttribute("name", stintdesigners);
}

// Disables buttons if laps exceed track laps, if not then adds element, also calculates remaining tyres and fuel after the stint
function addLap(rain, fast, element) {
    var lapcount = element.children.length + 1;
    var rawtext = "";
    var tyrecounter = 0;
    var fuelcounter = 0.0;
    var timecounter = 0.0;
    var boxcounter = 0.0; // Might get rid of this entirely

    if(element.children.length > 0) {
        for(i = 0; i < element.children.length; i++) {
            rawtext = element.children[i].className;
            rawtext = rawtext.split(',');
            tyrecounter += parseInt(rawtext[1]);
            fuelcounter += parseFloat(rawtext[2]);
            timecounter += parseFloat(rawtext[3]);
            boxcounter += parseFloat(rawtext[4]);
        }
    }

    var helper;
    if(rain) {
        if(fast) {
            helper = counterHelper(12);
        } else {
            helper = counterHelper(8);
        }
    } else {
        if (fast) {
            helper = counterHelper(4);
        } else {
            helper = counterHelper(0);
        }
    }

    tyrecounter += helper[0];
    fuelcounter += helper[1];
    timecounter += helper[2];
    boxcounter += helper[3];

    tyrecounter = 100 - tyrecounter;
    fuelcounter = 100.0 - fuelcounter;

    if((lapcount > laps) || (tyrecounter <= 0) || (fuelcounter <= 0.0)) {
        var stintlaps = element.parentNode.getElementsByClassName("designer");
        for(i = 0; i < stintlaps.length; i++) {
            stintlaps[i].disabled = true;
        }
        document.getElementById("stintdelete").disabled = false;
    } else {
        if(rain) {
            if(fast) {
                element.insertAdjacentHTML("beforeend","<td class='rf," + trackarray[track][12] + "," + trackarray[track][13] + "," + trackarray[track][14] + "," + trackarray[track][15] + "'>RFast</td>");
            } else {
                element.insertAdjacentHTML("beforeend","<td class='rs," + trackarray[track][8] + "," + trackarray[track][9] + "," + trackarray[track][10] + "," + trackarray[track][11] + "'>RSlow</td>");
            }
        } else {
            if (fast) {
                element.insertAdjacentHTML("beforeend","<td class='df," + trackarray[track][4] + "," + trackarray[track][5] + "," + trackarray[track][6] + "," + trackarray[track][7] + "'>DFast</td>");
            } else {
                element.insertAdjacentHTML("beforeend","<td class='ds," + trackarray[track][0] + "," + trackarray[track][1] + "," + trackarray[track][2] + "," + trackarray[track][3] + "'>DSlow</td>");
            }
        }
        element.setAttribute("name", lapcount);

        var results = element.parentNode.children[3].getElementsByClassName("result");
        results[0].innerHTML = tyrecounter + "%";
        results[1].innerHTML = fuelcounter + " L";
        results[2].innerHTML = Math.floor(timecounter / 60) + "m, " + Math.round((timecounter % 60) * 100) / 100 + "s";

        raceplanDataUpdater();
    }
}

// Placeholder function for exporting data
function download(filename, text) {
    var element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    element.setAttribute('download', filename);

    element.style.display = 'none';
    document.body.appendChild(element);

    element.click();

    document.body.removeChild(element);
}

//Placeholder function for importing data
document.getElementById('file').addEventListener('change', readFile, false);

function readFile(evt) {
    var files = evt.target.files;
    var file = files[0];
    var reader = new FileReader();
    reader.onload = function(event) {
        console.log(event.target.result);
    }
    reader.readAsText(file)
}