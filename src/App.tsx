const App = () => (
  <>
    <h2>Test app</h2>
    <hr />
    <p>v{APP_VERSION}</p>
    <p>{new Date(APP_VERSION_DATE).toLocaleDateString()}</p>
    <hr />
  </>
);

export default App;
