import { useState } from 'react';
import Logo from '../../components/logo'
import Link from 'next/link';
import Navbar from './navbar';

const BasicExperience = () =>
{
    return (
        <>
            <Navbar/>

            <h2 className="text-neutral-700 font-bold text-2xl mb-6">
                Professional Experience
            </h2>

            <h3 className="text-neutral-600 font-bold my-6">
                Profession 1
            </h3>

            <div className="p-4">
                <input  className="outline outline-1 outline-neutral-400 rounded p-4 mb-4 w-full"
                        type="text"
                        placeholder="Company"/>
                <input  className="outline outline-1 outline-neutral-400 rounded p-4 mb-4 w-full"
                        type="text"
                        placeholder="City, State, Country"/>
                <input  className="outline outline-1 outline-neutral-400 rounded p-4 mb-4 w-full"
                        type="text"
                        placeholder="Position"/>
                <input  className="outline outline-1 outline-neutral-400 rounded p-4 mb-4 w-full"
                        type="text"
                        placeholder="Start MM/YYYY"/>
                <input  className="outline outline-1 outline-neutral-400 rounded p-4 mb-4 w-full"
                        type="text"
                        placeholder="End MM/YYYY"/>
                <input  className="outline outline-1 outline-neutral-400 rounded p-4 mb-4 w-full"
                        type="text"
                        placeholder="Description"/>
                <input  className="outline outline-1 outline-neutral-400 rounded p-4 mb-4 w-full"
                        type="text"
                        placeholder="Description"/>
                <input  className="outline outline-1 outline-neutral-400 rounded p-4 mb-4 w-full"
                        type="text"
                        placeholder="Description"/>
                <hr/>
            </div>

            <h3 className="text-neutral-600 font-bold my-6">
                Profession 2
            </h3>

            <div className="p-4">
                <input  className="outline outline-1 outline-neutral-400 rounded p-4 mb-4 w-full"
                        type="text"
                        placeholder="Company"/>
                <input  className="outline outline-1 outline-neutral-400 rounded p-4 mb-4 w-full"
                        type="text"
                        placeholder="City, State, Country"/>
                <input  className="outline outline-1 outline-neutral-400 rounded p-4 mb-4 w-full"
                        type="text"
                        placeholder="Position"/>
                <input  className="outline outline-1 outline-neutral-400 rounded p-4 mb-4 w-full"
                        type="text"
                        placeholder="Start MM/YYYY"/>
                <input  className="outline outline-1 outline-neutral-400 rounded p-4 mb-4 w-full"
                        type="text"
                        placeholder="End MM/YYYY"/>
                <input  className="outline outline-1 outline-neutral-400 rounded p-4 mb-4 w-full"
                        type="text"
                        placeholder="Description"/>
                <input  className="outline outline-1 outline-neutral-400 rounded p-4 mb-4 w-full"
                        type="text"
                        placeholder="Description"/>
                <input  className="outline outline-1 outline-neutral-400 rounded p-4 mb-4 w-full"
                        type="text"
                        placeholder="Description"/>
            </div>

            <button className="w-full bg-pink-600 text-neutral-50 py-2 rounded shadow-lg hover:brightness-90 transition duration-300 ease-in-out" >
                    Add
            </button>
        </>
    )
}

export default BasicExperience;