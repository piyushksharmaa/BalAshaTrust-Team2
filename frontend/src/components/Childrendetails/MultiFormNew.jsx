import React, { useState } from "react";
import "./MultiFormNew.scss";
import axios from "axios";

import { IoLogoInstagram, IoLogoFacebook, IoLogoTwitter } from "react-icons/io";

function Multiform() {
  const [dcpuFile, setDcpuFile] = useState({
    dcpuFile: "",
  });
  const [cwcFile, setCwcFile] = useState({
    cwcFile: "",
  });
  const [saaFile, setSaaFile] = useState({
    saaFile: "",
  });
  const [newspaperFile, setNewspaperFile] = useState({
    newspaperFile: "",
    newspaperText: "",
  });
  const [socialMediaFile, setSocialMediaFile] = useState({
    socialMediaText: "",
    socialMediaFile: "",
  });
  const [missingComplaintFile, setMissingComplaintFile] = useState({
    missingComplaintFile: "",
    missingComplaintText: "",
  });
  const [ageVerificationFile, setAgeVerificationFile] = useState({
    ageVerificationFile: "",
    ageVerificationText: "",
  });
  const [policeReportFile, setPoliceReportFile] = useState({
    policeReportFile: "",
    policeReportText: "",
  });

  const handleDcpuFileChange = (e) => {
    setDcpuFile({ ...dcpuFile, [e.target.name]: e.target.value });
  };

  const handleCwcFileChange = (e) => {
    setCwcFile({ ...cwcFile, [e.target.name]: e.target.value });
  };

  const handleSaaFileChange = (e) => {
    setSaaFile({ ...saaFile, [e.target.name]: e.target.value });
  };

  const handleNewspaperFileChange = (e) => {
    setNewspaperFile({ ...newspaperFile, [e.target.name]: e.target.value });
  };

  const handleSocialMediaFileChange = (e) => {
    setSocialMediaFile({ ...socialMediaFile, [e.target.name]: e.target.value });
  };

  const handleMissingComplaintFileChange = (e) => {
    setMissingComplaintFile({
      ...missingComplaintFile,
      [e.target.name]: e.target.value,
    });
  };

  const handleAgeVerificationFileChange = (e) => {
    setAgeVerificationFile({
      ...ageVerificationFile,
      [e.target.name]: e.target.value,
    });
  };

  const handlePoliceReportFileChange = (e) => {
    setPoliceReportFile({
      ...policeReportFile,
      [e.target.name]: e.target.value,
    });
  };

  const handleDcpuFileSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://127.0.0.1:9002/api/dcpu", dcpuFile)
      .then((response) => {
        console.log(response);
        alert("dcpu Report Submitted Sucessfully!");
        window.location.reload();
      })
      .catch((error) => {
        console.error("there was an error!", error);
      });
  };

  const handleCwcFileSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://127.0.0.1:9002/api/cwc", cwcFile)
      .then((response) => {
        console.log(response);
        alert("cwc Report Submitted Sucessfully!");
        window.location.reload();
      })
      .catch((error) => {
        console.error("there was an error!", error);
      });
  };

  const handleSaaFileSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://127.0.0.1:9002/api/saa", saaFile)
      .then((response) => {
        console.log(response);
        alert("saa Report Submitted Sucessfully!");
        window.location.reload();
      })
      .catch((error) => {
        console.error("there was an error!", error);
      });
  };

  const handleNewspaperSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://127.0.0.1:9002/api/newspaper", newspaperFile)
      .then((response) => {
        console.log(response);
        alert("NewsPaper Report Submitted Sucessfully!");
        window.location.reload();
      })
      .catch((error) => {
        console.error("there was an error!", error);
      });
  };

  const handleSocialMediaSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://127.0.0.1:9002/api/social", socialMediaFile)
      .then((response) => {
        console.log(response);
        alert("socialMedia File Submitted Sucessfully!");
        window.location.reload();
      })
      .catch((error) => {
        console.error("there was an error!", error);
      });
  };

  const handleMissingComplaintSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://127.0.0.1:9002/api/missing", missingComplaintFile)
      .then((response) => {
        console.log(response);
        alert("Missing Complaint file Submitted Sucessfully!");
        window.location.reload();
      })
      .catch((error) => {
        console.error("there was an error!", error);
      });
  };

  const handleAgeVerificationSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://127.0.0.1:9002/api/age", ageVerificationFile)
      .then((response) => {
        console.log(response);
        alert("Age verification Submitted Sucessfully!");
        window.location.reload();
      })
      .catch((error) => {
        console.error("there was an error!", error);
      });
  };

  const handlePoliceReportSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://127.0.0.1:9002/api/policeReport", policeReportFile)
      .then((response) => {
        console.log(response);
        alert("Police Report Submitted Sucessfully!");
        window.location.reload();
      })
      .catch((error) => {
        console.error("there was an error!", error);
      });
  };

  const [newspaperFormVisible, setNewspaperFormVisible] = useState(false);
  const [socialMediaFormVisible, setSocialMediaFormVisible] = useState(false);
  const [missingComplaintFormVisible, setMissingComplaintFormVisible] =
    useState(false);
  const [ageVerificationFormVisible, setAgeVerificationFormVisible] =
    useState(false);
  const [policeReportFormVisible, setPoliceReportFormVisible] = useState(false);
  const handleInstagramClick = () => {
    // Open Instagram page
    window.open("https://www.instagram.com", "_blank");
  };

  const handleFacebookClick = () => {
    // Open Facebook page
    window.open("https://www.facebook.com", "_blank");
  };

  const handleTwitterClick = () => {
    // Open Twitter page
    window.open("https://www.twitter.com", "_blank");
  };
  return (
    <div className="maincontainer34">
      <div className="container34">
        <h2 className="main-heading34">Submit Child Details</h2>

        <div className="alldetails">
          <div className="add-details-34">
            <h3 className="sub-heading1-34">Select Application Type:</h3>
            <button
              className="button1-34"
              onClick={() => setNewspaperFormVisible(!newspaperFormVisible)}
            >
              Newspaper Application
            </button>
            <button
              className="button1-34"
              onClick={() => setSocialMediaFormVisible(!socialMediaFormVisible)}
            >
              Social Media Post
            </button>
            <button
              className="button1-34"
              onClick={() =>
                setMissingComplaintFormVisible(!missingComplaintFormVisible)
              }
            >
              File Missing Complaint
            </button>
            <button
              className="button1-34"
              onClick={() =>
                setAgeVerificationFormVisible(!ageVerificationFormVisible)
              }
            >
              Age Verification
            </button>
            <button
              className="button1-34"
              onClick={() =>
                setPoliceReportFormVisible(!policeReportFormVisible)
              }
            >
              Police Report
            </button>
          </div>
        </div>

        {newspaperFormVisible && (
          <div className="newspaper34">
            <div className="newspaper-container-34">
              <h4 className="heading1-34">Add Newspaper Application:</h4>
              <input
                className="input1-34"
                type="text"
                name="newspaperText"
                value={newspaperFile.newspaperText}
                placeholder="Enter details"
                onChange={handleNewspaperFileChange}
              />
              <input
                className="input1-34"
                type="file"
                name="newspaperFile"
                value={newspaperFile.newspaperFile}
                onChange={handleNewspaperFileChange}
              />
              <button lassName="button1-34" onClick={handleNewspaperSubmit}>
                Submit
              </button>
            </div>
          </div>
        )}

        {socialMediaFormVisible && (
          <div className="socialmedia34">
            <div className="socialmedia-container-34">
              <h4 className="heading1-34">Add Social Media Post:</h4>
              <input
                className="input1-34"
                type="text"
                name="socialMediaText"
                value={socialMediaFile.socialMediaText}
                placeholder="Enter details"
                onChange={handleSocialMediaFileChange}
              />
              <div className="social-media-icons">
                <IoLogoInstagram
                  className="social-media-logo"
                  onClick={handleInstagramClick}
                />
                <IoLogoFacebook
                  className="social-media-logo"
                  onClick={handleFacebookClick}
                />
                <IoLogoTwitter
                  className="social-media-logo"
                  onClick={handleTwitterClick}
                />
              </div>
              <input
                className="input1-34"
                type="file"
                name="socialMediaFile"
                value={socialMediaFile.socialMediaFile}
                onChange={handleSocialMediaFileChange}
              />
              <button className="button1-34" onClick={handleSocialMediaSubmit}>
                Submit
              </button>
            </div>
          </div>
        )}

        {missingComplaintFormVisible && (
          <div className="missingcomplaint34">
            <div className="missingcomplaint-container-34">
              <h4 className="heading1-34">Add File Missing Complaint:</h4>
              <input
                className="input1-34"
                type="text"
                name="missingComplaintText"
                value={missingComplaintFile.missingComplaintText}
                onChange={handleMissingComplaintFileChange}
                placeholder="Enter details"
              />
              <input
                className="input1-34"
                type="file"
                name="missingComplaintFile"
                value={missingComplaintFile.missingComplaintFile}
                onChange={handleMissingComplaintFileChange}
              />
              <button
                className="button1-34"
                onClick={handleMissingComplaintSubmit}
              >
                Submit
              </button>
            </div>
          </div>
        )}

        {ageVerificationFormVisible && (
          <div className="ageverification34">
            <div className="ageverification-container-34">
              <h4 className="heading1-34">Add Age Verification:</h4>
              <input
                className="input1-34"
                name="ageVerificationText"
                value={ageVerificationFile.ageVerificationText}
                type="text"
                onChange={handleAgeVerificationFileChange}
                placeholder="Enter details"
              />
              <input
                className="input1-34"
                name="ageVerificationFile"
                value={ageVerificationFile.ageVerificationFile}
                type="file"
                onChange={handleAgeVerificationFileChange}
              />
              <button
                className="button1-34"
                onClick={handleAgeVerificationSubmit}
              >
                Submit
              </button>
            </div>
          </div>
        )}

        {policeReportFormVisible && (
          <div className="policereport34">
            <div className="policereport-container-34">
              <h4 className="heading1-34">Add Police Report:</h4>
              <input
                className="input1-34"
                type="text"
                name="policeReportText"
                value={policeReportFile.policeReportText}
                onChange={handlePoliceReportFileChange}
                placeholder="Enter details"
              />
              <input
                className="input1-34"
                type="file"
                name="policeReportFile"
                value={policeReportFile.policeReportFile}
                onChange={handlePoliceReportFileChange}
              />
              <button className="button1-34" onClick={handlePoliceReportSubmit}>
                Submit
              </button>
            </div>
          </div>
        )}

        <div className="DCPU-report-34">
          <div className="DCPU-part-1-34">
            <h3 className="heading1-34">Add DCPU Report</h3>
            <input
              className="input1-34"
              type="file"
              name="dcpuFile"
              value={dcpuFile.dcpuFile}
              onChange={handleDcpuFileChange}
              placeholder="abc@gmail.com"
            />
            <button className="button1-34" onClick={handleDcpuFileSubmit}>
              Submit
            </button>
          </div>

          <div className="DCPU-part-2-34">
            <h4 className="heading1-34">
              Send Files to DCPU for Final Report:
            </h4>
            <input
              className="DCPU-part-2-input-34"
              type="text"
              placeholder="abc@gmail.com"
            />
            <button className="button1-34">Send</button>
          </div>
        </div>
        <div className="CWC-report-34">
          <div className="CWC-part-1-34">
            <h3 className="heading1-34">Case Report to CWC:</h3>
            <input
              className="input1-34"
              type="file"
              name="cwcFile"
              value={cwcFile.cwcFile}
              onChange={handleCwcFileChange}
            />
            <button className="button1-34" onClick={handleCwcFileSubmit}>
              Submit
            </button>
          </div>
          <div className="CWC-part-2-34">
            <h4 className="heading1-34">
              Send Files to CWC for LFA Certificate:
            </h4>
            <input
              className="CWC-part-2-input-34"
              type="text"
              placeholder="abc@gmail.com"
            />
            <button className="button1-34">Send</button>
          </div>
        </div>

        <div className="SAA-report-34">
          <div className="SAA-part-1-34">
            <h3 className="input1-34">Case Files to SAA:</h3>
            <input
              className="input1-34"
              type="file"
              name="saaFile"
              value={saaFile.saaFile}
              onChange={handleSaaFileChange}
            />
            <button className="button1-34" onClick={handleSaaFileSubmit}>
              Submit
            </button>
          </div>
          <div className="SAA-part-2-34">
            <h4 className="heading1-34">
              Send Files to SAA for Medical Certificate:
            </h4>
            <input
              className="SAA-part-2-input-34"
              type="text"
              placeholder="abc@gmail.com"
            />
            <button className="button1-34">Send</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Multiform;
