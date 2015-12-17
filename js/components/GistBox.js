import Gist from './Gist';
import GistAddForm from './GistAddForm';


var GistBox = React.createClass({

    getInitialState: function(){
        return {
            gists: []
        };
    },

    addGist: function(username){

        var url = 'https://api.github.com/users/'+username+'/gists';

        $.get(url, (results) =>{

            var username = results[0].owner.login;
            var url = results[0].html_url;

            var gists = this.state.gists.concat({username, url});

            this.setState({gists});

        });

    },
    render: function(){

        var newGist = function(gist){
            return <Gist username={gist.username} url={gist.url}></Gist>
        };

        return(
            <div>
                <h1 className="text-center">GistBox</h1>

                <GistAddForm onAdd={this.addGist}></GistAddForm>
                <hr/>
                {this.state.gists.map( newGist )}

            </div>
        );
    }
});

export default GistBox;
