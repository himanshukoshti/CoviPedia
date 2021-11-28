import React from 'react'
import './Cases.css'

const CasesCard = ({confirmed, deceased, recovered, tested}) => {
    return (
        <>
            <div className="col-md-5">
                <div className="data_box text-center card-4">
                    <h2 className="data_data">Confirmed</h2>
                    <h3 className="">{confirmed}</h3>
                </div>
            </div>
            <div className="col-md-5">
                <div className="data_box text-center card-4">
                    <h2 className="data_data">Decreased</h2>
                    <h3 className="">{deceased}</h3>
                </div>
            </div>
            <div className="col-md-5">
                <div className="data_box text-center card-4">
                    <h2 className="data_data">Recovered</h2>
                    <h3 className="">{recovered}</h3>
                </div>
            </div>
            <div className="col-md-5">
                <div className="data_box text-center card-4">
                    <h2 className="data_data">Tested</h2>
                    <h3 className="">{tested}</h3>
                </div>
            </div>
            <div className="col-md-5">
                <div className="data_box text-center card-4">
                    <h2 className="data_data">Active</h2>
                    <h3 className="">{confirmed ? (confirmed-(recovered+deceased)) : "" }</h3>
                </div>
            </div>
        </>
    )
}

export default CasesCard
