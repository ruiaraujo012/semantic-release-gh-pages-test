const App = () => (
  <>
    <h2>Test app</h2>
    <p>v{APP_VERSION}</p>
    <p>{new Date(APP_VERSION_DATE).toLocaleDateString()}</p>
  </>
);

export default App;
