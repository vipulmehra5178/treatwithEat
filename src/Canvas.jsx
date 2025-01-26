/* eslint-disable react/prop-types */
//rfce se yh template ajyega 

import { useEffect , useRef , useState} from "react";
import CanvasImages from "./canvasimage";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";


function Canvas( {details}) {
  // eslint-disable-next-line no-unused-vars
  const { startIndex , numImages , duration , size , top , left , zIndex } = details;

  const [index,setIndex] = useState({ value: details.startIndex }); // basically it indicating konsi image showcase krni hai 
 // value 0-149 mein alg alg honi chiye taki simultaneously alga lag images aye 
  const canvasRef = useRef(null);

//using gsap
  useGSAP(() =>{
    gsap.to(index , {
      value: details.startIndex + details.numImages - 1 ,
      repeat: -1,
      duration: details.duration, // seconds
      ease: "linear",
      onUpdate: () => {
        setIndex({ value: Math.round(index.value) }); //Math.round for getting alwys an integer value 
      }
    })

  })

  useEffect(() => {
    //console.log(CanvasImages);
    //load first image from tehn canvasimage array in the canvas tag
    const scale = window.devicePixelRatio;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const img = new Image();
    img.src = CanvasImages[index.value];
    img.onload = () => {
      canvas.width = canvas.offsetWidth * scale;
      canvas.height = canvas.offsetHeight * scale;
      canvas.style.width = canvas.offsetHeight + "px";
      canvas.style.height = canvas.offsetHeight + "px";
      ctx.scale(scale,scale);
      ctx.drawImage( img , 0 , 0 , canvas.offsetWidth , canvas.offsetHeight );
    };
  } , [index]); // useeffect chnge ho index ki value ke sth
  return (
  <canvas 
  data-scroll
  data-scroll-speed={
    //random value between 0 and 1
    Math.random().toFixed(1)
  }
  ref={canvasRef}
  className="absolute"
  style={{ width: `${size*1.4}px` , 
  height: `${size*1.4}px`,
  top: `${top}%`,
  left: `${left}%`,
  zIndex: `${zIndex}`,
}}
  id="canvas"
  ></canvas>
  );
}
// ab hume chiye alg alg canvas alag alg screen pr chle 
// canva mein data-scroll wala thing  , 
/* 
data-scroll
data-scroll-speed={
  //random value between 0 and 1
  Math.random().toFixed(1)
}
   isse humne kia kya ki kuch chillis tez chlrhi kuch slow and yh ni hume pta konsi kese chlegi its random 

   // data wale file mein keft chnge krenge to chillis andr ki trf hojyengi 
   // agr hum 0 , 1 , 2 , 3 ... ke aage bhi screen bnate hai mtlb vohi scroller mera mtlb 
   // i hope u got tht so left bdl kr mtlb voh data.js modify krke randomly we can chnge its postioning andd all tht !
   
   */

export default Canvas
