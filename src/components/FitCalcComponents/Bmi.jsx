import { useState } from "react";
import axios from "axios";

const Bmi = () => {
  const [age, setAge] = useState();
  const [gender, setGender] = useState();
  const [height, setHeight] = useState();
  const [weight, setWeight] = useState();
  const [bmi, setBmi] = useState(0)
  const [bmiCat, setBmiCat] = useState('calculate to know')

  const bmiOptions = {
    method: 'GET',
    url: 'https://gym-fit.p.rapidapi.com/calculator/bmi',
    params: {
      weight: `${weight}`,
      height: `${height}`
    },
    headers: {
      'X-RapidAPI-Key': `${import.meta.env.VITE_RAPID_API_KEY}`,
      'X-RapidAPI-Host': 'gym-fit.p.rapidapi.com'
    }
  };

  const handlebmiCalc = async()=>{
    try{
      const response = await axios.request(bmiOptions);
      const bmiRes = response.data
      setBmi(bmiRes)
      if(bmiRes <= 18.5){
        setBmiCat('Under Weight')
      }else if(bmiRes <= 24.9){
        setBmiCat('Normal Weight')
      }else if(bmiRes <= 29.9){
        setBmiCat('Over Weight')
      }else if(bmiRes > 30){
        setBmiCat('Obese')
      }

    }catch(err){
      console.error("Error in BMI Calculation",err.message)
    }finally{
      setAge(0);
      setGender('');
      setHeight(0);
      setWeight(0)
    }
  }
  return (
    <main className="mb-36">
      <h1 className="text-center text-2xl mb-4">BMI : Body Mass Index</h1>
      <img
        src="/images/bmi.jpg"
        alt=""
        width={400}
        className="md:float-right"
      />
      <p className="text-lg">
        Body Mass Index (BMI) is a widely-used measurement tool that provides an
        indication of a person&apos;s body fatness based on their height and
        weight. Understanding your BMI can offer valuable insights into your
        overall health and help guide lifestyle choices to promote well-being.
      </p>
      <p className="text-lg">
        BMI is calculated by dividing a person&apos;s weight in kilograms by the
        square of their height in meters. The resulting number falls into one of
        several categories, including underweight, normal weight, overweight, or
        obese. While BMI is a useful screening tool for assessing weight status,
        it&apos;s important to note that it doesn&apos;t directly measure body
        fat percentage or distribution, nor does it account for factors such as
        muscle mass, bone density, or overall body composition.
      </p>
      <div className="lg:flex gap-10 w-full">
      <div className="mt-6 flex flex-col gap-4 lg:w-1/2 w-full p-4">
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
            <input type="radio" id="male" value="male" name="gender" onChange={(e)=>{setGender(e.target.value)}} checked={gender===''?false:true}/>
            <label htmlFor="male" className="ml-1">
              Male
            </label>
          </div>
          <div>
            <input type="radio" id="female" value="female" name="gender" onChange={(e)=>{setGender(e.target.value)}} checked={gender===''?false:true}/>
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
        <div>
          <label htmlFor="">Weight</label>
          <input
            type="number"
            placeholder="Weight in Kgs"
            className="border-[0.2px] border-[#ec008c] ml-2 px-2 py-1 rounded-xl outline-none w-3/4"
            value={weight}
            onChange={(e)=>setWeight(e.target.value)}
          />
        </div>
        <div className="">
          <button className="bg-gradient-to-r from-[#DA4453] to-[#89216B] text-[#fff] px-4 py-2 rounded-2xl hover:bg-gradient-to-r hover:from-[#ec008c] hover:to-[#fc6767] transition duration-500 ease-in-out shadow-lg shadow-slate-500"
          onClick={handlebmiCalc}>
            Calculate
          </button>
        </div>
      </div>
      <div>
        <div className="mt-6">
          <h4>Result</h4>
          <p>Your BMI : <span className="text-2xl"> {bmi}<span className="text-sm"> kg/m2</span></span></p>
          <p className="">Your BMI Category :<span className="text-xl"> {bmiCat}</span></p>
        </div>
        <div className="mt-6">
          <ul className=" text-lg">
            <li>Underweight: BMI below 18.5</li>
            <li>Normal Weight: BMI between 18.5 and 24.9</li>
            <li>Overweight: BMI between 25 and 29.9</li>
            <li>Obese: BMI 30 or higher</li>
          </ul>
        </div>
      </div>
      </div>
    </main>
  );
};

export default Bmi;
