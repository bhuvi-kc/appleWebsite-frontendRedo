import React from "react";
import './division.css'

const division = () => {
    return (
        <div className="divider-section">
            <div style={{ width: '100%', padding: '0 2rem' }}>
                <div className="row text-center">
                    <div className="col-md-4">
                        <h5>✦</h5>
                        <h1 className="head">Hand-Finished</h1>
                        <p>Every piece is finished by master artisans in our Paris atelier. No shortcuts. No substitutes</p>
                    </div>
                    <div className="col-md-4">
                        <h5>✦</h5>
                        <h1 className="head">Made to Measure</h1>
                        <p>Our fittings begin with you. We craft to your silhouette, not a standard size chart.</p>
                    </div>
                    <div className="col-md-4">
                        <h5>✦</h5>
                        <h1 className="head">Discreet Delivery</h1>
                        <p>White-glove delivery worldwide, packaged in signature black lacquered boxes.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default division