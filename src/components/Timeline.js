import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';

class Timeline extends Component{
    render() {
        return (
          <div>timeline</div>  
        );
    }
}

export default connect((state) => ({}))(Timeline);