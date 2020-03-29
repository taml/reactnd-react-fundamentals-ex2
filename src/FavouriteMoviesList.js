import React, { Component } from 'react';
import MovieDetail from './MovieDetail';

class FavouriteMoviesList extends Component {
  render() {
    
    const {movies, profiles, users} = this.props;
   
    return(
      <ul>
      {Object.keys(movies).map((movie) => (
    	<li key={movies[movie].id}>
      		<h2>{movies[movie].name}</h2>
			{(profiles.filter(profile => profile.favoriteMovieID == movies[movie].id).length > 0 ? 
   				(<MovieDetail id={movies[movie].id} profiles={profiles} users={users}/>) 
   				: (<p>None of the current users liked this movie</p>) 
			)}
		</li>
    	))}
  	  </ul>
    )
  }
}

export default FavouriteMoviesList