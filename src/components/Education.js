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
      <h2 className="section-title">
        <i className="fas fa-graduation-cap"></i> Education
      </h2>
      {education.map((edu, index) => (
        <div key={index} className="education-item">
          <div className="input-group">
            <input
              type="text"
              name="institution"
              placeholder=" "
              value={edu.institution}
              onChange={(e) => handleChange(e, index)}
              required
            />
            <label>Institution</label>
          </div>
          <div className="input-group">
            <input
              type="text"
              name="degree"
              placeholder=" "
              value={edu.degree}
              onChange={(e) => handleChange(e, index)}
              required
            />
            <label>Degree</label>
          </div>
          <div className="input-group">
            <input
              type="text"
              name="year"
              placeholder=" "
              value={edu.year}
              onChange={(e) => handleChange(e, index)}
              required
            />
            <label>Year</label>
          </div>
        </div>
      ))}
      <button type="button" className="add-button" onClick={addEducation}>
        <i className="fas fa-plus"></i> Add Education
      </button>
    </div>
  );
}

export default Education;