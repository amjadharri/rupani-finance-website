import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { ChatLauncher } from "../ChatLauncher";
import { applyFormUrl } from "@/lib/config/site";

describe("ChatLauncher", () => {
  it("shows the greeting and both actions on load", () => {
    render(<ChatLauncher defaultOpen />);

    expect(screen.getByText(/premium finance specialist is here to help/i)).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "Apply Now" })).toHaveAttribute(
      "href",
      applyFormUrl,
    );
    expect(screen.getByRole("link", { name: "I have a question" })).toHaveAttribute(
      "href",
      "/contact",
    );
  });

  it("collapses to the launcher and reopens from it", async () => {
    render(<ChatLauncher defaultOpen />);

    const launcher = screen.getByRole("button", { name: "Online Agent" });
    expect(launcher).toHaveAttribute("aria-expanded", "true");

    await userEvent.click(screen.getByRole("button", { name: "Close chat" }));
    expect(screen.queryByRole("link", { name: "Apply Now" })).not.toBeInTheDocument();
    expect(launcher).toHaveAttribute("aria-expanded", "false");

    await userEvent.click(launcher);
    expect(screen.getByRole("link", { name: "Apply Now" })).toBeInTheDocument();
  });

  it("closes on Escape", async () => {
    render(<ChatLauncher defaultOpen />);

    await userEvent.keyboard("{Escape}");

    expect(screen.queryByRole("link", { name: "Apply Now" })).not.toBeInTheDocument();
  });

  it("can start collapsed", () => {
    render(<ChatLauncher defaultOpen={false} />);

    expect(screen.queryByText(/here to help/i)).not.toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Online Agent" })).toBeInTheDocument();
  });

  it("stays collapsed on a narrow viewport", () => {
    // The panel covers the hero headline and both CTAs at 390, so a phone gets
    // the avatar only until the visitor asks for it.
    window.matchMedia = ((query: string) => ({
      matches: false,
      media: query,
      onchange: null,
      addEventListener: () => {},
      removeEventListener: () => {},
      addListener: () => {},
      removeListener: () => {},
      dispatchEvent: () => false,
    })) as unknown as typeof window.matchMedia;

    render(<ChatLauncher />);

    expect(screen.queryByText(/here to help/i)).not.toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Online Agent" })).toHaveAttribute(
      "aria-expanded",
      "false",
    );
  });
});
