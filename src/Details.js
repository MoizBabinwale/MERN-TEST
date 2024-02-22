import React, { useEffect, useState } from "react";
import axios from "axios";

function Details() {
  const [detail, setDetail] = useState("");
  useEffect(() => {
    const tempId = window.location.pathname.split("/");
    getSingleEmployee(tempId[2]);
    // setDetail(data)
  }, []);

  const API = "https://dummy.restapiexample.com/api/v1/employee/";

  const getSingleEmployee = async (id) => {
    try {
      const response = await axios.get(API + id, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (response) {
        console.log("res", response);
        setDetail(response.data.data);
      }
    } catch (error) {
      console.log("error ", error);
    }
  };
  return (
    <div>
      <p>{detail}</p>
    </div>
  );
}

export default Details;
