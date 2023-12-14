import Coach from '../../src/model/Coach';

describe('Coach 테스트', () => {
  test.each(['박', '박빅복복득'])('Coach 생성 테스트', (name) => {
    expect(() => new Coach(name)).toThrow('[ERROR]');
  });

  test.each(['난,이거,못먹어'])('못 먹는 음식 테스트', (foods) => {
    const COACH = new Coach('박정');
    expect(() => COACH.setDontEat(foods)).toThrow('[ERROR]');
  });
});
