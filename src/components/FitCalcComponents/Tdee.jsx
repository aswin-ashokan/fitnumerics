import { useState } from "react";
import axios from "axios";

const Tdee = () => {
  const [age, setAge] = useState();
  const [gender, setGender] = useState("");
  const [height, setHeight] = useState();
  const [weight, setWeight] = useState();
  const [activityLevel, setActivityLevel] = useState("");
  const [tdee, setTdee] = useState(0);

  const tdeeOptions = {
    method: "GET",
    url: "https://gym-fit.p.rapidapi.com/calculator/tdee",
    params: {
      age: `${age}`,
      weight: `${weight}`,
      activityLevel: `${activityLevel}`,
      gender: `${gender}`,
      height: `${height}`,
    },
    headers: {
      "X-RapidAPI-Key": "c4d29563camsh8543d5b54dc96b3p1c96eejsnc6fa25c6edd3",
      "X-RapidAPI-Host": "gym-fit.p.rapidapi.com",
    },
  };

  const handlebmiCalc = async () => {
    try {
      const response = await axios.request(tdeeOptions);
      console.log(response.data);
      const tdeeRes = response.data;
      setTdee(tdeeRes);
    } catch (err) {
      console.error("Error in TDEE Calculation", err.message);
    } finally {
      setAge(0);
      setGender("");
      setHeight(0);
      setWeight(0);
      setActivityLevel("");
    }
  };

  const tdeeSplit = () => {
    var mwl = (tdee * 10) / 100;
    var wl = (tdee * 20) / 100;
    var ewl = (tdee * 40) / 100;
    var mwg = (tdee * 10) / 100;
    var wg = (tdee * 20) / 100;
    var ewg = (tdee * 40) / 100;
    return [mwl, wl, ewl, mwg, wg, ewg];
  };
  var tdeeSplitRes = tdeeSplit();
  var mildWeightLoss = Math.round(tdee - tdeeSplitRes[0]);
    var WeightLoss = Math.round(tdee - tdeeSplitRes[1]);
    var extremeWeightLoss = Math.round(tdee - tdeeSplitRes[2]);
    var mildWeightGain = Math.round(tdee + tdeeSplitRes[3]);
    var WeightGain = Math.round(tdee + tdeeSplitRes[4]);
    var extremeWeightGain = Math.round(tdee + tdeeSplitRes[5]);

  return (
    <main className="mb-36">
      <h1 className="text-center text-2xl mb-4">
        TDEE : Total Daily Energy Expenditure
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
              <option value="sedentary">Sedentary</option>
              <option value="lightlyActive">Lightly Active</option>
              <option value="active">Active</option>
              <option value="veryActive">Very Active</option>
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
              Your TDEE :{" "}
              <span className="text-2xl">
                {" "}
                {tdee}
                <span className="text-sm"> Calories/day</span>
              </span>
            </p>
            <p className="">
              Your Maintainance Calories:
              <span className="text-xl"> {tdee}</span>
            </p>
            <ul className="mt-3">
              <li>
                <p className="text-lg">Energy intake to lose weight:</p>
              </li>
              <li>
                Mild weight loss (0.25 kg/week) :<span className="font-medium">{mildWeightLoss}</span>
              </li>
              <li>
                weight loss (0.5 kg/week) :<span className="font-medium">{WeightLoss}</span>
              </li>
              <li>
                Extreme weight loss (1 kg/week) :<span className="font-medium">{extremeWeightLoss}</span>
              </li>
            </ul>
            <ul className="mt-2">
              <li>
                <p className="text-lg ">Energy intake to gain weight:</p>
              </li>
              <li>Mild weight gain (0.25 kg/week) :<span className="font-medium"> {mildWeightGain}</span></li>
              <li>weight gain (0.5 kg/week) :<span className="font-medium"> {WeightGain}</span></li>
              <li>Extreme weight gain (1 kg/week) :<span className="font-medium"> {extremeWeightGain}</span></li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Tdee;
