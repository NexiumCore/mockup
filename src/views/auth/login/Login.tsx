import { Component, h } from 'preact';

import Button from '../../../components/button/Button';
import Input from '../../../components/input/Input';

/**
 * Login page.
 */
export default class Login extends Component<{}, {}> {
  /**
   * Render the component.
   * @return The element to render.
   */
  public render(): JSX.Element {
    return (
      <main>
        <h1>Login</h1>
        <p>Please log in to use the application.</p>
        <Input />
        <Input />
        <Button
          type="primary"
          onClick={() => new Promise(resolve => setTimeout(resolve, 2000))}
        >
          Login
        </Button>
        <p>
          <a href="/register">Click here</a> to register if you don't have an
          account.
        </p>
      </main>
    );
  }
}
