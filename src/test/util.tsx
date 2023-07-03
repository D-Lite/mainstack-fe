import { ThemeProvider, extendTheme } from "@chakra-ui/react";

export const ThemeWrapper = (props: any) => {
  const theme = extendTheme();
  return (
    <ThemeProvider theme={theme}>{props.children} </ThemeProvider>
  )
};
