const Exercises = () => {
  return (
    <div className="lg:w-[380px] bg-slate-100 p-4 rounded-2xl shadow-lg shadow-slate-500">
      <div className="lg:mt-0 mt-10">
        <div className="flex items-center justify-between">
          <div className="">
          <p className="text-2xl font-semibold">Deadlifts</p>
          <div className="text-white text-sm flex gap-4">
          <p className="mt-3 bg-[#fc6767] rounded-lg text-center opacity-85 px-2 py-1">Muscle</p>
          <p className="mt-3 bg-[#ec008c] rounded-lg text-center opacity-85 px-2 py-1">Difficulty</p>
          </div>
          </div>
        </div>
        <p className="mt-2 ">
          Equipment :<span className="font-semibold">Dumbbells</span>
        </p>
        <p className="mt-2">
          Sets: <span className="font-semibold">3 Sets with 12 to 15 reps</span>
        </p>
        <p className="mt-2">
          Explaination :{" "}
          <span>
            Strengthens the hamstrings, glutes, and lower back, improving
            posterior chain strength.
          </span>
        </p>
        <p className="mt-2">
          <a href="https://www.youtube.com/results?search_query=Romanian+Deadlift">
            <button className="bg-gradient-to-r from-[#DA4453] to-[#89216B] text-[#fff] px-4 py-1 mt-2 rounded-2xl hover:bg-gradient-to-r hover:from-[#ec008c] hover:to-[#fc6767]">Demo</button>
          </a>
        </p>
        <p></p>
      </div>
    </div>
  );
};

export default Exercises;
