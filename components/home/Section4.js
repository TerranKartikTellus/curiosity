import Link from "next/link";

export default function Section3(){
          return(
                    <div className="bg-black min-h-screen">
                              <div className="relative min-h-screen">
                                         <div className="absolute top-1/4 flex flex-col justify-center items-center w-full ">
                                                  <AccIco></AccIco>
                                                  <div><h1 className="text-white text-2xl tracking-widest">Create your account.</h1></div>
                                                  <form className="flex flex-col justify-center items-center w-full pt-7">
                                                      <div className="flex flex-col justify-start w-4/5  my-1 space-y-2">
                                                            <label className="text-lg opacity-60 font-light  text-white tracking-widest">Email</label>
                                                            <input placeholder="You'll use this to login" className="outline-none px-4 focus:ring-yellow-400 py-3 text-lg tracking-wider  rounded bg-slate-900  text-gray-300 border-0 ring-2 ring-transparent"></input>
                                                      </div>
                                                      <div className="h-10 w-4/5 "></div>
                                                      <div className="flex flex-col justify-start w-4/5  my-1 space-y-2">
                                                            <label className="text-lg opacity-60 font-light  text-white tracking-widest">Password</label>
                                                            <input placeholder="Atleast 6 characters, please" className="outline-none px-4 focus:ring-yellow-400  py-3 text-lg tracking-wider rounded  bg-slate-900 text-gray-300 border-0 ring-2 ring-transparent"></input>
                                                      </div>
                                                      <div className="h-10 w-4/5 "></div>

                                                      <div className="w-4/5 rounded text-center font-semibold  px-2 py-3 text-black bg-gray-500 bg-opacity-60 tracking-wider" ><Link href={"/"}><a>Continue to Last Step</a></Link>  </div>
                                                  </form>

                                                  <div className="text-gray-100 w-4/5 text-center">
                                                  <div ><h4 className="pt-5 text-yellow-500 text-lg tracking-wide">Or redeem a Curiosity Stream gift card</h4></div>
                                                  <div> <h4 className="pt-3 text-gray-100 text-sm tracking-wide">Want a sneak peek of our library?</h4> <Link href="/"><a className="text-yellow-500 text-sm tracking-wide"> <p>Click here!</p>  </a></Link> </div>
                                                  </div>
                                        </div>

                                        <div className="absolute bottom-0 left-0 pb-2 px-2"><Bottomtray></Bottomtray></div>
                              </div>
                             
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

function Bottomtray(){
          return(
                    <div className="flex flex-row w-screen justify-between px-2 items-center">
                              <div>
                                        <svg className="w-14 h-14" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" title="Curiosity Stream" ><path fillRule="evenodd" clipRule="evenodd" d="M0 23.9996C0 10.7446 10.7454 0 24.0004 0C37.2554 0 48 10.7446 48 23.9996C48 37.2546 37.2554 48 24.0004 48C10.7454 48 0 37.2546 0 23.9996ZM21.948 37.904C21.948 39.1707 22.9745 40.1972 24.2428 40.1972C25.5111 40.1972 26.5391 39.1707 26.5391 37.904C26.5391 36.6342 25.5111 35.6077 24.2428 35.6077C22.9745 35.6077 21.948 36.6342 21.948 37.904ZM26.3605 29.9627C28.8062 29.1957 30.5612 27.0272 30.5612 24.5184V11H26.3605V24.5184C26.3605 25.5803 25.4357 26.4327 24.2814 26.4327C23.1263 26.4327 22.156 25.5803 22.156 24.5184V11H18V24.5184C18 27.0272 19.7095 29.1957 22.156 29.9627V34.2219H26.3605V29.9627Z" fill="url(#minilogo-58)"></path><defs><linearGradient id="minilogo-58" x1="-15.5044" y1="15.5044" x2="15.5044" y2="63.5044" gradientUnits="userSpaceOnUse"><stop stopColor="#ECC334"></stop><stop offset="1" stopColor="#EB8B4C"></stop></linearGradient></defs></svg>
                              </div>
                              <div> <SocialIco></SocialIco> </div>
                    </div>
          );
}

function SocialIco(){
          return(
                    <div className="flex flex-row space-x-1 pr-2">
                              <div><svg className="fill-gray-100 opacity-90" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/></svg></div>
                              <div><svg className="fill-gray-100 opacity-90" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/></svg></div>
                              <div><svg className="fill-gray-100 opacity-90" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg></div>
                              <div><svg className="fill-gray-100 opacity-90" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/></svg></div>
                              <div><svg className="fill-gray-100 opacity-90" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm0 19c-.721 0-1.418-.109-2.073-.312.286-.465.713-1.227.87-1.835l.437-1.664c.229.436.895.804 1.604.804 2.111 0 3.633-1.941 3.633-4.354 0-2.312-1.888-4.042-4.316-4.042-3.021 0-4.625 2.027-4.625 4.235 0 1.027.547 2.305 1.422 2.712.132.062.203.034.234-.094l.193-.793c.017-.071.009-.132-.049-.202-.288-.35-.521-.995-.521-1.597 0-1.544 1.169-3.038 3.161-3.038 1.72 0 2.924 1.172 2.924 2.848 0 1.894-.957 3.205-2.201 3.205-.687 0-1.201-.568-1.036-1.265.197-.833.58-1.73.58-2.331 0-.537-.288-.986-.886-.986-.702 0-1.268.727-1.268 1.7 0 .621.211 1.04.211 1.04s-.694 2.934-.821 3.479c-.142.605-.086 1.454-.025 2.008-2.603-1.02-4.448-3.553-4.448-6.518 0-3.866 3.135-7 7-7s7 3.134 7 7-3.135 7-7 7z"/></svg></div>
                            
                    </div>
          );
}