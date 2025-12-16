;
var student1 = {
    firstName: "Precious",
    lastName: "Mafoko",
    age: 26,
    location: "Georgia",
};
var student2 = {
    firstName: "Bruce",
    lastName: "Wuttor",
    age: 37,
    location: "Georgia",
};
var studentsList = [student1, student2];
//console.log(studentsList[0].firstName);
//Get table body
var tableBody = document.getElementById("tableBody");
//Loop through array and add rows
//console.log(studentsList[0].firstName);
studentsList.forEach(function (student) {
    var row = document.createElement("tr");
    //console.log(student.firstName);
    row.innerHTML = "\n  <td>".concat(student.firstName, "</td>\n  <td>").concat(student.location, "</td>");
    tableBody.appendChild(row);
});
