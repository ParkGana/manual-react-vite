import { css } from 'styled-components';

export const theme = {
  color: {
    white: '#ffffff',
    black: '#000000',
    gray100: '#fafafa',
    gray200: '#e0e0e0',
    gray300: '#c7c7c7',
    gray400: '#adadad',
    gray500: '#949494',
    gray600: '#7a7a7a',
    gray700: '#616161',
    gray800: '#474747',
    gray900: '#2e2e2e'
  },
  typography: {
    title2XL: css`
      font-size: 40px;
      line-height: 135%;
      font-weight: 700;
    `,
    titleXL: css`
      font-size: 24px;
      line-height: 135%;
      font-weight: 700;
    `,
    titleL: css`
      font-size: 20px;
      line-height: 135%;
      font-weight: 700;
    `,
    titleM: css`
      font-size: 16px;
      line-height: 135%;
      font-weight: 700;
    `,
    titleS: css`
      font-size: 12px;
      line-height: 135%;
      font-weight: 700;
    `,
    bodyXL: css`
      font-size: 24px;
      line-height: 150%;
      font-weight: 500;
    `,
    bodyL: css`
      font-size: 20px;
      line-height: 150%;
      font-weight: 500;
    `,
    bodyM: css`
      font-size: 16px;
      line-height: 150%;
      font-weight: 500;
    `,
    bodyS: css`
      font-size: 12px;
      line-height: 150%;
      font-weight: 500;
    `,
    labelL: css`
      font-size: 20px;
      line-height: 150%;
      font-weight: 700;
    `,
    labelM: css`
      font-size: 16px;
      line-height: 150%;
      font-weight: 700;
    `,
    labelS: css`
      font-size: 12px;
      line-height: 150%;
      font-weight: 700;
    `,
    labelXS: css`
      font-size: 10px;
      line-height: 150%;
      font-weight: 700;
    `,
    captionM: css`
      font-size: 16px;
      line-height: 150%;
      font-weight: 500;
    `,
    captionS: css`
      font-size: 12px;
      line-height: 150%;
      font-weight: 500;
    `,
    captionXS: css`
      font-size: 10px;
      line-height: 150%;
      font-weight: 500;
    `
  }
};

export type StyledTheme = typeof theme;
