/*eslint-env browser*/
const education = [
    {
        instution: "University of Saskatchewan",
        notes: "Bachelor of Science, Computer Science",
        location: "Saskatoon, SK",
        time: "Aug. 2015 - Dec. 2020"
    },
    {
        instution: "Walter Murray Collegiate Institute",
        notes: "Grades 9-12",
        location: "Saskatoon, SK",
        time: "Sept. 2010 - June 2015"
    }
];

const experience = [
    {
        institution: "SaskTel International",
        position: "Java Software Developer",
        location: "Saskatoon, SK (remote)",
        time: "Nov. 2021 - Apr. 2023"
    },
    {
        institution: "SaskTel",
        position: "Senior Clerical Associate (Assignment)",
        location: "Saskatoon, SK",
        time: "Feb. 2021 - Oct. 2021"
    },
    {
        institution: "University of Saskatchewan",
        position: "TA/Marker",
        location: "Saskatoon, SK",
        time: "Sept. 2019 - Dec. 2020"
    }
];

const volunteer = [
    {
        institution: "Your Voice is Power",
        position: "Technical Support Volunteer",
        location: "Saskatoon, SK",
        time: "Mar. 3 - 4, 2023"
    }
];

var resume = document.getElementById("resume");

for(let i = 0; i < education.length; i++) {
    var row = resume.insertRow();
    var cell = row.insertCell();
    var cell2 = row.insertCell();
    cell.setAttribute("class", "field");
    var ed = education[i].instution + "<br />" +
        education[i].notes + "<br />" +
        education[i].location + "<br />" +
        education[i].time + "<br />";
    cell2.innerHTML = ed;
    
    if(i===0) {
        cell.innerHTML = "Education";
    } else {
        cell.innerHTML = "";
    }
}

for(let i = 0; i < experience.length; i++) {
    var row2 = resume.insertRow();
    var cell3 = row2.insertCell();
    var cell4 = row2.insertCell();
    cell3.setAttribute("class", "field");
    var ex = experience[i].institution + "<br />" +
        experience[i].position + "<br />" +
        experience[i].location + "<br />" +
        experience[i].time + "<br />";
    cell4.innerHTML = ex;
    
    if(i===0) {
        cell3.innerHTML = "Experience";
    } else {
        cell3.innerHTML = "";
    }
}

for(let i = 0; i < volunteer.length; i++) {
    var row3 = resume.insertRow();
    var cell5 = row3.insertCell();
    var cell6 = row3.insertCell();
    cell5.setAttribute("class", "field");
    var vo = volunteer[i].institution + "<br />" +
        volunteer[i].position + "<br />" +
        volunteer[i].location + "<br />" +
        volunteer[i].time + "<br />";
    cell6.innerHTML = vo;
    
    if(i===0) {
        cell5.innerHTML = "Volunteer Experience";
    } else {
        cell5.innerHTML = "";
    }
}