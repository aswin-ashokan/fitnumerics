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
      "X-RapidAPI-Key": `${import.meta.env.VITE_RAPID_API_KEY}`,
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
      <div className="lg:block flex justify-center">
        <img
          src="/images/tdee.jpg"
          alt=""
          width={380}
          className="md:float-right ml-4 rounded-lg"
        />
      </div>
      <p className="lg:mt-0 mt-4 md:text-xl lg:text-left text-justify">
        Welcome to our Total Daily Energy Expenditure (TDEE) Calculator, your
        ultimate tool for understanding the total number of calories your body
        burns in a day encompassing your Basal Metabolic Rate (BMR) and
        additional energy expenditure from physical activity and exercise.
        Measuring TDEE goes beyond calorie counting, providing valuable insights
        into your energy needs, metabolism, and overall health.
      </p>
      <p className="lg:mt-2 mt-4 md:text-xl lg:text-left text-justify">
        Measuring Total Daily Energy Expenditure is essential for achieving
        balanced nutrition and supporting your fitness goals. TDEE represents
        the sum of calories your body burns throughout the day, encompassing
        your Basal Metabolic Rate (BMR) and additional calories expended through
        physical activity and exercise. Understanding your TDEE helps you tailor
        your calorie intake to match your energy expenditure, ensuring you
        maintain a healthy weight, support muscle growth, and fuel your workouts
        effectively. Once you&apos;ve determined your TDEE, you can adjust your
        calorie intake based on your goals. Consuming fewer calories than your
        TDEE can lead to weight loss, while consuming more can result in weight
        gain. Additionally, understanding your TDEE helps you optimize
        macronutrient ratios and meal timing to fuel workouts and support
        recovery.
      </p>
      <div className="lg:flex gap-10 w-full mt-10">
        <div className=" flex flex-col rounded-lg justify-center items-center gap-6 lg:w-1/2 w-full border-[0.1px] p-8 shadow-lg shadow-slate-300">
          <div className="ml-5 w-full">
            <label htmlFor="age" className="w-1/4">
              Age :
            </label>
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
            <label htmlFor="" className="w-1/4">
              Height :
            </label>
            <input
              type="number"
              placeholder="Height in cm"
              className="border-[0.2px] border-[#ec008c] ml-2 px-2 py-1 rounded-xl outline-none w-3/4"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
            />
          </div>
          <div className="w-full">
            <label htmlFor="" className="w-1/4">
              Weight :
            </label>
            <input
              type="number"
              placeholder="Weight in Kgs"
              className="border-[0.2px] border-[#ec008c] ml-2 px-2 py-1 rounded-xl outline-none w-3/4"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
            />
          </div>
          <div className="w-full">
            <label htmlFor="activityLevel" className="w-1/4">
              Activity :
            </label>
            <select
              name=""
              id="activityLevel"
              className="border-[0.2px] border-[#ec008c] ml-2 px-2 py-1 rounded-xl outline-none w-3/4"
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
              className="bg-gradient-to-r from-[#DA4453] to-[#89216B] text-[#fff] px-4 py-2 rounded-2xl hover:bg-gradient-to-r hover:from-[#ec008c] hover:to-[#fc6767] transition duration-500 ease-in-out shadow-lg shadow-slate-500 mt-6"
              onClick={handlebmiCalc}
            >
              Calculate
            </button>
          </div>
        </div>
        <div className="border-[0.1px] p-8 rounded-lg shadow-lg shadow-slate-300 lg:w-1/2 lg:mt-0 mt-10">
          <div className="mt-6">
            <h4 className="text-2xl text-center">Result</h4>
            <p className="mt-4 text-center lg:text-lg">
              Your Maintainance Calories:
              <span className="lg:text-2xl text-xl font-medium">
                {tdee}
                <span className="text-sm font-normal"> kcals</span>
              </span>
            </p>
            <div className="flex flex-col items-center gap-2">
              <div className="">
                <ul className="mt-3">
                  <li>
                    <p className="text-lg text-center text-slate-500">
                      Energy intake to lose weight
                    </p>
                  </li>
                  <li className="mb-1 mt-1">
                    <span className="lg:text-lg font-medium">
                      Mild weight loss
                    </span>
                    (0.25 kg/week) :
                    <span className="ml-1 lg:text-xl text-lg font-medium">
                      {mildWeightLoss}
                      <span className="text-sm font-normal"> kcals</span>
                    </span>
                  </li>
                  <li>
                    <span className="lg:text-lg font-medium">weight loss</span>
                    (0.5 kg/week) :
                    <span className="ml-1 lg:text-xl text-lg font-medium">
                      {WeightLoss}
                      <span className="text-sm font-normal"> kcals</span>
                    </span>
                  </li>
                  <li className="mt-1">
                    <span className="lg:text-lg font-medium">
                      Extreme weight loss
                    </span>
                    (1 kg/week) :
                    <span className="ml-1 lg:text-xl text-lg font-medium">
                      {extremeWeightLoss}
                      <span className="text-sm font-normal"> kcals</span>
                    </span>
                  </li>
                </ul>
              </div>
              <div>
                <ul className="mt-2">
                  <li>
                    <p className="text-lg text-center text-slate-500">
                      Energy intake to gain weight:
                    </p>
                  </li>
                  <li className="mb-1">
                    <span className="lg:text-lg font-medium">
                      Mild weight gain
                    </span>
                    (0.25 kg/week) :
                    <span className="ml-1 font-medium lg:text-xl text-lg">
                      {mildWeightGain}
                      <span className="text-sm font-normal"> kcals</span>
                    </span>
                  </li>
                  <li>
                    <span className="lg:text-lg font-medium">weight gain</span>
                    (0.5 kg/week) :
                    <span className="font-medium lg:text-xl text-lg ml-1">
                      {WeightGain}
                      <span className="text-sm font-normal"> kcals</span>
                    </span>
                  </li>
                  <li className="mt-1">
                    <span className="lg:text-lg font-medium">
                      Extreme weight gain
                    </span>
                    (1 kg/week) :
                    <span className="font-medium lg:text-xl text-lg ml-1">
                      {extremeWeightGain}
                      <span className="text-sm font-normal"> kcals</span>
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <p className="mt-10 md:text-xl lg:text-left text-justify">
        Our TDEE Calculator estimates your Total Daily Energy Expenditure based
        on various factors such as age, gender, weight, height, activity level,
        and fitness goals. By inputting this information, you can obtain
        personalized recommendations for your daily calorie needs. Whether
        you&apos;re aiming to lose weight, gain muscle, or maintain your current
        physique, knowing your TDEE allows you to create a nutrition plan that
        aligns with your goals and lifestyle. TDEE can vary significantly
        between individuals based on factors such as age, gender, body
        composition, and activity level. Regular exercise and strength training
        can increase TDEE by boosting metabolism and building lean muscle mass.
        Factors such as stress, sleep quality, and hormonal fluctuations can
        also impact TDEE, highlighting the importance of overall lifestyle
        factors in energy balance.
      </p>
    </main>
  );
};

export default Tdee;
