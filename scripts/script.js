/*eslint-env browser*/
const education = [
    {
        instution: "University of Saskatchewan",
        notes: "Bachelor of Science, Computer Science",
        location: "Saskatoon, SK",
        time: "Sept. 2015 - Dec. 2020"
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
        institution: "University of Saskatchewan",
        position: "TA/Marker",
        location: "Saskatoon, SK",
        time: "Sept. 2019 - Dec. 2020"
    },
    {
        institution: "Prairie Ink Restaurant and Bakery",
        position: "Barista",
        location: "Saskatoon, SK",
        time: "Sept. 2016 - Sept. 2019"
    },
    {
        institution: "Shopper's Drug Mart",
        position: "Photo Lab Technician",
        location: "Saskatoon, SK",
        time: "May. 2015 - Aug. 2017"
    }
];

var resume = document.getElementById("resume");

for(let i = 0; i < education.length; i++) {
    var row = resume.insertRow();
    var cell = row.insertCell();
    var cell2 = row.insertCell();
    var cell3 = row.insertCell();
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
    var row = resume.insertRow();
    var cell = row.insertCell();
    var cell2 = row.insertCell();
    cell.setAttribute("class", "field");
    var ex = experience[i].institution + "<br />" +
        experience[i].position + "<br />" +
        experience[i].location + "<br />" +
        experience[i].time + "<br />";
    cell2.innerHTML = ex;
    
    if(i===0) {
        cell.innerHTML = "Experience";
    } else {
        cell.innerHTML = "";
    }
}
