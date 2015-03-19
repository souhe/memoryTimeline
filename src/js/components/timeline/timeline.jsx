var React = require('react');
var Event = require('./event.jsx');
var YearIndicator = require('./yearIndicator.jsx');

var Timeline = React.createClass({
    propTypes: {
        events: React.PropTypes.array
    },

    elems: [],

    componentDidMount: function() {
        console.log(this);
        var refs = this.refs;
        window.onscroll = function(){
            for(var prop in refs){
                if(refs.hasOwnProperty(prop)){
                    var top = React.findDOMNode(refs[prop]).getBoundingClientRect().top;
                    console.log("TOP", top);
                }
            }


            // var element = React.findDOMNode(this.refs.myInput);
            // if( element.getBoundingClientRect().top <= 0){
            //     this.setState({actualDate: data})
            // }
        }
    },

    getInitialState: function() {
        return {
            actualDate: '2011'
        };
    },

    render: function() {
        var events = this.props.events? this.props.events.map(function(item){
            return (
                <li>
                    <Event ref={item.startDate}
                        title={item.title}
                        description={item.description}
                        startDate={item.startDate}
                        endDate={item.endDate}>
                    </Event>
                </li>
            );

        }): null;

        return (
            <div>
                {/*<YearIndicator actualDate={this.state.actualDate} />*/}
                <ul className="timeline">
                    {events}
                </ul>
            </div>
        );
    }

});

module.exports = Timeline;
