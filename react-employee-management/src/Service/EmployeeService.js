import axios from "axios";
//const url = "http://localhost:5000/api/vi/employees/";

/**
const getEmployees = async () => {
  try {
    const response =  await axios.get(url, {
      headers: { Accept: "Application/json" },
    });

    const data = response.data;
    setEmpolyees(response.data.items);
    console.log("this is new item", employees);
  } catch (error) {
    console.log(error);
  }
};
 */
export const getEmployees = async () => {
  try {
    return await axios.get("http://localhost:5000/api/vi/employees/", {
      headers: { Accept: "Application/json" },
    });
  } catch (error) {
    console.log(error);
  }
};

export const createEmployee = async (employee) => {
  return await axios.post("http://localhost:5000/api/vi/employees/", employee);
};

export const getEmployeeById = async (employeeId) => {
  return await axios.get(
    `http://localhost:5000/api/vi/employees/${employeeId}`
  );
};

export const UpdateEmployee = async (employeeId, employee) => {
  return await axios.patch(
    `http://localhost:5000/api/vi/employees/${employeeId}`,
    employee
  );
};

export const deleteEmployee = async (employeeId) => {
  return await axios.delete(
    `http://localhost:5000/api/vi/employees/${employeeId}`
  );
};
