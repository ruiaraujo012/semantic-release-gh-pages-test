import { Link } from 'react-router-dom';

const Root = () => (
  <>
    <h2>Root</h2>
    <hr />
    <p>v{APP_VERSION}</p>
    <p>{new Date(APP_VERSION_DATE).toLocaleDateString()}</p>
    <hr />

    <Link to='/page1'>Page 1</Link>
    <br />
    <Link to='/page2'>Page 2</Link>
  </>
);

export default Root;
