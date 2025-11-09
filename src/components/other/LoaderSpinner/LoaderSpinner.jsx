import { Oval } from "react-loader-spinner";

function LoaderSpinner() {
  return (
    <Oval
      height={80}
      width={80}
      color="#5A4FF3"
      wrapperStyle={{}}
      wrapperClass="loader-spinner"
      visible={true}
      ariaLabel="oval-loading"
      secondaryColor="#3d36a3ff"
      strokeWidth={2}
      strokeWidthSecondary={2}
    />
  );
}

export default LoaderSpinner;
