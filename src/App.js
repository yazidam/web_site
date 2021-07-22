import "./App.css";

import "antd/dist/antd.css";
import { Layout } from "antd";
import Headerr from "./components/Headerr";
import Home from "./views/Home";
import Footerr from "./components/home/Footerr";

const { Header, Content, Footer } = Layout;
function App() {
  return (
    <Layout className="mainLayout">
      <Header>
        <Headerr />
      </Header>
      <Content>
        <Home />
      </Content>
      <Footer>
        <Footerr />
      </Footer>
    </Layout>
  );
}

export default App;
