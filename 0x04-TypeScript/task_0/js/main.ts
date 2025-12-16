interface Students {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
};

const student1: Students = {
    firstName:"Precious",
    lastName: "Mafoko",
    age: 26,
    location: "Georgia",
};

const student2: Students = {
  firstName: "Bruce",
  lastName: "Wuttor",
  age: 37,
  location: "Georgia",
};

let studentsList = [student1, student2];
//console.log(studentsList[0].firstName);

//Get table body
const tableBody = document.getElementById("tableBody") as HTMLTableSectionElement;

//Loop through array and add rows
//console.log(studentsList[0].firstName);
studentsList.forEach((student) => {
  const row = document.createElement("tr");
  //console.log(student.firstName);
  row.innerHTML = `
  <td>${student.firstName}</td>
  <td>${student.location}</td>`;

  tableBody.appendChild(row);

});

