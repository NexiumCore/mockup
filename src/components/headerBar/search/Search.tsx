import { Component, h } from 'preact';

import style from './Search.scss';

/**
 * Search bar for the header.
 *
 * It expands when clicked, and overlays the result to the entire screen.
 */
export default class Search extends Component<{}, {}> {
  /**
   * Render the component.
   * @return The element to render.
   */
  public render(): JSX.Element {
    return (
      <input placeholder="Search anything.." class={style.input}>
        Search..
      </input>
    );
  }
}
