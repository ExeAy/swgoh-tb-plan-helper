import { $ } from "@builder.io/qwik";

export const parseFile = $(async (file: File): Promise<void> => {
  const reader = new FileReader();

  reader.onload = () => {
    const contents = reader.result;
    console.log(contents);
  };

  reader.onerror = () => {
    console.error(reader.error);
  };

  reader.readAsText(file);
});
