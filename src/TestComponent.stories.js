import MyTestComponent from './TestComponent';

customElements.define('test-component', MyTestComponent);

export default {
  title: 'TestComponent',
  component: MyTestComponent,
  argTypes: {
    disabled: {
      name: 'disabled',
      description: 'Boolean to mark the radio button as disabled or not',
      control: {
        type: 'boolean',
      },
    },
  },
};

export const RadioButton = (args) => ({
  components: { MyTestComponent },
  props: {
    disabled: {
      default: false,
    },
  },
  template: `
  <div>
    <test-component :disabled="disabled">
      <input slot="input-slot" name="world" type="radio" id="radiobutton-id-1" :disabled="disabled" checked />
      <label slot="label-slot" for="radiobutton-id-1">Hello Radio Button 1</label>
    </test-component>
    <test-component :disabled="disabled">
      <input slot="input-slot" name="world" type="radio" id="radiobutton-id-2" :disabled="disabled" />
      <label slot="label-slot" for="radiobutton-id-2">Hello Radio Button 2</label>
    </test-component>
    <test-component :disabled="disabled">
      <input slot="input-slot" name="world" type="radio" id="radiobutton-id-3" :disabled="disabled" />
      <label slot="label-slot" for="radiobutton-id-3">Hello Radio Button 3</label>
    </test-component>
  </div>
  `,
});
RadioButton.args = {
  disabled: false,
};
