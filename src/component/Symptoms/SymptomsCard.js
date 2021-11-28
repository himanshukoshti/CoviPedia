import React from 'react'
import './Symptoms.css'


const SymptomsCard = (props) => {
    const {image,title,list} = props;
    return (
        <>
            <div className="col-md-3">
                <img src={image} alt="" className="img-fluid mb-md-3" />
                <h5 className="sym_title">{title}</h5>
                <ul>
                {list.map((ele)=>{
                    return(
                    <li>{ele}</li>
                    )
                })}
                </ul>
            </div>
        </>
    )
}

export default SymptomsCard
