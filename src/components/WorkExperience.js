import React from "react";

function WorkExperience({ workExperience, setWorkExperience, addWorkExperience }) {
  const handleChange = (e, index) => {
    const { name, value } = e.target;
    const updatedWorkExperience = [...workExperience];
    updatedWorkExperience[index][name] = value;
    setWorkExperience(updatedWorkExperience);
  };

  return (
    <div className="form-section">
      <h2 className="section-title">Work Experience</h2>
      {workExperience.map((work, index) => (
        <div key={index} className="work-item">
          <div className="input-group">
            <label>Company</label>
            <input
              type="text"
              name="company"
              placeholder="Tech Corp"
              value={work.company}
              onChange={(e) => handleChange(e, index)}
            />
          </div>
          <div className="input-group">
            <label>Position</label>
            <input
              type="text"
              name="position"
              placeholder="Software Engineer"
              value={work.position}
              onChange={(e) => handleChange(e, index)}
            />
          </div>
          <div className="input-group">
            <label>Duration</label>
            <input
              type="text"
              name="duration"
              placeholder="Jan 2020 - Present"
              value={work.duration}
              onChange={(e) => handleChange(e, index)}
            />
          </div>
        </div>
      ))}
      <button type="button" className="add-button" onClick={addWorkExperience}>
        + Add Work Experience
      </button>
    </div>
  );
}

export default WorkExperience;