import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { TbResults } from "../components/tb-results/tb-results";

export default component$(() => {
  return (
    <div class="container mx-auto mt-4">
      <ul class="list-disc">
        <li>Visualize CM score for each zone and phase</li>
      </ul>
      <TbResults />
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
