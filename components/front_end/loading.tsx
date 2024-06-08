"use client"
import { useEffect, useState } from "react";
import Com from "@/components/front_end/Com";
// export default function Loading() {
//   const [seconds, setSeconds] = useState("Loading");

//   useEffect(() => {
//     const myInterval = setInterval(() => {
//       const timeo =setTimeout(()=>{
//         setSeconds((prev) => {
//           if (prev.length >= 10) {
//             return "Loading";
//           }
//           return prev + "."; // turn off (Component did unmount.)
//         });
//         clearTimeout(timeo);
//       }, 4000);
//       })
      

//     return () => {
//       console.log("Interval ends.");
//       clearInterval(myInterval);
//     };
//   }, []);
//   return (
//     <>
//       <h1>{seconds}</h1>
//     </>
//   );
// }


export default function Loading() {
  const [show, setShow] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setShow(false);
      
    }, 5000)
  }, []);

  if (!show) return "No animation";

  return (
    <Com/>
  );
}