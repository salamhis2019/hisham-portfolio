export function showSectionDivider<T>(array: T[], index: number): boolean {
  return array.length > 1 && index !== array.length - 1;
}
