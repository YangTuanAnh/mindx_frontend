import Image from "next/image"
import Link from "next/link"
import MindXLogo from "/public/logo.png"
const Logo = () => {
    return (
        <Link href="/">
            <Image  src={MindXLogo} 
                    alt="MindX Logo" 
                    placeholder="blur"
                    loading="lazy" 
                    width={120} 
                    height={120}
                    className="mb-6"/>
        </Link>
    )
}

export default Logo;