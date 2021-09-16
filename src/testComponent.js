/* eslint-disable class-methods-use-this */
import { LitElement } from 'lit';
import { html } from 'lit/static-html';
import Styles from './styles.scss';

export default class testComponent extends LitElement {
  static get properties() {
    return {
      disabled: { type: Boolean },
    };
  }

  constructor() {
    super();
    this.hello = undefined;
  }

  static get styles() {
    return [Styles];
  }

  render() {
    return html`
        <div ${this.disabled ? 'disabled' : ''}>
        <slot name="input-slot"></slot>
        <slot name="label-slot"></slot>
            <p>Hello World</p>
        </div>`;
  }
}
