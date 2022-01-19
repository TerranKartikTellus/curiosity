export default function Section2(){
          return(
                    <div className="bg-black min-h-screen ">
                     <div className="relative min-h-screen">
                              <div className="pt-28  flex flex-col items-center text-gray-100 text-center tracking-wider text-sm">
                                  <div className="grid grid-cols-2 grid-rows-2 gap-12">
                                        <div><Icon1></Icon1></div>
                                        <div><Icon2></Icon2></div>
                                        <div><Icon3></Icon3></div>
                                        <div><Icon4></Icon4></div>
                                  </div>
                                  
                                </div>
                              <div className="absolute bottom-20 left-0">
                                 <AllSteps></AllSteps>
                              </div>
                     </div>
                      
                      
                    </div>
          );
}


function AllSteps(){
          return (
                    <div className="text-gray-100 px-10  space-y-4">
                              <div className="pt-10 text-2xl tracking-wider pb-7 scale-105 px-2 text-center">Just 3 steps to the best documentaries on the planet:</div>
                              <div className=" text-right flex flex-row space-x-3 ">
                                        <div><SubIco className="mx-auto" ></SubIco></div>
                                        <div className="text-lg tracking-wider text-right  w-full my-auto">Confirm the subscription that is right for you.</div>
                              </div>

                              <div className=" text-right flex flex-row space-x-3 ">
                                        <div><AccIco className="mx-auto" ></AccIco></div>
                                        <div className="text-lg tracking-wider text-right  w-full my-auto">Create your account.</div>          
                              </div>

                              <div className=" text-right flex flex-row space-x-3 ">
                                        <div><PayIco className="mx-auto" ></PayIco></div>
                                        <div className="text-lg tracking-wider text-right  w-full my-auto">Confirm Payment</div>
                              </div>

                    </div>
          );
}

function Icon1(){
          return(
                    <div className="flex flex-col ">
                        <svg className="h-16"  viewBox="0 0 70 60" fill="none" xmlns="http://www.w3.org/2000/svg" >
                        <path className="fill-yellow-500" d="M58 12h3.5v8H58v-8zM58 26h3.5v8H58v-8zM58 40h3.5v8H58v-8zM8.5 12H12v8H8.5v-8zM8.5 26H12v8H8.5v-8zM8.5 40H12v8H8.5v-8z" fill="currentColor"></path>
                        <g  clipPath={"url(#perk-reel_svg__clip0_112_9944)"}>
                        <path  d="M28.295 21.436a.25.25 0 01.362-.223l17.128 8.563a.25.25 0 010 .448l-17.128 8.563a.25.25 0 01-.362-.223V21.436z" fill="#F7F7F7" stroke="#F7F7F7" strokeWidth="1.5"></path></g>
                        <rect  x="1" y="1"  width="68" height="58" rx="4" stroke="#eab308" strokeWidth="2"></rect>
                        <defs><clipPath  id="perk-reel_svg__clip0_112_9944"><path  fill="#fff" transform="translate(27.545 19.818)" d="M0 0h20.364v20.364H0z">
                        </path></clipPath>
                        </defs></svg>
                        <h2 className="mt-5">Thousands of<br></br> documentaries</h2>
                    </div>
          );
}
function Icon2(){
          return(
                    <div className="flex flex-col ">
                              <svg className="h-16 " viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path className="fill-gray-50" fillRule="evenodd" clipRule="evenodd" d="M31.49 18.481V9.082h3.01v9.399c0 1.805-1.17 3.628-3.01 4.22v2.532h-3.011v-2.53A4.498 4.498 0 0125.5 18.48V9.082h2.979v9.399c0 .764.695 1.48 1.521 1.48.828 0 1.49-.716 1.49-1.48zm-1.484 11.287c-.879 0-1.59-.738-1.59-1.649 0-.91.711-1.648 1.59-1.648.878 0 1.59.737 1.59 1.648 0 .911-.712 1.649-1.59 1.649z" fill="#F7F7F7"></path>
                                        <path stroke="#eab308" strokeWidth="4" d="M30 39.586v7.81"></path>
                                        <path  d="M49.5 9.421a3 3 0 00-3 3v7.313c0 2.39 2.656 3.82 4.65 2.505l6-3.953a3 3 0 001.35-2.505v-3.36a3 3 0 00-3-3h-6z" stroke="#eab308" strokeWidth="2"></path>
                                        <path  d="M10.5 9.376a3.045 3.045 0 013.046 3.045v7.313c0 2.425-2.696 3.877-4.721 2.543l-6-3.954a3.045 3.045 0 01-1.37-2.542v-3.36A3.045 3.045 0 014.5 9.376h6z" stroke="#eab308" strokeWidth="2.09"></path>
                                        <path  d="M18.682 1h22.636A5.182 5.182 0 0146.5 6.182v21.154c0 1.788-.922 3.45-2.439 4.396l-11.318 7.062a5.182 5.182 0 01-5.486 0l-11.318-7.062a5.182 5.182 0 01-2.439-4.396V6.182A5.182 5.182 0 0118.682 1z" stroke="#eab308" stroke-width="2"></path>
                                        <mask id="perk-award_svg__a" fill="#fffe"><rect x="19.5" y="46.895" width="20" height="13.026" rx="1"></rect></mask>
                                        <rect  x="19.5" y="46.895" width="20" height="13.026" rx="1" stroke="#eab308" strokeWidth="4" mask="url(#perk-award_svg__a)"></rect>
                                        <rect className="fill-yellow-400" x="14" y="57.916" width="30" height="2.084" rx="1.042" fill="currentColor"></rect><rect x="14" y="57.916" width="30" height="2.084" rx="1.042" stroke="currentColor"></rect>
                              </svg>

                              <h2 className="mt-5">Award-winning<br></br> exclusives & originals</h2>
                              </div>
          );
}

