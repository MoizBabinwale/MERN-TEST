import axios from "axios";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const [employee, setEmployee] = useState([]);
  const API = "https://dummy.restapiexample.com/api/v1/employees";

  useEffect(() => {
    getEmployeeData();
  }, []);

  const getEmployeeData = async () => {
    try {
      const response = await axios.get(API, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      const EmployeList = response.data.data;
      setEmployee(EmployeList);
      console.log("data", response);
    } catch (error) {
      console.log("error ", error);
    }
  };
  const navigate = useNavigate();
  const handleClick = (item) => {
    navigate("/details/" + item.id);
  };
  return (
    <div>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Age</th>
            <th scope="col">Salary</th>
          </tr>
        </thead>
        <tbody>
          {employee.map((item, index) => (
            <tr key={index} onClick={() => handleClick(item)}>
              <th scope="row">{index + 1}</th>
              <td>{item.employee_name}</td>
              <td>{item.employee_age}</td>
              <td>{item.employee_salary}</td>
            </tr>
          ))}
        </tbody>
      </table>
      {/* <Link cla> */}
      <button>Go to Form</button>
      {/* </Link> */}
    </div>
  );
}

export default Home;
