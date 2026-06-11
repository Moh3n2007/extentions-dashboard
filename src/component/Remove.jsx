const Remove = () => {
  return (
    <>
      <div className="flex flex-col justify-center items-center border text-[]">
        <p>Are you sure you want to remove this extension?</p>

        <div className="flex justify-center">
          <button>Remove</button>
          <button>Cancel</button>
        </div>
      </div>
    </>
  );
};
export default Remove;
