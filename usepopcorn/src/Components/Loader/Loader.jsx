import { RotatingLines } from "react-loader-spinner";
function Loader() {
  return (
    <div className="loader">
      <RotatingLines
        strokeColor="grey"
        strokeWidth="5"
        animationDuration="2"
        width="96"
        visible={true}
      />
    </div>
  );
}

export default Loader;
