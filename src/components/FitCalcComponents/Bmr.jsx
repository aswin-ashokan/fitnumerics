import { useState } from "react";
import axios from "axios";

const Bmr = () => {
  const [age, setAge] = useState();
  const [gender, setGender] = useState('');
  const [height, setHeight] = useState();
  const [weight, setWeight] = useState();
  const [bmr, setBmr] = useState(0)

  const bmrOptions = {
    method: 'GET',
    url: 'https://gym-fit.p.rapidapi.com/calculator/bmr',
    params: {
      weight: `${weight}`,
      gender: `${gender}`,
      age: `${age}`,
      height: `${height}`
    },
    headers: {
      'X-RapidAPI-Key': `${import.meta.env.VITE_RAPID_API_KEY}`,
      'X-RapidAPI-Host': 'gym-fit.p.rapidapi.com'
    }
  };

  const handlebmrCalc = async()=>{
    try{
      console.log(gender);
      const response = await axios.request(bmrOptions);
      console.log(response.data);
      const bmrRes = response.data
      setBmr(bmrRes)
    }catch(err){
      console.error("Error in BMR Calculation :",err.message)
    }finally{
      setAge(0);
      setGender('');
      setHeight(0);
      setWeight(0)
    }
  }
  return (
    <main className="mb-36">
      <h1 className="text-center text-2xl mb-4">BMR :  Basal Metabolic Rate</h1>
      <img
        src="/images/bmi.jpg"
        alt=""
        width={400}
        className="md:float-right"
      />
      <p className="text-lg">
      BMR represents the number of calories your body requires to sustain vital functions such as breathing, circulation, and cell production while at complete rest. Factors influencing BMR include age, gender, body composition, and genetics. Calculating your BMR serves as a baseline for determining daily caloric needs and designing personalized nutrition and fitness plans.
      </p>
      <p className="text-lg">
      Understanding your BMR can guide dietary choices and weight management strategies. Consuming fewer calories than your BMR may lead to weight loss, while exceeding this value can result in weight gain. However, it&apos;s essential to consider BMR in conjunction with activity level, as physical exercise significantly influences total energy expenditure.
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
          onClick={handlebmrCalc}>
            Calculate
          </button>
        </div>
      </div>
      <div>
        <div className="mt-6">
          <h4>Result</h4>
          <p>Your BMR : <span className="text-2xl"> {bmr}<span className="text-sm"> Calories/day</span></span></p>
        </div>
        <div className="mt-6">
          <p>Daily calorie needs based on activity level</p>
          <ul className=" text-lg">
            <li>Sedentary: little or no exercise - 1,974 kcal</li>
            <li>Exercise 1-3 times/week - 2,207 kcal</li>
            <li>Exercise 4-5 times/week -	2,351 kcal</li>
            <li>Daily exercise or intense exercise 3-4 times/week	- 2,488 kcal</li>
            <li>Intense exercise 6-7 times/week	- 2,769 kcal</li>
            <li>Very intense exercise daily, or physical job - 3,050 kcal</li>
          </ul>
        </div>
      </div>
      </div>
    </main>
  );
};

export default Bmr;
