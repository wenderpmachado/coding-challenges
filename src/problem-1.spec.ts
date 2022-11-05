import { findRestaurant } from './problem-1';

describe('problem-1', () => {
  it('Example 1', () => {
    const list1 = ['Shogun', 'Tapioca Express', 'Burger King', 'KFC'];
    const list2 = ['Piatti', 'The Girll at Torrey', 'Hungry Hunter Steakhoçuse', 'Shogun'];

    const result = findRestaurant(list1, list2);

    expect(result).toStrictEqual(['Shogun']);
  });

  it('Example 2', () => {
    const list1 = ['Shogun', 'Tapioca Express', 'Burger King', 'KFC'];
    const list2 = ['KFC', 'Shogun', 'Burger King'];

    const result = findRestaurant(list1, list2);

    expect(result).toStrictEqual(['Shogun']);
  });

  it('Example 3', () => {
    const list1 = ['Shogun', 'Tapioca Express', 'Burger King', 'KFC'];
    const list2 = ['KFC', 'Burger King', 'Tapioca Express', 'Shogun'];

    const result = findRestaurant(list1, list2);

    expect(result).toStrictEqual(['Burger King', 'KFC', 'Shogun', 'Tapioca Express']);
  });

  it('Example 4', () => {
    const list1 = ['Shogun', 'Tapioca Express', 'Burger King', 'KFC'];
    const list2 = ['KNN', 'KFC', 'Burger King', 'Tapioca Express', 'Shogun'];

    const result = findRestaurant(list1, list2);

    expect(result).toStrictEqual(['Burger King', 'KFC', 'Shogun', 'Tapioca Express']);
  });

  it('Example 5', () => {
    const list1 = ['KFC'];
    const list2 = ['KFC'];

    const result = findRestaurant(list1, list2);

    expect(result).toStrictEqual(['KFC']);
  });
});
