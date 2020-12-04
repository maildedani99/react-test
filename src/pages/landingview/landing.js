import React, { useState, useEffect } from 'react';

const Landing = () => {

    const [customers, setCustomers] = useState([]);

    const getCustomer = () => {
        const url = 'http://localhost:3001/customers';
        const options = {
          method: 'GET',
          mode:"cors",
          headers: new Headers ()
        };
        fetch (url, options)
          .then (response => {
            if (response.status === 200) {
              return response.json ();
            }
            return Promise.reject(response.status);
          })
          .then (function (myJson) {
              setCustomers(myJson);
              console.log("hola");
          })
          .catch (error => console.log ("el error es: " +error));
    };

    useEffect(() => {
      getCustomer();
    console.log("get hecho: "+ customers)
}, [])
 
  return (
    <div>
      <div className="mt-5 w-100">
      <h1>Customers List</h1>
      </div>
      <div className="w-75 mt-5">
        <table className="table">
          <thead className="thead-light">
            <tr>
              <th>Nombre</th>
              <th>Apellidos</th>
              <th>Poblacion</th>
              <th>Actions</th>
              </tr>
          </thead>
          <tbody>
        {customers.map(item => (
              <tr>
                <td>{item.first_name} </td>
                <td>{item.last_name} </td>
            <td>{item.city}</td>
            <td><button className="btn btn-light">Eliminar</button> </td>
              </tr>
        ))}    
            </tbody>
          </table>
                </div>          
            </div>
    )
}
export default Landing;