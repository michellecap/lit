/* eslint-disable class-methods-use-this */
import { LitElement } from 'lit';
import { html } from 'lit/static-html';
import Styles from './styles.scss';

export default class TestComponent extends LitElement {
  static get properties() {
    return {
      hellodisabled: { type: Boolean },
    };
  }

  constructor() {
    super();
  }

  static get styles() {
    return [Styles];
  }

  render() {
    return html`
        <div class="${this.hellodisabled ? 'disabled' : ''}">
        <slot name="input-slot"></slot>
        <slot name="label-slot"></slot>
            <p>Hello World</p>
        </div>`;
  }
}
