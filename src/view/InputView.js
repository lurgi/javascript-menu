import { MissionUtils } from '@woowacourse/mission-utils';

const INPUT_MESSAGES = Object.freeze({
  readName: '\n코치의 이름을 입력해 주세요. (, 로 구분)\n',
  dontEat: (name) => `\n${name}(이)가 못 먹는 메뉴를 입력해 주세요.\n`,
});

const ERORR_MESSAGE = '[ERROR]';

const InputView = Object.freeze({
  async readCoachName() {
    const INPUT = await MissionUtils.Console.readLineAsync(
      INPUT_MESSAGES.readName,
    );
    this.validNameInput(INPUT);

    return INPUT.split(',');
  },

  validNameInput(input) {
    if (!input) {
      throw new Error(ERORR_MESSAGE);
    }
  },

  async readDontEat(name) {
    const INPUT = await MissionUtils.Console.readLineAsync(
      INPUT_MESSAGES.dontEat(name),
    );

    return INPUT.split(',');
  },
});

export default InputView;
