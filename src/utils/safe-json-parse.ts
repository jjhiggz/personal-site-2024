export const safeJSONParse = <T>(json: any) => {
  try {
    return JSON.parse(json) as T;
  } catch (e) {
    return null;
  }
};
