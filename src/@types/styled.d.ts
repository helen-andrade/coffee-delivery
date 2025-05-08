import "styled-components";
import { defaultTheme } from "./themes/default";

type ThemeType = typeof defaultTheme;

declare module "styled-components" {
  // eslint-disable-next-line @typescript-eslint/no-empty-object-type
  export interface DefaultTheme extends ThemeType {}
}

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      white: string;
      background: string;
      "base-card": string;
      "base-input": string;
      "base-button": string;
      "base-hover": string;
      "base-label": string;
      "base-text": string;
      "base-subtitle": string;
      "base-title": string;
      "purple-light": string;
      purple: string;
      "purple-dark": string;
      "yellow-light": string;
      yellow: string;
      "yellow-dark": string;
    };
  }
}
