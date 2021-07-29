export interface Item {
  label: string;
  value?: string | null;
}

export default function arrayPatch(arr1: Item[], arr2: Item[]): Item[] {
  const entries: [string, string | undefined | null][] = arr1.map(
    ({ label, value }) => [label, value],
  );

  const map = new Map(entries);

  return arr2.map(({ label, value }) => ({
    label,
    value: map.has(label) ? map.get(label) : value,
  }));
}
