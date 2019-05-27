import { Component, h } from 'preact';

import AsyncRoute from 'preact-async-route';
import Router from 'preact-router';

import Loading from './pages/loading/Loading';
import LoadingFailed from './pages/loadingFailed/LoadingFailed';
import NotFound from './pages/notFound/NotFound';

/**
 * Main component of the application.
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
          path="/"
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
      const module = await import(`./pages/${page.toLowerCase()}/${page}`);
      return module.default;
    } catch (e) {
      return LoadingFailed as any;
    }
  }
}
