
import { useState, UseEffect, useEffect } from 'react';
import './App.css';

// Api Key =https://www.omdbapi.com/?t= the avengers&apikey=9c1419c7


function App() {

  let [movieinfo, setMovieinfo] = useState(null);
  let [title, setTitle] = useState("endgame");

  useEffect(() => {

    
    getMovieData();

  }, [])

  function readTitle(value) {
    setTitle(value);
   
  }

  function getMovieData() {

    let url = `https://www.omdbapi.com/?t= ${title}&apikey=9c1419c7`;

    fetch(url)
      .then((response) => response.json())
      .then((movie) => {
        console.log(movie);
        setMovieinfo(movie);
      })

      .catch((err) => {
        console.log(err);
      })
  }

  return (
    <div className="App">

      <div className="container">
        <div className="padd">
          <h1>Movie Search</h1>

          <div className="input-group">
            <input type="text" placeholder="Enter Movie name" onChange={(event) => { readTitle(event.target.value) }} className="search-field" />
            <button className="btn" onClick={getMovieData}>Get Movie</button>
          </div>
          {
            movieinfo?.Error===undefined?(

         
          <div className="movie">
            <div className="poster">
              
              <img src={movieinfo?.Poster} className="poster-detail" />
            </div>
            <div className="details">
              <div className="padd">
                <h1>{movieinfo?.Title}</h1>
                <p><strong>Genre</strong>:{movieinfo?.Genre}</p>
                <p><strong>Directed By</strong>: {movieinfo?.Director}</p>
                <p><strong>Plot</strong>:{movieinfo?.Plot}</p>
                <p><strong>Cast</strong>:{movieinfo?.Actors}</p>
                <p><strong>Box-Office</strong>:{movieinfo?.BoxOffice}</p>
                <p><strong>Languages</strong>:{movieinfo?.Language}</p>
                <p><strong>Released Date</strong>:{movieinfo?.Released}</p>
                <p><strong>Movie Runtime</strong>:{movieinfo?.Runtime}</p>
                <div className="ratings">
                  {
                    movieinfo?.Ratings.map((rating, index) => (
                      <div key={index}><strong>{rating.Source}</strong>
                        <h3>{rating.Value}</h3>
                      </div>
                    ))

                  }
                </div>
              </div>
            </div>
          </div>
            ):
            (
              <h2>Movie not found</h2>
            )}
                  
        </div>
      </div>
    </div>
  );
}
// Api key http://www.omdbapi.com/?i=tt3896198&apikey=9c1419c7
export default App;
