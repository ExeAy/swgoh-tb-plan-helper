import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { ResultFileUploader } from "../components/result-file-uploader/result-file-uploader";

export default component$(() => {
  return (
    <div class="container mx-auto mt-4">
      <ul class="list-disc">
        <li>Show result for each phase</li>
        <li>Visualize CM score for each zone and phase</li>
      </ul>
      <ResultFileUploader />
    </div>
  );
});

export const head: DocumentHead = {
  title: "SWGOH TB Helper",
  meta: [
    {
      name: "TB helper tools for SWGOH",
    },
  ],
};
