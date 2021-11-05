import About from "./components/About/About";
import Header from "./components/Header/Header";
import styles from "./components/About/About.module.css";
function App() {
  return (
    <div>
      <Header />

      <div className={styles.about}>
        <About />
      </div>
    </div>
  );
}

export default App;
