import React, { useState } from 'react'

function Form1() {
  const [fields, setFields] = useState({
    firstname: "",
    email: "",
    gender: "",
    country: "",
  });


  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(fields, "==submit");
  };

  const handleChange = (event) => {
    setFields((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };

  return (
    <div>
 <form onSubmit={handleSubmit}>
        <h1>Register</h1>
        <p className="caption"> Please fill the form</p>
        <div className="input-section">
          <label htmlFor="firstname">First Name</label>
          <input
            type="text"
            name="firstname"
            id="firstname"
            placeholder="First Name"
            onChange={handleChange}
            required
          />
        </div>
        <div className="input-section">
          <label htmlFor="">Email</label>
          <input type="email" name="email" onChange={handleChange} />
        </div>

        <div className="input-section radio-group">
          <label htmlFor="">Gender</label>
      <div>
      <input
            type="radio"
            name="gender"
            value="male"
            id="male"
            onChange={handleChange}
          />{" "}
          <label htmlFor="male" className="radio-buttons">Male</label>
          <input
            type="radio"
            name="gender"
            value="female"
            id="female"
            onChange={handleChange}
          />
          <label htmlFor="female" className="radio-buttons">Female</label>
      </div>
        </div>
        <div className="input-section dropdown-section">
          
          <label htmlFor="country">Country </label>
          <select name="country" id="country" onChange={handleChange}>
            <option value="">Select</option>
            <option value="india">India</option>
            <option value="pak">Pakistan</option>
            <option value="bangla">Bangladesh</option>
            <option value="nepal">Nepal</option>
          </select>{" "}
        </div>

        <div>
          <button type='submit'> Submit Form</button>
        </div>
      </form>

    </div>

  )
}

export default Form1