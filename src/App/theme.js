const breakpoints = {
  mobileMax: '767',
  tabletMax: '1023',
};

const colors = {
  white: '#ffffff',
  black: '#000000',
  silver: '#cdcdcd',
};

export const theme = {
  color: {
    text: {
      primaryText: colors.white,
      secondaryText: colors.black,
    },

    background: {
      primaryBackground: colors.white,
      secondaryBackground: colors.black,
      tertiaryBackground: '#fcd420',
      disabledBackground: colors.silver,
    },

    element: {
      listBullet: '#ff9f00',
      buttonBoxShadow: '#e4e6f0',
      cartBoxShadow: colors.silver,
      navigationBorder: colors.silver,
      inputBorder: '#808080',
    },
  },

  ...breakpoints,
};
