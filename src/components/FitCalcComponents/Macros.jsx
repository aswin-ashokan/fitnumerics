import { useState } from "react";
import axios from "axios";

const Macros = () => {
  const [age, setAge] = useState();
  const [gender, setGender] = useState("");
  const [height, setHeight] = useState();
  const [weight, setWeight] = useState();
  const [activityLevel, setActivityLevel] = useState();
  const [goal, setGoal] = useState('');
  const [macros, setMacros] = useState(0);
  const [balancedDiet, setBalancedDiet] = useState(0);
  const [proteinDiet, setProteinDiet] = useState(0);
  const [fatDiet, setFatDiet] = useState(0);
  const [carbsDiet, setCarbsDiet] = useState(0);

  const macrosOptions = {
    method: 'GET',
    url: 'https://fitness-calculator.p.rapidapi.com/macrocalculator',
    params: {
      age: `${age}`,
      gender: `${gender}`,
      height: `${height}`,
      weight: `${weight}`,
      activitylevel: `${activityLevel}`,
      goal: `${goal}`
    },
    headers: {
      'X-RapidAPI-Key': `${import.meta.env.VITE_RAPID_API_KEY}`,
      'X-RapidAPI-Host': "fitness-calculator.p.rapidapi.com",
    }
  };

  const handlebmiCalc = async () => {
    try {
      const response = await axios.request(macrosOptions);
      console.log(response.data);
      const macrosRes = response.data.data;
      const balancedDiet = response.data.data.balanced;
      const proteinDiet = response.data.data.highprotein;
      const fatDiet = response.data.data.lowfat;
      const carbsDiet = response.data.data.lowcarbs;
      setBalancedDiet(balancedDiet)
      setProteinDiet(proteinDiet)
      setFatDiet(fatDiet)
      setCarbsDiet(carbsDiet)
      setMacros(macrosRes);
    } catch (err) {
      console.error("Error in Macros Calculation", err.message);
    } finally {
      setAge(0);
      setGender("");
      setHeight(0);
      setWeight(0);
      setActivityLevel("");
      setGoal('');
    }
  };
  return (
    <main className="mb-36">
      <h1 className="text-center text-2xl mb-4">
        Macro Nutrients Amount
      </h1>
      <img
        src="/images/bmi.jpg"
        alt=""
        width={400}
        className="md:float-right"
      />
      <p className="text-lg">
        Total Daily Energy Expenditure (TDEE) is the total number of calories
        your body burns in a day, encompassing your Basal Metabolic Rate (BMR)
        and additional energy expenditure from physical activity and exercise.
        Understanding your TDEE is essential for achieving your fitness goals
        and maintaining a healthy lifestyle.
      </p>
      <p className="text-lg">
        TDEE provides a comprehensive picture of your daily caloric needs,
        considering both your resting metabolic rate and the calories burned
        through daily activities and workouts. Calculating your TDEE allows you
        to tailor your nutrition plan to support weight loss, muscle gain, or
        weight maintenance effectively. Once you&apos;ve determined your TDEE,
        you can adjust your calorie intake based on your goals. Consuming fewer
        calories than your TDEE can lead to weight loss, while consuming more
        can result in weight gain. Additionally, understanding your TDEE helps
        you optimize macronutrient ratios and meal timing to fuel workouts and
        support recovery.
      </p>
      <div className="lg:flex gap-10 w-full">
        <div className="mt-6 flex flex-col gap-4 lg:w-1/2 w-full p-4">
          <div className="">
            <label htmlFor="age">Age :</label>
            <input
              type="number"
              placeholder="age"
              className="border-[0.2px] border-[#ec008c] ml-2 px-2 py-1 rounded-xl outline-none w-3/4"
              value={age}
              onChange={(e) => setAge(e.target.value)}
            />
          </div>
          <div className="flex gap-4">
            <label htmlFor="gender">Gender :</label>
            <div>
              <input
                type="radio"
                id="male"
                value="male"
                name="gender"
                onChange={(e) => {
                  setGender(e.target.value);
                }}
              />
              <label htmlFor="male" className="ml-1 cursor-pointer">
                Male
              </label>
            </div>
            <div>
              <input
                type="radio"
                id="female"
                value="female"
                name="gender"
                onChange={(e) => {
                  setGender(e.target.value);
                }}
              />
              <label htmlFor="female" className="ml-1 cursor-pointer">
                Female
              </label>
            </div>
          </div>
          <div>
            <label htmlFor="">Height :</label>
            <input
              type="number"
              placeholder="Height in cm"
              className="border-[0.2px] border-[#ec008c] ml-2 px-2 py-1 rounded-xl outline-none w-3/4"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="">Weight :</label>
            <input
              type="number"
              placeholder="Weight in Kgs"
              className="border-[0.2px] border-[#ec008c] ml-2 px-2 py-1 rounded-xl outline-none w-3/4"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="activityLevel">Activity Level : </label>
            <select
              name=""
              id="activityLevel"
              className="border-[0.2px] border-[#ec008c] ml-2 px-2 py-1 rounded-xl outline-none"
              value={activityLevel}
              onChange={(e) => setActivityLevel(e.target.value)}
            >
              <option value={2} >Sedentary: little or no exercise</option>
              <option value={3}>Exercise 1-3 times/week</option>
              <option value={4}>Exercise 4-5 times/week</option>
              <option value={5}>Daily exercise or intense exercise 3-4 times/week</option>
              <option value={6}>Intense exercise 6-7 times/week</option>
              <option value={7}>Very intense exercise daily, or physical job</option>
            </select>
          </div>
          <div>
            <label htmlFor="activityLevel">Your Goal : </label>
            <select
              name=""
              id="activityLevel"
              className="border-[0.2px] border-[#ec008c] ml-2 px-2 py-1 rounded-xl outline-none"
              value={goal}
              onChange={(e) => setGoal(e.target.value)}
            >
              <option value="mildlose">Mild Lose</option>
              <option value="weightlose">Weight Lose</option>
              <option value="extremelose">Extreme Lose</option>
              <option value="mildgain">Mild Gain</option>
              <option value="weightgain">Weight Gain</option>
              <option value="extremegain">Extreme Gain</option>
            </select>
          </div>
          <div className="">
            <button
              className="bg-gradient-to-r from-[#DA4453] to-[#89216B] text-[#fff] px-4 py-2 rounded-2xl hover:bg-gradient-to-r hover:from-[#ec008c] hover:to-[#fc6767] transition duration-500 ease-in-out shadow-lg shadow-slate-500"
              onClick={handlebmiCalc}
            >
              Calculate
            </button>
          </div>
        </div>
        <div>
          <div className="mt-6">
            <h4>Result</h4>
            <p>
              Maintainance Calorie :{" "}
              <span className="text-2xl">
                {" "}
                {macros.calorie}
                <span className="text-sm"> Calories/day</span>
              </span>
            </p>
            <p>Balanced Diet : </p>
                <ul>
                    <li>Protien : <span>{Math.round(balancedDiet.protein)}</span></li>
                    <li>Fat : <span>{Math.round(balancedDiet.fat)}</span></li>
                    <li>Carbs : <span>{Math.round(balancedDiet.carbs)}</span></li>
                </ul>
            <p>High Protein Diet : </p>
                <ul>
                    <li>Protien : <span>{Math.round(proteinDiet.protein)}</span></li>
                    <li>Fat : <span>{Math.round(proteinDiet.fat)}</span></li>
                    <li>Carbs : <span>{Math.round(proteinDiet.carbs)}</span></li>
                </ul>
            <p>Low Carbs Diet : </p>
                <ul>
                    <li>Protien : <span>{Math.round(carbsDiet.protein)}</span></li>
                    <li>Fat : <span>{Math.round(carbsDiet.fat)}</span></li>
                    <li>Carbs : <span>{Math.round(carbsDiet.carbs)}</span></li>
                </ul>
            <p>Low Fat Diet : </p>
                <ul>
                    <li>Protien : <span>{Math.round(fatDiet.protein)}</span></li>
                    <li>Fat : <span>{Math.round(fatDiet.fat)}</span></li>
                    <li>Carbs : <span>{Math.round(fatDiet.carbs)}</span></li>
                </ul>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Macros;
