import "./App.css";
import DashBord from "./Component/DashBord/DashBord";
import NavBar from "./Component/NavBar/NavBar";
import PhoneBar from "./Component/PhoneBar/PhoneBar";
import PriceList from "./Component/PriceList/PriceList";

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <h1 className="text-purple-600 text-7xl">Hello from Tailwind</h1>
      <PriceList></PriceList>
      <DashBord></DashBord>
      <PhoneBar></PhoneBar>
    </div>
  );
}

export default App;
