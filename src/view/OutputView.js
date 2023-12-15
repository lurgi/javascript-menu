import { MissionUtils } from '@woowacourse/mission-utils';
import { CATEGORY as CATEGORYS } from '../utils';

const OUTPUT_MESSAGES = {
  start: '점심 메뉴 추천을 시작합니다.',
  title: (category) => {
    const CATEGORY = category.map((number) => CATEGORYS[number]);
    return `메뉴 추천 결과입니다.
[ 구분 | 월요일 | 화요일 | 수요일 | 목요일 | 금요일 ]
[ 카테고리 | ${CATEGORY.join(' | ')} ]`;
  },
  result: (name, menu) => `[ ${name} | ${menu.join(' | ')} ]`,
  end: '추천을 완료했습니다.',
};

const OutputView = {
  printPlayStart() {
    this.print(OUTPUT_MESSAGES.start);
  },
  printResultTitle(category) {
    this.print(OUTPUT_MESSAGES.title(category));
  },
  printResults(name, menu) {
    this.print(OUTPUT_MESSAGES.result(name, menu));
  },

  printResultEnd() {
    this.print(OUTPUT_MESSAGES.end);
  },

  print(string) {
    MissionUtils.Console.print(string);
  },
};

export default OutputView;
