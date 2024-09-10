import useLocalStorage from "./local";
import "./styles.css";

export default function App() {
  const [theme, setTheme] = useLocalStorage("theme", "dark");

  function handleToggleTheme() {
    setTheme(theme === "light" ? "dark" : "light");
  }
  console.log(theme);
  return (
    <div className="light-dark-mode" data-theme={theme}>
      <div className="container">
        <button onClick={handleToggleTheme}>Change Theme</button>
      </div>
    </div>
  );
}
