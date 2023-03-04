import { component$, useContextProvider, useStore } from "@builder.io/qwik";
import { ResultFileUploader } from "./result-file-uploader/result-file-uploader";
import { TbContext } from "../store/TbContext";
import { ResultPresentation } from "./result-presentaiton/result-presentation";

export const TbResults = component$(() => {
  const tbData = useStore(
    {
      zoneResults: [],
    },
    { deep: true }
  );
  useContextProvider(TbContext, { csvRows: tbData.zoneResults });

  return (
    <>
      <ResultFileUploader />
      <ResultPresentation />
    </>
  );
});
