var React = require('react');
var moment = require('moment');

var EventContent = require('./eventContent.jsx');

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

        var startDate = moment(this.props.startDate,  ["DD/MM/YYYY", "MM/YYYY"]);
        var stringStartDate = startDate.format('MMM YYYY');

        return (
            <div>
                <div className="timeline-date">{stringStartDate}</div>
                <div className="timeline-dot"></div>
                <EventContent title={this.props.title} description={this.props.description} people={people} />
            </div>
        );
    }

});

module.exports = Event;
