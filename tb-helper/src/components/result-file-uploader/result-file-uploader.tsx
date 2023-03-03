import type { QwikChangeEvent } from "@builder.io/qwik";
import { useContextProvider } from "@builder.io/qwik";
import { component$, $, useSignal } from "@builder.io/qwik";
import { TbContext, useTbData } from "../../hooks/useTbData";

export const ResultFileUploader = component$(() => {
  const haveFile = useSignal(false);
  const fileInput = useSignal<HTMLInputElement>();
  const { parseFile, zoneResults } = useTbData();
  useContextProvider(TbContext, zoneResults);

  const calculateResult = $(() => {
    parseFile(fileInput.value!.files![0]);
  });

  const onFileChange = $((event: QwikChangeEvent<HTMLInputElement>) => {
    haveFile.value = (event?.target?.files?.length ?? 0) > 0;
    console.log("haveFile", event.target.files![0]);
  });

  return (
    <div class="border-solid border rounded-xl w-fit border-violet-700 p-5">
      <label class="block">
        <span class="">Upload your TB result CSV file</span>
        <input
          type="file"
          class="block mt-2 w-full text-sm text-slate-500
      file:mr-4 file:py-2 file:px-4
      file:rounded-full file:border-0
      file:text-sm file:font-semibold
      file:bg-violet-50 file:text-violet-700
      hover:file:bg-violet-100
    "
          accept=".csv"
          ref={fileInput}
          onChange$={onFileChange}
        />
      </label>
      <button
        onClick$={calculateResult}
        class="rounded-full text-sm bg-blue-500 text-white p-2 mt-4 disabled:bg-blue-200"
        disabled={!haveFile.value}
      >
        Show my TB results
      </button>
    </div>
  );
});
