var React = require('react');

var YearIndicator = React.createClass({
    propTypes: {
        actualDate: React.PropTypes.object
    },
    render: function() {
        return (
            <div >
                {this.props.actualDate}
            </div>
        );
    }

});

module.exports = YearIndicator;
