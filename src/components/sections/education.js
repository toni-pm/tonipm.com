import React, { useState, useEffect, useRef } from 'react';
import Fade from 'react-reveal/Fade'
import { education } from 'config'
import styled from 'styled-components'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const StyledTabList = styled.div`
.react-tabs {
  display: flex;
}

.react-tabs__tab-list {  
  display: flex;
  flex-direction: column;
  width: 200px;
  border: none;
}

.react-tabs__tab {
  padding: 12px 20px;
  border-left: 4px solid var(--bg-color);

  &:hover {
    background: var(--bg-color-hover);
    border-left: 4px solid var(--bg-color-hover);
  }

  &:focus:after {
    content: none;
  }

  &.react-tabs__tab--selected {
    background: var(--bg-color-hover);
    border-color: var(--bg-color-hover);
    border-left: 4px solid var(--primary);
    color: white;
    border-radius: 0px;
  }
}

.react-tabs__tab-panel {
  padding: 30px
}

@media (max-width: 768px) {
  .react-tabs {
    display: block;
  }

  .react-tabs__tab-list {  
    display: flex;
    flex-direction: row;
    overflow: auto hidden;
    width: 100%;
  }
  
  .react-tabs__tab { 
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
`;

const Education = () => {

  const [activeTabId, setActiveTabId] = useState(0);
  const [tabFocus, setTabFocus] = useState(null);
  const tabs = useRef([]);

  console.log(education)
  return (
    <Fade bottom duration={800} easing={'cubic-bezier(0.5, 0, 0, 1)'} distance={'50px'}>
      <section id='education'>
        <h2>Education</h2>
        <div className='inner'>


          <StyledTabList>
            <Tabs>
              <TabList>
                {education && education.map((item, i) => <Tab key={i}>{item.name}</Tab>)}
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
