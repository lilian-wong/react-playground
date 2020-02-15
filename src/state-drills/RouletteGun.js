import React from 'react';

let timeoutID;

class RouletteGun extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            chamber: null,
            spinningTheChamber: false
        }
    }
    
    spinTheChamber = () => {
        
        this.setState({spinningTheChamber: true})
        timeoutID = window.setTimeout(() => {
            let randomNumber = Math.floor(Math.random()*10) +1;
            this.setState({
                chamber: randomNumber,
                spinningTheChamber: false
            })
        }, 2000);
    }
  
    componentWillUnmount(){
        window.clearTimeout(timeoutID);
    }

    render(){

        let message = '';
        if(this.state.spinningTheChamber===true){
            message = 'spinning the chamber and pulling the trigger!';
        }
        else if(this.state.chamber===this.props.bulletInChamber){
            message = 'BANG!!!!'
        }
        else{
            message = 'you\'re safe!!'
        }

        return(
            <div>
                <button onClick = {this.spinTheChamber}>Pull the trigger!</button>
                <p>{message}</p>
            </div>
        )
    }
}

export default RouletteGun;