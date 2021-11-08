// Write your solution in this file!

const employee = {
    name: "Jay",
    streetAddress: "385 1st Ave",
}

const updateEmployeeWithKeyAndValue = (Object, key, value) => {

    return {
        ...Object,
        [key]: value,
    };
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
    return employee;
}

const deleteFromEmployeeByKey = (employee, key) =>  {
    const newEmp = {...employee};
    delete newEmp[key];
    return newEmp;
}

function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key];
    return employee;
}