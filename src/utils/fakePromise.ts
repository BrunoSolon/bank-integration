export const waitPromise = () =>
  new Promise((resolve) => setTimeout(() => resolve(true), 100));
