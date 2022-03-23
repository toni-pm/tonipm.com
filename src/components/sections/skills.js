import React, { useState, useEffect } from 'react';
import { Trans } from 'gatsby-plugin-react-i18next';
import { skills } from 'config'
import TagCloud from 'TagCloud'
import Fade from 'react-reveal/Fade'

const Skills = () => {

  const container = '.tagcloud';
  const texts = skills.map(skill => skill.name);
  const options = {
    radius: 300,
    maxSpeed: 'slow'
  };
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    if (isMounted) {
      return;
    }
    TagCloud(container, texts, options);
    setIsMounted(true)
  }, []);

  return (
    <Fade bottom duration={800} easing={'cubic-bezier(0.5, 0, 0, 1)'} distance={'50px'}>
      <section id='skills'>
        <h2><Trans>Skills</Trans></h2>
        <div className='tagcloud'></div>

        <div className='inner'>
          <p>
            <Trans>skills_content</Trans>
          </p>
          <ul>
            {skills && skills.map((skill, i) =>
              <li key={i}>
                <span>{skill.name}</span>
                <div class="skills"><div class="skills-inner" style={{ "width": `${skill.level}%` }}>{skill.level}%</div></div>
              </li>)}
          </ul>
        </div>
      </section>
    </Fade>
  )
}

export default Skills
