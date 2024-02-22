import { JSON2SheetOpts, utils, write } from "xlsx";

type DataType = any[];
const optionsWithoutHeader = (options?: JSON2SheetOpts): JSON2SheetOpts => {
  return {
    skipHeader: true,
    ...(options || {}),
  };
};

const filterData = (data: DataType, columns: string[]) =>
  data.map((row: any) => {
    const filteredRecord: { [key: string]: any } = {};
    Object.keys(row).forEach((key) => {
      if (columns.includes(key)) {
        filteredRecord[key] = row[key];
      }
    });
    return filteredRecord;
  });

const singleSheetXlsx = (
  data: DataType,
  sheetName: string,
  options?: JSON2SheetOpts
) => {
  const workbook = utils.book_new();
  const worksheet = utils.json_to_sheet(data, options);
  utils.book_append_sheet(workbook, worksheet, sheetName);

  return write(workbook, { bookType: "xlsx", type: "buffer" });
};

export const toXlsx = (
  data: DataType,
  sheetName: string,
  options?: JSON2SheetOpts
): string => singleSheetXlsx(data, sheetName, optionsWithoutHeader(options));

export const toXlsxWithColumns = (
  data: DataType,
  sheetName: string,
  columns: string[],
  options?: Omit<JSON2SheetOpts, "header">
): string => {
  const filteredData = filterData(data, columns);

  return singleSheetXlsx(
    filteredData,
    sheetName,
    optionsWithoutHeader(options)
  );
};

export const toXlsxWithHeader = (
  data: DataType,
  sheetName: string,
  options?: JSON2SheetOpts
): string => singleSheetXlsx(data, sheetName, options);

export const toXlsxWithColumnsAndHeader = (
  data: DataType,
  sheetName: string,
  columns: string[],
  options?: Omit<JSON2SheetOpts, "header">
): string => {
  const filteredData = filterData(data, columns);
  return singleSheetXlsx(filteredData, sheetName, options);
};
