import React from "react"
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { Trans } from 'gatsby-plugin-react-i18next';
import styled from 'styled-components'
import 'react-tabs/style/react-tabs.css';

const StyledTabs = styled.div`
    .react-tabs {
        display: flex;
    }

    .react-tabs__tab-list {  
        display: flex;
        flex-direction: column;
        min-width: 220px;
        max-width: 270px;
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
`

const CustomTabList = ({ items, title, panel }) => {

    return (
        <StyledTabs>
            <Tabs>
                <TabList>
                    {items && items.map((item, i) => <Tab key={i}><Trans>{title(item)}</Trans></Tab>)}
                </TabList>

                {items && items.map((item, i) =>
                    <TabPanel key={i}>
                        {
                            panel(item)
                        }
                    </TabPanel>)}
            </Tabs>
        </StyledTabs>
    )
}

export default CustomTabList