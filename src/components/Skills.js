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
      <h2 className="section-title">Skills</h2>
      <div className="input-group">
        <label>Add Skill</label>
        <input
          type="text"
          placeholder="e.g., JavaScript, React"
          value={skill}
          onChange={(e) => setSkill(e.target.value)}
        />
        <button type="button" className="add-button" onClick={addSkill}>
          + Add Skill
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