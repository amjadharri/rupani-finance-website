/**
 * Route transition.
 *
 * A template remounts on every navigation where a layout would not, so the
 * enter animation plays once per page without touching the router. The
 * animation itself is in globals.css, keyed off the attribute.
 */
export default function Template({ children }: { children: React.ReactNode }) {
  return <div data-page-enter>{children}</div>;
}
