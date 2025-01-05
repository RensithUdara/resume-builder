import React from "react";

function ResumePreview({ personalDetails, education, workExperience, skills }) {
  return (
    <div className="resume-preview">
      <h2 className="preview-title">Resume Preview</h2>
      <div className="resume">
        <h3 className="resume-name">{personalDetails.name}</h3>
        <p className="resume-contact">
          {personalDetails.email} | {personalDetails.phone} | {personalDetails.address}
        </p>

        <h4 className="resume-section">Education</h4>
        <ul>
          {education.map((edu, index) => (
            <li key={index} className="resume-item">
              <strong>{edu.institution}</strong> - {edu.degree} ({edu.year})
            </li>
          ))}
        </ul>

        <h4 className="resume-section">Work Experience</h4>
        <ul>
          {workExperience.map((work, index) => (
            <li key={index} className="resume-item">
              <strong>{work.company}</strong> - {work.position} ({work.duration})
            </li>
          ))}
        </ul>

        <h4 className="resume-section">Skills</h4>
        <ul className="skills-list">
          {skills.map((skill, index) => (
            <li key={index} className="skill-item">
              {skill}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default ResumePreview;