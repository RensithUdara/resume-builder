import React from "react";

function Education({ education, setEducation, addEducation }) {
  const handleChange = (e, index) => {
    const { name, value } = e.target;
    const updatedEducation = [...education];
    updatedEducation[index][name] = value;
    setEducation(updatedEducation);
  };

  return (
    <div className="form-section">
      <h2>Education</h2>
      {education.map((edu, index) => (
        <div key={index}>
          <input
            type="text"
            name="institution"
            placeholder="Institution"
            value={edu.institution}
            onChange={(e) => handleChange(e, index)}
          />
          <input
            type="text"
            name="degree"
            placeholder="Degree"
            value={edu.degree}
            onChange={(e) => handleChange(e, index)}
          />
          <input
            type="text"
            name="year"
            placeholder="Year"
            value={edu.year}
            onChange={(e) => handleChange(e, index)}
          />
        </div>
      ))}
      <button type="button" onClick={addEducation}>
        Add Education
      </button>
    </div>
  );
}

export default Education;