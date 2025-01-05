import React, { useState } from "react";
import PersonalDetails from "./components/PersonalDetails";
import Education from "./components/Education";
import WorkExperience from "./components/WorkExperience";
import Skills from "./components/Skills";
import ResumePreview from "./components/ResumePreview";
import "./App.css";

function App() {
  const [personalDetails, setPersonalDetails] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
  });

  const [education, setEducation] = useState([
    { institution: "", degree: "", year: "" },
  ]);

  const [workExperience, setWorkExperience] = useState([
    { company: "", position: "", duration: "" },
  ]);

  const [skills, setSkills] = useState([]);

  const addEducation = () => {
    setEducation([...education, { institution: "", degree: "", year: "" }]);
  };

  const addWorkExperience = () => {
    setWorkExperience([...workExperience, { company: "", position: "", duration: "" }]);
  };

  return (
    <div className="App">
      <h1>Online Resume Builder</h1>
      <div className="builder">
        <div className="forms">
          <PersonalDetails
            personalDetails={personalDetails}
            setPersonalDetails={setPersonalDetails}
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