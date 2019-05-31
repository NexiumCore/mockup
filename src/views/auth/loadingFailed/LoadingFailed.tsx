import { Component, h } from 'preact';

/**
 * Loading failure page.
 */
export default class LoadingFailed extends Component<{}, {}> {
  /**
   * Render the component.
   * @return The element to render.
   */
  public render(): JSX.Element {
    return (
      <main>
        <h1>Loading Failed</h1>
        <p>
          This page failed to load catastrophically. Please reload the page to
          try again.
        </p>
      </main>
    );
  }
}