function Icon3(){
          return(
                <div className="flex flex-col ">
                  <svg className="h-16" viewBox="5 0 83 62" fill="none" xmlns="http://www.w3.org/2000/svg" >
                  <path d="M40.103 49.106A2 2 0 0141.892 48h12.291a2 2 0 011.79 1.106l4 8A2 2 0 0158.182 60H37.892a2 2 0 01-1.79-2.894l4-8z" stroke="#eab308" strokeWidth="2"></path>
                  <path d="M14.038 8.23c0-1.917.716-3.756 1.991-5.112C17.305 1.762 19.034 1 20.838 1h54.4c1.803 0 3.533.762 4.808 2.118 1.275 1.356 1.992 3.195 1.992 5.113v32.538c0 1.918-.717 3.757-1.992 5.113C78.77 47.238 77.04 48 75.238 48h-54.4c-1.804 0-3.534-.762-4.809-2.118-1.275-1.356-1.991-3.195-1.991-5.113V8.231z" stroke="#eab308" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                  <circle cx="48.038" cy="43" r="2" fill="#F7F7F7"></circle><g filter="url(#perk-devices_svg__filter0_d_112_9919)"><g filter="url(#perk-devices_svg__filter1_dd_112_9919)"><path d="M84.505 35h-10a2.5 2.5 0 00-2.5 2.5v20a2.5 2.5 0 002.5 2.5h10a2.5 2.5 0 002.5-2.5v-20a2.5 2.5 0 00-2.5-2.5z" fill="#020713"></path>
                  <path d="M84.505 35h-10a2.5 2.5 0 00-2.5 2.5v20a2.5 2.5 0 002.5 2.5h10a2.5 2.5 0 002.5-2.5v-20a2.5 2.5 0 00-2.5-2.5z" stroke="#eab308" strokeLidth="2" strokeLinecap="round" strokeLinejoin="round"></path></g>
                  <circle cx="79.505" cy="55.5" r="1.5" fill="#F7F7F7"></circle></g><g filter="url(#perk-devices_svg__filter2_d_112_9919)"><path d="M26.995 23h-18c-1.657 0-3 1.657-3 3.7v29.6c0 2.044 1.343 3.7 3 3.7h18c1.656 0 3-1.657 3-3.7V26.7c0-2.043-1.344-3.7-3-3.7z" fill="#020713"></path>
                  <path d="M26.995 23h-18c-1.657 0-3 1.657-3 3.7v29.6c0 2.044 1.343 3.7 3 3.7h18c1.656 0 3-1.657 3-3.7V26.7c0-2.043-1.344-3.7-3-3.7z" stroke="#eab308" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path></g>
                  <circle cx="17.99" cy="54" r="2" fill="#F7F7F7"></circle><defs><filter id="perk-devices_svg__filter0_d_112_9919" x="67.005" y="34" width="25" height="35" filterUnits="userSpaceOnUse" colorInterpolation-filters="sRGB">
                  <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood><feColorMatrix in="SourceAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"></feColorMatrix><feOffset dy="4"></feOffset><feGaussianBlur stdDeviation="2"></feGaussianBlur>
                  <feComposite in2="hardAlpha" operator="out"></feComposite><feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.99 0"></feColorMatrix><feBlend in2="BackgroundImageFix" result="effect1_dropShadow_112_9919"></feBlend><feBlend in="SourceGraphic" in2="effect1_dropShadow_112_9919" result="shape"></feBlend></filter>
                  <filter id="perk-devices_svg__filter1_dd_112_9919" x="39.005" y="22" width="81" height="91" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB"><feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood><feColorMatrix in="SourceAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"></feColorMatrix>
                  <feOffset dy="20"></feOffset><feGaussianBlur stdDeviation="16"></feGaussianBlur><feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.32 0"></feColorMatrix>
                  <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_112_9919"></feBlend>
                  <feColorMatrix in="SourceAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"></feColorMatrix><feOffset dy="2"></feOffset>
                  <feGaussianBlur stdDeviation="4"></feGaussianBlur><feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.08 0"></feColorMatrix>
                  <feBlend in2="effect1_dropShadow_112_9919" result="effect2_dropShadow_112_9919"></feBlend><feBlend in="SourceGraphic" in2="effect2_dropShadow_112_9919" result="shape"></feBlend></filter>
                  <filter id="perk-devices_svg__filter2_d_112_9919" x="0.995" y="22" width="34" height="47" filterUnits="userSpaceOnUse" colorFnterpolationFilters="sRGB"><feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
                  <feColorMatrix in="SourceAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"></feColorMatrix><feOffset dy="4"></feOffset><feGaussianBlur stdDeviation="2"></feGaussianBlur>
                  <feComposite in2="hardAlpha" operator="out"></feComposite><feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.69 0"></feColorMatrix>
                  <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_112_9919"></feBlend><feBlend in="SourceGraphic" in2="effect1_dropShadow_112_9919" result="shape"></feBlend></filter></defs>
                  </svg>
                  <h2 className="mt-5">Watch anytime,<br></br> anywhere</h2>
              </div>
          );
}

