var GistAddForm = React.createClass({

    getInitialState: function(){
        return{
            username: ''
        }

    },

    onChange: function(e){
        this.setState({
            username: e.target.value
        });
    },

    addGist: function(e){
        e.preventDefault();

        this.props.onAdd(this.state.username);

        this.setState({username: ''}); // empty username field
    },

    render: function(){
        return(
            <div>
                <form onSubmit={this.addGist}>
                    <input className="form-control" value={this.state.username} onChange={this.onChange} placeholder="Type a GitHub username..."/>
                    <button className="btn btn-primary form-control">Fetch Latest Gist</button>
                </form>
            </div>
        );
    }

});

export default GistAddForm;