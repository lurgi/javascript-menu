import App from '../src/App';
import { getLogSpy, mockQuestions, mockRandoms, mockShuffles } from './utils';

/* eslint-disable */

describe('Integration', () => {
  test('test', async () => {
    const logSpy = getLogSpy;

    const APP = new App();
    await APP.play();

    const RANDOM = [2, 2, 1, 3, 4];
    const sequenced = (_, idx) => idx + 1;
    const SHUFFLE = [
      [2, Array.from({ length: 9 }, sequenced)],
      [7, Array.from({ length: 9 }, sequenced)],
      [1, Array.from({ length: 9 }, sequenced)],
      [4, Array.from({ length: 9 }, sequenced)],
      [2, Array.from({ length: 9 }, sequenced)],
      [0, Array.from({ length: 9 }, sequenced)],
      //제임스
      [8, Array.from({ length: 9 }, sequenced)],
      [1, Array.from({ length: 9 }, sequenced)],
      [5, Array.from({ length: 9 }, sequenced)],
      [5, Array.from({ length: 9 }, sequenced)],
      [4, Array.from({ length: 9 }, sequenced)],
    ];
    const QUESTIONS = ['토미,제임스포코', '토미,제임스', '떡볶이', ''];
    const OUTPUTS = [
      '점심 메뉴 추천을 시작합니다.',
      '코치의 이름을 입력해 주세요. (, 로 구분)',
      '[ERROR]',
      '토미(이)가 못 먹는 메뉴를 입력해 주세요.',
      '제임스(이)가 못 먹는 메뉴를 입력해 주세요.',
      '메뉴 추천 결과입니다.',
      '[ 구분 | 월요일 | 화요일 | 수요일 | 목요일 | 금요일 ]',
      '[ 카테고리 | 한식 | 한식 | 일식 | 중식 | 아시안 ]',
      '[ 토미 | 쌈밥 | 김치찌개 | 가츠동 | 동파육 | 팟타이 ]',
      '[ 제임스 | 된장찌개 | 비빔밥 | 가츠동 | 토마토 달걀볶음 | 파인애플 볶음밥 ]',
      '추천을 완료했습니다.',
    ];

    mockRandoms(RANDOM);
    mockShuffles(SHUFFLE);
    mockQuestions(QUESTIONS);

    OUTPUTS.forEach((output) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output));
    });
  });
});
