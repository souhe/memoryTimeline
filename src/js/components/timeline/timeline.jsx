var React = require('react');
var Event = require('./event.jsx');

var Timeline = React.createClass({
    propTypes: {
        events: React.PropTypes.array
    },
    render: function() {
        var events = this.props.events? this.props.events.map(function(item){
            return (
                <li>
                    <Event
                        title={item.title}
                        description={item.description}
                        startDate={item.startDate}
                        endDate={item.endDate}>                        
                    </Event>
                </li>
            );

        }): null;

        return (
            <ul className="timeline">
                {events}
            </ul>
        );
    }

});

module.exports = Timeline;
