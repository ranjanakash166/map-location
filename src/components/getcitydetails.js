import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './getcitydetails.css';

export default function GetCityDetails() {

  const [countries,setCountries] = useState([])
  const [singleCountry,setSingleCountry] = useState("")
  const [cities,setCities] = useState([])
  const [singlecity,setSingleCity] = useState("")
  const [submit,setSubmit] = useState(false)

  const getCountryDetails = async () => {
      try{
        const countryDetails = await axios.get("https://countriesnow.space/api/v0.1/countries");     
        //console.log(countryDetails.data.data);
        setCountries(countryDetails.data.data);
      }catch(error){
        console.log(error);
      }
  };

  const fectCities = (country) => {
        setSubmit(false);
        setSingleCity(null);
        setSingleCountry(country);
        const cities =  countries.find((c)=> c.country === country);
        setCities(cities.cities);
  };

  const submitHandler = () =>{
        if(singleCountry && singlecity){
            setSubmit(true);
        }
  }

  useEffect(()=>{
    getCountryDetails();
  },[]);


  return (
    <div className='App'>
        <div className='App-header'>
            <h1>Select Your Hometown</h1>
            <div>
                {countries &&  (
                    <select onChange={(e)=>fectCities(e.target.value)} value={singleCountry}>
                        <option selected hidden disabled>
                                Select Country
                        </option>
                        {
                            countries.map((country)=>{
                                return <option key={`${country.country}-${Date.now()}`} value={country.country}>{country.country}</option>
                            })
                        }
                    </select>

                )}
               
               {
                   cities && (
                    <select onChange={(e)=> setSingleCity(e.target.value)} value={singlecity} >
                    <option disabled selected hidden>
                        Select City
                    </option>
                    {
                        cities.map((city)=>{
                            return <option key={city} value={city} >{city}</option>
                        })
                    }
                </select>

            )}
                
                <button onClick={submitHandler}>Go</button>
            </div>
            {
                submit && (
                    <h3>Your country is {singleCountry} and your city is {singlecity}</h3>
                )
            }
        </div>
    </div>
  )
}
