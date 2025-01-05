import React, { useState } from "react";
import PersonalDetails from "./components/PersonalDetails";
import Education from "./components/Education";
import WorkExperience from "./components/WorkExperience";
import Skills from "./components/Skills";
import ResumePreview from "./components/ResumePreview";
import { saveAs } from "file-saver";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import "./App.css";

function App() {
  const [personalDetails, setPersonalDetails] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    profilePicture: null,
  });

  const [education, setEducation] = useState([
    { institution: "", degree: "", year: "" },
  ]);

  const [workExperience, setWorkExperience] = useState([
    { company: "", position: "", duration: "" },
  ]);

  const [skills, setSkills] = useState([]);
  const [darkMode, setDarkMode] = useState(false);

  const addEducation = () => {
    setEducation([...education, { institution: "", degree: "", year: "" }]);
  };

  const addWorkExperience = () => {
    setWorkExperience([...workExperience, { company: "", position: "", duration: "" }]);
  };

  const handleProfilePicture = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setPersonalDetails({ ...personalDetails, profilePicture: reader.result });
      };
      reader.readAsDataURL(file);
    }
  };

  const downloadResume = () => {
    const resumeElement = document.getElementById("resume-preview");
    html2canvas(resumeElement).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF();
      const imgProps = pdf.getImageProperties(imgData);
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
      pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
      pdf.save("resume.pdf");
    });
  };

  return (
    <div className={`App ${darkMode ? "dark-mode" : ""}`}>
      <h1 className="app-title">Online Resume Builder</h1>
      <div className="controls">
        <button onClick={() => setDarkMode(!darkMode)} className="mode-toggle">
          {darkMode ? "Light Mode" : "Dark Mode"}
        </button>
        <button onClick={downloadResume} className="download-button">
          Download Resume
        </button>
      </div>
      <div className="builder-container">
        <div className="forms-container">
          <PersonalDetails
            personalDetails={personalDetails}
            setPersonalDetails={setPersonalDetails}
            handleProfilePicture={handleProfilePicture}
          />
          <Education education={education} setEducation={setEducation} addEducation={addEducation} />
          <WorkExperience
            workExperience={workExperience}
            setWorkExperience={setWorkExperience}
            addWorkExperience={addWorkExperience}
          />
          <Skills skills={skills} setSkills={setSkills} />
        </div>
        <ResumePreview
          personalDetails={personalDetails}
          education={education}
          workExperience={workExperience}
          skills={skills}
        />
      </div>
    </div>
  );
}

export default App;