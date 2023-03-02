export const deepClone = <T>(object: T): T => {
  return JSON.parse(JSON.stringify(object)) as T;
};

export const sleep = (milliseconds: number): Promise<void> => {
  return new Promise((resolve) => setTimeout(resolve, milliseconds));
};

export const getParamOrExit = (name: string): string => {
  const param = process.env[name];
  if (!param) {
    console.error(`Required config param '${name}' missing`);
    process.exit(1);
  }
  return param;
};

export const getParam = (name: string): string | null => {
  const param = process.env[name];
  if (!param) {
    return null;
  }
  return param;
};
