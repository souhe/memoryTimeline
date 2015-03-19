var React = require('react');

var FontIcon = React.createClass({

    render: function() {
        return (
            <span className={this.props.className}/>
        );
    }

});

module.exports = FontIcon;
