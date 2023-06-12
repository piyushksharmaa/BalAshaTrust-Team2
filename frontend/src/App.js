import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Dashboard_grassroot from "./components/Grassroot_worker/Dashboard1";
import Dashboard_casemanagement from "./components/Casemanagement/Dashboard2";
import Dashboard_operational from "./components/Operational/Dashboard3";
import "./styles/Header.scss";
import "./styles/App.scss";
import "./styles/Footer.scss";
import "./styles/Home.scss";
import Dashboard_operational_analytics from "./components/Analytics/Dashboard3";
import Login from "./components/Login/LoginMain";
import RegisterMain from "./components/Login/RegisterMain";
// import Multistep from "./components/Multistep";
import Multiform from "./components/Childrendetails/MultiFormNew";
import ChildForm from "./components/Childrendetails/Childrendata";
import { AddChildDataPage } from "./components/Multistep";
import Supportmain from "./components/support/supportmain";
import DonationForm from "./components/support/donate";
import EventForm from "./components/support/event";
function App() {
  const login_details = {
    login: true,
  };
  return (
    <div className="App">
      <Router>
        <Header login_details={login_details} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/grassroot/dashboard"
            element={<Dashboard_grassroot />}
          />
          <Route
            path="/casemanagement/dashboard"
            element={<Dashboard_casemanagement />}
          />
          <Route
            path="/operational/dashboard"
            element={<Dashboard_operational />}
          />
          <Route
            path="/operational/dashboard/analytics"
            element={<Dashboard_operational_analytics />}
          />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<RegisterMain />} />
          {/* <Route path="/multistep" element={<Multistep />} /> */}
          <Route path="/childrendetails" element={<ChildForm />} />
          <Route path="/adddetails" element={<Multiform />} />
          <Route
            exact
            path="/orphanage/dashboard"
            element={<AddChildDataPage />}
          />
          <Route path="/support" element={<Supportmain />} />
          <Route path="/donate" element={<DonationForm />} />
          <Route path="/events" element={<EventForm />} />

          <Route />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
