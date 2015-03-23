var React = require('react');

var FontIcon = require('./fontIcon.jsx');

var EventMenu = React.createClass({

    propTypes: {
        isOpen: React.PropTypes.bool,
        onEditClick : React.PropTypes.func,
        onRemoveClick: React.PropTypes.func
    },

    render: function() {

        var menu = this.props.isOpen? (
            <div className="event-menu">

                <FontIcon className="icon-trash-1" onClick={this.props.onRemoveClick} title="Remove"/>
                <FontIcon className="icon-pencil-alt" onClick={this.props.onEditClick} title="Edit"/>
            </div>
        ): null;

        return menu;
    }

});

module.exports = EventMenu;
