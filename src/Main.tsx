import { h, render } from 'preact';

import App from './App';

let node: Element;

/**
 * Start the application.
 */
const start = () => {
  node = render(<App />, document.body, node);
};

/**
 * Enable hot reloading for development
 */
if (module.hot) {
  module.hot.accept('./App', () => requestAnimationFrame(start));
}

/**
 * Include the debug code if it's a development build.
 */
if (DEBUG) {
  import('preact/debug');
}
start();
