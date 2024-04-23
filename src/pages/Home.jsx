const Home = () => {
  return (
    <main className="lg:grid grid-cols-12 lg:px-0 px-4 h-[calc(100vh-47px)]">
      <div className="col-span-12 col-start-2 col-end-12 flex md:flex-row flex-col lg:gap-10 gap-4">
        <div className="md:w-1/3">
        <img
          src="/images/home.jpg"
          alt=""
          width={'100%'}
          height={'100%'}
          className="rounded-lg mt-10 self-center"
        />
        </div>
        <div className="lg:mt-24 mt-10">
          <h1 className="lg:text-8xl text-4xl font-serif bg-gradient-to-r from-[#cc2b5e] to-[#753a88] bg-clip-text text-transparent">Fitnumerics</h1>
          <p className="mt-10">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum eos ipsum neque inventore at voluptas architecto repellendus odio natus similique.</p>
        </div>
      </div>
    </main>
  );
};

export default Home;
