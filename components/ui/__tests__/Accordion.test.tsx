import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Accordion } from "../Accordion";

const items = [
  { title: "Answers, immediately", body: "Every staff member is a dedicated professional." },
  { title: "Quick service", body: "Once a contract is signed, it is processed and funded." },
];

describe("Accordion", () => {
  it("opens the first item by default", () => {
    render(<Accordion items={items} />);

    expect(screen.getByRole("button", { name: /Answers, immediately/ })).toHaveAttribute(
      "aria-expanded",
      "true",
    );
    expect(screen.getByText(items[0].body)).toBeInTheDocument();
  });

  it("switches the open panel when another head is clicked", async () => {
    render(<Accordion items={items} />);

    await userEvent.click(screen.getByRole("button", { name: /Quick service/ }));

    expect(screen.getByText(items[1].body)).toBeInTheDocument();
    expect(screen.queryByText(items[0].body)).not.toBeInTheDocument();
  });
});
