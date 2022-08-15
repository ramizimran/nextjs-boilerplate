export default function MuiTooltip(theme) {
  return {
    MuiTooltip: {
      styleOverrides: {
        tooltip: {
          fontSize: theme.typography.subtitle1.fontSize,
          color: theme.palette.primary.main,
          backgroundColor: theme.palette.common.black,
          borderRadius: 4,
        },
      },
    },
  };
}
