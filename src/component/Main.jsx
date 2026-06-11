const Main=()=>{
    return (
      <>
        <div className="flex justify-between p-">
          <h1 className="text-3xl font-bold">
            Extensions List <span className="text-text-200">(12)</span>
          </h1>
          <div className="flex justify-between gap-4 ">
            <button className="bg-bg-100 border-[1px] border-bg-100 hover:bg-bg-red w-16 h-12 rounded-4xl ">All</button>
            <button>Active <span>(8)</span></button>
            <button>Inactive <span>(4)</span></button>
          </div>
        </div>
      </>
    );
    
};
export default Main;