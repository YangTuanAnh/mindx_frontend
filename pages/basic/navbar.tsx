import { useState } from "react";
import Logo from "../../components/logo"
import Link from "next/link";

const Navbar = () => {
    const [example, setExample] = useState(false);
    return (
        <nav>
            <header className="flex justify-between">
                <h1>
                    <Logo />
                </h1>
                <div>
                    <button 
                        className={`${example && 'hidden'} bg-gradient-to-r from-cyan-500 to-blue-500 text-neutral-50 shadow-lg rounded py-2 px-4 text-xs font-black uppercase`}
                        onClick={() => setExample(true)}>
                            Example
                    </button>
                    <button 
                        className={`${!example && 'hidden'} bg-gradient-to-r from-pink-500 to-orange-500 text-neutral-50 shadow-lg rounded py-2 px-4 text-xs font-black uppercase`}
                        onClick={() => setExample(false)}>
                            Remove Example
                    </button>
                </div>
            </header>
            <ul className="flex justify-between mx-3 mb-6">
                <li>
                    <Link href="/basic/header" className="text-teal-600 text-sm font-bold uppercase">
                        Header
                    </Link>
                </li>
                <li>
                    <Link href="/basic/experience" className="text-teal-600 text-sm font-bold uppercase">
                        Experience
                    </Link>
                </li>
                <li>
                    <Link href="/basic/education" className="text-teal-600 text-sm font-bold uppercase">
                        Education
                    </Link>
                </li>
                <li>
                    <Link href="/basic/skills" className="text-teal-600 text-sm font-bold uppercase">
                        Skills
                    </Link>
                </li>
            </ul>
            <hr className="mb-6" />
        </nav>
    )
}

export default Navbar;