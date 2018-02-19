import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

class TextShow extends React.Component {
render() {
    return <div>{this.props.message}{this.props.text}</div>;
}
}
TextShow.defaultProps = {
};
TextShow.propTypes = {
};

const mapStateToProps = (state)=>{
    return {
        text: state.counter.count
    }
}

const mapDispatchToProps = ()=>{
    return {};
}
export default connect(mapStateToProps, mapDispatchToProps)(TextShow);