import { fixture } from '@open-wc/testing-helpers';
import { LitElement } from 'lit';
import testComponent from './testComponent';

global.MutationObserver = MutationObserver;
customElements.define('test-component', testComponent);

describe('constructor and properties of', () => {
  it('should load LitElement and use shadowRoot', async () => {
    const el = await fixture('<test-component></test-component>');
    expect(el.innerHTML).toBe('');
    expect(el).toBeInstanceOf(LitElement);
    expect(el.shadowRoot.innerHTML).not.toBe('');
  });
  it('shoud load default values and attributes', async () => {
    const el = await fixture('<test-component></test-component>');
    expect(el.disabled).toStrictEqual(undefined);
  });
});
