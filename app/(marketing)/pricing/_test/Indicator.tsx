import { ColumnType } from ".";
export const getIndicators = (column: ColumnType) => {
  return Array.from(
    document.querySelectorAll(
      `[data-column="${column}"]`
    ) as unknown as HTMLElement[]
  );
};
