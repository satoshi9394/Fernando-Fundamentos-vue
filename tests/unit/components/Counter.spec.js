import { shallowMount } from '@vue/test-utils';
import Counter from '@/components/Counter';


describe('Counter component', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallowMount(Counter);
  });

  test('debe de hacer match con el snapshot', () => {
    wrapper = shallowMount( Counter );
    expect(wrapper.html()).toMatchSnapshot();
  });

  test('H2 debe tener el valor por defecto Counter', () => {
    const h2 = wrapper.find('h2');
    expect(h2.exists()).toBeTruthy();
    expect(h2.text()).toBe('Counter');
  });

  test('El valor por defecto debe ser 100 en el p', () => {
    const secondP = wrapper.find('[data-testid="counter"]');
    expect(secondP.exists()).toBeTruthy();
    expect(secondP.text()).toBe('100');
  });

  test('debe de incrementar y decrementar el contador', async() => {
    const [buttonIncrement, btnDecrease] = wrapper.findAll('button');
    await buttonIncrement.trigger('click');
    await buttonIncrement.trigger('click');
    await buttonIncrement.trigger('click');
    await btnDecrease.trigger('click');
    await btnDecrease.trigger('click');

    const value = wrapper.find('[data-testid="counter"]').text();
    expect(value).toBe('101');
  });

  test('debe de establecer el valor por defecto', () => {
    const { start } = wrapper.props();
    const value = wrapper.find('[data-testid="counter"]').text();
    expect( Number(value)).toBe(start)
  })

  test('debe de de mostrar el titulo enviado por props', () => {
    const titleProps = 'Hola mundo'
    const wrapperProps = shallowMount(Counter, {
      props: {
        title: titleProps
      }
    });
    expect( wrapperProps.find('h2').text()).toBe(titleProps)
  });

});