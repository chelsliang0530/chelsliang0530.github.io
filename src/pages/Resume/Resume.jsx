import React from 'react';
import { FaBookReader, FaRegBookmark } from "react-icons/fa";
import TimelineItem from './TimelineItem';
import SkillItem from './SkillItem';

const Resume = () => {
  return (
    <section>
      <header>
        <h2 className="h2 article-title">Resume</h2>
      </header>

      <div className="timeline">
        <div className="title-wrapper">
          <div className="icon-box">
            <FaBookReader />
          </div>
          <h3 className="h3">Education</h3>
        </div>
        <ol className="timeline-list">
          <TimelineItem
            title="Georgia Institute of Technology"
            date="2021 — 2024"
            description="Computer Science, Master of Science"
          />
          <TimelineItem
            title="Boston University"
            date="2015 — 2017"
            description="Financial Mathematics, Master of Science"
          />
        </ol>
      </div>

    </section>
  );
};

export default Resume;
