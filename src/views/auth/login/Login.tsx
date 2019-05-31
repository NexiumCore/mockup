import { Component, h } from 'preact';

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
        <p>
          <a href="/register">Click here</a> to register if you don't have an
          account.
        </p>
      </main>
    );
  }
}
