const Remove = () => {
  return (
    <>
      <div className="flex flex-col justify-center items-center border-[3px] border-red-700 gap-[20px] w-[575px] h-[155px] rounded-[30px] bg-white hidden">
        <p className="font-bold text-[21px] text-[#010b36]">
          Are you sure you want to remove this extension?
        </p>

        <div className="flex justify-center gap-[15px] items-center">
          <button className="bg-[#ededed] pt-[5px] pb-[5px] pr-[20px] pl-[20px] border-3 border-[#ededed] rounded-[20px] text-[19px] hover:border-red-700 hover:bg-[#fcfdff]">
            Remove
          </button>
          <button className="bg-[#ededed] pt-[5px] pb-[5px] pr-[20px] pl-[20px] border-3 border-[#ededed] rounded-[20px] text-[19px] hover:border-red-700 hover:bg-[#fcfdff]">
            Cancel
          </button>
        </div>
      </div>
    </>
  );
};
export default Remove;
