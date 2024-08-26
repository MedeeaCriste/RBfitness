import { createTheme, MantineProvider } from '@mantine/core';

const theme = createTheme({
  /** Put your mantine theme override here */
});

function Demo(children:React.ReactNode) {
  return (
    <MantineProvider theme={theme}>
      {children}
    </MantineProvider>
  );
}