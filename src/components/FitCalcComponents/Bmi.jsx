import { useState } from "react";
import axios from "axios";

const Bmi = () => {
  const [age, setAge] = useState();
  const [gender, setGender] = useState();
  const [height, setHeight] = useState();
  const [weight, setWeight] = useState();
  const [bmi, setBmi] = useState(0);
  const [bmiCat, setBmiCat] = useState("calculate to know");

  const bmiOptions = {
    method: "GET",
    url: "https://gym-fit.p.rapidapi.com/calculator/bmi",
    params: {
      weight: `${weight}`,
      height: `${height}`,
    },
    headers: {
      "X-RapidAPI-Key": `${import.meta.env.VITE_RAPID_API_KEY}`,
      "X-RapidAPI-Host": "gym-fit.p.rapidapi.com",
    },
  };

  const handlebmiCalc = async () => {
    try {
      const response = await axios.request(bmiOptions);
      const bmiRes = response.data;
      setBmi(bmiRes);
      if (bmiRes <= 18.5) {
        setBmiCat("Under Weight");
      } else if (bmiRes <= 24.9) {
        setBmiCat("Normal Weight");
      } else if (bmiRes <= 29.9) {
        setBmiCat("Over Weight");
      } else if (bmiRes > 30) {
        setBmiCat("Obese");
      }
    } catch (err) {
      console.error("Error in BMI Calculation", err.message);
    } finally {
      setAge(0);
      setGender("");
      setHeight(0);
      setWeight(0);
      console.log(gender);
    }
  };
  return (
    <main className="mb-10">
      <h1 className="text-center text-2xl mb-4">BMI : Body Mass Index</h1>
      <div className="lg:block flex justify-center">
      <img
        src="/images/bmi.jpg"
        alt=""
        width={400}
        className="md:float-right"
      />
      </div>
      <p className="md:text-xl lg:text-left text-justify">
        Body Mass Index (BMI) is a widely-used measurement tool that provides an
        indication of a person&apos;s body fatness based on their height and
        weight. Understanding your BMI can offer valuable insights into your
        overall health and help guide lifestyle choices to promote well-being.
      </p>
      <p className="lg:mt-2 mt-4 md:text-xl lg:text-left text-justify">
        BMI is calculated by dividing a person&apos;s weight in kilograms by the
        square of their height in meters. The resulting number falls into one of
        several categories, including underweight, normal weight, overweight, or
        obese. While BMI is a useful screening tool for assessing weight status,
        it&apos;s important to note that it doesn&apos;t directly measure body
        fat percentage or distribution, nor does it account for factors such as
        muscle mass, bone density, or overall body composition.
      </p>
      <div className="lg:flex justify-center items-center gap-10 w-full">
        <div className="mt-6 flex flex-col gap-4 lg:w-2/4 items-center w-full border-[0.1px] p-8 shadow-lg shadow-slate-300 rounded-lg">
          <div className="flex items-center w-full">
            <label htmlFor="age" className="w-1/4">Age : </label>
            <input
              type="number"
              placeholder="age"
              className="border-[0.2px] border-[#ec008c] px-2 py-1 rounded-xl outline-none w-3/4"
              value={age}
              onChange={(e) => setAge(e.target.value)}
            />
          </div>
          <div className="flex gap-4 w-full">
            <label htmlFor="gender" className="w-1/4">Gender :</label>
            <div className="">
              <input
                type="radio"
                id="male"
                value="male"
                name="gender"
                onChange={(e) => {
                  setGender(e.target.value);
                }}
                className=""
              />
              <label htmlFor="male" className="ml-1">
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
              <label htmlFor="female" className="ml-1">
                Female
              </label>
            </div>
          </div>
          <div className="flex items-center w-full">
            <label htmlFor="" className="w-1/4">Height :</label>
            <input
              type="number"
              placeholder="height in cm"
              className="border-[0.2px] border-[#ec008c] px-2 py-1 rounded-xl outline-none w-3/4"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
            />
          </div>
          <div className="flex items-center w-full">
            <label htmlFor="" className="w-1/4">Weight :</label>
            <input
              type="number"
              placeholder="weight in cm"
              className="border-[0.2px] border-[#ec008c] px-2 py-1 rounded-xl outline-none w-3/4"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
            />
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
        <div className="border-[0.1px] p-6 shadow-lg shadow-slate-300 mt-6 lg:w-1/2">
          <div className="mt-6">
            <img
              src="/gifs/Girl doing yoga.gif"
              alt=""
              className="float-left lg:block hidden"
              width={200}
            />
            <h4 className="text-center text-2xl">Result</h4>
            <p className="mt-4 text-center">
              Your BMI :
              <span className="ml-1 lg:text-3xl text-xl font-medium">
                {bmi}
                <span className="text-sm font-normal"> kg/m2</span>
              </span>
            </p>
            <p className="mt-4 text-center">
              Your BMI Category :
              <span className="lg:text-xl text-lg font-medium"> {bmiCat}</span>
            </p>
          </div>
        </div>
      </div>
      <div className="lg:flex gap-8 mt-10">
        <div className="lg:w-2/4">
          <ul className=" text-lg mt-4 lg:text-left text-center">
            <li>
              <p className="mb-1 lg:mt-0 mt-6 text-slate-400">
                Recommended BMI Ranges
              </p>
            </li>
            <li>
              <span className="font-medium">Underweight:</span> Less than 18.5
            </li>
            <li>
              <span className="font-medium">Normal Weight:</span> 18.5 - 24.9
            </li>
            <li>
              <span className="font-medium">Overweight:</span> 25 - 29.9
            </li>
            <li>
              <span className="font-medium">Obese:</span> BMI 30 or higher
            </li>
          </ul>
          <p className="mt-4 md:text-xl lg:text-left text-justify">
            <span className="text-lg">Why BMI Matters:</span> Maintaining a
            healthy BMI is associated with a reduced risk of various health
            conditions, including heart disease, type 2 diabetes, and certain
            cancers. However, it&apos;s essential to recognize that BMI is just
            one piece of the puzzle when it comes to assessing overall health.
            Other factors such as diet, physical activity, genetics, and
            lifestyle habits also play crucial roles.
          </p>
        </div>
        <div>
          <img src="/images/bmiRange.jpg" alt="" width={600} />
        </div>
      </div>
    </main>
  );
};

export default Bmi;
