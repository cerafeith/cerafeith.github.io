/*eslint-env browser*/
const education = [
    {
        instution: "University of Saskatchewan",
        location: "Saskatoon, SK",
        time: "Sept. 2015 - Present"
    },
    {
        instution: "Walter Murray Collegiate Institute",
        location: "Saskatoon, SK",
        time: "Sept. 2010 - June 2015"
    }
];

const experience = [
    {
        institution: "University of Saskatchewan",
        position: "Ta/Marker",
        location: "Saskatoon, SK",
        time: "Sept. 2019 - Present"
    },
    {
        institution: "Prairie Ink Restaurant and Bakery",
        position: "Barista",
        location: "Saskatoon, SK",
        time: "Sept. 2016 - Sept. 2019"
    }
];

var resume = document.getElementById("resume");

for(let i = 0; i < education.length; i++) {
    var row = resume.insertRow();
    var cell = row.insertCell();
    var cell2 = row.insertCell();
    cell.setAttribute("class", "field");
    var ed = education[i].instution + "<br />" +
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
