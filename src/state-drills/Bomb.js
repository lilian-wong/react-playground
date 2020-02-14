import React from 'react';

class Bomb extends React.Component{

    constructor(){
        super()
        this.state = { count: 0}
    }

    componentDidMount() { 
            this.interval = setInterval(() => {
            console.log(this.state.count)
            if(this.state.count<8){
                this.setState({count: this.state.count + 1})
            }
            else if(this.state.count>=8){
                this.setState({count: 0})
            }   
        }, 1000)
    }

    componentWillUnmount() {
        console.log('unmount');
        clearInterval(this.interval);
    }

    render(){
        let message = '';
        if(this.state.count%2===0&&this.state.count<8){
                message = 'tick'
        }
        else if(this.state.count%2===1&&this.state.count<8){
                message = 'tock'
        }
        else{
                message ='Boom!!!'
        }
        return(
            <div>
                <p>{message}</p>
            </div>
        )
    }
}

export default Bomb;