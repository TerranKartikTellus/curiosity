import { useState } from "react";

export default function Test(){
          const [plan , setplan] = useState("no");
          return(
                    <div>
                              <div>funct 1 plan = {plan}</div>
                              <div className="bg-green-500">
                                        <h2>Change</h2>
                                        <div><New></New></div>
                              </div>
                    </div>
          );
}
function New(){
          return(
                    <div>
                              <button onClick={()=>setplan("yes")}> Change</button>
                    </div>
          );
}