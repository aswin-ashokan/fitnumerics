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
      "X-RapidAPI-Key": `${import.meta.env.VITE_RAPID_API_KEY}`,
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
      <div className="lg:block flex justify-center">
        <img
          src="/images/bodyfat.jpg"
          alt=""
          width={300}
          className="md:float-right"
        />
      </div>
      <p className="lg:mt-2 mt-4 md:text-xl lg:text-left text-justify">
        Welcome to our Body Fat Percentage calculator, your tool for unlocking a
        deeper understanding of your body composition and overall health.
        Measuring body fat percentage goes beyond the numbers on a scale,
        offering valuable insights into your fitness level, risk of chronic
        diseases, and progress towards achieving your wellness goals.
      </p>
      <p className="lg:mt-2 mt-4 md:text-xl lg:text-left text-justify">
        Measuring body fat percentage is crucial for several reasons. Unlike
        weight alone, which fails to distinguish between fat mass and lean body
        mass, body fat percentage provides a more comprehensive assessment of
        your overall health and fitness. Excess body fat, especially visceral
        fat stored around organs, is associated with an increased risk of health
        problems such as heart disease, diabetes, and metabolic syndrome. On the
        other hand, maintaining a healthy body fat percentage is linked to
        improved athletic performance, better metabolic health, and enhanced
        self-esteem.
      </p>
      <div className="lg:flex gap-10 w-full justify-center items-center">
        <div className="mt-6 flex flex-col justify-center items-center gap-4 rounded-lg lg:w-1/2 w-full border-[0.1px] p-8 shadow-lg shadow-slate-300">
          <div className="ml-7 w-full">
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
            <label htmlFor="gender" className="">Gender :</label>
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
              placeholder="height in cm"
              className="border-[0.2px] border-[#ec008c] ml-2 px-2 py-1 rounded-xl outline-none w-3/4"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
            />
          </div>
          <div className="w-full">
            <label htmlFor="" className="w-1/4">Weight :</label>
            <input
              type="number"
              placeholder="weight in Kgs"
              className="border-[0.2px] border-[#ec008c] ml-2 px-2 py-1 rounded-xl outline-none w-3/4"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
            />
          </div>
          <div className="lg:ml-5 w-full">
            <label htmlFor="" className="w-1/4">Waist :</label>
            <input
              type="number"
              placeholder="waist in cm"
              className="border-[0.2px] border-[#ec008c] ml-2 px-2 py-1 rounded-xl outline-none w-3/4"
              value={waist}
              onChange={(e) => setWaist(e.target.value)}
            />
          </div>
          <div className="ml-4 w-full">
            <label htmlFor="" className="w-1/4">Hip :</label>
            <input
              type="number"
              placeholder="hip in cm"
              className="border-[0.2px] border-[#ec008c] ml-2 px-2 py-1 rounded-xl outline-none w-3/4"
              value={hip}
              onChange={(e) => setHip(e.target.value)}
            />
          </div>
          <div className="w-full">
            <label htmlFor="" className="w-1/4">Neck :</label>
            <input
              type="number"
              placeholder="neck in cm"
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
        <div className="border-[0.1px] p-8 rounded-lg shadow-lg shadow-slate-300 mt-6 lg:w-1/2">
          <div className="mt-6">
            <div className="lg:block flex justify-center">
              <img
                src="/gifs/Man lifting barbell.gif"
                alt=""
                className="lg:float-left mt-10"
                width={220}
              />
            </div>
            <h4 className="text-2xl mb-2 text-center">Result</h4>
            <div className="mt-6 lg:text-left text-center">
              <p className="lg:text-lg text-md mb-2">
                Your Body Fat <span className="text-sm">(BMI method) :</span>
                <span className="lg:text-xl text-lg font-medium">
                  {bodyFatReadings[bfkey[4]]} %
                </span>
              </p>
              <p className="lg:text-lg text-md mb-2">
                Your Body Fat <span className="text-sm">(U.S Navy method) :</span>
                <span className="lg:text-xl text-lg font-medium">
                  {bodyFatReadings[bfkey[0]]} %
                </span>
              </p>
              <p className="lg:text-lg text-md mb-2">
                Your Body Fat Category :
                <span className="lg:text-xl text-lg font-medium">
                  {bodyFatReadings[bfkey[1]]}
                </span>
              </p>
              <p className="lg:text-lg text-md mb-2">
                Your Body Fat Mass :
                <span className="lg:text-xl text-lg font-medium">
                  {bodyFatReadings[bfkey[2]]} %
                </span>
              </p>
              <p className="lg:text-lg text-md lg:ml-[148px]">
                Your Lean Body Mass :
                <span className="lg:text-xl text-lg font-medium">
                  {bodyFatReadings[bfkey[3]]} %
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <p className="mt-10 md:text-xl lg:text-left text-justify">
        Body fat percentage represents the proportion of fat mass to total body
        weight. While some body fat is essential for insulation, hormone
        production, and organ protection, excess body fat can have detrimental
        effects on health. Our Body Fat Percentage calculator estimates your
        body fat percentage based on various factors such as gender, age,
        height, weight, and measurements of body circumference. By accurately
        assessing your body fat percentage, you can tailor your fitness and
        nutrition strategies to achieve a healthy balance and optimize your
        overall well-being.
      </p>
      <p className="lg:mt-2 mt-4 md:text-xl lg:text-left text-justify">
        Women typically have a higher body fat percentage than men due to
        differences in hormonal and physiological factors. Body fat distribution
        can vary between individuals, with some people storing fat predominantly
        in the abdominal region (android pattern) and others in the hips and
        thighs (gynoid pattern).
      </p>
    </main>
  );
};

export default BodyFat;
