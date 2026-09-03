const currencyFormatters = new Map<string, Intl.NumberFormat>();

/** Formats a numeric amount as currency. Formatters are memoised — they are expensive to build. */
export function formatCurrency(
  amount: number,
  currency = "USD",
  locale = "en-US",
): string {
  const key = `${locale}:${currency}`;
  let formatter = currencyFormatters.get(key);

  if (!formatter) {
    formatter = new Intl.NumberFormat(locale, { style: "currency", currency });
    currencyFormatters.set(key, formatter);
  }

  return formatter.format(amount);
}

export function formatPercent(value: number, locale = "en-US"): string {
  return new Intl.NumberFormat(locale, {
    style: "percent",
    minimumFractionDigits: 1,
    maximumFractionDigits: 2,
  }).format(value);
}
