import axios from "axios";
const url = "http://localhost:4000/api/vi/items";

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
    return await axios.get(url, { headers: { Accept: "Application/json" } });
  } catch (error) {
    console.log(error);
  }
};

export const createEmployee = async (employee) => {
  return await axios.post(url, employee);
};

export const getEmployeeById= async (employeeId)=>{
return await axios.get(url +'/'+ employeeId)
}