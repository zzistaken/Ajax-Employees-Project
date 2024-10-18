const button = document.getElementById("btn");
const list = document.getElementById("list");

const eventListeners = () => {
  button.addEventListener("click", getEmployees);
};

const getEmployees = () => {
  const xhr = new XMLHttpRequest();

  xhr.onload = function () {
    if (this.status === 200) {
      const employees = JSON.parse(this.response);
      employees.forEach((employee, index) => {
        list.innerHTML += `<tr>
                            <td>${index + 1}</td>
                            <td>${employee.name}</td>
                            <td>${employee.department}</td>
                            <td>$${employee.salary}</td>
                           </tr>`;
      });
    }
  };
  xhr.open("GET", "employees.json", true);
  xhr.send();
};

eventListeners();
