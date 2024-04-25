import { useState } from "react";
import axios from "axios";

const Macros = () => {
  const [age, setAge] = useState();
  const [gender, setGender] = useState("");
  const [height, setHeight] = useState();
  const [weight, setWeight] = useState();
  const [activityLevel, setActivityLevel] = useState();
  const [goal, setGoal] = useState("");
  const [macros, setMacros] = useState(0);
  const [balancedDiet, setBalancedDiet] = useState(0);
  const [proteinDiet, setProteinDiet] = useState(0);
  const [fatDiet, setFatDiet] = useState(0);
  const [carbsDiet, setCarbsDiet] = useState(0);

  const macrosOptions = {
    method: "GET",
    url: "https://fitness-calculator.p.rapidapi.com/macrocalculator",
    params: {
      age: `${age}`,
      gender: `${gender}`,
      height: `${height}`,
      weight: `${weight}`,
      activitylevel: `${activityLevel}`,
      goal: `${goal}`,
    },
    headers: {
      "X-RapidAPI-Key": `${import.meta.env.VITE_RAPID_API_KEY}`,
      "X-RapidAPI-Host": "fitness-calculator.p.rapidapi.com",
    },
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
      setBalancedDiet(balancedDiet);
      setProteinDiet(proteinDiet);
      setFatDiet(fatDiet);
      setCarbsDiet(carbsDiet);
      setMacros(macrosRes);
    } catch (err) {
      console.error("Error in Macros Calculation", err.message);
    } finally {
      setAge(0);
      setGender("");
      setHeight(0);
      setWeight(0);
      setActivityLevel("");
      setGoal("");
    }
  };
  return (
    <main className="mb-10">
      <h1 className="text-center text-2xl mb-4">Macro Nutrients Amount</h1>
      <div className="lg:block flex justify-center">
      <img
        src="/images/macros.jpg"
        alt=""
        width={500}
        className="md:float-right"
      />
      </div>
      <p className="lg:mt-2 mt-4 md:text-xl lg:text-left text-justify">
        Welcome to our Macro Nutrients Calculator, your gateway to achieving
        optimal nutrition and enhancing your overall well-being. Measuring macro
        nutrients - carbohydrates, proteins, and fats - is essential for
        understanding the composition of your diet and ensuring you meet your
        body&apos;s nutritional needs for optimal health and performance.
      </p>
      <p className="lg:mt-2 mt-4 md:text-xl lg:text-left text-justify">
        Measuring macro nutrients provides a holistic view of your dietary
        intake and serves as a cornerstone for achieving balanced nutrition.
        Each macro nutrient plays a unique role in supporting bodily functions
        and overall health. Carbohydrates are the primary source of energy,
        fueling your daily activities and exercise sessions. Proteins are
        essential for building and repairing tissues, supporting muscle growth,
        and maintaining a strong immune system. Fats are vital for hormone
        production, brain function, and absorption of fat-soluble vitamins. By
        tracking your macro nutrient intake, you can ensure you&apos;re getting
        the right balance of nutrients to support your health goals, whether
        it&apos;s weight loss, muscle gain, or overall well-being.
      </p>
      <div className="lg:flex gap-10 w-full items-center">
        <div className="mt-10 flex flex-col gap-4 rounded-lg items-center lg:w-1/2 w-full border-[0.1px] p-8 shadow-lg shadow-slate-300">
          <div className="w-full">
            <label htmlFor="age" className="w-1/4">Age :</label>
            <input
              type="number"
              placeholder="age"
              className="border-[0.2px] border-[#ec008c] ml-2 px-2 py-1 rounded-xl outline-none w-3/4"
              value={age}
              onChange={(e) => setAge(e.target.value)}
            />
          </div>
          <div className="flex gap-4 w-full">
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
          <div className="w-full">
            <label htmlFor="" className="w-1/4">Height :</label>
            <input
              type="number"
              placeholder="Height in cm"
              className="border-[0.2px] border-[#ec008c] ml-2 px-2 py-1 rounded-xl outline-none w-3/4" 
              value={height}
              onChange={(e) => setHeight(e.target.value)}
            />
          </div>
          <div className="w-full">
            <label htmlFor="" className="w-1/4">Weight :</label>
            <input
              type="number"
              placeholder="Weight in Kgs"
              className="border-[0.2px] border-[#ec008c] ml-2 px-2 py-1 rounded-xl outline-none w-3/4"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
            />
          </div>
          <div className="w-full">
            <label htmlFor="activityLevel" className="w-1/4">Activity :</label>
            <select
              name=""
              id="activityLevel"
              className="border-[0.2px] border-[#ec008c] ml-2 px-2 py-1 rounded-xl outline-none w-3/4 overflow-hidden"
              value={activityLevel}
              onChange={(e) => setActivityLevel(e.target.value)}
            >
              <option value={2}>Sedentary: little or no exercise</option>
              <option value={3}>Exercise 1-3 times/week</option>
              <option value={4}>Exercise 4-5 times/week</option>
              <option value={5}>
                Daily exercise or intense exercise 3-4 times/week
              </option>
              <option value={6}>Intense exercise 6-7 times/week</option>
              <option value={7}>
                Very intense exercise daily, or physical job
              </option>
            </select>
          </div>
          <div className="w-full">
            <label htmlFor="goal" className="w-1/4">Goal :</label>
            <select
              name=""
              id="goal"
              className="border-[0.2px] border-[#ec008c] ml-2 px-2 py-1 rounded-xl outline-none w-3/4"
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
        <div className="border-[0.1px] p-8 rounded-lg shadow-lg shadow-slate-300 mt-10 lg:w-3/4">
          <div className="mt-2">
            <h4 className="text-2xl mb-2 text-center">Result</h4>
            <p className="mt-4 text-center lg:text-lg">
              Maintainance Calorie :
              <span className="ml-1 g:text-3xl text-2xl font-medium">
                {macros ? Math.round(macros.calorie) : 0}
                <span className="text-sm font-normal"> kcal</span>
              </span>
            </p>
            <div className="flex 2xl:flex-nowrap flex-wrap mt-4 2xl:gap-2 gap-4 justify-center">
              <div className="shadow-lg shadow-slate-400 p-4 rounded-lg">
                <p className="text-center mb-2">Balanced Diet</p>
                <ul>
                  <li className="text-sm">
                    Protien :
                    <span className="ml-1 text-lg font-medium">
                      {balancedDiet ? Math.round(balancedDiet.protein) : 0}
                      <span className="text-sm font-normal"> grams</span>
                    </span>
                  </li>
                  <li className="text-sm">
                    Fat :
                    <span className="ml-1 text-lg font-medium">
                      {balancedDiet ? Math.round(balancedDiet.fat) : 0}
                      <span className="text-sm font-normal"> grams</span>
                    </span>
                  </li>
                  <li className="text-sm">
                    Carbs :
                    <span className="ml-1 text-lg font-medium">
                      {balancedDiet ? Math.round(balancedDiet.carbs) : 0}
                      <span className="text-sm font-normal"> grams</span>
                    </span>
                  </li>
                </ul>
              </div>
              <div className="shadow-lg shadow-slate-400 p-4 rounded-lg">
                <p className="text-center mb-2 ">High Protein Diet</p>
                <ul>
                  <li className="text-sm">
                    Protien :
                    <span className="ml-1 text-lg font-medium">
                      {proteinDiet ? Math.round(proteinDiet.protein) : 0}
                      <span className="text-sm font-normal"> grams</span>
                    </span>
                  </li>
                  <li className="text-sm">
                    Fat :
                    <span className="ml-1 text-lg font-medium">
                      {proteinDiet ? Math.round(proteinDiet.fat) : 0}
                      <span className="text-sm font-normal"> grams</span>
                    </span>
                  </li>
                  <li className="text-sm">
                    Carbs :
                    <span className="ml-1 text-lg font-medium">
                      {proteinDiet ? Math.round(proteinDiet.carbs) : 0}
                      <span className="text-sm font-normal"> grams</span>
                    </span>
                  </li>
                </ul>
              </div>
              <div className="shadow-lg shadow-slate-400 p-4 rounded-lg">
                <p className="text-center mb-2">Low Carbs Diet</p>
                <ul>
                  <li className="text-sm">
                    Protien :
                    <span className="ml-1 text-lg font-medium">
                      {carbsDiet ? Math.round(carbsDiet.protein) : 0}
                      <span className="text-sm font-normal"> grams</span>
                    </span>
                  </li>
                  <li className="text-sm">
                    Fat :
                    <span className="ml-1 text-lg font-medium">
                      {carbsDiet ? Math.round(carbsDiet.fat) : 0}
                      <span className="text-sm font-normal"> grams</span>
                    </span>
                  </li>
                  <li className="text-sm">
                    Carbs :
                    <span className="ml-1 text-lg font-medium">
                      {carbsDiet ? Math.round(carbsDiet.carbs) : 0}
                      <span className="text-sm font-normal"> grams</span>
                    </span>
                  </li>
                </ul>
              </div>
              <div className="shadow-lg shadow-slate-400 p-4 rounded-lg">
                <p className="text-center">Low Fat Diet</p>
                <ul>
                  <li className="text-sm">
                    Protien :
                    <span className="ml-1 text-lg font-medium">
                      {fatDiet ? Math.round(fatDiet.protein) : 0}
                      <span className="text-sm font-normal"> grams</span>
                    </span>
                  </li>
                  <li className="text-sm">
                    Fat :
                    <span className="ml-1 text-lg font-medium">
                      {fatDiet ? Math.round(fatDiet.fat) : 0}
                      <span className="text-sm font-normal"> grams</span>
                    </span>
                  </li>
                  <li className="text-sm">
                    Carbs :
                    <span className="ml-1 text-lg font-medium">
                      {fatDiet ? Math.round(fatDiet.carbs) : 0}
                      <span className="text-sm font-normal"> grams</span>
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <p className="mt-10 md:text-xl lg:text-left text-justify">
      Our Macro Nutrients Calculator enables you to calculate the ideal distribution of carbohydrates, proteins, and fats based on your individual needs and goals. By inputting key parameters such as age, gender, weight, height, activity level, and you goal preferences, you can obtain personalized recommendations for your macro nutrient intake. Whether you&apos;re following a specific diet plan, fueling intense workouts, or managing medical conditions, understanding your macro nutrient needs is crucial for optimizing your nutritional intake and achieving your desired outcomes. Consuming a balanced ratio of macro nutrients can help stabilize blood sugar levels, regulate appetite, and support long-term weight management goals.
      </p>
    </main>
  );
};

export default Macros;
