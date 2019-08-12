import { Component, h } from 'preact';

import { faBell } from '@fortawesome/free-solid-svg-icons';

import Icon from '../../icon/Icon';

import barStyle from '../HeaderBar.scss';

/**
 * The notifications button and list.
 *
 * It expands when clicked, revealing all notifications to show.
 */
export default class Notifications extends Component<{}, {}> {
  /**
   * Render the component.
   * @return The element to render.
   */
  public render(): JSX.Element {
    return (
      <span>
        <Icon icon={faBell} class={barStyle.icon} />
      </span>
    );
  }
}
