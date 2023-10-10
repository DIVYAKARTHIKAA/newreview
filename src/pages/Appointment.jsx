import React from 'react'
import Layout from '../components/Layout'
import '../assets/css/appointment.css'
import CRUD2 from '../pages/crud2'

import Appoint1 from './Appoint1'

function Appointment() {
    return (
        <>
    
            
            <Layout />
            <div className='main-wrapper'>
                <div className='welcome-container3'>
                    <h1> Welcome Patients to Medilogix !</h1>
                </div>
                    <Appoint1/>
                    <CRUD2/>
            </div>
            
        </>
    )
}

export default Appointment