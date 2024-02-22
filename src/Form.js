import axios from "axios";
import React from "react";

function Form() {
  const handelSubmit = async () => {
    var data = document.getElementById("mail").value;
    const response = await axios.post(
      "http://localhost:5000/test",

      {
        headers: {
          "Content-Type": "application/json",
        },
      },
      { data }
    );
    console.log("res", response);
  };
  return (
    <div>
      {" "}
      <div>
        <form>
          <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">
              Email address
            </label>
            <input type="text" id="mail" class="form-control" aria-describedby="emailHelp" />
            <div id="emailHelp" class="form-text">
              We'll never share your email with anyone else.
            </div>
          </div>

          <button type="submit" class="btn btn-primary" onClick={() => handelSubmit()}>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default Form;
