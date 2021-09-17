/* eslint-disable class-methods-use-this */
import { LitElement } from 'lit';
import { html } from 'lit/static-html';
import Styles from './styles.scss';

export default class TestComponent extends LitElement {
  static get properties() {
    return {
      disabled: { type: Boolean },
    };
  }

  static finalizeStyles(styles) {
    return [Styles];
  }

  render() {
    return html`
        <div class="radiobutton-wrapper ${this.disabled ? 'disabled' : ''}">
          <slot name="input-slot"></slot>
          <slot name="label-slot"></slot>
        </div>`;
  }
}
