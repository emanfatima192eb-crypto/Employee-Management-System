const employees = [
    { id: 1, name: "Ali", department: "IT", salary: 60000, active: true },
    { id: 2, name: "Sara", department: "HR", salary: 45000, active: true },
    { id: 3, name: "Ahmed", department: "IT", salary: 75000, active: false },
    { id: 4, name: "Ayesha", department: "Finance", salary: 55000, active: true },
    { id: 5, name: "Usman", department: "HR", salary: 50000, active: false }
];

const activeEmployees = employees.filter(function(employee) {
    return employee.active === true;
});

console.log("Active Employees:", activeEmployees);

const employeeResult = document.getElementById("employeeResult");

activeEmployees.forEach(function(employee) {
    employeeResult.innerHTML += `
        <tr>
            <td>${employee.id}</td>
            <td>${employee.name}</td>
            <td>${employee.department}</td>
            <td>${employee.salary}</td>
            <td>Active</td>
        </tr>
    `;
});
function findEmployeeById(id) {
    return employees.find(function(employee) {
        return employee.id === id;
    });
}
const employee = findEmployeeById(3);

const employeeDetails = document.getElementById("employeeDetails");

employeeDetails.innerHTML =
    "<tr><td>ID</td><td>" + employee.id + "</td></tr>" +
    "<tr><td>Name</td><td>" + employee.name + "</td></tr>" +
    "<tr><td>Department</td><td>" + employee.department + "</td></tr>" +
    "<tr><td>Salary</td><td>" + employee.salary.toLocaleString() + "</td></tr>" +
    "<tr><td>Status</td><td>" + employee.active + "</td></tr>";
    const totalSalary = employees.reduce(function(total, employee) {
    return total + employee.salary;
}, 0);

console.log("Total Salary:", totalSalary);
const salaryResult = document.getElementById("totalSalary");

salaryResult.innerHTML = totalSalary.toLocaleString();
function filterByDepartment(department) {
    return employees.filter(function(employee) {
        return employee.department === department;
    });
}

const itEmployees = filterByDepartment("IT");

const departmentResult = document.getElementById("departmentResult");

itEmployees.forEach(function(employee) {
    departmentResult.innerHTML +=
        "<tr>" +
        "<td>" + employee.id + "</td>" +
        "<td>" + employee.name + "</td>" +
        "<td>" + employee.department + "</td>" +
        "<td>" + employee.salary + "</td>" +
        "<td>" + employee.active + "</td>" +
        "</tr>";
});
const updatedSalaries = employees.map(function(employee) {
    return {
        ...employee,
        salary: employee.salary + (employee.salary * 10 / 100)
    };
});

console.log("Updated Salaries:", updatedSalaries);
const updatedSalaryResult = document.getElementById("updatedSalaryResult");

updatedSalaries.forEach(function(employee) {
    updatedSalaryResult.innerHTML +=
        "<tr>" +
        "<td>" + employee.id + "</td>" +
        "<td>" + employee.name + "</td>" +
        "<td>" + employee.department + "</td>" +
        "<td>" + employee.salary / 1.1 + "</td>" +
        "<td>" + employee.salary.toLocaleString() + "</td>" +
        "</tr>";
});
const departmentStats = employees.reduce(function(stats, employee) {
    stats[employee.department] = (stats[employee.department] || 0) + 1;
    return stats;
}, {});

console.log("Department Statistics:", departmentStats);
const departmentStatsResult = document.getElementById("departmentStatsResult");

for (let department in departmentStats) {
    departmentStatsResult.innerHTML +=
        "<tr>" +
        "<td>" + department + "</td>" +
        "<td>" + departmentStats[department] + "</td>" +
        "</tr>";
}
const highestPaidEmployee = employees.reduce(function(highest, employee) {
    if (employee.salary > highest.salary) {
        return employee;
    }
    return highest;
});

console.log("Highest Paid Employee:", highestPaidEmployee);
const highestPaidResult = document.getElementById("highestPaidResult");

highestPaidResult.innerHTML =
    "<tr>" +
    "<td>" + highestPaidEmployee.id + "</td>" +
    "<td>" + highestPaidEmployee.name + "</td>" +
    "<td>" + highestPaidEmployee.department + "</td>" +
    "<td>" + highestPaidEmployee.salary.toLocaleString() + "</td>" +
    "<td>" + highestPaidEmployee.active + "</td>" +
    "</tr>";
    const sortedEmployees = [...employees].sort(function(a, b) {
    return b.salary - a.salary;
});

