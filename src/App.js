import { ConfigProvider } from "antd";
import { BrowserRouter } from "react-router-dom";
import Router from "./routes";

const appTheme = {
  token: {
    colorPrimary: "#000000",
    colorInfo: "#000000",
    colorLink: "#2f54eb",
    borderRadius: 3,
    wireframe: false,
    colorBgBase: "#ffffff",
  },
  components: {
    Layout: {
      bodyBg: "rgb(255, 255, 255)",
      headerBg: "rgb(28, 28, 28)",
      siderBg: "rgb(255, 255, 255)",
    },
    Menu: {
      padding: 16,
      itemHeight: 30,
      itemPaddingInline: 160,
      itemSelectedColor: "rgb(13, 13, 13)",
      itemSelectedBg: "rgb(222, 222, 222)",
    },
    Select: {
      optionSelectedColor: "rgb(255, 255, 255)",
    },
  },
};

function App() {
  return (
    <>
      <ConfigProvider theme={appTheme}>
        <BrowserRouter>
          <div className='App'>
            <Router />
          </div>
        </BrowserRouter>
      </ConfigProvider>
    </>
  );
}

export default App;
