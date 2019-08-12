import { Component, h } from 'preact';

import Button from '../../../components/button/Button';
import Input from '../../../components/input/Input';

import style from './Register.scss';

/**
 * Registration page.
 */
export default class Registration extends Component<{}, IRegisterState> {
  /**
   * Render the component.
   * @return The element to render.
   */
  public render(): JSX.Element {
    return (
      <main>
        <h1>Registration</h1>
        <p>Register for Nexium.</p>
        <form class={style.form} onSubmit={e => this.doRegister(e)}>
          <Input
            placeholder="john.doe"
            autoFocus={true}
            disabled={this.state.disabled}
            autoComplete="section-register username"
          >
            Username
          </Input>
          <Input
            placeholder="qwerty"
            type="password"
            disabled={this.state.disabled}
            autoComplete="section-register password"
          >
            Password
          </Input>
          <Input
            placeholder="qwerty"
            type="password"
            disabled={this.state.disabled}
            autoComplete="section-register repeat-password"
          >
            Repeat password
          </Input>
          <span class={style.buttons}>
            <a href="/">Login</a>
            <Button type="primary" disabled={this.state.disabled}>
              Register
            </Button>
          </span>
        </form>
      </main>
    );
  }

  /**
   * Run the register procedure.
   */
  public doRegister(e: Event): void {
    e.preventDefault();

    this.setState({ disabled: true });
    setTimeout(() => this.setState({ disabled: false }), 3000);
  }
}

/**
 * State of the component.
 */
interface IRegisterState {
  disabled: boolean;
}
