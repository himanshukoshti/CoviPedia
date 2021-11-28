import React, { useState, useEffect } from 'react'
import '../Cases/Cases.css'
import VaccinationCard from './VaccinationCard'

const Testing = () => {
    const [vacSearch, setVacSearch] = useState("");
    const [vacData, setVacData] = useState({});

    const getVacData = async () => {
        try {
            const URL = "https://data.covid19india.org/v4/min/data.min.json";
            var data = await (await fetch(URL)).json();

            switch (vacSearch.toLowerCase()) {
                case 'andaman and nicobar':
                    data = data.AN;
                    break;
                case 'andhra pradesh':
                    data = data.AP;
                    break;
                case 'arunachal pradesh':
                    data = data.AR;
                    break;
                case 'assam':
                    data = data.AS;
                    break;
                case 'bihar':
                    data = data.BR;
                    break;
                case 'chandigarh':
                    data = data.CH;
                    break;
                case 'chhattisgarh':
                    data = data.CT;
                    break;
                case 'delhi':
                    data = data.DL;
                    break;
                case 'dadar and nagar haveli':
                    data = data.DN;
                    break;
                case 'goa':
                    data = data.GA;
                    break;
                case 'gujarat':
                    data = data.GJ;
                    break;
                case 'himachal pradesh':
                    data = data.HP;
                    break;
                case 'haryana':
                    data = data.HR;
                    break;
                case 'jharkhand':
                    data = data.JH;
                    break;
                case 'jammu and kashmir':
                    data = data.JK;
                    break;
                case 'karnataka':
                    data = data.KA;
                    break;
                case 'kerala':
                    data = data.KL;
                    break;
                case 'lakshadweep':
                    data = data.LD;
                    break;
                case 'maharashtra':
                    data = data.MH;
                    break;
                case 'madhya pradesh':
                    data = data.MP;
                    break;
                case 'manipur':
                    data = data.MN;
                    break;
                case 'mizoram':
                    data = data.MZ;
                    break;
                case 'meghalaya':
                    data = data.ML;
                    break;
                case 'nagaland':
                    data = data.NL;
                    break;
                case 'odisha':
                    data = data.OR;
                    break;
                case 'punjab':
                    data = data.PB;
                    break;
                case 'puducherry':
                    data = data.PY;
                    break;
                case 'rajasthan':
                    data = data.RJ;
                    break;
                case 'sikkim':
                    data = data.SK;
                    break;
                case 'tamil nadu':
                    data = data.TN;
                    break;
                case 'telangana':
                    data = data.TG;
                    break;
                case 'tripura':
                    data = data.TR;
                    break;
                case 'uttar pradesh':
                    data = data.UP;
                    break;
                case 'uttarakhand':
                    data = data.UT;
                    break;
                case 'west bengal':
                    data = data.WB;
                    break;
                default:
                    break;
            }

            setVacData(data.total);


        } catch (error) {
            console.log(error)
        }
    };

    useEffect(() => {
        getVacData();
    },[])

    return (
        <>
            <div className="container-fluid cases_font">
                <div className="row mt-5 justify-content-center">
                    <h1 className="text-center">Statewise Vaccination Status</h1>
                    <div className="col-md-6 pt-0 mt-md-4 mt-3 text-center">
                        <select name="states"
                        className="case_select"
                        value={vacSearch}
                        onChange={event => setVacSearch(event.target.value)}
                    >
                        <option value="Andhra Pradesh">Andhra Pradesh</option>
                        <option value="Andaman and Nicobar">Andaman and Nicobar Islands</option>
                        <option value="Arunachal Pradesh">Arunachal Pradesh</option>
                        <option value="Assam">Assam</option>
                        <option value="Bihar">Bihar</option>
                        <option value="Chandigarh">Chandigarh</option>
                        <option value="Chhattisgarh">Chhattisgarh</option>
                        <option value="Dadar and Nagar Haveli">Dadar and Nagar Haveli</option>
                        <option value="Delhi">Delhi</option>
                        <option value="Lakshadweep">Lakshadweep</option>
                        <option value="Puducherry">Puducherry</option>
                        <option value="Goa">Goa</option>
                        <option value="Gujarat">Gujarat</option>
                        <option value="Haryana">Haryana</option>
                        <option value="Himachal Pradesh">Himachal Pradesh</option>
                        <option value="Jammu and Kashmir">Jammu and Kashmir</option>
                        <option value="Jharkhand">Jharkhand</option>
                        <option value="Karnataka">Karnataka</option>
                        <option value="Kerala">Kerala</option>
                        <option value="Madhya Pradesh">Madhya Pradesh</option>
                        <option value="Maharashtra">Maharashtra</option>
                        <option value="Manipur">Manipur</option>
                        <option value="Meghalaya">Meghalaya</option>
                        <option value="Mizoram">Mizoram</option>
                        <option value="Nagaland">Nagaland</option>
                        <option value="Odisha">Odisha</option>
                        <option value="Punjab">Punjab</option>
                        <option value="Rajasthan">Rajasthan</option>
                        <option value="Sikkim">Sikkim</option>
                        <option value="Tamil Nadu">Tamil Nadu</option>
                        <option value="Telangana">Telangana</option>
                        <option value="Tripura">Tripura</option>
                        <option value="Uttar Pradesh">Uttar Pradesh</option>
                        <option value="Uttarakhand">Uttarakhand</option>
                        <option value="West Bengal">West Bengal</option>
                    </select>
                        <button type="button"
                            className="btn btn-primary case_btn"
                        onClick = {()=>getVacData()}
                        >Search</button>
                    </div>
                </div>
                <div className="row mb-5 justify-content-center">
                    <VaccinationCard {...vacData}/>
                </div>
            </div>
        </>
    )
}

export default Testing
