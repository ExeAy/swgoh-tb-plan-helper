import type { QRL } from "@builder.io/qwik";
import { createContext, useStore, $ } from "@builder.io/qwik";
import { parseFile } from "../components/utils/csvParser";
import type { ZoneResult } from "../model/TbResult";

export interface TbData {
  zoneResults: ZoneResult[];
  parseFile: QRL<(file: File) => Promise<void>>;
}

export const TbContext = createContext("tb-data");

export const useTbData = (): TbData => {
  const tbData = useStore<TbData>({
    zoneResults: [],
    parseFile: $(async (file: File) => {
      parseFile(file);
      return Promise.resolve();
    }),
  });

  return tbData;
};
