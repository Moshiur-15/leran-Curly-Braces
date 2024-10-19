// import React from 'react'

// export default function Service({handle}) {
//   return (
//     <div>
//       <button onClick={()=>handle("hello")}>click me</button>
//     </div>
//   )
// }


// export default function Service() {
//   const [Service, setService] = useState(true);

//   const handleService = () => {
//     setService(!Service);
//   }

//   return (
//     <div>
//         <button onClick={handleService}>click me</button>

//         {Service?<Condition></Condition>:<Condition2></Condition2>}
//     </div>
//   )
// }



import React from "react";
import { useState } from "react";
import Condition from "./condition";
import Condition2 from "./conditon2";

export default function Service() {
  const [Service, setService] = useState(true);

  const handleBtn = () => {
    setService(!Service);
  };
  return (
    <>
      <button onClick={handleBtn}>click and change file data</button>
      {Service ? <Condition></Condition> : <Condition2></Condition2>}
    </>
  );
}
