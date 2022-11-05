/**
 * You need to help them find out their common interest with the least list index sum. If there is a choice the between answers, output all of them in alphabetical order. You could assume there always exists an answer.
 *
 * @param list1 string[]
 * @param list2 string[]
 * @returns string[]
 */
export const findRestaurant = (list1: string[], list2: string[]) => {
  const commonInterest = [] as string[];
  let found = false;

  for (let i = 0; i < list1.length; i++) {
    const item1 = list1[i];

    for (let j = 0; j < list2.length; j++) {
      const item2 = list2[j];

      if (item1 === item2) {
        commonInterest.push(item1);

        const indexSum = i + j;

        if (indexSum < 2) {
          found = true;
          break;
        }
      }
    }

    if (found) break;
  }

  return commonInterest.sort();
}
