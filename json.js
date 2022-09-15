let person = '{ "employees" : [' +
    '{ "firstName":"Shuvo" , "lastName":"Roy" },' +
    '{ "firstName":"Simul" , "lastName":"Hossen" },' +
    '{ "firstName":"Hemel" , "lastName":"Saha" } ]}';
const cng = JSON.parse(person);     //here json convert to js object
console.log(cng.employees[0].firstName);    


let persons = {
    fName: "Shuvo",
    LName: "Roy"
};
console.log(JSON.stringify(persons));   //here js object convert to json

//another way

let fullName = {
    fName: "Shuvo",
    LName: "Roy"
};

const per = JSON.stringify(fullName);   //here js object convert to json   
console.log(per);