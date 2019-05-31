import { Component, h } from 'preact';

/**
 * Loading page.
 */
export default class Loading extends Component<{}, {}> {
  /**
   * Render the component.
   * @return The element to render.
   */
  public render(): JSX.Element {
    return (
      <main>
        <h1>Loading..</h1>
        <p>Please wait for the page to load.</p>
      </main>
    );
  }
}
