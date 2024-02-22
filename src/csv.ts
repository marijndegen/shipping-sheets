import { Options, stringify } from "csv-stringify/browser/esm/sync";

export const toCsv = (data: any, options?: Options): string => {
  return stringify(data, options);
};

export const toCsvWithColumns = (
  data: any,
  columns: string[],
  options?: Omit<Options, "columns">
): string => {
  return stringify(data, {
    columns,
    ...(options || {}),
  });
};

export const toCsvWithHeader = (
  data: any,
  options?: Omit<Options, "header">
): string => {
  return stringify(data, {
    header: true,
    ...(options || {}),
  });
};

export const toCsvWithColumnsAndHeader = (
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
