import React from 'react'
import './Footer.css'
const Footer = () => {
    return (
        <>

            <div className="container-fluid footer">
                <div className="row justify-content-evenly pt-md-0 pt-3">
                    <div className="col-10 col-md-3 mb-md-0 mb-4">
                        <h5>About</h5>
                        <p className="mt-4 footer_p">This website will help people to know more about COVID-19 and measures to prevent it with the resourses available.</p>
                        <a href="https://www.facebook.com/pg/MoHFWIndia/posts/?ref=page_internal" target="_blank" rel="noreferrer"><i className="bi bi-facebook"></i></a>
                        <a href="https://www.youtube.com/user/mohfwindia" target="_blank" rel="noreferrer"><i className="bi bi-youtube"></i></a>
                        <a href="https://twitter.com/MoHFW_INDIA?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor" target="_blank" rel="noreferrer"><i className="bi bi-twitter"></i></a>
                        <a href="https://www.instagram.com/mohfwindia/?hl=en" target="_blank" rel="noreferrer"><i className="bi bi-instagram"></i></a>
                    </div>
                    <div className="col-10 col-md-2 mb-md-0 mb-4">
                        <h5 className="mb-4">Quick Links</h5>
                        <a href="/symptoms" className="link">Symptoms</a>
                        <a href="/prevention" className="link">Prevention</a>
                        <a href="https://www.cdc.gov/coronavirus/2019-ncov/faq.html" target="_blank" rel="noreferrer" className="link">FAQs</a>
                        <a href="https://www.who.int/health-topics/coronavirus#tab=tab_1" target="_blank" rel="noreferrer" className="link">About Coronavirus</a>
                    </div>
                    <div className="col-10 col-md-2">
                        <h5 className="mb-4">Resources</h5>
                        <a href="https://www.who.int/" target="_blank" rel="noreferrer" className="link">WHO Website</a>
                        <a href="https://mohfw.gov.in" target="_blank" rel="noreferrer" className="link">MoHFW Website</a>
                        <a href="https://www.cdc.gov/" target="_blank" rel="noreferrer" className="link">CDC Website</a>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Footer;
