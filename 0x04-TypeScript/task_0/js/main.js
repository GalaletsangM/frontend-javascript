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
//Get table body
var tableBody = document.getElementById("tableBody");
//Loop through array and add rows
//console.log(studentsList[0].firstName);
studentsList.foreach(function (student) {
    var row = document.createElement("tr");
    var nameCell = document.createElement("td");
    nameCell.textContent = student.name;
});
