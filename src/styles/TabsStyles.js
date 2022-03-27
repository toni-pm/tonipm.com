
import styled from 'styled-components'
import 'react-tabs/style/react-tabs.css'
import mixins from 'styles/mixins'

const StyledTabs = styled.div`
    .react-tabs {
        display: flex;
    }

    .react-tabs__tab-list {  
        display: flex;
        flex-direction: column;
        border: none;
        font-size: var(--fz-md);
    }

    .react-tabs__tab {
        padding: 12px 20px;
        width: 220px;
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
        padding: 30px;
        
        ul {
            ${mixins.fancyList};
        }

        h3 {
            margin-bottom: 2px;
            font-size: var(--fz-xl);
            font-weight: 500;
            line-height: 1.3;
        }

        .company {
            font-size: var(--fz-xl);
            color: var(--primary);
        }

        .location {
            font-size: var(--fz-md);
            color: var(--light-slate);
            margin: 5px 0;
        }

        .range {
            font-size: var(--fz-xs);
            color: var(--light-slate);
            margin: 5px 0 10px 0;
        }
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
            max-width: 100%;
        }
        
        .react-tabs__tab { 
            display: flex;
            justify-content: center;
            align-items: center;
        }
    }
`

export default StyledTabs
