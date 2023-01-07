import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'
import Logo from '../components/logo'
import BasicCV from "../public/basic.png"
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export default function Home()
{
  return (
    <>
      {/* prototype of left bar */}
      <h1>
        <Logo />
      </h1>
      <hr className="mb-6" />

      <h2 className="text-neutral-800 font-bold text-2xl mb-6">
        Templates
      </h2>

      <div className="w-full text-center">
        <div className="flex justify-center">
          <Image src={BasicCV} alt="Sample CV" width={200} height={400} />
        </div>
        <Link 
          className="hover:bg-neutral-100 p-2 rounded-lg transition ease-in-out duration-150 mx-auto text-amber-400 font-semibold" 
          href="/basic/header">
            THE BASIC
        </Link>
      </div>
    </>
  )
}
