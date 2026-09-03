import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Button, ButtonLink } from "../Button";

describe("Button", () => {
  it("renders its children", () => {
    render(<Button>Get a Call Back</Button>);
    expect(screen.getByRole("button")).toHaveTextContent("Get a Call Back");
  });

  it("calls onClick when pressed", async () => {
    const onClick = jest.fn();
    render(<Button onClick={onClick}>Submit</Button>);

    await userEvent.click(screen.getByRole("button", { name: "Submit" }));

    expect(onClick).toHaveBeenCalledTimes(1);
  });

  it("does not fire onClick while disabled", async () => {
    const onClick = jest.fn();
    render(
      <Button disabled onClick={onClick}>
        Submit
      </Button>,
    );

    await userEvent.click(screen.getByRole("button", { name: "Submit" }));

    expect(onClick).not.toHaveBeenCalled();
  });

  it("renders a link variant as an anchor", () => {
    render(<ButtonLink href="/apply">Let&apos;s Get You Funded</ButtonLink>);

    expect(screen.getByRole("link", { name: /Let's Get You Funded/ })).toHaveAttribute(
      "href",
      "/apply",
    );
  });
});
