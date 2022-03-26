import "./App.css";
import Footer from "./Component/Footer/Footer";
import Header from "./Component/Header/Header";
import QA from "./Component/QA/QA";
import Roboshop from "./Component/RoboShop/Roboshop";

function App() {
  return (
    <div className="App">
      <Header />
      <Roboshop />
      <QA />
      <Footer />
    </div>
  );
}

export default App;
