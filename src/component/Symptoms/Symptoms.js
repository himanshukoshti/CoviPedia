import React from 'react'
import './Symptoms.css'
import SymptomsCard from './SymptomsCard'

const Symptoms = () => {
    return (
        <>
            <div className="container-fluid">
                <div className="row justify-content-center backdrop_sym">
                    <div className="col-10 col-md-5">
                        <h1 className="symptoms_head">Symptoms</h1>
                        <p>COVID-19 affects different people in different ways. Most infected people will develop mild to moderate illness and recover without hospitalization.</p>
                    </div>
                    <div className="col-10 col-md-5">
                        <img src="images/coronavirus symp.png" alt="" className="img-fluid img_sym_pop" />
                    </div>
                </div>
                <div className="row justify-content-evenly symptoms_all">
                    <div className="col-md-10 text-center mb-md-5">
                        <h1>What all are the Symptoms?</h1>
                    </div>
                    <SymptomsCard image={"images/High Fever.png"} title={"Most common symptoms:"} list={["Fever", "Dry cough", "Tiredness"]} />
                    <SymptomsCard image={"images/sore troath.png"} title={"Less common symptoms:"} list={["Aches and pains", "Sore throat", "Diarrhoea", "Conjunctivitis", "Headache", "Loss of taste or smell", "A rash on skin", "Discolouration of fingers or toes"]} />
                    <SymptomsCard image={"images/Headache.png"} title={"Serious symptoms:"} list={["Difficulty breathing", "Shortness of breath", "Chest pain or pressure", "Loss of speech or movement"]} />
                </div>
                <div className="row justify-content-center sym_more">
                    <div className="col-md-10 text-center">
                        <h3>Seek immediate medical attention if you have serious symptoms. Always call before visiting your doctor or health facility.</h3><hr />
                        <h3>People with mild symptoms who are otherwise healthy should manage their symptoms at home.
                        </h3><hr />
                        <h3>On average it takes 5–6 days from when someone is infected with the virus for symptoms to show, however it can take up to 14 days.</h3>
                    </div>
                </div>
                <div className="row justify-content-center symp">
                    <div className="col-md-10">
                        <h3>Know More About Symptoms</h3>
                        <a href="https://www.who.int/emergencies/diseases/novel-coronavirus-2019/question-and-answers-hub/q-a-detail/coronavirus-disease-covid-19" target="_blank" rel="noreferrer"><button type="button" className="btn btn-info buttonown">LEARN MORE</button></a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Symptoms
