import React, { useState, useEffect } from "react";
import "../styles/Multistep.css";
import axios from "axios";

export const AddChildDataPage = (data) => {
  useEffect(() => {
    console.log("ddad", data);
  }, []);

  const [current, setCurrent] = useState(1);

  const nextBtnClick = () => {
    setCurrent(current + 1);
  };

  const prevBtnClick = () => {
    setCurrent(current - 1);
  };

  const submitBtnClick = async () => {
    const form = document.querySelector("form");
    const formData = new FormData(form);

    const data = Object.fromEntries(formData.entries());
    console.log(data); // Do whatever you want with the form data

    try {
      // Make an HTTP POST request to your server endpoint
      const response = await axios.post("/api/orphanage", data);

      console.log(response.data); // Response from the server

      setCurrent(current + 1);
      setTimeout(() => {
        alert("Your Form Successfully Signed up");
        window.location.reload();
      }, 800);
    } catch (error) {
      console.error(error);
    }
  };

  //Handling the data

  const [child, setChild] = useState({
    state: "",
    district: "",
    shelterHome: "",
    childName: "",
    dateOfBirth: "",
    gender: "",
    caseNumber: "",
    dateOfCreation: "",
    lengthOfStay: "",
    reasonOfAdmission: "",
    numberOfVisits: "",
    caseHistory: "",
  });

  let name_, value_;
  const handleInputs = (e) => {
    name_ = e.target.name;
    value_ = e.target.value;
    setChild({ ...child, [name_]: value_ });
  };

  const saveChild = (e) => {
    e.preventDefault();
    axios
      .post("http://127.0.0.1:9002/api/Child", child)
      .then((response) => {
        console.log(response);
        alert("Form Submitted Successfully!");
        window.location.reload();
      })
      .catch((error) => {
        console.error("there was an error!", error);
      });
  };

  return (
    <div className="mainheader">
      <div className="orphanage-container-45">
        <header>Add Child Data</header>
        <div className="progress-bar">
          {/* Progress bar code */}
          <div className={`step ${current >= 1 ? "active" : ""}`}>
            <p className={current >= 1 ? "active" : ""}>Orphanage Details</p>
            <div className={`bullet ${current >= 1 ? "active" : ""}`}>
              <span className="check">&#10003;</span>
            </div>
          </div>
          <div className={`step ${current >= 2 ? "active" : ""}`}>
            <p className={current >= 2 ? "active" : ""}>
              Child Details section
            </p>
            <div className={`bullet ${current >= 2 ? "active" : ""}`}>
              <span className="check">&#10003;</span>
            </div>
          </div>
          <div className={`step ${current >= 3 ? "active" : ""}`}>
            <p className={current >= 3 ? "active" : ""}>Case Details section</p>
            <div className={`bullet ${current >= 3 ? "active" : ""}`}>
              <span className="check">&#10003;</span>
            </div>
          </div>
          <div className={`step ${current >= 4 ? "active" : ""}`}>
            <p className={current >= 4 ? "active" : ""}>Submit Details</p>
            <div className={`bullet ${current >= 4 ? "active" : ""}`}>
              <span className="check">&#10003;</span>
            </div>
          </div>
        </div>
        <div className="form-outer">
          <form>
            {/* Form pages */}
            {current === 1 && (
              <div className="page slide-page">
                <div className="title">Orphanage Information</div>
                <br />
                <div className="field">
                  <div className="label">State:</div>
                  <input
                    className="inputBox"
                    type="text"
                    name="state"
                    value={child.state}
                    onChange={handleInputs}
                  />
                </div>
                <br />
                <div className="field">
                  <div className="label">District:</div>
                  <input
                    className="inputBox"
                    type="text"
                    name="district"
                    value={child.district}
                    onChange={handleInputs}
                  />
                </div>
                <br />{" "}
                <div className="field">
                  <div className="label">Name of Shelter Home:</div>
                  <input
                    className="inputBox"
                    type="text"
                    name="shelterHome"
                    value={child.shelterHome}
                    onChange={handleInputs}
                  />
                </div>
                <br />
                <div className="field">
                  <button className="next" onClick={nextBtnClick}>
                    Next
                  </button>
                </div>
              </div>
            )}

            {current === 2 && (
              <div className="page">
                <div className="title">Child Details</div>
                <br />
                <div className="field">
                  <div className="label">Name:</div>
                  <input
                    className="inputBox"
                    type="text"
                    name="childName"
                    value={child.childName}
                    onChange={handleInputs}
                  />
                </div>
                <br />{" "}
                <div className="field">
                  <div className="label">Date Of Birth:</div>
                  <input
                    className="inputBox"
                    type="text"
                    name="dateOfBirth"
                    value={child.dateOfBirth}
                    onChange={handleInputs}
                  />
                </div>
                <br />{" "}
                <div className="field">
                  <div className="label">Gender:</div>
                  <select
                    className="inputBox"
                    name="gender"
                    value={child.gender}
                    onChange={handleInputs}
                  >
                    <option>Male</option>
                    <option>Female</option>
                    <option>Other</option>
                  </select>
                </div>
                <div className="field btns">
                  <button className="prev" onClick={prevBtnClick}>
                    Previous
                  </button>
                  <button className="next" onClick={nextBtnClick}>
                    Next
                  </button>
                </div>
              </div>
            )}

            {current === 3 && (
              <div className="page">
                <div className="title">Case Information</div>
                <br />
                <div className="field">
                  <div className="label">Case Number:</div>
                  <input
                    className="inputBox"
                    type="text"
                    name="caseNumber"
                    value={child.caseNumber}
                    onChange={handleInputs}
                  />
                </div>
                <br />{" "}
                <div className="field">
                  <div className="label">Date of Creation:</div>
                  <input
                    className="inputBox"
                    type="text"
                    name="dateOfCreation"
                    value={child.dateOfCreation}
                    onChange={handleInputs}
                  />
                </div>
                <br />{" "}
                <div className="field">
                  <div className="label">Length Of Stay (Days):</div>
                  <input
                    className="inputBox"
                    type="text"
                    name="lengthOfStay"
                    value={child.lengthOfStay}
                    onChange={handleInputs}
                  />
                </div>{" "}
                <div className="field btns">
                  <button className="prev" onClick={prevBtnClick}>
                    Previous
                  </button>
                  <button className="next" onClick={nextBtnClick}>
                    Next
                  </button>
                </div>
              </div>
            )}

            {current === 4 && (
              <div className="page">
                <div className="title">Case Details</div>
                <br />
                <div className="field">
                  <div className="label">Reason Of Admission:</div>
                  <input
                    className="inputBox"
                    type="text"
                    name="reasonOfAdmission"
                    value={child.reasonOfAdmission}
                    onChange={handleInputs}
                  />
                </div>
                <br />{" "}
                <div className="field">
                  <div className="label">
                    Number Of Family Visits/Phone Calls:
                  </div>
                  <input
                    className="inputBox"
                    type="text"
                    name="numberOfVisits"
                    value={child.numberOfVisits}
                    onChange={handleInputs}
                  />
                </div>
                <br />{" "}
                <div className="field">
                  <div className="label">Case History:</div>
                  <input
                    className="inputBox"
                    type="text"
                    name="caseHistory"
                    value={child.caseHistory}
                    onChange={handleInputs}
                  />
                </div>{" "}
                <div className="field btns">
                  <button className="prev" onClick={prevBtnClick}>
                    Previous
                  </button>
                  <button className="submit" onClick={saveChild}>
                    Submit
                  </button>
                </div>
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};
