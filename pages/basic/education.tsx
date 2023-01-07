import { useState } from 'react';
import Logo from '../../components/logo'
import Link from 'next/link';
import Navbar from './navbar';

const BasicEducation = () =>
{
    return (
        <>
            <Navbar/>

            <h2 className="text-neutral-700 font-bold text-2xl mb-6">
                Education
            </h2>

            <div className="p-4">
                <input  className="outline outline-1 outline-neutral-400 rounded p-4 mb-4 w-full"
                        type="text" 
                        placeholder="Institution"/>
                <input  className="outline outline-1 outline-neutral-400 rounded p-4 mb-4 w-full"
                        type="text" 
                        placeholder="City, State, Country"/>
                <input  className="outline outline-1 outline-neutral-400 rounded p-4 mb-4 w-full"
                        type="text" 
                        placeholder="Major"/>
                <input  className="outline outline-1 outline-neutral-400 rounded p-4 mb-4 w-full"
                        type="number" 
                        placeholder="Graduation Year"/>
                <input  className="outline outline-1 outline-neutral-400 rounded p-4 mb-4 w-full"
                        type="text" 
                        placeholder="Additional Info"/>
            </div>

            <button className="w-full bg-pink-600 text-neutral-50 py-2 rounded shadow-lg hover:brightness-90 transition duration-300 ease-in-out" >
                    Add
            </button>
        </>
    )
}

export default BasicEducation;