export const semanticTokens = {
  colors: {
    //background
    bg: {
      DEFAULT: {
        value: {
          base: "{colors.secondary}",
          _dark: "{colors.secondary._dark}",
        },
      },
      primary: {
        value: { base: "{colors.primary}", _dark: "{colors.primary._dark}" },
      },
      secondary: {
        value: {
          base: "{colors.secondary}",
          _dark: "{colors.secondary._dark}",
        },
      },
      tertiary: {
        value: { base: "{colors.tertiary}", _dark: "{colors.tertiary._dark}" },
      },
      accent: {
        value: { base: "{colors.accent}", _dark: "{colors.accent._dark}" },
      },
      light: {
        value: { base: "{colors.light}", _dark: "{colors.light._dark}" },
      },
      dark: { value: { base: "{colors.dark}", _dark: "{colors.dark._dark}" } },
    },
    //button
    button: {
      DEFAULT: {
        value: {
          base: "{colors.secondary}",
          _dark: "{colors.secondary._dark}",
        },
      },
      primary: {
        value: { base: "{colors.primary}", _dark: "{colors.primary._dark}" },
      },
      secondary: {
        value: {
          base: "{colors.secondary}",
          _dark: "{colors.secondary._dark}",
        },
      },
      tertiary: {
        value: { base: "{colors.tertiary}", _dark: "{colors.tertiary._dark}" },
      },
      accent: {
        value: { base: "{colors.accent}", _dark: "{colors.accent._dark}" },
      },
      light: {
        value: { base: "{colors.light}", _dark: "{colors.light._dark}" },
      },
      dark: { value: { base: "{colors.dark}", _dark: "{colors.dark._dark}" } },
    },
    //text
    text: {
      DEFAULT: {
        value: { base: "{colors.primary}", _dark: "{colors.dark._dark}" },
      },
      light: {
        value: { base: "{colors.light}", _dark: "{colors.light._dark}" },
      },
      dark: { value: { base: "{colors.dark}", _dark: "{colors.dark._dark}" } },
      muted: {
        value: { base: "{colors.muted}", _dark: "{colors.muted._dark}" },
      },
    },
  },
};
