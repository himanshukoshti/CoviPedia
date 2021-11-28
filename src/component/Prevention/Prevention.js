import React from 'react'
import PreventionCard from './PreventionCard'
import './Prevention.css'


const Prevention = () => {
    return (
        <>
            <div className="container-fluid">
                <div className="row justify-content-center backdrop_sym">
                    <div className="col-10 col-md-5">
                        <h1 className="symptoms_head">Prevention</h1>
                        <p>Protect yourself and others around you by knowing the facts and taking appropriate precautions. Follow advice provided by your local health authority.</p>
                    </div>
                    <div className="col-10 col-md-5">
                        <img src="images/Doctor.png" alt="" className="img-fluid img_sym_pop" />
                    </div>
                </div>

                <div className="row justify-content-evenly symptoms_all">
                    <div className="col-md-10 text-center mb-md-5">
                        <h1>To prevent the spread of COVID-19:</h1>
                    </div>
                    <PreventionCard image={'images/p1.svg'} description={'Maintain a safe distance from others, even if they don’t appear to be sick.'} />
                    <PreventionCard image={'images/p2.svg'} description={'Clean your hands often. Use soap and water, or an alcohol-based hand rub.'} />
                    <PreventionCard image={'images/p3.svg'} description={'Cover your nose and mouth with your bent elbow or a tissue when you cough or sneeze.'} />
                    <PreventionCard image={'images/p4.svg'} description={'Clean and disinfect surfaces frequently, especially those which are regularly touched.'} />
                    <PreventionCard image={'images/p5.svg'} description={'Wear a mask in public, especially indoors or when physical distancing is not possible.'} />
                    <PreventionCard image={'images/p6.svg'} description={'Get vaccinated as soon as it’s your turn and follow local guidance on vaccination.'} />
                </div>
            </div>
        </>
    )
}

export default Prevention
