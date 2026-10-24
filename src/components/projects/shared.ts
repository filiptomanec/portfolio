/** Česká typografie: jednopísmenné předložky a spojky nenechá na konci řádku. */
export const nbsp = (text: string) =>
  text.replace(/(?<=^|[\s(])([aikosuvzAIKOSUVZ])\s+/g, "$1 ");

export const focusRing =
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-4 focus-visible:ring-offset-primary";
