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
      <h2 className="section-title">
        <i className="fas fa-briefcase"></i> Work Experience
      </h2>
      {workExperience.map((work, index) => (
        <div key={index} className="work-item">
          <div className="input-group">
            <input
              type="text"
              name="company"
              placeholder=" "
              value={work.company}
              onChange={(e) => handleChange(e, index)}
              required
            />
            <label>Company</label>
          </div>
          <div className="input-group">
            <input
              type="text"
              name="position"
              placeholder=" "
              value={work.position}
              onChange={(e) => handleChange(e, index)}
              required
            />
            <label>Position</label>
          </div>
          <div className="input-group">
            <input
              type="text"
              name="duration"
              placeholder=" "
              value={work.duration}
              onChange={(e) => handleChange(e, index)}
              required
            />
            <label>Duration</label>
          </div>
        </div>
      ))}
      <button type="button" className="add-button" onClick={addWorkExperience}>
        <i className="fas fa-plus"></i> Add Work Experience
      </button>
    </div>
  );
}

export default WorkExperience;