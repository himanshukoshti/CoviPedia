import React from 'react'
import './Homepage.css'
const Homepage = () => {
    return (
        <>
            <div className="container-fluid main">
                <div className="row justify-content-center backdrop">
                    <div className="col-8 col-md-5">
                        <p>COVID-19 AWARENESS</p>
                        <h1>Stay Safe. Stay Home.</h1>
                        <p className="covid_con">Yes, respiratory viruses can be passed by shaking hands and touching your eyes, nose and mouth. <br />
                        Greet people with a wave, a nod or a bow instead.</p>
                        <a href="https://www.mygov.in/covid-19" target="_blank" rel="noreferrer"><button type="button" className="btn btn-info buttonown">HOW TO PREVENT</button></a>
                        
                    </div>
                    <div className="col-10 col-md-5 mt-5 mt-md-0 text-center">
                        <img src="images/covidillustration.webp" alt="" className="img-fluid img-pop" />
                    </div>
                </div>

                <div className="row justify-content-evenly covid_about">
                    <div className="col-10 col-md-5 mb-4 mb-md-0">
                        <img src="images/covidvideo.jpg" alt="" className="img-fluid" />
                    </div>
                    <div className="col-10 col-md-5">
                        <h2>What is Coronavirus?</h2>
                        <p className="covid_defi">Coronavirus disease (COVID-19) is an infectious disease caused by a newly discovered coronavirus.
                            Most people who fall sick with COVID-19 will experience mild to moderate symptoms and recover without special treatment.</p>
                        <a href="https://www.who.int/health-topics/coronavirus#tab=tab_1" target="_blank" rel="noreferrer"><button type="button" className="btn btn-info buttonown">LEARN MORE</button></a>
                    </div>
                </div>
                <div className="row justify-content-center covid_contact">
                    <div className="col-md-5">
                        <img src="images/helpline.png" alt="" className="img-fluid img-pop" />
                    </div>
                    <div className="col-10 col-md-5 text-center mt-5">
                        <h3>Helpline Number</h3>
                        <p>+91-11-23978046</p>
                        <h3 className="mt-4">Toll Free</h3>
                        <p>1075</p>
                        <h3 className="mt-4">Helpline Email ID</h3>
                        <p>ncov2019@gov.in</p>
                        <h3 className="mt-4 mb-4">Covid-19 facilities in States & Union Territories</h3>
                        <a href="https://www.mohfw.gov.in/pdf/StatewiseCovidHospitalslink19062020.pdf" className="covid_faci" target="_blank" rel="noreferrer"><button type="button" className="btn btn-info buttonown">CHECK HERE</button></a>
                    </div>
                </div>
                <div className="row justify-content-center covid_vaccine">
                    <div className="col-10 col-md-5 pt-md-5">
                        <h1>COVID Vaccine</h1>
                        <p className="covid_vacc">There are now several vaccines that are in use. The first mass vaccination programme started in early December 2020 and the number of vaccination doses administered is updated on a daily basis. At least 13 different vaccines (across 4 platforms) have been administered.</p>
                        <a href="https://www.who.int/news-room/q-a-detail/coronavirus-disease-(covid-19)-vaccines?adgroupsurvey={adgroupsurvey}&gclid=CjwKCAjwsNiIBhBdEiwAJK4khtfK5bEhrZ_AzSYpAgcGx2cFYzZzeuSAWrl4GbEItZEajOFNeHodBBoClvkQAvD_BwE" className="covid_faci" target="_blank" rel="noreferrer"><button type="button" className="btn btn-info buttonown">MORE ABOUT VACCINE</button></a>
                    </div>
                    <div className="col-10 col-md-5 mt-md-0 mt-5">
                        <img src="images/covid world.svg" alt="" className="img-fluid img-pop" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Homepage
