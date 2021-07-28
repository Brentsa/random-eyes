import React from 'react';

function Success(){

    setTimeout(()=>{
        window.location.assign('/dashboard');
    }, 10000)

    return (
        <div id="home-info">
            <div>
                <h1>Success!</h1>
                <h2>Thank you for your purchase!</h2>
                <h2>You will now be redirected to the homepage</h2>
            </div>
        </div>
    );
};

export default Success;