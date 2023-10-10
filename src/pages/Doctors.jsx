import React from 'react'
import Layout from '../components/Layout'
import '../assets/css/style.css'
import CRUD from './crud'
import Doct1 from './Doct1'
import Doct2 from './Doct2'


function Doctors() {
    return (
        <>

                             
            
            <Layout />
            <div className='main-wrapper'>
                <div className='welcome-container5'>
                    <h1> Welcome Doctors to MediLogix ! </h1>
                </div>
                <Doct1/>
                <Doct2/>
                <CRUD/>
            </div>
        </>
    )
}

export default Doctors