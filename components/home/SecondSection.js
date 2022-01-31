import { useState } from "react";
import Link from "next/link";

export default function Second(){
  
  return(
                 <div className="relative  bg-black  pt-20 ">
                    <Icons></Icons>
                    <Steps></Steps> 
                    
                 </div>
          );
}
function Steps(){
          const [plan,setplan] = useState(2);
          return(
                    <div className="text-white font-font-OpenSan-Condensed  flex flex-col justify-center items-center z-0">
                              <div className="text-center text-3xl py-4"><h3>Just 3 steps to the best documentaries on the planet:</h3></div>
                              <div className="flex flex-col justify-center items-center px-3 my-5">
                                        <div className="scale-90 brightness-110 text-center h-14  w-14 font-semibold rounded-full bg-gradient-to-br from-yellow-500 via-orange-400 text-3xl text-black to-yellow-500 pt-2"><h5>1</h5></div>
                                        <div className="my-2 text-2xl text-center text-gray-200 ">Confirm the subscription that is right for you.</div>
                                        <div className="my-0 text-xs text-center text-gray-400">Choose between monthly, annual subscriptions</div>
                              </div>
                            
                              
                              <div className="flex flex-col justify-center items-center px-3 my-5">
                                        <div className="scale-90 brightness-110 text-center h-14  w-14 font-semibold rounded-full bg-gradient-to-br from-yellow-500 via-orange-400 text-3xl text-black to-yellow-500 pt-2"><h5>2</h5></div>
                                        <div className="text-2xl text-center text-gray-200 ">Create your account.</div>
                                        <div className="my-0 text-xs text-center text-gray-400">Gain access to Curiosity stream anytime, anywhere</div>
                              </div>

                              <div className="flex flex-col justify-center items-center px-3 my-5">
                                        <div className="scale-90 brightness-110 text-center h-14  w-14 font-semibold rounded-full bg-gradient-to-br from-yellow-500 via-orange-400 text-3xl text-black to-yellow-500 pt-2"><h5>3</h5></div>
                                        <div className="text-2xl text-center text-gray-200 ">Get Comfy on couch and enjoy</div>
                                        <div className="my-0 text-xs text-center text-gray-400">Sometimes, the simple things are more fun and meaningful<br></br> than all the banquets in the world.</div>
                              </div>
                             
                              <div className="flex flex-col justify-start item-center my-8 space-y-1">
                                <div>
                                  <Link href="/signUp"><a>
                                  <div className="flex flex-row item-center justify-center space-x-2 p-2 rounded shadow-2xl shadow-yellow-600/50 tracking-wider text-lg text-center text-gray-900 font-sans font-medium bg-gradient-to-br from-yellow-500 via-orange-400  to-yellow-500">
                                    <div>Get Started</div>
                                    <div><svg className="w-7 h-7" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M21 12l-18 12v-24z"/></svg></div>
                                  </div>
                                  </a></Link>
                                </div>
                                <div><h3 className="font-sans text-yellow-600 text-sm">or redeem a Curiosity Stream gift card</h3></div>
                              </div>
                              <div className=" mt-7 mb-14">
                                <div><h3 className="text-lg text-center scale-90 font-sans tracking-wide text-yellow-500 ">Want a sneak peek of our library?<br></br> <strong>Click here!</strong></h3></div>
                              </div>
                    </div>
          );
}
function Icons(){
          return(
                    <div className="grid grid-cols-2 grid-rows-2 gap-1 text-white font-font-OpenSan-Condensed tracking-wider text-lg text-center">
                                     <div className="flex flex-col justify-center items-center h-44">
                                               <div className="w-16 h-16"><svg viewBox="0 0 70 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full text-primary text-yellow-500"><path d="M58 12h3.5v8H58v-8zM58 26h3.5v8H58v-8zM58 40h3.5v8H58v-8zM8.5 12H12v8H8.5v-8zM8.5 26H12v8H8.5v-8zM8.5 40H12v8H8.5v-8z" fill="currentColor"></path><g clipPath="url(#perk-reel_svg__clip0_112_9944)"><path d="M28.295 21.436a.25.25 0 01.362-.223l17.128 8.563a.25.25 0 010 .448l-17.128 8.563a.25.25 0 01-.362-.223V21.436z" fill="#F7F7F7" stroke="#F7F7F7" strokeWidth="1.5"></path></g><rect x="1" y="1" width="68" height="58" rx="4" stroke="currentColor" strokeWidth="2"></rect><defs><clipPath id="perk-reel_svg__clip0_112_9944"><path fill="#fff" transform="translate(27.545 19.818)" d="M0 0h20.364v20.364H0z"></path></clipPath></defs></svg></div>
                                               <div className="pt-2">Thousands of documentaries</div>
                                     </div>
                                     <div className="flex flex-col justify-center items-center h-44">
                                                  <div className="w-16 h-16"> <svg viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full text-primary text-yellow-500"><path fillRule="evenodd" clipRule="evenodd" d="M31.49 18.481V9.082h3.01v9.399c0 1.805-1.17 3.628-3.01 4.22v2.532h-3.011v-2.53A4.498 4.498 0 0125.5 18.48V9.082h2.979v9.399c0 .764.695 1.48 1.521 1.48.828 0 1.49-.716 1.49-1.48zm-1.484 11.287c-.879 0-1.59-.738-1.59-1.649 0-.91.711-1.648 1.59-1.648.878 0 1.59.737 1.59 1.648 0 .911-.712 1.649-1.59 1.649z" fill="#F7F7F7"></path><path stroke="currentColor" strokeWidth="4" d="M30 39.586v7.81"></path><path d="M49.5 9.421a3 3 0 00-3 3v7.313c0 2.39 2.656 3.82 4.65 2.505l6-3.953a3 3 0 001.35-2.505v-3.36a3 3 0 00-3-3h-6z" stroke="currentColor" strokeWidth="2"></path><path d="M10.5 9.376a3.045 3.045 0 013.046 3.045v7.313c0 2.425-2.696 3.877-4.721 2.543l-6-3.954a3.045 3.045 0 01-1.37-2.542v-3.36A3.045 3.045 0 014.5 9.376h6z" stroke="currentColor" strokeWidth="2.09"></path><path d="M18.682 1h22.636A5.182 5.182 0 0146.5 6.182v21.154c0 1.788-.922 3.45-2.439 4.396l-11.318 7.062a5.182 5.182 0 01-5.486 0l-11.318-7.062a5.182 5.182 0 01-2.439-4.396V6.182A5.182 5.182 0 0118.682 1z" stroke="currentColor" strokeWidth="2"></path><mask id="perk-award_svg__a" fill="#fff"><rect x="19.5" y="46.895" width="20" height="13.026" rx="1"></rect></mask><rect x="19.5" y="46.895" width="20" height="13.026" rx="1" stroke="currentColor" strokeWidth="4" mask="url(#perk-award_svg__a)"></rect><rect x="14" y="57.916" width="30" height="2.084" rx="1.042" fill="currentColor"></rect><rect x="14" y="57.916" width="30" height="2.084" rx="1.042" stroke="currentColor"></rect></svg></div>
                                                  <div className="pt-2">Award winning exclusives & originals</div>
                                     </div>
                                     <div className="flex flex-col justify-center items-center h-44">
                                                  <div className="w-16 h-16"><svg viewBox="5 0 83 62" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full text-primary text-yellow-500"><path d="M40.103 49.106A2 2 0 0141.892 48h12.291a2 2 0 011.79 1.106l4 8A2 2 0 0158.182 60H37.892a2 2 0 01-1.79-2.894l4-8z" stroke="currentColor" strokeWidth="2"></path><path d="M14.038 8.23c0-1.917.716-3.756 1.991-5.112C17.305 1.762 19.034 1 20.838 1h54.4c1.803 0 3.533.762 4.808 2.118 1.275 1.356 1.992 3.195 1.992 5.113v32.538c0 1.918-.717 3.757-1.992 5.113C78.77 47.238 77.04 48 75.238 48h-54.4c-1.804 0-3.534-.762-4.809-2.118-1.275-1.356-1.991-3.195-1.991-5.113V8.231z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path><circle cx="48.038" cy="43" r="2" fill="#F7F7F7"></circle><g filter="url(#perk-devices_svg__filter0_d_112_9919)"><g filter="url(#perk-devices_svg__filter1_dd_112_9919)"><path d="M84.505 35h-10a2.5 2.5 0 00-2.5 2.5v20a2.5 2.5 0 002.5 2.5h10a2.5 2.5 0 002.5-2.5v-20a2.5 2.5 0 00-2.5-2.5z" fill="#020713"></path><path d="M84.505 35h-10a2.5 2.5 0 00-2.5 2.5v20a2.5 2.5 0 002.5 2.5h10a2.5 2.5 0 002.5-2.5v-20a2.5 2.5 0 00-2.5-2.5z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path></g><circle cx="79.505" cy="55.5" r="1.5" fill="#F7F7F7"></circle></g><g filter="url(#perk-devices_svg__filter2_d_112_9919)"><path d="M26.995 23h-18c-1.657 0-3 1.657-3 3.7v29.6c0 2.044 1.343 3.7 3 3.7h18c1.656 0 3-1.657 3-3.7V26.7c0-2.043-1.344-3.7-3-3.7z" fill="#020713"></path><path d="M26.995 23h-18c-1.657 0-3 1.657-3 3.7v29.6c0 2.044 1.343 3.7 3 3.7h18c1.656 0 3-1.657 3-3.7V26.7c0-2.043-1.344-3.7-3-3.7z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path></g><circle cx="17.99" cy="54" r="2" fill="#F7F7F7"></circle><defs><filter id="perk-devices_svg__filter0_d_112_9919" x="67.005" y="34" width="25" height="35" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB"><feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood><feColorMatrix in="SourceAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"></feColorMatrix><feOffset dy="4"></feOffset><feGaussianBlur stdDeviation="2"></feGaussianBlur><feComposite in2="hardAlpha" operator="out"></feComposite><feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.99 0"></feColorMatrix><feBlend in2="BackgroundImageFix" result="effect1_dropShadow_112_9919"></feBlend><feBlend in="SourceGraphic" in2="effect1_dropShadow_112_9919" result="shape"></feBlend></filter><filter id="perk-devices_svg__filter1_dd_112_9919" x="39.005" y="22" width="81" height="91" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB"><feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood><feColorMatrix in="SourceAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"></feColorMatrix><feOffset dy="20"></feOffset><feGaussianBlur stdDeviation="16"></feGaussianBlur><feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.32 0"></feColorMatrix><feBlend in2="BackgroundImageFix" result="effect1_dropShadow_112_9919"></feBlend><feColorMatrix in="SourceAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"></feColorMatrix><feOffset dy="2"></feOffset><feGaussianBlur stdDeviation="4"></feGaussianBlur><feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.08 0"></feColorMatrix><feBlend in2="effect1_dropShadow_112_9919" result="effect2_dropShadow_112_9919"></feBlend><feBlend in="SourceGraphic" in2="effect2_dropShadow_112_9919" result="shape"></feBlend></filter><filter id="perk-devices_svg__filter2_d_112_9919" x="0.995" y="22" width="34" height="47" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB"><feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood><feColorMatrix in="SourceAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"></feColorMatrix><feOffset dy="4"></feOffset><feGaussianBlur stdDeviation="2"></feGaussianBlur><feComposite in2="hardAlpha" operator="out"></feComposite><feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.69 0"></feColorMatrix><feBlend in2="BackgroundImageFix" result="effect1_dropShadow_112_9919"></feBlend><feBlend in="SourceGraphic" in2="effect1_dropShadow_112_9919" result="shape"></feBlend></filter></defs></svg></div>
                                                  <div className="pt-2">Watch anytime, anywhere</div>
                                     </div>
                                     <div className="flex flex-col justify-evenly items-center h-44">
                                               <div className="w-16 h-16"><svg viewBox="0 0 61 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full text-primary text-yellow-500"><path d="M21.909 38.59L39.091 21.41M21.909 21.409l17.182 17.182" stroke="#F7F7F7" strokeWidth="2" strokeLinecap="square"></path><circle cx="30.5" cy="30" r="29" stroke="currentColor" strokeWidth="2"></circle></svg></div>
                                               <div className="pt-2">Cancel your plan anytime</div>
                                     </div>
                                     
                    </div>
          );
}

