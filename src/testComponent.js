/* eslint-disable class-methods-use-this */
import { LitElement } from 'lit';
import { html } from 'lit/static-html';
import Styles from './styles.scss';

export default class testComponent extends LitElement {
  static get properties() {
    return {};
  }

  constructor() {
    super();
    this.disabled = undefined;
  }

  static get styles() {
    return [Styles];
  }

  render() {
    return html`
        <div>
            <p>Hello World</p>
        </div>`;
  }
}
