export default function Container(theme) {
  return {
    MuiContainer: {
      styleOverrides: {
        root: {
          "&.MuiContainer-maxWidthLg": {
            maxWidth: 1200,
          },
        },
      },
    },
  };
}
