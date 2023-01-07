import { useState } from 'react';
import Logo from '../../components/logo'
import Link from 'next/link';
import Navbar from './navbar';

const BasicHeader = () =>
{
    return (
        <>
            <Navbar/>

            <h2 className="text-neutral-700 font-bold text-2xl mb-6">
                Header
            </h2>

            <div className="p-4">
                <input  className="outline outline-1 outline-neutral-400 rounded p-4 mb-4 w-full"
                        type="text" 
                        placeholder="Full Name"/>
                <input  className="outline outline-1 outline-neutral-400 rounded p-4 mb-4 w-full" 
                        type="text"
                        placeholder="Address"/>
                <input  className="outline outline-1 outline-neutral-400 rounded p-4 mb-4 w-full" 
                        type="text" 
                        placeholder="City"/>
                <input  className="outline outline-1 outline-neutral-400 rounded p-4 mb-4 w-full" 
                        type="text" 
                        placeholder="State"/>
                <input  className="outline outline-1 outline-neutral-400 rounded p-4 mb-4 w-full" 
                        type="number"
                        placeholder="Zip Code"/>
                <input  className="outline outline-1 outline-neutral-400 rounded p-4 mb-4 w-full" 
                        type="number"
                        placeholder="Phone"/>
                <input  className="outline outline-1 outline-neutral-400 rounded p-4 mb-4 w-full" 
                        type="email" 
                        placeholder="Email"/>
                <textarea   className="outline outline-1 outline-neutral-400 rounded p-4 mb-4 w-full" 
                            placeholder="Summary"
                            rows={5}/>
            </div>
        </>
    )
}

export default BasicHeader;