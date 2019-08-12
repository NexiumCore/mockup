import { Component, h } from 'preact';
import {
  faAddressBook,
  faCalendarAlt,
  faEnvelope,
  faHome,
} from '@fortawesome/free-solid-svg-icons';

import Search from './search/Search';
import Icon from '../icon/Icon';
import Notifications from './notifications/Notifications';

import style from './HeaderBar.scss';

/**
 * The header bar.
 *
 * This is the top bar on the dashboard.
 */
export default class HeaderBar extends Component<{}, {}> {
  /**
   * Render the component.
   * @return The element to render.
   */
  public render(): JSX.Element {
    return (
      <nav class={style.bar}>
        <a href="/app" class={style.icon}>
          <Icon icon={faHome} />
        </a>
        <Search />
        <a href="/app/mail" class={style.icon}>
          <Icon icon={faEnvelope} />
        </a>
        <a href="/app/contacts" class={style.icon}>
          <Icon icon={faAddressBook} />
        </a>
        <a href="/app/calendar" class={style.icon}>
          <Icon icon={faCalendarAlt} />
        </a>
        <span class={style.divider} />
        <Notifications />
        <a href="/app/profile" title="Go to your profile" class={style.profile}>
          <img src="http://placekitten.com/300/300" alt="" />
        </a>
      </nav>
    );
  }
}
