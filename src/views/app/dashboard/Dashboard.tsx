import { Component, h } from 'preact';

import HeaderBar from '../../../components/headerBar/HeaderBar';

/**
 * Dashboard page.
 */
export default class Dashboard extends Component<{}, {}> {
  /**
   * Render the component.
   * @return The element to render.
   */
  public render(): JSX.Element {
    return (
      <main>
        <HeaderBar />
        <h1>Dashboard</h1>
        <p>This would be the dashboard, if there was one.</p>
      </main>
    );
  }
}
