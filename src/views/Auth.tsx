import { Component, h } from 'preact';

import AsyncRoute from 'preact-async-route';
import Router from 'preact-router';

import Loading from './app/loading/Loading';
import LoadingFailed from './app/loadingFailed/LoadingFailed';

/**
 * Authentication router.
 *
 * This routes the main authentication pages of the application.
 * This includes, but is not limited to logging in, and registering.
 */
export default class Auth extends Component<{}, {}> {
  /**
   * Render the component.
   * @return The element to render.
   */
  public render(): JSX.Element {
    return (
      <Router>
        <AsyncRoute
          path="/"
          default
          loading={() => <Loading />}
          getComponent={() => this.fetchPage('Login')}
        />
        <AsyncRoute
          path="/register"
          loading={() => <Loading />}
          getComponent={() => this.fetchPage('Register')}
        />
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
      const module = await import(`./auth/${page.toLowerCase()}/${page}`);
      return module.default;
    } catch (e) {
      return LoadingFailed as any;
    }
  }
}
