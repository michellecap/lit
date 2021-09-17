import { LitElement } from 'lit';
import { fixture, html } from '@open-wc/testing';
import { axe, toHaveNoViolations } from 'jest-axe';
import TestComponent from './TestComponent';

customElements.define('test-component', TestComponent);
expect.extend(toHaveNoViolations);

describe('TestComponent', () => {
  describe('constructor and properties of', () => {
    it('should load LitElement and use shadowRoot', async () => {
      const el = await fixture('<test-component></test-component>');
      expect(el.innerHTML).toBe('');
      expect(el).toBeInstanceOf(LitElement);
      expect(el.shadowRoot.innerHTML).not.toBe('');
    });
    it('shoud load default values and attributes', async () => {
      const el = await fixture(html`<test-component></test-component>`);
      el.disabled = true;
      expect(el.disabled).toStrictEqual(true);
    });
  });
});

describe('TestComponent2', () => {
  it('should load element with id and label', async () => {
    const el = await fixture(html`<test-component .disabled=${true}><input type="radio" id="radio-id" slot="input-slot" /><label id="label-id" for="radio-id" slot="label-slot">test-run</label></test-component>`);
    const radio = el.shadowRoot.querySelector('input');
    const label = el.shadowRoot.querySelector('label');
    expect(label).toBeDefined();
    expect(radio).toBeDefined();
    expect(el.disabled).toBeTruthy();
  });
  it('should render class disabled when disabled property is true', async () => {
    const el = await fixture(html`<test-component .disabled=${true}><input type="radio" id="radio-id" slot="input-slot" /><label id="label-id" for="radio-id" slot="label-slot">test-run</label></test-component>`);
    const testClass = el.shadowRoot.querySelector('div');
    expect(testClass).toHaveClass('disabled');
  });
});

describe('Test a11y', () => {
  it('should be accessible and have no violations', async () => {
    const htmlstr = await fixture('<test-component></test-component>');
    expect(await axe(htmlstr)).toHaveNoViolations();
  });
});
