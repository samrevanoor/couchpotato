import React from 'react';
import '../HomePage/HomePage.css'
import Instructions from '../../components/Instructions/Instructions'
import GeneratorForm from '../../components/GeneratorForm/GeneratorForm'

function HomePage(props) {
    let signupincentive = props.user ?
    <p></p>
    :
    <p>ps: if you sign up for an account, you can save movies to your account to watch later!
    </p>

    return (
        <div className="HomePage-body">
            <Instructions />
            <GeneratorForm />
            {signupincentive}
        </div>
    )
}

export default HomePage;