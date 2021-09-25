export const upFirstChar = (lower: string): string =>
  lower.replace(/^\w/, (c) => c.toUpperCase());
