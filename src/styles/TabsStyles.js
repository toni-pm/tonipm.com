
import styled from 'styled-components'
import mixins from 'styles/mixins'

const StyledTabs = styled.div`

    display: flex;
    flex-direction: row;
    width: 100%;
    margin: 20px 0;

    .tab {
        min-width: 250px;
        width: 250px;
        
        button {
            display: block;
            background-color: transparent;
            color: var(--text-color);
            padding: 22px 16px;
            width: 100%;
            border: none;
            outline: none;
            text-align: left;
            cursor: pointer;
            transition: 0.3s;
            font-size: var(--fz-lg);
            border-left: 3px solid var(--primary-alpha);
    
            &:hover {
                background: var(--bg-color-hover);
            }
            
            &.active {
                background: var(--bg-color-hover);
                border-left: 3px solid var(--primary);
            }
        }
    }
    
    .tabcontent {
        display: none;
        padding: 0px 12px;
        
        ul {
            ${mixins.fancyList};
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

    .gallery {
        padding: 0px 12px;
    }

    
    @media (max-width: 768px) {
        flex-direction: column;

        .tab {
            display: flex;
            flex-direction: row;
            overflow-x: auto;
            width: 100%;
        
            button {
                min-width: 160px;
                border-left: none;
                border-bottom: 3px solid var(--primary-alpha);
                
                &.active {
                    border-left: none;
                    border-bottom: 3px solid var(--primary);
                }
            }
        }

        .tabcontent {
            display: none;
            padding-top: 12px;

            h3 {
                margin-bottom: 2px;
                font-size: var(--fz-xl);
                font-weight: 500;
                line-height: 1.3;
            }
        }
    }
`

export default StyledTabs
