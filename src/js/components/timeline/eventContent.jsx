var React = require('react');

var EventMenu = require('./eventMenu.jsx');

var EventContent = React.createClass({

    propTypes: {
        title: React.PropTypes.string,
        description: React.PropTypes.string,
        people: React.PropTypes.array,
        onChange: React.PropTypes.func
    },

    getInitialState: function() {
        return {
            isMenuOpen: false
        };
    },

    handleMouseEnter: function(e){
        this.setState({ isMenuOpen: true });
    },

    handleMouseLeave: function(e){
        this.setState({ isMenuOpen: false });
    },

    render: function() {
        return (
            <div className="timeline-content" onMouseEnter={this.handleMouseEnter} onMouseLeave={this.handleMouseLeave}>
                <h1 className="title">{this.props.title}</h1>
                <div className="description">{this.props.description}</div>
                <ul>{this.props.people}</ul>
                <EventMenu isOpen={this.state.isMenuOpen} />
            </div>
        );
    }

});

module.exports = EventContent;
