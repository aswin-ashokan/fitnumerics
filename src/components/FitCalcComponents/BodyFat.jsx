import { useState } from "react";
import axios from "axios";

const BodyFat = () => {
  const [age, setAge] = useState();
  const [gender, setGender] = useState("");
  const [height, setHeight] = useState();
  const [weight, setWeight] = useState();
  const [neck, setNeck] = useState();
  const [hip, setHip] = useState();
  const [waist, setWaist] = useState();
  const [bodyFatReadings, setBodyFatReadings] = useState(0);
  const [bfkey, setBfKey] = useState([]);

  const bodyFatOptions = {
    method: "GET",
    url: "https://fitness-calculator.p.rapidapi.com/bodyfat",
    params: {
      age: `${age}`,
      gender: `${gender}`,
      weight: `${weight}`,
      height: `${height}`,
      neck: `${neck}`,
      waist: `${waist}`,
      hip: `${hip}`,
    },
    headers: {
      "X-RapidAPI-Key": "c4d29563camsh8543d5b54dc96b3p1c96eejsnc6fa25c6edd3",
      "X-RapidAPI-Host": "fitness-calculator.p.rapidapi.com",
    },
  };

  const handlebodyFatCalc = async () => {
    try {
      const response = await axios.request(bodyFatOptions);
      console.log("fromRes", response.data);
      const bodyFatRes = response.data.data;
      let keys = Object.keys(bodyFatRes);
      setBfKey(keys);
      setBodyFatReadings(bodyFatRes);

      console.log(keys);
      console.log(bodyFatRes);
    } catch (err) {
      console.error("Error in Body Fat Calculation :", err.message);
    } finally {
      setAge(0);
      setNeck(0);
      setWaist(0);
      setHip(0);
      setGender("");
      setHeight(0);
      setWeight(0);
    }
  };
  return (
    <main className="mb-36">
      <h1 className="text-center text-2xl mb-4">Body Fat Percentage</h1>
      <img
        src="/images/bmi.jpg"
        alt=""
        width={400}
        className="md:float-right"
      />
      <p className="text-lg">
        BMR represents the number of calories your body requires to sustain
        vital functions such as breathing, circulation, and cell production
        while at complete rest. Factors influencing BMR include age, gender,
        body composition, and genetics. Calculating your BMR serves as a
        baseline for determining daily caloric needs and designing personalized
        nutrition and fitness plans.
      </p>
      <p className="text-lg">
        Understanding your BMR can guide dietary choices and weight management
        strategies. Consuming fewer calories than your BMR may lead to weight
        loss, while exceeding this value can result in weight gain. However,
        it&apos;s essential to consider BMR in conjunction with activity level,
        as physical exercise significantly influences total energy expenditure.
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
            <label htmlFor="">Waist :</label>
            <input
              type="number"
              placeholder="Waist in cm"
              className="border-[0.2px] border-[#ec008c] ml-2 px-2 py-1 rounded-xl outline-none w-3/4"
              value={waist}
              onChange={(e) => setWaist(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="">Hip :</label>
            <input
              type="number"
              placeholder="Hip in cm"
              className="border-[0.2px] border-[#ec008c] ml-2 px-2 py-1 rounded-xl outline-none w-3/4"
              value={hip}
              onChange={(e) => setHip(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="">Neck :</label>
            <input
              type="number"
              placeholder="Neck in cm"
              className="border-[0.2px] border-[#ec008c] ml-2 px-2 py-1 rounded-xl outline-none w-3/4"
              value={neck}
              onChange={(e) => setNeck(e.target.value)}
            />
          </div>
          <div className="">
            <button
              className="bg-gradient-to-r from-[#DA4453] to-[#89216B] text-[#fff] px-4 py-2 rounded-2xl hover:bg-gradient-to-r hover:from-[#ec008c] hover:to-[#fc6767] transition duration-500 ease-in-out shadow-lg shadow-slate-500"
              onClick={handlebodyFatCalc}
            >
              Calculate
            </button>
          </div>
        </div>
        <div>
          <div className="mt-6">
            <h4 className="text-2xl mb-2">Result</h4>
            <p className="text-lg">
              Your Body Fat <span className="text-sm">(BMI method)</span> :
              <span className="text-xl font-medium"> {bodyFatReadings[bfkey[4]]} %</span>
            </p>
            <p className="text-lg">
              Your Body Fat <span className="text-sm">(U.S Navy method)</span> :{""}
                {" "}
                <span className="text-xl font-medium">
                {bodyFatReadings[bfkey[0]]} %</span>  
            </p>
            <p className="text-lg">
              Your Body Fat Category :
              <span className="text-xl font-medium"> {bodyFatReadings[bfkey[1]]}</span>
            </p>
            <p className="text-lg">
              Your Body Fat Mass :
              <span className="text-xl font-medium"> {bodyFatReadings[bfkey[2]]} %</span>
            </p>
            <p className="text-lg">
              Your Lean Body Mass :
              <span className="text-xl font-medium"> {bodyFatReadings[bfkey[3]]} %</span>
            </p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default BodyFat;
