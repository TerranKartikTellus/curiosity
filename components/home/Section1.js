import Link from "next/link";


export default function Section1(){
  return(
    <div className="relative bg-black">
    <div className='text-2xl min-h-screen z-20 opacity-20 '  style={{ backgroundImage: `url('/Logo/900.jpg')` }}></div>
    <div className="absolute top-0 left-0 ">
      <div className=""><div><Content></Content></div></div>
    </div>
    <div className="absolute bottom-0 left-0">
      <img  className="scale-75" loading="lazy" srcset="https://curiosity-club.s3.amazonaws.com/webapp-v3/images/v8/promo-newyear22-40off.png/source.png" width="600" height="590" alt=""></img>
    </div>
    </div>
  );
}


function Content(){
  return(
    <div className="text-white mx-auto min-w-screen">
      <div className="mt-48 text-center text-4xl  tracking-wide "><h1 className="">Thousands of documentaries</h1></div>
      <div className="mt-7  text-center text-lg px-12 "><h2>All on demand, all for <span className="line-through decoration-red-500 ">  less than USD 20/year  </span> <strong>USD 11.99/year</strong></h2></div>
  
      <div className="flex flex-col justify-center items-center  mt-10 space-y-8">
         <div> <Link href="/"><a className='font-bold text-xl tracking-wide py-4 px-2  mx-auto  rounded bg-yellow-500 brightness-105 text-gray-900'> Sign Up Now </a></Link> </div>
         <div> <Link href="/"><a className='font-light text-lg tracking-wide   mx-auto  rounded  text-yellow-400'> Buy a gift Card </a></Link> </div>
      
         <div className="text-justify text-sm text-gray-100 px-3 pt-10 scale-90 tracking-tight">
           <p>The NEWYEAR22 promotion is open to any new subscribers’ first year of HD Annual or 4K Annual subscriptions purchased directly through curiositystream.com on or after {DateF()}, for as long as the promotion is active. Subsequent renewals will be charged the full price plus any applicable tax.</p>
         </div>

         
      </div>
      
    </div>
  );
}

function DateF(){
  var today = new Date();
  var dd = String(today.getDate()).padStart(2, '0');
  var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
  var yyyy = today.getFullYear();
  
  const month= ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];


  today = month[today.getMonth()] + ' ' + dd + ' ' + yyyy;
  return today;
}