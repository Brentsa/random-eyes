import React from 'react';
import ProductCard from '../components/ProductCard'

function Dashboard(){
    return (
        <div className="container">
            <h1>Welcome to your dashboard</h1>
            <div>
                <ProductCard/>
            </div>
        </div>
    );
};

export default Dashboard;