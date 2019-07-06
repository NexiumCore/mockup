import { Component, h } from 'preact';

/**
 * Page not found page.
 */
export default class NotFound extends Component<{}, {}> {
  /**
   * Render the component.
   * @return The element to render.
   */
  public render(): JSX.Element {
    return (
      <main>
        <h1>Page Not Found</h1>
        <p>The page you were looking for was not found.</p>
      </main>
    );
  }
}