console.log("Sorted Employees:", sortedEmployees);
const sortedEmployeesResult = document.getElementById("sortedEmployeesResult");

sortedEmployees.forEach(function(employee) {
    sortedEmployeesResult.innerHTML +=
        "<tr>" +
        "<td>" + employee.id + "</td>" +
        "<td>" + employee.name + "</td>" +
        "<td>" + employee.department + "</td>" +
        "<td>" + employee.salary.toLocaleString() + "</td>" +
        "<td>" + employee.active + "</td>" +
        "</tr>";
});
const averageSalary = employees.reduce(function(total, employee) {
    return total + employee.salary;
}, 0) / employees.length;

console.log("Average Salary:", averageSalary);
const averageSalaryResult = document.getElementById("averageSalaryResult");

averageSalaryResult.innerHTML = averageSalary.toLocaleString();
const inactiveEmployees = employees.filter(function(employee) {
    return employee.active === false;
});

console.log("Inactive Employees:", inactiveEmployees);
const inactiveEmployeesResult = document.getElementById("inactiveEmployeesResult");

inactiveEmployees.forEach(function(employee) {
    inactiveEmployeesResult.innerHTML +=
        "<li>" + employee.name + "</li>";
});
const newEmployee = {
    id: 6,
    name: "Hassan",
    department: "IT",
    salary: 65000,
    active: true
};

function addEmployee(newEmployee) {
    return [...employees, newEmployee];
}

const updatedEmployees = addEmployee(newEmployee);

console.log("Updated Employees:", updatedEmployees);
const newEmployeeResult = document.getElementById("newEmployeeResult");

updatedEmployees.forEach(function(employee) {
    newEmployeeResult.innerHTML +=
        "<tr>" +
        "<td>" + employee.id + "</td>" +
        "<td>" + employee.name + "</td>" +
        "<td>" + employee.department + "</td>" +
        "<td>" + employee.salary.toLocaleString() + "</td>" +
        "<td>" + employee.active + "</td>" +
        "</tr>";
});
function removeEmployeeById(id) {
    return employees.filter(function(employee) {
        return employee.id !== id;
    });
}

const remainingEmployees = removeEmployeeById(3);

console.log("Employees After Removal:", remainingEmployees);
const remainingEmployeesResult = document.getElementById("remainingEmployeesResult");

remainingEmployees.forEach(function(employee) {
    remainingEmployeesResult.innerHTML +=
        "<tr>" +
        "<td>" + employee.id + "</td>" +
        "<td>" + employee.name + "</td>" +
        "<td>" + employee.department + "</td>" +
        "<td>" + employee.salary.toLocaleString() + "</td>" +
        "<td>" + employee.active + "</td>" +
        "</tr>";
});
const activeCount = employees.filter(function(employee) {
    return employee.active === true;
}).length;

const inactiveCount = employees.filter(function(employee) {
    return employee.active === false;
}).length;

console.log("Active Employees Count:", activeCount);
console.log("Inactive Employees Count:", inactiveCount);
const employeeStatusResult = document.getElementById("employeeStatusResult");

employeeStatusResult.innerHTML =
    "<tr><td>Active</td><td>" + activeCount + "</td></tr>" +
    "<tr><td>Inactive</td><td>" + inactiveCount + "</td></tr>";
    function findEmployeeByName(name) {
    return employees.find(function(employee) {
        return employee.name.toLowerCase() === name.toLowerCase();
    });
}
const searchedEmployee = findEmployeeByName("Sara");
console.log("Searched Employee:", searchedEmployee);
const searchedEmployeeResult = document.getElementById("searchedEmployeeResult");

if (searchedEmployee) {
    searchedEmployeeResult.innerHTML= 
        "<tr>" +
        "<td>" + searchedEmployee.id + "</td>" +
        "<td>" + searchedEmployee.name + "</td>" +
        "<td>" + searchedEmployee.department + "</td>" +
        "<td>" + searchedEmployee.salary.toLocaleString() + "</td>" +
        "<td>" + searchedEmployee.active + "</td>" +
        "</tr>";
} else {
    searchedEmployeeResult.innerHTML =
        "<tr><td colspan='5'>Employee not found</td></tr>";
}
const activeSalary = employees.reduce(function(total, employee) {
    if (employee.active === true) {
        return total + employee.salary;
    }
    return total;
}, 0);

