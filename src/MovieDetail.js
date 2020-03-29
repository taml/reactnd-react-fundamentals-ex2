import React, { Component } from 'react';

class MovieDetail extends Component {
  render() {
    const {id, profiles, users} = this.props;
    return(
      <div>
        <p>Liked By:</p>
      	<ul>
      		{profiles.filter(profile => profile.favoriteMovieID == id).map((profile) => (
      		<li key={profile.id}>{users[profile.userID].name}</li>
    		))}
      	</ul>
	  </div>
    )
  }
}

export default MovieDetail