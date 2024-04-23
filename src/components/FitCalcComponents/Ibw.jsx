import { useState } from "react";
import axios from "axios";

const Ibw = () => {
  const [age, setAge] = useState();
  const [gender, setGender] = useState('');
  const [height, setHeight] = useState();
  const [ibw, setIbw] = useState(0)

  const bmrOptions = {
    method: 'GET',
    url: 'https://gym-fit.p.rapidapi.com/calculator/ibw',
    params: {
      height: `${height}`
    },
    headers: {
      'X-RapidAPI-Key': `${import.meta.env.VITE_RAPID_API_KEY}`,
      'X-RapidAPI-Host': 'gym-fit.p.rapidapi.com'
    }
  };

  const handleibwCalc = async()=>{
    try{
      const response = await axios.request(bmrOptions);
      console.log(response.data);
      const ibwRes = response.data
      setIbw(ibwRes)
    }catch(err){
      console.error("Error in IBW Calculation :",err.message)
    }finally{
      setAge(0);
      setGender('');
      setHeight(0);
      console.log(gender);
    }
  }
  return (
    <main className="mb-36">
      <h1 className="text-center text-2xl mb-4">IBW :  Ideal Body Weight</h1>
      <img
        src="/images/bmi.jpg"
        alt=""
        width={400}
        className="md:float-right"
      />
      <p className="text-lg">
      Ideal Body Weight (IBW) is an estimate of the weight considered optimal for an individual&apos;s height, age,  and gender. It serves as a guideline for maintaining a healthy weight range and is often used in clinical settings to assess health risks associated with underweight or overweight conditions. Calculating IBW involves considering various factors, including body composition, muscle mass, and overall health status.
      </p>
      <p className="text-lg">
      While IBW provides a useful reference point, it&apos;s important to recognize that individual factors such as muscle mass, bone density, and body composition can influence the ideal weight range. Additionally, IBW calculations may vary depending on different formulas or guidelines used. Therefore, it&apos;s essential to interpret IBW in conjunction with other indicators of health, such as BMI, waist circumference, and overall lifestyle factors.
      </p>
      <div className="lg:flex gap-10 w-full">
      <div className="mt-6 flex flex-col gap-4 lg:w-1/2 w-full border-[0.1px] p-8 shadow-lg shadow-slate-300 rounded-xl">
        <div className="">
          <label htmlFor="age">Age</label>
          <input
            type="number"
            placeholder="age"
            className="border-[0.2px] border-[#ec008c] ml-2 px-2 py-1 rounded-xl outline-none w-3/4"
            value={age}
            onChange={(e)=>setAge(e.target.value)}
          />
        </div>
        <div className="flex gap-4">
          <label htmlFor="gender">Gender :</label>
          <div>
            <input type="radio" id="male" value="male" name="gender" onChange={(e)=>{setGender(e.target.value)}}/>
            <label htmlFor="male" className="ml-1">
              Male
            </label>
          </div>
          <div>
            <input type="radio" id="female" value="female" name="gender" onChange={(e)=>{setGender(e.target.value)}}/>
            <label htmlFor="female" className="ml-1">
              Female
            </label>
          </div>
        </div>
        <div>
          <label htmlFor="">Height</label>
          <input
            type="number"
            placeholder="Height in cm"
            className="border-[0.2px] border-[#ec008c] ml-2 px-2 py-1 rounded-xl outline-none w-3/4"
            value={height}
            onChange={(e)=>setHeight(e.target.value)}
          />
        </div>
        <div className="">
          <button className="mt-4 bg-gradient-to-r from-[#DA4453] to-[#89216B] text-[#fff] px-4 py-2 rounded-2xl hover:bg-gradient-to-r hover:from-[#ec008c] hover:to-[#fc6767] transition duration-500 ease-in-out shadow-lg shadow-slate-500"
          onClick={handleibwCalc}>
            Calculate
          </button>
        </div>
      </div>
      <div className="border-[0.1px] rounded-xl p-8 shadow-lg shadow-slate-300 mt-6 lg:w-1/2 lg:h-full h-[250px]">
        <div className="mt-6">
        <img
              src="/public/images/weighing-scale.png"
              alt=""
              width={200}
              className="float-left drop-shadow-2xl"
            />
          <h4 className="py-10 text-center text-2xl">Result</h4>
          <p className="text-center">Your IBW : <span className="text-4xl"> {ibw}<span className="text-sm"> Kg</span></span></p>
        </div>
      </div>
      </div>
    </main>
  );
};

export default Ibw;
