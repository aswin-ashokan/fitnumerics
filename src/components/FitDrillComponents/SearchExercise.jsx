import { useEffect, useState } from "react";
import axios from "axios";

const bodyParts = [
  "All",
  "Biceps",
  "Triceps",
  "Chest",
  "Back",
  "Legs",
  "Abs",
  "Stretching",
  "Warm Up",
  "Lats",
  "Hamstring",
  "Calves",
  "Quadriceps",
  "Trapezius",
  "Shoulders",
  "Glutes",
];

const SearchExercise = () => {
  const [exeData, setExeData] = useState([]);
  let [bodyPart, setBodyPart] = useState("");

  const exerciseOptions = {
    method: 'GET',
    url: 'https://work-out-api1.p.rapidapi.com/search',
    params: {Muscles: `${bodyPart}`},
    headers: {
      'X-RapidAPI-Key': 'c4d29563camsh8543d5b54dc96b3p1c96eejsnc6fa25c6edd3',
      'X-RapidAPI-Host': 'work-out-api1.p.rapidapi.com'
    }
  };
  const handleSearch = async () => {
    try{
      const response = await axios.request(exerciseOptions)
      setExeData(response.data)
    }catch(err){
      console.error("Error in fetching workouts", err.message)
    }
  }; 
  useEffect(()=>{
    handleSearch();
  },[])
  return (
    <div className="h-[calc(100vh-47px)] w-full lg:grid lg:grid-cols-12 lg:mx-0 mx-auto lg:px-0 px-10 mt-10">
      <div className="lg:col-start-2 lg:col-end-12">
        <h1 className="mt-10 mb-4 lg:text-4xl md:text-3xl text-2xl font-bold bg-gradient-to-r from-[#cc2b5e] to-[#753a88] bg-clip-text text-transparent  ">
          FitDrill: Your Ultimate Fitness Workout Hub
        </h1>
        <p className="text-lg text-[#ff6cab]">
          Revolutionize your fitness routine with FitDrill, your all-in-one
          destination for curated workouts. Search for exercises targeting
          specific body parts and access direct YouTube demos for guidance,
          ensuring every workout is efficient and effective.
        </p>
        <img
          src="/illustration/workout.svg"
          alt="exercising illustration"
          width={300}
          height={300}
          className="sm:float-right"
        />
        <p className="mt-6 lg:text-xl text-md text-wrap text-justify">
          Exercise isn&apos;t just about physical appearance; it&apos;s about
          overall health and well-being. Incorporating regular workouts into
          your routine not only helps build strength and endurance but also
          improves cardiovascular health, enhances mood, and boosts confidence.
          At FitDrill, we understand the importance of diversity and specificity
          in exercise selection. Whether you&apos;re aiming to sculpt your abs,
          tone your arms, or strengthen your legs, our extensive library of
          workouts caters to every fitness need.
        </p>
      </div>
      <div className="lg:col-start-2 lg:col-end-12 lg:mt-0 mt-8">
        <h2 className="text-center text-2xl bg-gradient-to-r from-[#ec008c] to-[#fc6767] bg-clip-text text-transparent font-medium">
          Discover Your Perfect Workout: Search, Sweat, Succeed!
        </h2>
        <div className="flex lg:flex-row flex-col justify-center mt-6 lg:gap-8 gap-4">
          <div className="flex flex-col lg:w-1/4">
            <label htmlFor="" className="mb-2">
              Choose body part
            </label>
            <select
              name=""
              id=""
              onChange={(e) => setBodyPart(e.target.value)}
              className=" px-2 outline-none cursor-pointer py-2 border-[0.2px] border-[#ec008c] rounded-lg"
            >
              {bodyParts.map((part) => (
                <option value={part} key={part} className="px-2">
                  {part}
                </option>
              ))}
            </select>
          </div>
          <div className="flex lg:self-end self-center">
            <button
              onClick={handleSearch}
              className="bg-gradient-to-r from-[#DA4453] to-[#89216B] text-[#fff] px-6 py-2 rounded-2xl hover:bg-gradient-to-r hover:from-[#ec008c] hover:to-[#fc6767]"
            >
              Search
            </button>
          </div>
        </div>
        {/* ---Exercise cards-- */}
        <div className="flex lg:flex-wrap lg:flex-row flex-col 2xl:gap-12 gap-10 mt-14 justify-center mb-32">
          {
            exeData && 
            exeData.map((exe) => (
                <div key={exe} className="2xl:w-[380px] lg:w-[340px] bg-slate-100 p-4 rounded-2xl shadow-lg shadow-slate-500">
                <div className="lg:mt-0 mt-10">
                  <div className="flex items-center justify-between">
                    <div className="">
                    <p className="text-2xl font-semibold">{exe.WorkOut}</p>
                    <div className="text-white text-sm flex gap-4">
                    <p className="mt-3 bg-[#fc6767] rounded-lg text-center opacity-85 px-2 py-1">{exe.Muscles}</p>
                    <p className="mt-3 bg-[#ec008c] rounded-lg text-center opacity-85 px-2 py-1">{exe.Intensity_Level}</p>
                    </div>
                    </div>
                  </div>
                  <p className="mt-2 ">
                    Equipment :<span className="font-semibold">{exe.Equipment}</span>
                  </p>
                  <p className="mt-2">
                    Explaination :{" "}
                    <span>
                      {exe.Explaination}
                    </span>
                  </p>
                  <p className="mt-2">
                    <a href={exe.Video}>
                      <button className="bg-gradient-to-r from-[#DA4453] to-[#89216B] text-[#fff] px-4 py-1 mt-2 rounded-2xl hover:bg-gradient-to-r hover:from-[#ec008c] hover:to-[#fc6767]">Demo</button>
                    </a>
                  </p>
                  <p></p>
                </div>
              </div>
               ))
          }
        </div>
      </div>
    </div>
  );
};
export default SearchExercise;
