import { paymentCount, rateTiers } from "@/lib/content/rates";
import { cn } from "@/lib/utils";

/**
 * The nine-payment rate card. Used by 07 / Our rates on the homepage and
 * 03 / Rates on How It Works, which sit on different backgrounds.
 */
export function RatesTable({
  tone = "card",
  caption,
  className,
}: {
  tone?: "card" | "on-red";
  caption?: string;
  className?: string;
}) {
  const onRed = tone === "on-red";

  return (
    <div
      className={cn(
        "rounded-card",
        onRed
          ? "border border-brand-on-dark/25 p-6 md:p-8"
          : "border border-brand-rule bg-brand-white p-6 shadow-card md:p-8",
        className,
      )}
    >
      {caption ? (
        <p className={cn("mb-6 text-body-m", onRed ? "text-brand-on-dark" : "text-brand-ink-2")}>
          {caption}
        </p>
      ) : null}

      <table className="w-full border-collapse text-left">
        <thead>
          <tr className={cn("border-b", onRed ? "border-brand-on-dark/25" : "border-brand-rule")}>
            <th scope="col" className="pb-4 text-body-m font-normal">
              Amount financed
            </th>
            <th scope="col" className="pb-4 text-right text-body-m font-normal">
              {paymentCount}
            </th>
          </tr>
        </thead>

        <tbody>
          {rateTiers.map((tier, index) => (
            <tr
              key={tier.amount}
              className={cn(
                index < rateTiers.length - 1 && "border-b",
                onRed ? "border-brand-on-dark/25" : "border-brand-rule",
              )}
            >
              <th scope="row" className="py-5 text-body-m font-normal">
                {tier.amount}
              </th>
              <td
                className={cn(
                  "py-5 text-right",
                  tier.rate.endsWith("%")
                    ? cn(
                        "text-display-s font-display font-light",
                        onRed ? "text-brand-on-dark" : "text-brand-blue",
                      )
                    : cn("text-body-m", onRed ? "text-brand-on-dark-2" : "text-brand-ink-2"),
                )}
              >
                {tier.rate}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
