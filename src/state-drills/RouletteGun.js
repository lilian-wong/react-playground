import React from 'react';

class RouletteGun extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            chamber: null,
            spinningTheChamber: false
        }
    }
    
    updatespinningTheChamber = () => {
        this.setState({spinningTheChamber: true})
        window.setTimeout(() => {
            let randomNumber = Math.floor(Math.random()*10) +1;
            console.log(randomNumber===this.props.bulletInChamber);
         
        }, 2000);
    }
  
    render(){
        return(
            <div>
                <p></p>
                <button onClick = {this.updatespinningTheChamber}>Pull the trigger!</button>
            </div>
        )
    }
}

export default RouletteGun;