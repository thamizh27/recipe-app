import load from "./img/spinner.gif";
const Loader = () => {
  return (
    <div className="loader">
      <img src={load} alt="Loading" />
    </div>
  );
};

export default Loader;
