import Link from "next/link";

export default function First(){
          return(
          <div className='bg-homeBgImage min-h-screen bg-center'>
            <div className='min-h-screen bg-black bg-opacity-80 flex flex-col lg:flex-row lg:justify-between lg:px-32  justify-between items-center ' >
              <div className='w-full h-1/3  m-1 sm:py-20  lg:hidden '></div>
              
              <div className='w-full h-1/3  m-1 '><FrontMid></FrontMid></div>
              <div className='w-full h-1/3  m-1 '><FrontBottom></FrontBottom></div>
               
            </div>
          </div>
          );
}

function FrontMid(){
  return(
    <div className='font-font-OpenSan-Condensed text-center lg:text-left lg:px-5 brightness-105  lg:space-y-3'>
      <div className='w-full py-2'><h1 className='text-white text-4xl lg:text-6xl tracking-wider'>Thousands of <br></br> documentaries</h1></div>
      <div className='w-full py-2'><h2 className='text-white text-lg tracking-wider'>All on demand, all for<br></br> less than USD 20/year</h2></div>
       
      <div className='py-4'><Link href="/signUp"><a><div className='text-center text-xl bg-gradient-to-br from-yellow-500 font-medium py-4 px-1 to-yellow-600 max-w-xs scale-75 mx-auto lg:mx-1 rounded'>Sign Up Now</div></a></Link></div>
      <div className='w-full py-2'><div className='text-yellow-500 font-medium tracking-wider lg:ml-16'>Buy a gift Card</div></div>
    
    </div>
  );
}
function FrontBottom(){
  return(
    <div className="z-50">
      <div><img className='brightness-150 -z-20 max-w-xs mx-auto sm:max-w-sm md:max-w-md lg:max-w-xl' src="/Logo/mainPage.webp"></img></div>
      <div className='flex flex-row items-center justify-center space-x-2'>
        <div><svg className='w-8 h-8 m-1 invert' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M10.6 6.35c0 .193-.156.349-.349.35-.194 0-.351-.157-.351-.35 0-.193.157-.35.35-.35s.35.157.35.35zm3.15-.35c-.193 0-.35.157-.35.35s.156.349.349.35c.194 0 .351-.157.351-.35s-.157-.35-.35-.35zm10.25-1v14c0 2.761-2.238 5-5 5h-14c-2.761 0-5-2.239-5-5v-14c0-2.761 2.239-5 5-5h14c2.762 0 5 2.239 5 5zm-16.9 4.829c0-.563-.487-1.03-1.05-1.029-.564-.001-1.05.466-1.05 1.03v4.274c0 .564.486.996 1.05.996.563 0 1.05-.431 1.05-.996v-4.275zm9.1-1.029h-8.4l.001 6.611c0 .603.487 1.089 1.09 1.089h.309v2.479c0 .563.494 1.021 1.057 1.021.564 0 1.043-.458 1.043-1.021v-2.479h1.4v2.479c0 .563.496 1.021 1.058 1.021.564 0 1.042-.458 1.042-1.021v-2.479h.312c.6 0 1.089-.487 1.089-1.09v-6.61zm0-.702c0-1.579-.843-2.664-2.134-3.387l.658-1.301c.034-.068.012-.154-.053-.193-.064-.037-.143-.012-.178.057l-.663 1.314c-1.071-.516-2.48-.569-3.661 0l-.664-1.315c-.034-.068-.113-.094-.177-.057-.064.039-.087.125-.052.194l.658 1.301c-1.291.723-2.134 1.809-2.134 3.387h8.4zm2.8 1.731c0-.563-.486-1.03-1.05-1.029-.563-.001-1.05.466-1.05 1.03v4.274c0 .564.486.996 1.05.996s1.05-.431 1.05-.996v-4.275z"/></svg></div>
        <div><svg className='w-8 h-8 m-1 invert' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M22 4v12h-20v-12h20zm2-2h-24v16h24v-16zm-17.836 5h5.673v1.418h-2.01v4.582h-1.653v-4.582h-2.01v-1.418zm9.961 0l-1.158 3.653-1.151-3.653h-1.701l1.942 6h1.792l1.986-6h-1.71zm-9.125 13c1 1.194 2.862 2 5 2s4-.806 5-2h-10z"/></svg></div>
        <div><svg className='w-8 h-8 m-1 invert' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M6.02 7.389c.399-.285.85-.417 1.292-.417.944 0 1.852.6 2.15 1.599-.382-.294-.83-.437-1.281-.437-.458 0-.919.147-1.321.434-.799.57-1.153 1.541-.845 2.461-1.242-.89-1.247-2.747.005-3.64zm3.741 12.77c.994.334 4.071 1.186 7.635 3.841l6.604-4.71c-1.713-2.402-1.241-4.082-2.943-6.468-1.162-1.628-1.827-1.654-3.037-1.432l.599.84c.361.507-.405 1.05-.764.544l-.534-.75c-.435-.609-1.279-.229-2.053-.051l.727 1.019c.36.505-.403 1.051-.764.544l-.629-.882c-.446-.626-1.318-.208-2.095-.01l.769 1.078c.363.508-.405 1.049-.764.544l-3.118-4.366c-.968-1.358-3.088.083-2.086 1.489l4.605 6.458c-.494-.183-1.363-.349-1.93-.349-1.754 0-2.429 1.92-.222 2.661zm-3.286-2.159h-4.475v-14h10v6.688l2-.471v-8.217c0-1.104-.895-2-2-2h-10c-1.105 0-2 .896-2 2v18.678c-.001 2.213 3.503 3.322 7.005 3.322 1.812 0 3.619-.299 4.944-.894-2.121-.946-6.378-1.576-5.474-5.106z"/></svg></div>
        <div><svg className="w-8 h-8 m-1 invert" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M22 17.607c-.786 2.28-3.139 6.317-5.563 6.361-1.608.031-2.125-.953-3.963-.953-1.837 0-2.412.923-3.932.983-2.572.099-6.542-5.827-6.542-10.995 0-4.747 3.308-7.1 6.198-7.143 1.55-.028 3.014 1.045 3.959 1.045.949 0 2.727-1.29 4.596-1.101.782.033 2.979.315 4.389 2.377-3.741 2.442-3.158 7.549.858 9.426zm-5.222-17.607c-2.826.114-5.132 3.079-4.81 5.531 2.612.203 5.118-2.725 4.81-5.531z"/></svg></div>
        <div><svg className="w-8 h-8 m-1 invert" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M2.897 4.181c2.43-2.828 5.763-4.181 9.072-4.181 4.288 0 8.535 2.273 10.717 6.554-2.722.001-6.984 0-9.293 0-1.674.001-2.755-.037-3.926.579-1.376.724-2.415 2.067-2.777 3.644l-3.793-6.596zm5.11 7.819c0 2.2 1.789 3.99 3.988 3.99s3.988-1.79 3.988-3.99-1.789-3.991-3.988-3.991-3.988 1.791-3.988 3.991zm5.536 5.223c-2.238.666-4.858-.073-6.293-2.549-1.095-1.891-3.989-6.933-5.305-9.225-1.33 2.04-1.945 4.294-1.945 6.507 0 5.448 3.726 10.65 9.673 11.818l3.87-6.551zm2.158-9.214c1.864 1.734 2.271 4.542 1.007 6.719-.951 1.641-3.988 6.766-5.46 9.248 7.189.443 12.752-5.36 12.752-11.972 0-1.313-.22-2.66-.69-3.995h-7.609z"/></svg></div>
      </div>
    </div>
  );
}