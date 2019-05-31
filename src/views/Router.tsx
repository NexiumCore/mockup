import { Component, h } from 'preact';

import AsyncRoute from 'preact-async-route';
import PreactRouter from 'preact-router';

import Loading from './router/loading/Loading';
import LoadingFailed from './router/loadingFailed/LoadingFailed';
import NotFound from './router/notFound/NotFound';

/**
 * Main router of the application.
 *
 * This routes the different pages of the application.
 * It does not handle the routing inside of the app pages,
 * this is handled by the App view.
 */
export default class Router extends Component<{}, {}> {
  /**
   * Render the component.
   * @return The element to render.
   */
  public render(): JSX.Element {
    return (
      <PreactRouter>
        <AsyncRoute
          path="/"
          loading={() => <Loading />}
          getComponent={() => this.fetchPage('Auth')}
        />
        <AsyncRoute
          path="/register"
          loading={() => <Loading />}
          getComponent={() => this.fetchPage('Auth')}
        />
        <AsyncRoute
          path="/app/:page?"
          loading={() => <Loading />}
          getComponent={() => this.fetchPage('App')}
        />
        <NotFound default />
      </PreactRouter>
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
      const module = await import(`./${page}`);
      return module.default;
    } catch (e) {
      return LoadingFailed as any;
    }
  }
}
