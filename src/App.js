import About from "./components/About/About";
import Header from "./components/Header/Header";
function App() {
  return (
    <div>
      <Header />

      <div style={{ marginTop: "500px", marginBottom: "100px" }}>
        <About />
      </div>
    </div>
  );
}

export default App;
