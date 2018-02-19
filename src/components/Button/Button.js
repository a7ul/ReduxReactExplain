import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {increment} from '../../redux/actions';

class Button extends React.Component {
render() {
    return <button onClick={this.props.incrementCounter}>CLICK</button>;
}
}
Button.defaultProps = {
};
Button.propTypes = {
};

const mapDispatchToProps = (dispatch)=>{
    return {
        incrementCounter: ()=>dispatch(increment())
    }
}
const mapStateToProps = ()=>({})

export default connect(mapStateToProps, mapDispatchToProps)(Button);