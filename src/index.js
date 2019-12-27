/** @jsx jsx */
import { jsx, css, Global } from '@emotion/core';
import { Fragment } from 'react';
import { render } from 'react-dom';

const App = () => (
  <Fragment>
    <Global styles={css(`body { background: white; } `)} />
    <div
      className="container d-flex justify-content-center align-items-center"
      css={css(`
        height: 100vh;
      `)}
    >
      <div className="jumbotron">
        <h1>hello world</h1>
      </div>
    </div>
  </Fragment>
);

render(<App />, document.getElementById('root'));
