import { Component, h } from 'preact';

import Button from '../../../components/button/Button';
import Input from '../../../components/input/Input';

import style from './Login.scss';

/**
 * Login page.
 */
export default class Login extends Component<{}, ILoginState> {
  /**
   * Render the component.
   * @return The element to render.
   */
  public render(): JSX.Element {
    return (
      <main>
        <h1>Login</h1>
        <p>Please log in to use the application.</p>
        <form class={style.form} onSubmit={e => this.doLogin(e)}>
          <Input autoFocus={true} disabled={this.state.disabled}>
            Username
          </Input>
          <Input type="password" disabled={this.state.disabled}>
            Password
          </Input>
          <span class={style.buttons}>
            <a href="/register">Register</a>
            <Button type="primary" disabled={this.state.disabled}>
              Login
            </Button>
          </span>
        </form>
      </main>
    );
  }

  /**
   * Run the login procedure.
   *
   */
  public doLogin(e: Event): void {
    e.preventDefault();

    this.setState({ disabled: true });
    setTimeout(() => this.setState({ disabled: false }), 3000);
  }
}

/**
 * State of the component.
 */
interface ILoginState {
  disabled: boolean;
}
