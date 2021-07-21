import "./App.css";

import "antd/dist/antd.css";
import { Layout } from "antd";
import Headerr from "./components/Headerr";
import Home from "./views/Home";

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
    </Layout>
  );
}

export default App;
