import React from 'react';
import './Accordion.css';

class Accordion extends React.Component{
    static defaultProps = {
        sections: [] 
    };

    state = {
        currentTabIndex: null
    };    
    
    handleButtonClick(index){
        this.setState({currentTabIndex: index})
    }

    renderContents(){
        const currentTab = this.state.currentTabIndex;
        console.log(this.props.sections[currentTab].content);
        return (
        <p>{this.props.sections[currentTab].content}</p>
        )
    }
    renderSections() {
        return this.props.sections.map((section, index) => (
            <li key={index}>
                <button onClick={() => this.handleButtonClick(index)}>
                    {section.title}
                </button>
                {index===this.state.currentTabIndex && this.renderContents()}
            </li>
        ))
    }

    render(){
        return(
            <div>
                <ul className = 'sections'>{this.renderSections()}</ul>
            </div>
        )
    }
}


export default Accordion;