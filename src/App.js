import "./App.css";

import "antd/dist/antd.css";
import { Layout } from "antd";
import Headerr from "./components/Headerr";

const { Header, Content, Footer } = Layout;
function App() {
  return (
    <Layout className="mainLayout">
      <Header>
        <Headerr />
      </Header>
    </Layout>
  );
}

export default App;
