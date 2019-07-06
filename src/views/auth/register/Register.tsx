import { Component, h } from 'preact';

/**
 * Registration page.
 */
export default class Registration extends Component<{}, {}> {
  /**
   * Render the component.
   * @return The element to render.
   */
  public render(): JSX.Element {
    return (
      <main>
        <h1>Registration</h1>
        <p>Welcome, please register to use the application.</p>
        <p>
          <a href="/">Click here</a> to login if you have an account.
        </p>
      </main>
    );
  }
}
