import React, { useState, useEffect, useRef } from 'react';
import Fade from 'react-reveal/Fade'
import { Trans } from 'gatsby-plugin-react-i18next';
import { education } from 'config'
import styled from 'styled-components'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const StyledTabList = styled.div`
`;

const Education = () => {

  return (
    <Fade bottom duration={800} easing={'cubic-bezier(0.5, 0, 0, 1)'} distance={'50px'}>
      <section id='education'>
        <h2><Trans>Education</Trans></h2>
        <div className='inner'>


          <StyledTabList>
            <Tabs>
              <TabList>
                {education && education.map((item, i) => <Tab key={i}><Trans>{item.name}</Trans></Tab>)}
              </TabList>

              {education && education.map((item, i) =>
                <TabPanel key={i}>
                  <div>
                    <p>{item.location}</p>
                    <p>{item.year} {item.active ? ' - Present' : ''}</p>
                    <ul>
                      {item.topics && item.topics.map((topic, j) => <li key={j}>{topic}</li>)}
                    </ul>
                  </div>
                </TabPanel>)}
            </Tabs>
          </StyledTabList>
        </div>
      </section>
    </Fade >
  )
}

export default Education
