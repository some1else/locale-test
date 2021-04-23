import "./App.css"

export const is12Hour = () =>
  !!new Intl.DateTimeFormat([], { hour: "numeric" }).format(0).match(/\s/)

function App() {
  return (
    <div className="App">
      <p>
        Browser languages:
        <br />
        <strong>{navigator.languages.join(", ")}</strong>
      </p>
      <p>
        Locale-formatted time:
        <br />
        <strong>{new Date().toLocaleTimeString()}</strong>
      </p>
      <p>
        Detected time format:
        <br />
        <strong>{is12Hour() ? "12-hour clock" : "24-hour clock"}</strong>
      </p>
    </div>
  )
}

export default App
