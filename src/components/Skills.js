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
      <h2>Skills</h2>
      <input
        type="text"
        placeholder="Add Skill"
        value={skill}
        onChange={(e) => setSkill(e.target.value)}
      />
      <button type="button" onClick={addSkill}>
        Add Skill
      </button>
      <ul>
        {skills.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
    </div>
  );
}

export default Skills;