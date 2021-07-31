import React from 'react';

function Cancel(){

    setTimeout(()=>{
        window.location.assign('/dashboard');
    }, 5000)

    return (
        <div id="home-info">
            <div>
                <h1>Order failed!</h1>
                <h2>Thank you for attempting to purchase!</h2>
                <h2>Your order unfortunately did not go through, you will be redirected to the dashboard</h2>
            </div>
        </div>
    );
};

export default Cancel;