import React from "react";
import './story.css'

const Story = () => {
    return (
        <div className="story-section">
            <div className="story-image">
                <img src="https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=600&q=80" alt="atelier"/>
            </div>
            <div className="story-text">
                <p className="story-tag">THE MAISON — EST. 1987</p>
                <h1>Power is a <br/>
                    <span className="gold-italic">silhouette,</span><br/>
                    not a logo.
                </h1>
                <p className="story-body">Maison Noire was built on one conviction: that true luxury is felt before it is seen. Our garments carry no screaming insignia — only the gravity of exceptional material and the discipline of a cut that speaks for itself.</p>
                <blockquote>"To dress in Noire is to wear silence as a statement."</blockquote>
                <button className="story-btn">READ OUR STORY</button>
            </div>
        </div>
    )
}

export default Story