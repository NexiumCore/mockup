import { Component, h } from 'preact';
import { IconDefinition } from '@fortawesome/free-solid-svg-icons';

/**
 * Icon component.
 *
 * This component can display a simple SVG icon from fontawesome.
 */
export default class Icon extends Component<IIconProps, {}> {
  /**
   * Render the component.
   * @return The element to render.
   */
  public render(): JSX.Element {
    const definition = this.props.icon.icon;
    const path =
      typeof definition[4] === 'string'
        ? definition[4]
        : definition[4].reduce((c, v) => `${c} ${v}`, '');

    return (
      <svg
        viewBox={`0 0 ${definition[0]} ${definition[1]}`}
        class={this.props.class}
      >
        <path d={path} />
      </svg>
    );
  }
}

interface IIconProps {
  /**
   * The icon to show.
   */
  icon: IconDefinition;
  /**
   * Classes to append to the icon.
   */
  class?: string;
}
