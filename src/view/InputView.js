import { MissionUtils } from '@woowacourse/mission-utils';

const INPUT_MESSAGES = Object.freeze({
  readName: '코치의 이름을 입력해 주세요. (, 로 구분)',
});

const ERORR_MESSAGE = '[ERROR]';

const InputView = Object.freeze({
  async readCoachName() {
    const INPUT = await MissionUtils.Console.readLineAsync(
      INPUT_MESSAGES.readName,
    );

    if (!INPUT) {
      throw new Error(ERORR_MESSAGE);
    }

    return INPUT.split(',');
  },
});

export default InputView;
