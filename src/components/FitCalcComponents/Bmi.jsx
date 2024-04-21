const Bmi = () => {
  return (
    <main className="mb-36">
      <h1 className="text-center text-2xl mb-4">BMI : Body Mass Index</h1>
      <img src="/images/bmi.jpg" alt="" width={400} className="float-right" />
      <p className="text-lg">
        Body Mass Index (BMI) is a widely-used measurement tool that provides an
        indication of a person&apos;s body fatness based on their height and
        weight. Understanding your BMI can offer valuable insights into your
        overall health and help guide lifestyle choices to promote well-being.
      </p>
      <p className="text-lg">
        BMI is calculated by dividing a person&apos;s weight in kilograms by the
        square of their height in meters. The resulting number falls into one of
        several categories, including underweight, normal weight, overweight, or
        obese. While BMI is a useful screening tool for assessing weight status,
        it&apos;s important to note that it doesn&apos;t directly measure body
        fat percentage or distribution, nor does it account for factors such as
        muscle mass, bone density, or overall body composition.
      </p>
      <div className="mt-6 flex flex-col gap-4 border-[0.1px] border-[#000] lg:w-1/2 p-2">
        <div className="">
          <label htmlFor="age">Age</label>
          <input
            type="number"
            placeholder="age"
            className="border-[0.2px] border-[#ec008c] ml-2 px-2 py-1 rounded-xl outline-none w-[500px]"
          />
        </div>
        <div className="flex gap-4">
          <label htmlFor="gender">Gender :</label>
          <div>
            <input type="radio" id="male" value="Male" name="gender" />
            <label htmlFor="male" className="ml-1">
              Male
            </label>
          </div>
          <div>
            <input type="radio" id="female" value="Female" name="gender" />
            <label htmlFor="female" className="ml-1">
              Female
            </label>
          </div>
        </div>
          <div>
          <label htmlFor="">Height</label>
          <input
            type="number"
            placeholder="Height in cm"
            className="border-[0.2px] border-[#ec008c] ml-2 px-2 py-1 rounded-xl outline-none"
          />
          </div>
          <div>
          <label htmlFor="">Weight</label>
          <input
            type="number"
            placeholder="Weight in Kgs"
            className="border-[0.2px] border-[#ec008c] ml-2 px-2 py-1 rounded-xl outline-none"
          />
          </div>
        <div className="">
          <button className="bg-gradient-to-r from-[#DA4453] to-[#89216B] text-[#fff] px-4 py-2 rounded-2xl hover:bg-gradient-to-r hover:from-[#ec008c] hover:to-[#fc6767] transition duration-500 ease-in-out shadow-lg shadow-slate-500">Calculate</button>
        </div>
      </div>
    </main>
  );
};

export default Bmi;
