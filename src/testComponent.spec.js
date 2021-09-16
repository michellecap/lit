import { fixture } from '@open-wc/testing-helpers';
import { LitElement } from 'lit';
import TestComponent from './TestComponent';

customElements.define('test-component', TestComponent);

describe('TestComponent', () => {
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
});

describe('TestComponent2', () => {
  it('should load element with id and label', async () => {
    const el = await fixture('<test-component disabled="true"><input type="radio" id="radio-id" slot="input-slot" /><label id="label-id" for="radio-id" slot="label-slot">test-run</label></test-component>');
    const radio = el.shadowRoot.querySelector('input');
    const label = el.shadowRoot.querySelector('label');
    expect(label).toBeDefined();
    expect(radio).toBeDefined();
    expect(el.getAttribute('disabled')).toBeTruthy();
  });
});