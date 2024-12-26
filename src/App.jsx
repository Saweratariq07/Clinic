import { Route, Routes } from "react-router-dom";
import './App.css';
import Contact from "./components/contact/Contact";
import Main from "./components/main/Main";
import Rights from "./components/patient/Rights";
import Statements from "./components/state/Statements";
import Appoinment from "./components/appoin/Appoinment";
import Links from "./components/links/Links";
import Cookie from "./components/cookie/Cookie";
import Terms from "./components/terms/Terms";
import Doctor from "./components/doctors/Doctor";
import Doctors from "./components/doctor/Doctors";
import Blog from "./components/blog/Blog";
import Statement from "./components/statement/Statement";
import Patients from "./components/patients/Patients";
import Sects from "./components/sects/Sects";
import Footer from "./components/footer/Footer";
import Meen from "./components/meen/Meen";
import Service from "./components/service/Service";

function App() {
  return (
    <div className='container-fluid'>

      <Routes>
 <Route path="/" element={<Main />} />
 <Route path="/state" element={<Statements />} />
 <Route path="/main" element={<Main/>} />
 <Route path="/contact" element={<Contact />} />
 <Route path="/patient" element={<Rights />} />
 {/* <Route path="/privacyPolicy" element={<Privacy />} /> */}
 <Route path="/appoin" element={<Appoinment />} />
 <Route path="/links" element={<Links />} />
 <Route path="/cookie" element={<Cookie />} />
 <Route path="/terms" element={<Terms />} />
 <Route path="/doctors" element={<Doctor />} />
 <Route path="/meen" element={<Meen />} /> 
 <Route path="/service" element={<Service />} />
 <Route path="/doctor" element={<Doctors />} />
 <Route path="/blog" element={<Blog />} />
 <Route path="/statement" element={<Statement />} />
 <Route path="/patients" element={<Patients />} />
 <Route path="/sects" element={<Sects />} /> 
 {/* <Route path="/hours" element={<Hours />} /> */}
 {/* <Route path="/servs" element={<Servs />} /> */}
 {/* <Route path="/dent" element={<Dentalss />} /> */}
 {/*
 <Route path="/fees" element={<FeesSection />} />
 <Route path="/info" element={<Inform />} />
 <Route path="/appoinment" element={<Appoin />} />
 <Route path="/navbar" element={<Heeder />} />
 <Route path="/open" element={<Open />} />
 <Route path="/fee" element={<Fee />} />
 <Route path="/blog" element={<Blog />} />

 <Route path="/link" element={<Link />} /> */}
 
 {/* <Route path="/cont" element={<Cont />} />
 */}


 </Routes>
 <Footer />
    </div>
  );
}

export default App;
