import React from "react";

function ResumePreview({ personalDetails, education, workExperience, skills }) {
  return (
    <div className="resume-preview">
      <h2>Resume Preview</h2>
      <div className="resume">
        <h3>{personalDetails.name}</h3>
        <p>{personalDetails.email} | {personalDetails.phone} | {personalDetails.address}</p>

        <h4>Education</h4>
        <ul>
          {education.map((edu, index) => (
            <li key={index}>
              <strong>{edu.institution}</strong> - {edu.degree} ({edu.year})
            </li>
          ))}
        </ul>

        <h4>Work Experience</h4>
        <ul>
          {workExperience.map((work, index) => (
            <li key={index}>
              <strong>{work.company}</strong> - {work.position} ({work.duration})
            </li>
          ))}
        </ul>

        <h4>Skills</h4>
        <ul>
          {skills.map((skill, index) => (
            <li key={index}>{skill}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default ResumePreview;