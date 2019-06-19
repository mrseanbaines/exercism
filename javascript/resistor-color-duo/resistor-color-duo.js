const colors = {
  brown: 1,
  black: 0,
  blue: 6,
  grey: 8,
  yellow: 4,
  violet: 7,
  orange: 3,
};

export const value = bands => {
  return Number(
    bands.reduce((result, band) => result + colors[band].toString(), ''),
  );
};
