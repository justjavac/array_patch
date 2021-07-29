import { assertEquals } from "https://deno.land/std/testing/asserts.ts";

import arrayPatch, { Item } from "./mod.ts";

Deno.test("label not change, value not change", (): void => {
  const arr1: Item[] = [
    { label: "a", value: "1" },
    { label: "b", value: "2" },
  ];
  const arr2: Item[] = [
    { label: "a", value: "1" },
    { label: "b", value: "2" },
  ];
  const output: Item[] = [
    { label: "a", value: "1" },
    { label: "b", value: "2" },
  ];
  assertEquals(arrayPatch(arr1, arr2), output);
});

Deno.test("label not change, value change", (): void => {
  const arr1: Item[] = [
    { label: "a", value: "1" },
    { label: "b", value: "2" },
  ];
  const arr2: Item[] = [
    { label: "a", value: "3" },
    { label: "b", value: "2" },
  ];
  const output: Item[] = [
    { label: "a", value: "1" },
    { label: "b", value: "2" },
  ];
  assertEquals(arrayPatch(arr1, arr2), output);
});

Deno.test("label delete", (): void => {
  const arr1: Item[] = [
    { label: "a", value: "1" },
    { label: "b", value: "2" },
  ];
  const arr2: Item[] = [
    { label: "a", value: "1" },
  ];
  const output: Item[] = [
    { label: "a", value: "1" },
  ];
  assertEquals(arrayPatch(arr1, arr2), output);
});

Deno.test("label add", (): void => {
  const arr1: Item[] = [
    { label: "a", value: "1" },
    { label: "b", value: "2" },
  ];
  const arr2: Item[] = [
    { label: "a", value: "1" },
    { label: "b", value: "2" },
    { label: "c", value: "3" },
  ];
  const output: Item[] = [
    { label: "a", value: "1" },
    { label: "b", value: "2" },
    { label: "c", value: "3" },
  ];
  assertEquals(arrayPatch(arr1, arr2), output);
});

Deno.test("label add & delete", (): void => {
  const arr1: Item[] = [
    { label: "a", value: "1" },
    { label: "b", value: "2" },
  ];
  const arr2: Item[] = [
    { label: "a", value: "1" },
    { label: "c", value: "3" },
  ];
  const output: Item[] = [
    { label: "a", value: "1" },
    { label: "c", value: "3" },
  ];
  assertEquals(arrayPatch(arr1, arr2), output);
});
