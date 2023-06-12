import React, { useEffect, useState } from "react";
import "./Childrendata.scss";
import { Link } from "react-router-dom";
const ChildForm = () => {
  const [childData, setChildData] = useState({
    state: "",
    district: "",
    orphanageName: "",
    childName: "",
    dateOfBirth: "",
    gender: "",
    caseNumber: "",
    dateOfCreation: "",
    lengthOfStay: "",
    reasonForAdmission: "",
    familyVisits: "",
    caseHistory: "",
  });

  useEffect(() => {
    // Fetch the data from your database and set it in the childData state
    const fetchedData = fetchDataFromDatabase(); // Replace with your actual fetch logic
    setChildData(fetchedData);
  }, []);

  // Simulated function to fetch data from the database
  const fetchDataFromDatabase = () => {
    return {
      state: "Example State",
      district: "Example District",
      orphanageName: "Example Orphanage",
      childName: "Example Child",
      dateOfBirth: "2000-01-01",
      gender: "Male",
      caseNumber: "123456",
      dateOfCreation: "2023-01-01",
      lengthOfStay: "5",
      reasonForAdmission: "Example reason",
      familyVisits: "2",
      caseHistory: "Example case history",
    };
  };

  return (
    <div className="maincontainer23">
      <div className="container23">
        <h2 className="h2-23">Child Details</h2>
        <div className="scrollable-container23">
          <form className="form-23">
            <div>
              <label className="label-23">State:</label>
              <input
                className="input-23"
                type="text"
                name="state"
                value={childData.state}
                disabled
              />
            </div>
            <div>
              <label className="label-23">District:</label>
              <input
                className="input-23"
                type="text"
                name="district"
                value={childData.district}
                disabled
              />
            </div>
            <div>
              <label className="label-23">Name of Orphanage:</label>
              <input
                className="input-23"
                type="text"
                name="orphanageName"
                value={childData.orphanageName}
                disabled
              />
            </div>

            <h2 className="h2-23">Child Details</h2>
            <div>
              <label className="label-23">Child Name:</label>
              <input
                className="input-23"
                type="text"
                name="childName"
                value={childData.childName}
                disabled
              />
            </div>
            <div>
              <label className="label-23">Date of Birth:</label>
              <input
                className="input-23"
                type="date"
                name="dateOfBirth"
                value={childData.dateOfBirth}
                disabled
              />
            </div>
            <div>
              <label className="label-23">Gender:</label>
              <input
                className="input-23"
                type="text"
                name="gender"
                value={childData.gender}
                disabled
              />
            </div>

            <h2 className="h2-23">Case Information</h2>
            <div>
              <label className="label-23">Case Number:</label>
              <input
                className="input-23"
                type="text"
                name="caseNumber"
                value={childData.caseNumber}
                disabled
              />
            </div>
            <div>
              <label className="label-23">Date of Creation:</label>
              <input
                className="input-23"
                type="date"
                name="dateOfCreation"
                value={childData.dateOfCreation}
                disabled
              />
            </div>
            <div>
              <label className="label-23">Length of Stay:</label>
              <input
                className="input-23"
                type="number"
                name="lengthOfStay"
                value={childData.lengthOfStay}
                disabled
              />
            </div>

            <h2 className="h2-23">Case Details</h2>
            <div>
              <label className="label-23">Reason for Admission:</label>
              <textarea
                name="reasonForAdmission"
                value={childData.reasonForAdmission}
                disabled
                className="textarea-23"
              />
            </div>
            <div>
              <label className="label-23">No. of Family Visits:</label>
              <input
                className="input-23"
                type="number"
                name="familyVisits"
                value={childData.familyVisits}
                disabled
              />
            </div>
            <div>
              <label className="label-23">Case History:</label>
              <textarea
                className="textarea-23"
                name="caseHistory"
                value={childData.caseHistory}
                disabled
              />
            </div>
          </form>
        </div>
        <div className="buttons-23">
          <button className="button-23 approved-button ">Approved</button>
          <button className="button-23 discard-button">Discard</button>
          <button className="button-23 pending-button">Pending</button>
        </div>
        <div className="adddetails">
          <button className="button-23">
            <Link to="/adddetails">Add Children</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChildForm;
