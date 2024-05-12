export const getIsActive = (pathname: string, to: string) => {
  return pathname.includes(to);
};
