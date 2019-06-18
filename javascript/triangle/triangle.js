export class Triangle {
  constructor(...sides) {
    this.sides = sides;
  }

  // At least 1 side is shorter than the length of the sum of the others
  isUnequal(sides) {
    const total = arr => arr.reduce((a, b) => a + b);

    return sides.some(side => side > total(sides) - side);
  }

  // At least 1 side is less than or equal to 0
  isIllegal(sides) {
    return sides.some(side => side <= 0);
  }

  kind() {
    if (this.isIllegal(this.sides)) {
      throw new Error('Triangle sides with no length are illegal');
    }

    if (this.isUnequal(this.sides)) {
      throw new Error(
        'The sum of the lengths of any two sides must be greater than or equal to the length of the third side',
      );
    }

    const equalSidesTally = Object.values(
      this.sides.reduce((tally, side) => {
        if (side in tally) {
          tally[side] += 1;
        } else {
          tally[side] = 1;
        }

        return tally;
      }, {}),
    ).map(val => parseInt(val, 10));

    // All sides are the same
    if (equalSidesTally.every(equalSides => equalSides === 3)) {
      return 'equilateral';
    }

    // 2 sides are the same
    if (equalSidesTally.some(equalSides => equalSides === 2)) {
      return 'isosceles';
    }

    // All sides are different
    if (equalSidesTally.every(equalSides => equalSides === 1)) {
      return 'scalene';
    }
  }
}
