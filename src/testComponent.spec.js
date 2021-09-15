import { fixture } from '@open-wc/testing-helpers';
import { LitElement } from 'lit';
import { html } from 'lit/static-html';
import testComponent from './testComponent';

customElements.define('test-component', testComponent);

describe('constructor and properties of', () => {
  it('should load LitElement and use shadowRoot', async () => {
    const el = await fixture(html`<test-component></test-component>`);
    expect(el.innerHTML).toBe('');
    expect(el).toBeInstanceOf(LitElement);
    expect(el.shadowRoot.innerHTML).not.toBe('');
  });
});
