import { createContext } from "@builder.io/qwik";
import type { CsvRow } from "../../model/CsvFile";

export interface TbContextModel {
  csvRows: CsvRow[];
}

export const TbContext = createContext<TbContextModel>("tb-data");
