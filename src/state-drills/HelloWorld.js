import React from 'react';

class HelloWorld extends React.Component{
    constructor(){
        super()
        this.state = {
            who: 'world'
        }
    }
    sayHelloWorld = () => { this.setState({who: 'Hello, world!'}) }
    sayHelloFriend = () => { this.setState({who: 'Hello, friend!'}) }
    sayHelloReact = () => { this.setState({who: 'Hello, React!'}) }

    render(){
        return (
           <div>
               <button onClick={this.sayHelloWorld}>World</button>
               <button onClick={this.sayHelloFriend}>Friend</button>
               <button onClick={this.sayHelloReact}>React</button>
                <p>{this.state.who}</p>
           </div>
        )
    }
}

export default HelloWorld;