import React, { useState } from "react";
import { Link } from "react-router-dom";
//import SidebarNavigation from "../components/SidebarNavigation";
import "../styles/managerPanel.css";
import { getEmployees } from "../services/employeeService";

const employees = getEmployees();

function EmployeesPage() {

  const [employees, setEmployees] = useState([
    {id:1, name:"Thahaseen Gulam", email:"thahaseen@shnoor.com", department:"IT", status:"Active"},
    {id:2, name:"Moksha Boya", email:"moksha@shnoor.com", department:"HR", status:"Active"},
    {id:3, name:"Abc ", email:"abc@shnoor.com", department:"Finance", status:"Inactive"}
  ]);

  const [name,setName] = useState("");
  const [email,setEmail] = useState("");
  const [department,setDepartment] = useState("");
  const [search,setSearch] = useState("");

  // ADD EMPLOYEE
  const addEmployee = () => {

    if(name === "" || email === "" || department === ""){
      alert("Please fill all fields");
      return;
    }

    const newEmployee = {
      id: employees.length + 1,
      name:name,
      email:email,
      department:department,
      status:"Active"
    };

    setEmployees([...employees,newEmployee]);

    setName("");
    setEmail("");
    setDepartment("");
  };

  // DELETE EMPLOYEE
  const deleteEmployee = (id) => {
    setEmployees(employees.filter(emp => emp.id !== id));
  };

  // EDIT EMPLOYEE
  const editEmployee = (id) => {

    const newName = prompt("Enter new employee name");

    if(!newName) return;

    setEmployees(
      employees.map(emp =>
        emp.id === id ? {...emp, name:newName} : emp
      )
    );
  };

  // SEARCH
  const filteredEmployees = employees.filter(emp =>
    emp.name.toLowerCase().includes(search.toLowerCase())
  );

  return (

    <div className="dashboardLayout">

   

      <div className="mainContent">

        <h1>Employee Management</h1>

        {/* SEARCH */}

        <input
        className="searchBox"
        type="text"
        placeholder="Search Employee..."
        value={search}
        onChange={(e)=>setSearch(e.target.value)}
        />

        {/* ADD EMPLOYEE */}

        <div className="addEmployeeForm">

          <h2>Add Employee</h2>

          <input
          type="text"
          placeholder="Employee Name"
          value={name}
          onChange={(e)=>setName(e.target.value)}
          />

          <input
          type="email"
          placeholder="Employee Email"
          value={email}
          onChange={(e)=>setEmail(e.target.value)}
          />

          <input
          type="text"
          placeholder="Department"
          value={department}
          onChange={(e)=>setDepartment(e.target.value)}
          />

          <button onClick={addEmployee}>
            Add Employee
          </button>

        </div>

        {/* EMPLOYEE TABLE */}

        <table className="employeeTable">

          <thead>

            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Department</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>

          </thead>

          <tbody>

            {filteredEmployees.map((emp)=>(
              <tr key={emp.id}>

                <td>{emp.id}</td>
                <td>{emp.name}</td>
                <td>{emp.email}</td>
                <td>{emp.department}</td>

                <td>
                  <span className={emp.status === "Active" ? "statusActive" : "statusInactive"}>
                    {emp.status}
                  </span>
                </td>

                <td>

                  <Link to={`/employee/${emp.id}`}>
                    <button className="viewBtn">
                      View
                    </button>
                  </Link>

                  <button
                  className="editBtn"
                  onClick={()=>editEmployee(emp.id)}>
                  Edit
                  </button>

                  <button
                  className="deleteBtn"
                  onClick={()=>deleteEmployee(emp.id)}>
                  Delete
                  </button>

                </td>

              </tr>
            ))}

          </tbody>

        </table>

      </div>

    </div>

  );

}

export default EmployeesPage;