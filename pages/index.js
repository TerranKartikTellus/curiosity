import Head from 'next/head'
import Link from 'next/link'
import { useState } from 'react';
import Section1 from "/components/home/Section1";
import Section2 from "/components/home/Section2";
import Section3 from "/components/home/Section3";
import Section4 from "/components/home/Section4";



export default function Home() {

  const [isLogin , setLogin] = useState(false);

  return (
    <div className="m-0 p-0">
      <Head>
        <title>Curiosity Stream | Stay Curious</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/icon.svg" />
      </Head>

      <main>
        <Navbar isLogin={isLogin} ></Navbar>
          <div className="snap-y snap-mandatory overflow-x-hidden h-screen overflow-y-scroll ">
            <div className=" h-screen snap-center"><Section1></Section1></div>
            <div className=" h-screen snap-center"><Section2></Section2></div>
            <div className=" h-screen snap-center"><Section3 ></Section3></div>
            <div className=" h-screen snap-center"><Section4></Section4></div>
          </div>
      </main>
    </div>
  )
}

function Navbar({isLogin}){
  return(
    <div className='z-10 fixed top-0 left-0 m-0 px-2 pt-3 flex flex-row justify-between w-screen item-center bg-gradient-to-b from-gray-900 to-transparent'>
      <div><Left></Left></div>
      <div><Right isLogin={isLogin}></Right></div>
    </div>
  );
}
function Left(){
  return(
    <div className='pl-2 pt-1'>
      <a href='/' className=''>
        <svg viewBox="0 0 102 35" fill="none" xmlns="http://www.w3.org/2000/svg" style={{height: "100%" ,width:"120px"}}>
          <title>Curiosity Stream</title>
          <path fill-rule="evenodd" clip-rule="evenodd" d="M97.672 19.293V6.229h4.184v13.064c0 2.508-1.626 5.042-4.184 5.865v3.519h-4.185V25.16a6.251 6.251 0 01-4.14-5.867V6.229h4.14v13.064c0 1.062.966 2.057 2.115 2.057 1.15 0 2.07-.995 2.07-2.058zM95.61 34.98c-1.221 0-2.211-1.025-2.211-2.291 0-1.267.99-2.291 2.21-2.291 1.222 0 2.211 1.024 2.211 2.29 0 1.267-.99 2.291-2.21 2.291z" fill="url(#logo_svg__paint0_linear)"></path>
          <path fill-rule="evenodd" clip-rule="evenodd" d="M6.245 25.039C2.8 25.039 0 22.252 0 18.826V6.35C0 2.925 2.801.09 6.245.09c3.442 0 6.242 2.835 6.242 6.26H8.31c0-1.143-.918-2.1-2.066-2.1-1.148 0-2.112.957-2.112 2.1v12.476c0 1.142.964 2.054 2.112 2.054a2.05 2.05 0 002.066-2.054h4.176c0 3.426-2.8 6.213-6.242 6.213zM20.615 25.121c-3.489 0-6.29-2.517-6.29-5.657V6.336h4.18v13.128c0 1.033.916 1.902 2.11 1.902 1.147 0 2.066-.869 2.066-1.902V6.336h4.177v13.128c0 3.14-2.8 5.657-6.243 5.657zM38.565 24.969h4.133V6.351h-4.133V24.97zM32.802 7.506V6.35h-4.13V24.97h4.13l-.02-12.166c-.007-2.562 4.22-2.756 4.22-2.756V6.323s-2.991.286-4.2 1.183zM50.961 10.072c-1.146 0-2.066.83-2.066 1.862v7.521c0 1.035.92 1.906 2.066 1.906 1.149 0 2.064-.871 2.064-1.906v-7.52c0-1.033-.915-1.863-2.064-1.863zm0 15.049c-3.442 0-6.242-2.52-6.242-5.666v-7.52c0-3.101 2.8-5.623 6.242-5.623 3.444 0 6.245 2.522 6.245 5.622v7.521c0 3.146-2.801 5.666-6.245 5.666zM65.33 13.877c3.444 0 6.244 2.522 6.244 5.623 0 3.14-2.8 5.664-6.244 5.664-3.49 0-6.289-2.524-6.289-5.664h4.179c0 1.076.918 1.9 2.11 1.9 1.15 0 2.065-.824 2.065-1.9 0-1.033-.916-1.86-2.11-1.86-3.444 0-6.244-2.524-6.244-5.623 0-3.142 2.8-5.664 6.289-5.664 3.444 0 6.244 2.522 6.244 5.664h-4.179c0-1.075-.916-1.9-2.065-1.9-1.192 0-2.11.825-2.11 1.9 0 1.033.918 1.86 2.11 1.86zM73.181 24.969h4.134V6.333h-4.134V24.97zM85.532 20.8H87.6v4.167h-2.067c-3.444 0-6.242-2.795-6.242-6.232V0h4.132v6.333l4.177.006v4.059h-4.177v8.337c0 1.147.965 2.064 2.11 2.064zM.319 33.517h.737c.052.404.219.741.916.741.455 0 .777-.247.777-.618 0-.37-.19-.511-.858-.618C.906 32.893.44 32.601.44 31.848c0-.658.576-1.152 1.434-1.152.887 0 1.416.393 1.497 1.163h-.702c-.075-.421-.323-.601-.795-.601-.467 0-.709.219-.709.528 0 .326.139.489.853.59.967.13 1.468.399 1.468 1.203 0 .696-.605 1.241-1.514 1.241-1.123 0-1.596-.545-1.653-1.303zM8.59 31.337H7.442v-.59h3.064v.59H9.361v3.427H8.59v-3.428zM16.157 32.606c.513 0 .784-.213.784-.64v-.023c0-.46-.294-.618-.784-.618h-.616v1.281h.616zm-1.382-1.86h1.382c.904 0 1.538.36 1.538 1.18v.023c0 .63-.403.95-.916 1.079l1.158 1.736h-.83l-1.076-1.624h-.49v1.624h-.766v-4.017zM22.199 30.747h2.574v.59h-1.808v1.1h1.451V33h-1.451v1.174h1.906v.59h-2.672v-4.017zM30.118 33.224h1.215l-.604-1.865-.61 1.865zm.156-2.477h1.002l1.359 4.017h-.795l-.328-.994H29.94l-.323.994h-.72l1.377-4.017zM36.915 30.747h1.025l1.082 2.742 1.06-2.742h1.014v4.017h-.766V31.73l-1.227 3.034h-.248l-1.25-3.034v3.034h-.69v-4.017z" fill="#F7F7F7"></path>
          <defs><linearGradient id="logo_svg__paint0_linear" x1="85.307" y1="15.516" x2="104.187" y2="28.231" gradientUnits="userSpaceOnUse"><stop stop-color="#ECC334"></stop><stop offset="1" stop-color="#EB8B4C"></stop></linearGradient></defs>
          </svg>
        {/* <img className='w-28 h-11 object-center object-cover' src="/Logo/mainLogo.svg"></img> */}
      </a>
    </div>
  );
}

function Right({isLogin}){

  return(
    <div className='pr-1 pt-2'>
       {
          isLogin ?   <NavRightLogin></NavRightLogin>
                  :   <NavRightNotLogin></NavRightNotLogin>
       }
    </div>
  );
}
function NavRightLogin(){
  return(
    <div>
      NavRightLogin
    </div>
  );
}
function NavRightNotLogin(){
  return(
    <div className='flex flex-row justify-end items-center'>
      <div> <Link href="/"><a className='font-normal text-lg tracking-wide px-4 py-2 m-1 rounded bg-gray-900 text-gray-100'> Sign In </a></Link> </div>
      <div> <Link href="/"><a className='font-medium text-lg tracking-wide px-4 py-2 m-1 rounded bg-gradient-to-br from-yellow-500 to-yellow-700 text-gray-900'> Sign Up Now </a></Link> </div>
    </div>
  );
}
