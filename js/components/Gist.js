var Gist = React.createClass({
    render: function(){
        return(
            <p className="bg-info">
                {this.props.username}'s last Gist is <a target="_blank" href={this.props.url}>here</a>
            </p>
        );
    }
});

export default Gist;