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
      <h2>Work Experience</h2>
      {workExperience.map((work, index) => (
        <div key={index}>
          <input
            type="text"
            name="company"
            placeholder="Company"
            value={work.company}
            onChange={(e) => handleChange(e, index)}
          />
          <input
            type="text"
            name="position"
            placeholder="Position"
            value={work.position}
            onChange={(e) => handleChange(e, index)}
          />
          <input
            type="text"
            name="duration"
            placeholder="Duration"
            value={work.duration}
            onChange={(e) => handleChange(e, index)}
          />
        </div>
      ))}
      <button type="button" onClick={addWorkExperience}>
        Add Work Experience
      </button>
    </div>
  );
}

export default WorkExperience;