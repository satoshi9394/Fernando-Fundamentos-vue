import { shallowMount } from '@vue/test-utils';
import Counter from '@/components/Counter';


describe('Counter component', () => {
  /*
  test('debe de hacer match con el snapshot', () => {
    const wrapper = shallowMount( Counter );
    expect(wrapper.html()).toMatchSnapshot();
  });
  */
  test('H2 debe tener el valor por defecto Counter', () => {
    const wrapper = shallowMount(Counter);
    const h2 = wrapper.find('h2');
    expect(h2.exists()).toBeTruthy();
    expect(h2.text()).toBe('Counter');
  });

  test('El valor por defecto debe ser 100 en el p', () => {
    const wrapper = shallowMount(Counter);
    const secondP = wrapper.find('[data-testid="counter"]');
    expect(secondP.exists()).toBeTruthy();
    expect(secondP.text()).toBe('100');
  });

  test('debe de incrementar y decrementar el contador', async() => {
    const wrapper = shallowMount(Counter);
    const buttonIncrement = wrapper.find('button');
    await buttonIncrement.trigger('click');
    let value = wrapper.find('[data-testid="counter"]').text();
    expect(value).toBe('101');
    const btnDecrease = wrapper.findAll('button')[1];
    await btnDecrease.trigger('click');
    await btnDecrease.trigger('click');
    value = wrapper.find('[data-testid="counter"]').text();
    expect(value).toBe('99');
  });

});