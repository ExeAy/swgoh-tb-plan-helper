import { $ } from "@builder.io/qwik";
import type { CsvRow } from "../../model/CsvFile";

export const parseFile = $(async (file: File): Promise<CsvRow[]> => {
  const getHeaders = (csv: string) => {
    const headers = csv.split("\n")[0].split(",");
    return headers;
  };

  const getRows = (csv: string) => {
    const rows = csv.split("\n");
    rows.shift();
    return rows;
  };

  const getRowData = (contents: string): CsvRow[] => {
    const headers = getHeaders(contents);
    const rows = getRows(contents);

    const rowData: CsvRow[] = [];
    rows.forEach((row) => {
      const rowValues = row.split(",");
      const rowObject: CsvRow = {};
      headers.forEach((header, index) => {
        rowObject[header] = rowValues[index];
      });
      rowData.push(rowObject);
    });
    return rowData;
  };

  return new Promise<CsvRow[]>((resolve, reject) => {
    const reader = new FileReader();

    reader.onload = () => {
      const contents = reader.result as string;
      resolve(getRowData(contents));
    };

    reader.onerror = () => {
      console.error(reader.error);
      reject(reader.error);
    };

    reader.readAsText(file);
  });
});
