import { Component, h } from 'preact';

import style from './Input.scss';

/**
 * Input component.
 *
 * This is a text button, for text input or passwords.
 */
export default class Input extends Component<IInputProps, IInputState> {
  /**
   * Render the component.
   * @return The element to render.
   */
  public render(): JSX.Element {
    return (
      <label class={style.label}>
        {this.props.children}
        <input
          class={style.input}
          autofocus={this.props.autoFocus}
          disabled={this.props.disabled}
          type={this.props.type}
          value={this.state.value}
          onInput={e => this.onChange(e)}
        />
      </label>
    );
  }

  public onChange(e: any): void {
    const value: string = e.target.value;
    this.setState({
      value,
    });

    if (this.props.onChange) this.onChange(value);
  }
}

/**
 * Props for the input
 */
interface IInputProps {
  /**
   * If the button has auto focus enabled.
   */
  autoFocus?: boolean;
  /**
   * Indicate if the input is disabled.
   */
  disabled?: boolean;
  /**
   * Input type.
   * Can by password or default.
   */
  type?: 'default' | 'password';

  /**
   * On change event.
   * Fired when the input value is changed by the user;
   */
  onChange?: (newText: string) => void;
}

/**
 * State of the input.
 */
interface IInputState {
  /**
   * The current value of the input.
   */
  value: string;
}
