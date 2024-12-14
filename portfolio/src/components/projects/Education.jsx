import React from "react";
import "./Education.css"
import { education } from "../../dataofeducation/DataApi";
function Education() {
  return (
    <div className="container">
      <h1 className="heading">Education</h1>
      <p className="description">
        My education has been a journey of self-discovery and growth. My educational details are as follows.
      </p>
      <div className="main-timeline">
        {education.map((item, index) => (
          <div key={item.id} className={`timeline ${index % 2 === 0 ? 'left' : 'right'}`}>
            <div className="time">
              {index % 2 === 0 ? (
                <>
                  <img src={item.src} alt={`${item.institution} logo`} className="logo" />
                  <p className="date">{item.date}</p>
                </>
              ) : (
                <>
                  <p className="date">{item.date}</p>
                  <img src={item.src} alt={`${item.institution} logo`} className="logo" />
                </>
              )}
            </div>
            <div className="card">
              <div className="card-body">
                <div className="timeline-icon">
                  <img src={item.src} alt={`${item.institution} logo`} className="icon" />
                </div>
                <div className="card-text">
                  <h4 className="institution">{item.institution}</h4>
                  <span className="degree">{item.degree}</span>
                  <br />
                  <span className="date">{item.date}</span>
                </div>
              </div>
              <div className="additional-info">
                <span>Grade: {item.grade}</span>
                <br />
                <span>{item.description}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="footer">
        <img src="../src/assets/education.png" alt="university logo" className="logo" />
      </div>
    </div>
  );
}

export default Education;
