import { Options, stringify } from "csv-stringify/browser/esm/sync";

export const csvString = (data: any, options?: Options): string => {
  return stringify(data, options);
};

export const csvStringWithColumns = (
  data: any,
  columns: string[],
  options?: Omit<Options, "columns">
): string => {
  return stringify(data, {
    columns,
    ...(options || {}),
  });
};

export const csvStringWithHeader = (
  data: any,
  options?: Omit<Options, "header">
): string => {
  return stringify(data, {
    header: true,
    ...(options || {}),
  });
};

export const csvStringWithColumnsHeader = (
  data: any,
  columns: string[],
  options?: Omit<Options, "columns" | "header">
): string => {
  return stringify(data, {
    columns,
    header: true,
    ...(options || {}),
  });
};
