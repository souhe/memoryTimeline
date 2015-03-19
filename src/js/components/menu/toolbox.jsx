var React = require('react');

var Toolbox = React.createClass({

    render: function() {
        return (
            <div className="toolbox">
                {this.props.children}
            </div>
        );
    }

});

module.exports = Toolbox;
