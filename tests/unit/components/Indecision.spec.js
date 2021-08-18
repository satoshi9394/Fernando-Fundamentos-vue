import { shallowMount } from '@vue/test-utils';
import Indecision from '@/components/Indecision';


describe('Indecision component', () => {
  let wrapper;
  let clgSpy;
  const image ='https://yesno.wtf/assets/yes/2.gif';
  global.fetch = jest.fn(() => Promise.resolve({
    json: () => Promise.resolve({
      answer: 'yes',
      forced: false,
      image
    })
  }));
  beforeEach(() => {
    wrapper = shallowMount(Indecision);
    clgSpy = jest.spyOn( console, 'log');
    jest.clearAllMocks()
  });

  test('debe de hacer match con el snapshot', () => {
    expect(wrapper.html()).toMatchSnapshot();
  });

  test('Escribir en el input no debe de disparar nada cosole.log', async() => {
    const getAnswerSpy = jest.spyOn( wrapper.vm, 'getAnswer');
    const input = wrapper.find('input');
    await input.setValue('Hola mundo');
    expect(clgSpy).toHaveBeenCalled();
    expect(getAnswerSpy).toHaveReturnedTimes(0);

  });

  test('escribir el simbolo de "?" debe de disparar el getAnswer', async() => {
    const getAnswerSpy = jest.spyOn( wrapper.vm, 'getAnswer');
    const input = wrapper.find('input');
    await input.setValue('soy programador?');
    expect(getAnswerSpy).toHaveReturnedTimes(1);
  });

  test('Pruebas en getAnswer', async() => {
    await wrapper.vm.getAnswer();
    const img = wrapper.find('img');
    expect(img.exists()).toBeTruthy();
    expect(wrapper.vm.imageAnswer).toBe(image);
    expect(wrapper.vm.answer).toBe('Si!');
  });

  test('Ppruebas en getAnswer - Fallo en el API', () => {

  });

});