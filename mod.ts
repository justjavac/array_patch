export interface Item {
  label: string;
  value: string;
}

export default function arrayPatch(arr1: Item[], arr2: Item[]): Item[] {
  const entries: [string, string][] = arr1.map(({ label, value }) => {
    return [label, value];
  });

  const map = new Map(entries);

  return arr2.map(({ label, value }) => ({
    label,
    value: map.get(label) ?? value,
  }));
}
