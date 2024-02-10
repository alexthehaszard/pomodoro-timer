export const formatMinutes = (value: number) => {
  return Math.floor((value + 1000) / 60000).toLocaleString("en-NZ", {
    minimumIntegerDigits: 2,
    useGrouping: false,
  });
};

export const formatSeconds = (value: number) => {
  return (Math.ceil((value / 1000 + 1) % 60) - 1).toLocaleString("en-NZ", {
    minimumIntegerDigits: 2,
    useGrouping: false,
  });
};
