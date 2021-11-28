import React from 'react'
import './Prevention.css'

const PreventionCard = ({image,description}) => {
    return (
        <>
            <div className="col-md-4 text-center py-md-4 pre-box box-shadow">
                <img src={image} alt="" className="img-fluid pre-img mb-md-4" />
                <p className="pre-text">{description}</p>
            </div>
        </>
    )
}

export default PreventionCard
// mt-md-3 mt-3