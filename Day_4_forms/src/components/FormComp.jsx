import React, { Fragment, useState } from "react";
import { TextInput } from "./TextInput/TextInput";

const FormComp = () => {
  const [fields, setFields] = useState({
    firstname: "",
    email: "",
    gender: "",
    country: "",
    skills: [],
  });

  const [errorFields, setErrorFields] = useState({
    firstname: false,
    email: false,
    gender: false,
    country: false,
    skills: false,
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    if (isFormValidOnSubmit()) {
      alert("submited");
    }
    return;
  };

  const handleChange = (event) => {
    
    setFields((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));

    isFormValidOnBlur(event);
  };

  const handleCheckbox = (event) => {
    let newSkills = [...fields.skills];
    if (event.target.checked) {
      newSkills.push(event.target.value);
    } else {
      newSkills = newSkills.filter((skill) => skill !== event.target.value);
    }

    setFields((prev) => ({
      ...prev,
      [event.target.name]: newSkills,
    }));
    console.log(newSkills);
    // isFormValidOnBlur(event);
    let error = false;
    if (event.target.name === "skills" && newSkills.length === 0) {
      error = true;
    }

    setErrorFields((prev) => ({
      ...prev,
      [event.target.name]: error,
    }));
  };
  const handleCheckbox1 = (event) => {
    handleCheckbox(event);

    // isFormValidOnBlur(event)
  };

  //console.log(fields.skills,"===fields");
  //solution 1
  // const isFormValid = () => {
  //   if (fields.firstname === "") {
  //     setErrorFields((prev) => ({
  //       ...prev,
  //       firstname: true,
  //     }));
  //     return false;
  //   }
  //   else{
  //       setErrorFields((prev) => ({
  //           ...prev,
  //           firstname: false,
  //         }));
  //         return true;
  //   }
  // };

  //Solution 2

  const isFormValidOnSubmit = () => {
    const errors = {
      firstname: false,
      email: false,
      gender: false,
      country: false,
      skills: false,
    };
    if (fields.firstname === "") {
      errors.firstname = true;
    }
    if (fields.email === "") {
      errors.email = true;
    }
    if (fields.gender === "") {
      errors.gender = true;
    }
    if (fields.country === "") {
      errors.country = true;
    }
    if (fields.skills.length === 0) {
      errors.skills = true;
    }

    setErrorFields(errors);
    if (Object.values(errors).some((error) => error === true)) {
      return false;
    }
    return true;
  };

  const isFormValidOnBlur = (event) => {
    const { name, value } = event.target;
    let error = false;
    if (name === "firstname" && value === "") {
      error = true;
    } else if (
      name === "email" &&
      (value === "" ||
        !/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/.test(
          value
        ))
    ) {
      error = true;
    } else if (name === "gender" && value === "") {
      error = true;
    } else if (name === "country" && value === "") {
      error = true;
    } else if (
      name === "skills" &&
      !event.target.checked &&
      fields.skills.length === 0
    ) {
      error = true;
    }

    setErrorFields((prev) => ({
      ...prev,
      [name]: error,
    }));
  };

  return (
    <Fragment>
      <div>
        <form onSubmit={handleSubmit}>
          <h1>Register</h1>
          <p className="caption"> Please fill the form</p>
          <TextInput
            handleChange={handleChange}
            isFormValidOnBlur={isFormValidOnBlur}
            errorFields={errorFields}
            label="First Name"
            id="first-name"
            name="firstname"
            type="text"
          />
           <TextInput
            handleChange={handleChange}
            isFormValidOnBlur={isFormValidOnBlur}
            errorFields={errorFields}
            label="Email"
            id="email"
            name="email"
            type="email"
          />
        
          
          <div className="input-section radio-group">
            <label htmlFor="">Gender</label>
            <div>
              <input
                type="radio"
                name="gender"
                value="male"
                id="male"
                onBlur={isFormValidOnBlur}
                onChange={handleChange}
              />{" "}
              <label htmlFor="male" className="radio-buttons">
                Male
              </label>
              <input
                type="radio"
                name="gender"
                value="female"
                id="female"
                onBlur={isFormValidOnBlur}
                onChange={handleChange}
              />
              <label htmlFor="female" className="radio-buttons">
                Female
              </label>
              {errorFields.gender && (
                <p className="danger">Gender is required</p>
              )}
            </div>
          </div>
          <div className="input-section dropdown-section">
            <label htmlFor="country">Country </label>
            <select
              name="country"
              id="country"
              onBlur={isFormValidOnBlur}
              onChange={handleChange}
            >
              <option value="">Select</option>
              <option value="india">India</option>
              <option value="pak">Pakistan</option>
              <option value="bangla">Bangladesh</option>
              <option value="nepal">Nepal</option>
            </select>{" "}
            {errorFields.country && (
              <p className="danger">Country is required</p>
            )}
          </div>

          <div className="input-section radio-group">
            <label htmlFor="">Skills</label>
            <div>
              <input
                type="checkbox"
                name="skills"
                value="java"
                id="java"
                onBlur={isFormValidOnBlur}
                onChange={handleCheckbox1}
              />
              <label htmlFor="java" className="radio-buttons">
                Javascript
              </label>
              <input
                type="checkbox"
                name="skills"
                value="html"
                id="html"
                onBlur={isFormValidOnBlur}
                onChange={handleCheckbox1}
              />
              <label htmlFor="html" className="radio-buttons">
                HTML
              </label>
              <input
                type="checkbox"
                name="skills"
                value="css"
                id="css"
                onBlur={isFormValidOnBlur}
                onChange={handleCheckbox1}
              />
              <label htmlFor="css" className="radio-buttons">
                CSS
              </label>
              {errorFields.skills && (
                <p className="danger">Skills is required</p>
              )}
            </div>
          </div>

          <div>
            <button type="submit"> Submit Form</button>
          </div>
        </form>
      </div>
    </Fragment>
  );
};

export default FormComp;
