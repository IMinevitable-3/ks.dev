// eslint-disable-next-line react/prop-types
const Divider = ({ text }) => {
  return (
    <>
      <div className="flex items-center">
        <span className="h-px flex-1 bg-white"></span>
        <p className="shrink-0 px-6">{text}</p>
        <span className="h-px flex-1 bg-white"></span>
      </div>
    </>
  );
};

export default Divider;
