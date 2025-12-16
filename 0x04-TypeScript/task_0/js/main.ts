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

let studentsList:any = [student1, student2];

//Get table body
const tableBody = document.getElementById("tableBody");

//Loop through array and add rows
//console.log(studentsList[0].firstName);
studentsList.foreach(student => {
  const row = document.createElement("tr");

  const nameCell = document.createElement("td");
  nameCell.textContent = student.name;

});

