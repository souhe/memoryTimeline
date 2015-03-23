var React = require('react'),
    classnames = require('classnames');


var FontIcon = React.createClass({

    render: function() {
        var classes = classnames(this.props.className, 'font-icon');

        return (
            <span className={classes}/>
        );
    }

});

module.exports = FontIcon;
