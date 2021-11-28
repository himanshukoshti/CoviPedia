import React from 'react'
import '../Cases/Cases.css'

const VaccinationCard = ({vaccinated1, vaccinated2}) => {
    return (
        <>
            <div className="col-md-5">
                <div className="data_box text-center card-4">
                    <h2 className="data_data">1st Dose</h2>
                    <h3 className="">{vaccinated1}</h3>
                </div>
            </div>
            <div className="col-md-5">
                <div className="data_box text-center card-4">
                    <h2 className="data_data">2nd Dose</h2>
                    <h3 className="">{vaccinated2}</h3>
                </div>
            </div>
        </>
    )
}

export default VaccinationCard
