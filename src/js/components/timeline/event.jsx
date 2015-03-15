var React = require('react');

var Event = React.createClass({
    propTypes: {
        title: React.PropTypes.string,
        description: React.PropTypes.string,
        startDate: React.PropTypes.string,
        endDate: React.PropTypes.string,
        people: React.PropTypes.array
    },
    render: function() {
        var people = this.props.people? this.props.people.map(function(item){
            return <li>item</li>
        }): null;

        return (
            <div>
                <div className="timeline-dot"></div>
                <div className="timeline-content">
                    <h1 className="title">{this.props.title}</h1>
                    <div className="description">{this.props.description}</div>
                    <ul>{people}</ul>
                </div>

            </div>
        );
    }

});

module.exports = Event;
