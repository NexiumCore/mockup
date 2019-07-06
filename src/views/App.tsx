import { Component, h } from 'preact';

import AsyncRoute from 'preact-async-route';
import Router from 'preact-router';

import Loading from './app/loading/Loading';
import LoadingFailed from './app/loadingFailed/LoadingFailed';
import NotFound from './app/notFound/NotFound';

/**
 * Page router of the application.
 *
 * This routes the pages inside of the dashboard.
 * The global routing is handled by the Router componentent.
 */
export default class App extends Component<{}, {}> {
  /**
   * Render the component.
   * @return The element to render.
   */
  public render(): JSX.Element {
    return (
      <Router>
        <AsyncRoute
          path="/app"
          loading={() => <Loading />}
          getComponent={() => this.fetchPage('Dashboard')}
        />
        <NotFound default />
      </Router>
    );
  }

  /**
   * Load a page asynchronously.
   *
   * @param page Page name to import
   * @return The JSX of the imported page.
   */
  private async fetchPage(page: string): Promise<JSX.Element> {
    try {
      const module = await import(`./app/${page.toLowerCase()}/${page}`);
      return module.default;
    } catch (e) {
      return LoadingFailed as any;
    }
  }
}
