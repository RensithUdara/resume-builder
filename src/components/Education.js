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
      <h2 className="section-title">Education</h2>
      {education.map((edu, index) => (
        <div key={index} className="education-item">
          <div className="input-group">
            <label>Institution</label>
            <input
              type="text"
              name="institution"
              placeholder="University of Example"
              value={edu.institution}
              onChange={(e) => handleChange(e, index)}
            />
          </div>
          <div className="input-group">
            <label>Degree</label>
            <input
              type="text"
              name="degree"
              placeholder="Bachelor of Science"
              value={edu.degree}
              onChange={(e) => handleChange(e, index)}
            />
          </div>
          <div className="input-group">
            <label>Year</label>
            <input
              type="text"
              name="year"
              placeholder="2015 - 2019"
              value={edu.year}
              onChange={(e) => handleChange(e, index)}
            />
          </div>
        </div>
      ))}
      <button type="button" className="add-button" onClick={addEducation}>
        + Add Education
      </button>
    </div>
  );
}

export default Education;