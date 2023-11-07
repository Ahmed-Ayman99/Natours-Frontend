import { Toaster } from "react-hot-toast";

const ToasterItem = () => {
  return (
    <Toaster
      position="top-center"
      gutter={12}
      containerStyle={{ margin: "8px" }}
      toastOptions={{
        success: {
          duration: 3000,
        },
        error: {
          duration: 4000,
        },
        style: {
          fontSize: "1.6rem",
          maxWidth: "50rem",
          padding: ".6rem 1.2rem",
          backgroundColor: "#55c57a",
          color: "#fff",
        },
      }}
    />
  );
};

export default ToasterItem;