console.log("Total Active Employees Salary:", activeSalary);
const activeSalaryResult = document.getElementById("activeSalaryResult");

activeSalaryResult.innerHTML = activeSalary.toLocaleString();
const lowestPaidEmployee = employees.reduce(function(lowest, employee) {
    if (employee.salary < lowest.salary) {
        return employee;
    }
    return lowest;
});

console.log("Lowest Paid Employee:", lowestPaidEmployee);
const lowestPaidResult = document.getElementById("lowestPaidResult");

lowestPaidResult.innerHTML =
    "<tr>" +
    "<td>" + lowestPaidEmployee.id + "</td>" +
    "<td>" + lowestPaidEmployee.name + "</td>" +
    "<td>" + lowestPaidEmployee.department + "</td>" +
    "<td>" + lowestPaidEmployee.salary.toLocaleString() + "</td>" +
    "<td>" + lowestPaidEmployee.active + "</td>" +
    "</tr>";
    const departmentSalaries = employees.reduce(function(totals, employee) {
    totals[employee.department] =
        (totals[employee.department] || 0) + employee.salary;

    return totals;
}, {});

console.log("Department Salaries:", departmentSalaries);
const departmentSalaryResult = document.getElementById("departmentSalaryResult");

for (let department in departmentSalaries) {
    departmentSalaryResult.innerHTML +=
        "<tr>" +
        "<td>" + department + "</td>" +
        "<td>" + departmentSalaries[department].toLocaleString() + "</td>" +
        "</tr>";
}
const departmentEmployeeCount = employees.reduce(function(count, employee) {
    count[employee.department] = (count[employee.department] || 0) + 1;

    return count;
}, {});

console.log("Department Employee Count:", departmentEmployeeCount);
const departmentEmployeeCountResult = document.getElementById("departmentEmployeeCountResult");

for (let department in departmentEmployeeCount) {
    departmentEmployeeCountResult.innerHTML +=
        "<tr>" +
        "<td>" + department + "</td>" +
        "<td>" + departmentEmployeeCount[department] + "</td>" +
        "</tr>";
}
const highSalaryEmployees = employees.filter(function(employee) {
    return employee.salary > 50000;
});

console.log("Employees with Salary Greater Than 50000:", highSalaryEmployees);
const highSalaryEmployeesResult = document.getElementById("highSalaryEmployeesResult");

highSalaryEmployees.forEach(function(employee) {
    highSalaryEmployeesResult.innerHTML +=
        "<tr>" +
        "<td>" + employee.id + "</td>" +
        "<td>" + employee.name + "</td>" +
        "<td>" + employee.department + "</td>" +
        "<td>" + employee.salary.toLocaleString() + "</td>" +
        "<td>" + employee.active + "</td>" +
        "</tr>";
});
const activeStatusEmployees = employees.filter(function(employee) {
    return employee.active;
});

console.log("Active Status Employees:", activeStatusEmployees);
const activeStatusEmployeesResult = document.getElementById("activeStatusEmployeesResult");

activeStatusEmployees.forEach(function(employee) {
    activeStatusEmployeesResult.innerHTML +=
        "<tr>" +
        "<td>" + employee.id + "</td>" +
        "<td>" + employee.name + "</td>" +
        "<td>" + employee.department + "</td>" +
        "<td>" + employee.salary.toLocaleString() + "</td>" +
        "<td>" + employee.active + "</td>" +
        "</tr>";
});
const inactiveSalary = employees.reduce(function(total, employee) {
    if (employee.active === false) {
        return total + employee.salary;
    }
    return total;
}, 0);

console.log("Total Inactive Employees Salary:", inactiveSalary);
const inactiveSalaryResult = document.getElementById("inactiveSalaryResult");

inactiveSalaryResult.innerHTML = inactiveSalary.toLocaleString();
const employeeNames = employees.map(function(employee) {
    return employee.name;
});

console.log("Employee Names:", employeeNames);
const employeeNamesResult = document.getElementById("employeeNamesResult");

employeeNames.forEach(function(name) {
    employeeNamesResult.innerHTML += "<li>" + name + "</li>";
});