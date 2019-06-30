import { Component, h } from 'preact';

import style from './Button.scss';

/**
 * Input component.
 *
 * This is a text button, for text input or passwords.
 */
export default class Input extends Component<{}, {}> {
  /**
   * Render the component.
   * @return The element to render.
   */
  public render(): JSX.Element {
    return <input></input>;
  }
}
