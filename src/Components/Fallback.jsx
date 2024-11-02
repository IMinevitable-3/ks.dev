const Fallback = (title, details) => {
  return (
    <div>
      <div className="grid place-content-center px-4">
        <div className="px-1 text-center sm:px-5">
          <div className="flex justify-center">
            <h1 className="text-5xl font-bold text-[#ED4245]">{title}</h1>
          </div>

          <p className="mt-4 text-2xl">{details}</p>
        </div>
      </div>
    </div>
  );
};

export default Fallback;
