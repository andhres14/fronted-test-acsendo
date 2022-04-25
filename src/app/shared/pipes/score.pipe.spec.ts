import { ScorePipe } from './score.pipe';

describe('Test del pipe vinculado al score del usuario', () => {
  const pipe = new ScorePipe();

  it('Testear si el pipe ha sido instanciado', () => {
    expect(pipe).toBeTruthy();
  });
  it('Si el score del usuario tiene menos de 0.4 se mostrara bajo', () => {
    const resp = pipe.transform(0.3);
    expect(resp).toBe('BAJO');
  });
  it('Si el score del usuario tiene menos de 0.7 se mostrara medio', () => {
    const resp = pipe.transform(0.6);
    expect(resp).toBe('MEDIO');
  });
  it('Si el score del usuario tiene mas de 0.7 se mostrara alto', () => {
    const resp = pipe.transform(0.8);
    expect(resp).toBe('ALTO');
  });
});
