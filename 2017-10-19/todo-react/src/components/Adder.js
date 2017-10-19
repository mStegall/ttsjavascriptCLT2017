import React from 'react';

const name = 'adder';
const placeholder = 'new item';
const label = 'Add';

class Adder extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      text: '',
    };
    this._onChange = this._onChange.bind(this);
    this._onSubmit = this._onSubmit.bind(this);
  }

  _onChange(event) {
    const text = event.target.value;
    this.setState({
      text,
    });
  }

  _onSubmit(event) {
    // http://api.jquery.com/event.preventDefault/
    event.preventDefault(); // comment out this line to see why you need it :(

    this.setState({
      text: '',
    })
  }

  render () {
    return (
      <form name={name} onSubmit={this._onSubmit}>
        <input type="text"
          placeholder={placeholder}
          name={name}
          onChange={this._onChange}
          value={this.state.text}
        />
        <button type="submit">{label}</button>
      </form>
    );
  }
}

export default Adder;
