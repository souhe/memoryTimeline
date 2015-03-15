var React = require('react');

var FileList = React.createClass({
    propTypes: {
        onFileClick: React.PropTypes.func,
        files: React.PropTypes.array
    },

    // handleFlieClick: function(i){
    //
    // },

    render: function() {
        var files = this.props.files.map(function(item){
            return <li><a href="#" onClick={this.props.onFileClick}>timeline.js</a></li>
        });
        //TODO: use files
        return (
            <ul>
                <a href="#" onClick={this.props.onFileClick}>timeline.js</a>
            </ul>
        );
    }

});

module.exports = FileList;