function Icon4(){
          return(
                    <div className="flex flex-col ">
                              <svg className="h-12" viewBox="0 0 61 60" fill="none" xmlns="http://www.w3.org/2000/svg" >
                                        <path d="M21.909 38.59L39.091 21.41M21.909 21.409l17.182 17.182" stroke="#F7F7F7" stroke-width="2" stroke-linecap="square"></path>
                                        <circle cx="30.5" cy="30" r="29" stroke="#eab308" strokeWidth="2"></circle>
                              </svg>
                              <h2 className="mt-5">Cancel your<br></br> plan anytime</h2>
                    </div>
          );
}

function SubIco(){
          return(
                    <div className="w-16 h-16 bg-yellow-500 items-center flex justify-center rounded-full ">
                              <svg className="w-[28px] h-[28px] scale-125" width="24" height="24" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd"><path d="M1 24h-1v-2h.998l.014-9h3.988v-3h2v3h2v-3h2v3h2v-3h2v3h2v-3h2v3h4v9h1v2h-23zm20-7h-18v5h2v-3c0-.552.448-1 1-1s1 .448 1 1v3h2v-3c0-.552.448-1 1-1s1 .448 1 1v3h2v-3c0-.552.448-1 1-1s1 .448 1 1v3h2v-3c0-.552.448-1 1-1s1 .448 1 1v3h2v-5zm-6-15h-3v1c2.966 0 6.158 1.979 7 6h-14c.547-3.78 3.638-5.827 6-6v-3h4v2z"/></svg>
                    </div>
          );
}
function PayIco(){
          return(
                    <div className="w-16 h-16 bg-yellow-500 items-center flex justify-center rounded-full ">
                       <svg className="w-[28px] h-[28px]  scale-125" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M4.062 16.626c-.165-.5.038-.921.656-1.145l3.249-1.155-.134 1.028c-.077.589-.103 1.107-.089 1.573-.25.078-1.095.339-1.945.552-.871.218-1.538-.25-1.737-.853zm1.745 1.916c-.461.167-.612.48-.489.854.147.449.645.798 1.294.635.606-.151 1.408-.396 1.701-.487-.203-.505-.378-1.035-.479-1.659l-2.027.657zm.193-10.542h2.643l.128-1h-2.771v1zm16-6v9c0 1.104-.896 2-2 2h-1.989l.015.02c-.031.43-.105.906-.222 1.457-.451 2.144-1.637 5.122-.83 8.418-2.312.356-3.651.523-5.992 1.105-.273-4.062-2.266-4.943-1.804-8.47.542-4.137.844-6.461 1.196-9.255.11-.879.731-1.307 1.337-1.307.631 0 1.246.464 1.252 1.366.021 3.303.108 6.593.324 7.393.146.54 1.087.638 1.087-.512l-.002-2.216h5.128c.276 0 .5-.224.5-.5v-4.499h-5.568c-.157-1.461-1.27-2.531-2.721-2.531h-.001c-1.44 0-2.578 1.038-2.806 2.531h-4.904v4.5c0 .276.224.5.5.5h3.757l-.261 2h-3.996c-1.104 0-2-.896-2-2v-9c0-1.104.896-2 2-2h16c1.104 0 2 .896 2 2zm-2 .5c0-.276-.224-.5-.5-.5h-15c-.276 0-.5.224-.5.5v.5h16v-.5zm-14 7.5h2.386l.129-1h-2.515v1zm12-3h-3v1h3v-1z"/></svg>
                    </div>
          );
}
function AccIco(){
          return(
                    <div className="w-16 h-16 bg-yellow-500 items-center flex justify-center rounded-full ">
                    <svg className="w-[28px] h-[28px]  scale-125"  xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm7.753 18.305c-.261-.586-.789-.991-1.871-1.241-2.293-.529-4.428-.993-3.393-2.945 3.145-5.942.833-9.119-2.489-9.119-3.388 0-5.644 3.299-2.489 9.119 1.066 1.964-1.148 2.427-3.393 2.945-1.084.25-1.608.658-1.867 1.246-1.405-1.723-2.251-3.919-2.251-6.31 0-5.514 4.486-10 10-10s10 4.486 10 10c0 2.389-.845 4.583-2.247 6.305z"/></svg> 
                    </div>
          );
}