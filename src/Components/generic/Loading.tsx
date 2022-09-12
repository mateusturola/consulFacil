import { MutatingDots } from "react-loader-spinner";
import { styled } from "../../../stitches.config";

const WrapperLoading = styled("div", {
  display: "flex",
  width: "100vw",
  height: "100vh",
  background: "rgb(19 69 89 / 0.26)",
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
        color="#f6f6f6"
        secondaryColor="#f6f6f6"
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
