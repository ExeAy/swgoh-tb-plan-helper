import { component$, useContext } from "@builder.io/qwik";
import { TbContext } from "../../store/TbContext";

export const ResultPresentation = component$(() => {
  const store = useContext(TbContext);

  if (!store.csvRows || store.csvRows.length === 0) {
    return null;
  }

  return (
    <div class="border-solid border rounded-xl w-fit border-violet-700 p-5">
      <h1>Results</h1>
      <div class="flex flex-col">
        <div class="flex flex-row">
          {Object.keys(store.csvRows[0]).map((key) => key)}
        </div>
        <div class="flex flex-row">
          {store.csvRows.map((zoneResult) =>
            Object.keys(zoneResult).map((key) => zoneResult[key])
          )}
        </div>
      </div>
    </div>
  );
});
