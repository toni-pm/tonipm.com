import React from 'react'
import Fade from 'react-reveal/Fade'
import { experience } from 'config'
import styled from 'styled-components'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const Experience = () => {
  return (
    <Fade bottom duration={800} easing={'cubic-bezier(0.5, 0, 0, 1)'} distance={'50px'}>
      <section id='experience'>
        <h2>Experience</h2>

        <div className='inner'>
          <div>
            <Tabs>
              <TabList>
                {experience && experience.map((item, i) => <Tab key={i}>{item.company}</Tab>)}
              </TabList>

              {experience && experience.map((item, i) =>
                <TabPanel key={i}>
                  <div>
                    <h3>{item.job}</h3>
                    <p>{item.start} - {item.active ? ' Present' : item.end}</p>
                    <ul>
                      {item.functions && item.functions.map((func, j) => <li key={j}>{func}</li>)}
                    </ul>
                  </div>
                </TabPanel>)}
            </Tabs>
          </div>
        </div>
      </section>
    </Fade>
  )
}

export default Experience
