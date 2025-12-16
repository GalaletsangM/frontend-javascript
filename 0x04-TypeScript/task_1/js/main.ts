interface Teacher {
    readonly firstName: string;
    readonly lastName: string;
    fullTimeEmployee: boolean;
    yearsOfExperience?: number;
    location: string;
    [key: string]: any;
}

const teacher: Teacher = {
    firstName: "Abel",
    lastName: "Smith",
    fullTimeEmployee: true,
    yearsOfExperience: 16,
    location: "South Africa",
    occupation: "Engineer"
}

console.log(teacher);