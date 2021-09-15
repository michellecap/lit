import testComponent from './testComponent';

describe('Custom element define', () => {
  it('should define custom element', () => {
    global.customElements.define = jest.fn();
    // eslint-disable-next-line global-require
    require('./index');
    expect(global.customElements.define).toHaveBeenCalledWith('test-component', testComponent);
  });
});
