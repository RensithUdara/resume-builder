import React, { useState } from "react";

function Skills({ skills, setSkills }) {
  const [skill, setSkill] = useState("");

  const addSkill = () => {
    if (skill.trim() !== "") {
      setSkills([...skills, skill]);
      setSkill("");
    }
  };

  return (
    <div className="form-section">
      <h2 className="section-title">
        <i className="fas fa-tools"></i> Skills
      </h2>
      <div className="input-group">
        <input
          type="text"
          placeholder=" "
          value={skill}
          onChange={(e) => setSkill(e.target.value)}
        />
        <label>Add Skill</label>
        <button type="button" className="add-button" onClick={addSkill}>
          <i className="fas fa-plus"></i> Add Skill
        </button>
      </div>
      <ul className="skills-list">
        {skills.map((skill, index) => (
          <li key={index} className="skill-item">
            {skill}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Skills;