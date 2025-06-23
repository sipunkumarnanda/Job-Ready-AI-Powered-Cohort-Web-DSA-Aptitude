
import React, { useRef } from "react";
import styled from "styled-components"

//   const Myh1 = styled.h1`
//   font-size: 2em;
//   color: #BF4F74;
//   display : inline-block;
//   padding : 0 1em;
//   background-color : ${(props)=> props.bg}
// `;

  const Myh1 = styled.h1({
     fontSize: "2em",
  color: "#BF4F74",
  display: "inline-block",
  padding: "0 1em",
  backgroundColor: (props) => props.bg
  })


  // -----------------------------------------


const App = () => {
  const inputRef = useRef();

  // const watchHandler = () =>{
  //    console.log(inputRef.current.value);
  //    inputRef.current.style.color = "tomato"
  // }


  const watchHandler = () =>{
     console.log(inputRef.current.value);
     if(inputRef.current.value.length < 4){
      inputRef.current.style.borderBottom = "1px solid tomato"
     }else{
      inputRef.current.style.borderBottom = "1px solid green"
     }
  }

  return (
    <div className="h-screen w-screen bg-gray-900 p-5 text-white">
      <Myh1 bg="yellow">Lets learn useref</Myh1>
      <input
        ref={inputRef}
        type="text"
        placeholder="enetr something...."
        className="block border-b p-2 text-2xl outline-0"
      />
      <button 
      onClick={watchHandler}
      className="p-2 bg-[#FF6347] text-white rounded  mt-5 cursor-pointer">
        See value
      </button>
    </div>
  );
};

export default App;
