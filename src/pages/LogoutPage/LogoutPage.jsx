import React from 'react';
import '../LogoutPage/LogoutPage.css'
import potato from './bye.gif'

function LogoutPage(props) {
    return (
        <div className="LogoutPage-body">
            thanks for using our app! come back any time ♥
            <img src={potato} alt="bye!"/>
        </div>
    )
}

export default LogoutPage;