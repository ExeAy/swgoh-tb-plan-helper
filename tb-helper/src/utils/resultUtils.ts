export const getNumberOfPhases = (headers: string[]): number => {
  const numberOfPhases = headers.filter((x) =>
    x.includes("Territory Points Phase")
  ).length;
  return numberOfPhases;
};

export const getNumberOfZoneResults = (headers: string[]): number => {
  return headers.filter((header) =>
    /^P\d\s\w+\s(\d+_){3}\d+\s\[\d\]$/.test(header)
  ).length;
};
