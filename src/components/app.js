import React from 'react';
import changeName from '../store/actions.js';
import { connect } from 'react-redux';

class App extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     foo:'bar',
  //   };
  // }

  
  // handleChange = () => {
  //   this.setState({foo:Math.random()});
  // }
  
  render() {
    return (
      <div onClick={this.props.handleChange}>
        {this.props.stuff.foo}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  stuff: state.someStuff,
});

const mapDispatchToProps = dispatch => ({
  handleChange: () => dispatch(changeName()),
});


export default connect(mapStateToProps, mapDispatchToProps)(App);