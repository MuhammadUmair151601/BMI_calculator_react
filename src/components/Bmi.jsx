import React, { useState } from "react";

const Bmi = () => {

  const [weight, setWeight] = useState()
  const [height, setHeight] = useState()
  const [message, setMessage] = useState('')
  const [bmi, setBmi] = useState('')

  let calcBmi = (e)=>{
  e.preventDefault();

  if(weight===0 || height===0){
    alert("please enter valid age and height")
  }else{
    let bmi = (weight/(height*height)*703)
    setBmi(bmi.toFixed(1))

    // 

    if(bmi<25){
      setMessage("you are underweight")
    }else if(bmi>25 && bmi<30){
      setMessage("You are healtht")
    }else{
      setMessage("you are overweight")
    }
  }
  } 

  let reload = ()=>{
    window.location.reload()
  }
  return (
    <div className="bg-[#715A5A] w-80 h-100 flex flex-col text-gray-300 justify-center items-center rounded-[7px] shadow-[0_0_10px_#D3DAD9]">
      <h1 className="text-3xl font-bold text-amber-400">BMI Calculator</h1>
      <div className="pt-5">
        <form onSubmit={calcBmi}>
          <div className="flex flex-col gap-2">
            <label className="text-lg font-semibold">Weight(lb)</label>
            <input className="bg-gray-700 w-55 rounded-[7px] outline-none px-5 py-1"
              type="text"
              placeholder="Enter Weight in lb"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
            />
          </div>

          <div className="flex flex-col gap-2 mt-3"> 
            <label className="text-lg font-semibold">Height(In)</label>
            <input className="bg-gray-700 w-55 rounded-[5px] outline-none px-5 py-1"
              type="text"
              placeholder="Enter Weight in lb"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
            />
          </div>
          <div className="flex flex-col gap-1 mt-3">
          <button className="bg-gray-700 text-white text-lg font-bold rounded-[5px] mt-2 cursor-pointer active:scale-90 duration-300" type="submit">Calculate</button>
          <button  className="bg-gray-700 text-white text-lg font-bold rounded-[5px] mt-2 cursor-pointer active:scale-90 duration-300" onClick={reload} type="submit">Reload</button>
          </div>
         
        </form>

        <div className="flex flex-col mt-4">
           <h1 className="text-lg font-semibold">Your BMI is: {bmi}</h1>
        <p className="text-lg font-semibold">{message}</p>
        </div>

       
      </div>
    </div>
  );
};

export default Bmi;
