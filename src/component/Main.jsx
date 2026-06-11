const Main = () => {
  return (
    <>
      <div className="flex justify-between mt-10 ">
        <h1 className="text-3xl font-bold dark: text-[hsl(0, 0%, 93%)]">
          Extensions List <span className="text-text-200">(12)</span>
        </h1>
        <div className="flex justify-between gap-4 ">
          <button className="bg-bg-100 border-[1px] border-bg-100 dark:bg-[hsl(226, 11%, 37%)] dark:border-[hsl(226, 11%, 37%)] dark:text-[hsl(0, 0%, 93%)] hover:bg-bg-red w-16 h-12 rounded-4xl ">
            All
          </button>
          <button className="bg-bg-100 border-[1px] border-bg-100 dark:bg-[hsl(226, 11%, 37%)] dark:border-[hsl(226, 11%, 37%)] dark:text-[hsl(0, 0%, 93%)] hover:bg-bg-red w-[122px] h-12 rounded-4xl ">
            Active <span>(8)</span>
          </button>
          <button className="bg-bg-100 border-[1px] border-bg-100 dark:bg-[hsl(226, 11%, 37%)] dark:border-[hsl(226, 11%, 37%)] dark:text-[hsl(0, 0%, 93%)] hover:bg-bg-red w-[122px] h-12 rounded-4xl ">
            Inactive <span>(4)</span>
          </button>
        </div>
      </div>
      <div className="flex flex-wrap justify-center items ">
        <div className="bg-[#fcfdff] w-[400px] h-[236px] rounded-3xl">
          <div className="flex gap-3 px-6 py-8">
            <img src="./public/favicon.svg" />
            <div className="flex-col gap-3.5">
              <p className="text-[#010b36] font-semibold text-[18px]">
                DevLens
              </p>
              <p className="text-[19px] pr-6 text-[hsl(226, 11%, 37%)] font-light">
                Quickly inspect page layouts and visualize element boundaries.
              </p>
            </div>
          </div>
          <div className="flex justify-between items-center px-8 ">
            <button className="bg-bg-100 border-[2px] border-bg-100 dark:bg-[hsl(226, 11%, 37%)] dark:border-[hsl(226, 11%, 37%)] dark:text-[hsl(0, 0%, 93%)] hover:border-bg-red hover:bg-[#fcfdff] w-28 h-12 rounded-4xl">
              Remove
            </button>
           
          </div>
        </div>
      </div>
    </>
  );
};
export default Main;
