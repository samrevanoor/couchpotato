import React from 'react';
import '../MovieResultPage/MovieResultPage.css'
import MovieResult from '../../components/MovieResult/MovieResult'

function MovieResultPage(props) {
    let signupincentive = props.user ?
    <p></p>
    :
    <p>ps: if you sign up for an account, you can save movies to your account to watch later!
    </p>

    return (
        <div className="MovieResultPage-body">
            <MovieResult />
            {signupincentive}
        </div>
    )
}

export default MovieResultPage;