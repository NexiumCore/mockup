import { Component, h } from 'preact';

import style from './Button.scss';

/**
 * Button component.
 *
 * This is a simple button, with callbacks.
 */
export default class Button extends Component<IButtonProps, IButtonState> {
  /**
   * Render the component.
   * @return The element to render.
   */
  public render(): JSX.Element {
    return (
      <button
        class={`${style.button} ${style[this.props.type || 'primary']}`}
        disabled={this.props.disabled || this.state.loading}
        onClick={e => this.onClick(e)}
      >
        {this.props.children}
      </button>
    );
  }

  /**
   * On click event fired by the button.
   *
   * @param e MouseEvent object supplied by the event.
   */
  private onClick(e: MouseEvent): void {
    if (!this.props.onClick) return;

    this.setState({ loading: true });
    this.props.onClick(e).then(() =>
      this.setState({
        loading: false,
      }),
    );
  }
}

/**
 * Props of the button.
 */
interface IButtonProps {
  /**
   * Type of the button.
   *
   * Default is `primary`.
   */
  type?: 'primary' | 'secondary' | 'ghost';
  /**
   * If the button is disabled or not.
   * Click events are not fired if this is true.
   *
   * Default is `false`.
   */
  disabled?: boolean;

  /**
   * On click event.
   */
  onClick?(e: MouseEvent): Promise<any>;
}

/**
 * State of the button.
 */
interface IButtonState {
  /**
   * If the button is loading or not.
   */
  loading: boolean;
}
