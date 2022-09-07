import { MutatingDots } from "react-loader-spinner";
import { styled } from "../../../stitches.config";

const WrapperLoading = styled("div", {
  display: "flex",
  width: "100vw",
  height: "100vh",
  background: "rgb(0 0 0 / 2%)",
  position: "fixed",
  top: 0,
  left: 0,
  alignItems: "center",
  justifyContent: "center",
});

const Loading = () => {
  return (
    <WrapperLoading>
      <MutatingDots
        height="100"
        width="100"
        color="#134559"
        secondaryColor="#134559"
        radius="12.5"
        ariaLabel="loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
    </WrapperLoading>
  );
};

export default Loading;
