const Home = () => {
  return (
    <main className="lg:grid grid-cols-12 lg:px-0 px-4 h-[calc(100vh-47px)]">
      <div className="col-span-12 col-start-2 col-end-12 flex lg:flex-row flex-col lg:gap-10 gap-4 mt-10">
        <div className="lg:w-1/2 flex gap-2 justify-center rounded-2xl p-5 drop-shadow-2xl">
          <div className="mt-10">
            <img
              src="/images/home.jpg"
              alt=""
              width={250}
              height={200}
              className="rounded-lg bg-slate-800 drop-shadow-xl"
              loading="eager"
            />
          </div>
          <div className="mt-10">
            <img
              src="/images/homemeasure.jpg"
              alt=""
              width={250}
              height={200}
              className="rounded-lg mt-4"
              loading="eager"
            />
            <img
              src="/images/homeFood.jpg"
              alt=""
              width={250}
              height={100}
              className="rounded-lg mt-2"
              loading="eager"
            />
          </div>
          <div></div>
        </div>
        <div className="lg:w-1/2 lg:mt-10">
          <p className="lg:mt-10 text-lg">
            <span className="text-3xl">
              Welcome to{" "}
              <span className="lg:text-8xl text-5xl font-serif bg-gradient-to-r from-[#cc2b5e] to-[#753a88] bg-clip-text text-transparent">
                FitNumerics
              </span>
              ,
            </span>{" "}
            your one-stop destination for all things fitness! Whether
            you&apos;re a seasoned athlete or just starting your wellness
            journey, we&apos;ve got everything you need to achieve your fitness
            goals and live a healthier, happier life.
          </p>
          <p className="mt-4 text-lg">
            At FitNumerics, we believe that fitness is not one-size-fits-all.
            That&apos;s why we offer a wide range of personalized solutions to
            meet your unique needs and preferences. From fitness calculators and
            workout routines to informative articles, we&apos;ve got you covered
            every step of the way.
          </p>
        </div>
      </div>
    </main>
  );
};

export default Home;
