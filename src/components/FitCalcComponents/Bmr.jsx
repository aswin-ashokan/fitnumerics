import { useState } from "react";
import axios from "axios";

const Bmr = () => {
  const [age, setAge] = useState();
  const [gender, setGender] = useState("");
  const [height, setHeight] = useState();
  const [weight, setWeight] = useState();
  const [bmr, setBmr] = useState(0);

  const bmrOptions = {
    method: "GET",
    url: "https://gym-fit.p.rapidapi.com/calculator/bmr",
    params: {
      weight: `${weight}`,
      gender: `${gender}`,
      age: `${age}`,
      height: `${height}`,
    },
    headers: {
      "X-RapidAPI-Key": `${import.meta.env.VITE_RAPID_API_KEY}`,
      "X-RapidAPI-Host": "gym-fit.p.rapidapi.com",
    },
  };

  const handlebmrCalc = async () => {
    try {
      console.log(gender);
      const response = await axios.request(bmrOptions);
      console.log(response.data);
      const bmrRes = response.data;
      setBmr(bmrRes);
    } catch (err) {
      console.error("Error in BMR Calculation :", err.message);
    } finally {
      setAge(0);
      setGender("");
      setHeight(0);
      setWeight(0);
    }
  };
  return (
    <main className="mb-36">
      <h1 className="text-center text-2xl mb-4">BMR : Basal Metabolic Rate</h1>
      <div className="lg:block flex justify-center">
      <img
        src="/images/bmr.jpg"
        alt=""
        width={250}
        className="md:float-right rounded-lg"
      />
      </div>
      <p className="lg:mt-2 mt-4 md:text-xl lg:text-left text-justify">
        BMR represents the number of calories your body requires to sustain
        vital functions such as breathing, circulation, and cell production
        while at complete rest. Factors influencing BMR include age, gender,
        body composition, and genetics. Calculating your BMR serves as a
        baseline for determining daily caloric needs and designing personalized
        nutrition and fitness plans.
      </p>
      <p className="lg:mt-2 mt-4 md:text-xl lg:text-left text-justify">
        Understanding your BMR can guide dietary choices and weight management
        strategies. Consuming fewer calories than your BMR may lead to weight
        loss, while exceeding this value can result in weight gain. However,
        it&apos;s essential to consider BMR in conjunction with activity level,
        as physical exercise significantly influences total energy expenditure.
        Muscle mass plays a significant role in determining BMR, as muscle
        tissue requires more energy at rest compared to fat tissue. BMR tends to
        decline with age, primarily due to decreases in muscle mass and
        metabolic rate.
      </p>
      <div className="lg:flex items-center gap-10 w-full">
        <div className="mt-10 flex flex-col justify-center items-center gap-4 lg:w-1/2 w-full border-[0.1px] p-8 shadow-lg shadow-slate-300 rounded-lg">
          <div className="lg:ml-12 w-full">
            <label htmlFor="age" className="w-1/4">Age : </label>
            <input
              type="number"
              placeholder="age"
              className="border-[0.2px] border-[#ec008c] ml-2 px-2 py-1 rounded-xl outline-none w-3/4"
              value={age}
              onChange={(e) => setAge(e.target.value)}
            />
          </div>
          <div className="flex gap-4 w-full">
            <label htmlFor="gender" className="">Gender :</label>
            <div>
              <input
              className=""
                type="radio"
                id="male"
                value="male"
                name="gender"
                onChange={(e) => {
                  setGender(e.target.value);
                }}
              />
              <label htmlFor="male" className="ml-1">
                Male
              </label>
            </div>
            <div>
              <input
              className=""
                type="radio"
                id="female"
                value="female"
                name="gender"
                onChange={(e) => {
                  setGender(e.target.value);
                }}
              />
              <label htmlFor="female" className="ml-1">
                Female
              </label>
            </div>
          </div>
          <div className="w-full">
            <label htmlFor="" className="w-1/4">Height : </label>
            <input
              type="number"
              placeholder="Height in cm"
              className="border-[0.2px] border-[#ec008c] ml-2 px-2 py-1 rounded-xl outline-none w-3/4"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
            />
          </div>
          <div className="w-full">
            <label htmlFor="" className="w-1/4">Weight : </label>
            <input
              type="number"
              placeholder="Weight in Kgs"
              className="border-[0.2px] border-[#ec008c] ml-2 px-2 py-1 rounded-xl outline-none w-3/4"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
            />
          </div>
          <div className="">
            <button
              className="bg-gradient-to-r from-[#DA4453] to-[#89216B] text-[#fff] px-4 py-2 rounded-2xl hover:bg-gradient-to-r hover:from-[#ec008c] hover:to-[#fc6767] transition duration-500 ease-in-out shadow-lg shadow-slate-500"
              onClick={handlebmrCalc}
            >
              Calculate
            </button>
          </div>
        </div>
        <div className="border-[0.1px] p-8 shadow-lg shadow-slate-300 mt-6 lg:w-1/2 lg:h-full h-[250px] rounded-lg">
          <div className="mt-6">
            <img
              src="/gifs/Girl running on treadmill.gif"
              alt=""
              className="float-left"
            />
            <h4 className="text-center text-2xl">Result</h4>
            <p className="mt-4 text-center">Your BMR :<span className="ml-1 lg:text-3xl text-xl font-medium lg:mt-0 mt-2">{bmr}<span className="text-sm font-normal"> Calories/day</span></span>
            </p>
          </div>
        </div>
      </div>
      <div className="mt-10 lg:flex">
        <div className="lg:w-1/2 lg:text-left text-center">
          <p className="font-medium text-slate-400">Daily calorie needs based on activity level</p>
          <ul className="text-lg mt-2">
            <li>Sedentary: little or no exercise - 1,974 kcal</li>
            <li>Exercise 1-3 times/week - 2,207 kcal</li>
            <li>Exercise 4-5 times/week - 2,351 kcal</li>
            <li>
              Exercise 3-4 times/week - 2,488 kcal
            </li>
            <li>Exercise 6-7 times/week - 2,769 kcal</li>
            <li>Exercise daily, or physical job - 3,050 kcal</li>
          </ul>
        </div>
        <div className="lg:w-3/4">
          <p className="mt-4 md:text-xl lg:text-left text-justify">
            It&apos;s important to note that while BMR provides valuable
            insights into baseline calorie needs, it&apos;s just one piece of
            the puzzle. Considering your activity level is crucial, as physical
            exercise significantly impacts total energy expenditure. Regular
            exercise not only burns calories during activity but also increases
            BMR in the long term by promoting muscle growth and metabolic
            efficiency. As individuals age, their BMR tends to decrease,
            primarily due to age-related declines in muscle mass and metabolic
            rate. This underscores the importance of maintaining an active
            lifestyle and incorporating strength training exercises to preserve
            muscle mass and support metabolic health as you age.
          </p>
        </div>
      </div>
    </main>
  );
};

export default Bmr;
