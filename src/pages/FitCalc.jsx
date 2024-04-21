import { Link, Outlet } from "react-router-dom";

const calculatorsList = [
  { name: "BMI", link: "bmi" },
  { name: "BMR", link: "bmr" },
  { name: "Calorie", link: "calorie" },
  { name: "Body Fat", link: "bodyfat" },
  { name: "IBW", link: "ibw" },
  { name: "Macros", link: "macros" },
  { name: "IBW", link: "ibw" },
  { name: "TDEE", link: "tdee" },
];
const FitCalc = () => {
  return (
    <div className="h-[calc(100vh-47px)] w-full lg:grid lg:grid-cols-12 lg:mx-0 mx-auto lg:px-0 px-10">
      <div className="lg:col-start-2 lg:col-end-12 ">
        <h1 className="mt-10 mb-4 lg:text-4xl md:text-3xl text-2xl font-bold bg-gradient-to-r from-[#cc2b5e] to-[#753a88] bg-clip-text text-transparent  ">
          FitCalc: Your Ultimate Fitness Calculator Hub
        </h1>
        <p className="text-lg text-[#ff6cab]">
          Unlock your fitness potential with precision. FitCalc offers essential
          tools like BMI, BMR, and TDEE calculators, providing concise insights
          to fuel your journey towards optimal health and wellness.
        </p>
        <p className="mt-6 text-xl">
          In the realm of fitness, knowledge is power, and precision is
          paramount. Fitness calculations play a pivotal role in understanding
          your body&apos;s unique needs, setting realistic goals, and crafting
          effective strategies to achieve them. Whether you&apos;re striving to
          manage your weight, fine-tune your nutrition, or tailor your workout
          regimen,these tools provide invaluable insights into your body
          composition, metabolic rate, and calorie requirements. By harnessing
          the data derived from these calculations, you gain the clarity and
          direction needed to make informed decisions, optimize your efforts,
          and ultimately unlock your full fitness potential.
        </p>
        <h3 className="text-2xl mt-10 font-medium">Calculate Your</h3>
        <div className="lg:col-start-2 lg:col-end-12 text-black mt-4 flex lg:gap-10 gap-6 flex-wrap items-center">
          {calculatorsList.map((calcBtn) => (
            <Link
              key={calcBtn.name}
              to={calcBtn.link}
              className="bg-gradient-to-r from-[#DA4453] to-[#89216B] text-[#fff] px-4 py-2 rounded-2xl hover:bg-gradient-to-r hover:from-[#ec008c] hover:to-[#fc6767] transition duration-500 ease-in-out shadow-lg shadow-slate-500"
            >
              {calcBtn.name}
            </Link>
          ))}
        </div>
        {/* -----calculators---- */}
        <div className="mt-16">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default FitCalc;
