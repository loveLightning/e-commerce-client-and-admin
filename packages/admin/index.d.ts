import { AppTheme } from 'src/theme'

type CustomTheme = typeof AppTheme

declare module 'styled-components' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  export interface DefaultTheme extends CustomTheme {}
}
