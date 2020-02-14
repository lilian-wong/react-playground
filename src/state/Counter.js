import React from 'react';

class Counter extends React.Component {
    constructor(props) {
        console.log('props in constructor', props);
        super(props)
        this.state = {
          count: props.count
      }
        this.handleButtonClick = this.handleButtonClick.bind(this)
    }

    static defaultProps = {
      count: 0,
        step: 1
    }

    handleButtonClick = () => {
        console.log('props in handleButtonClick', this.props)
        this.setState({ count: this.state.count + this.props.step })
    }

  render() {
    return (
      <div>
       <p>The current count: {this.state.count}</p>
      <button
        onClick={this.handleButtonClick}
        >
        Add 1
      </button>
      </div>
    )
  }
}

export default Counter;