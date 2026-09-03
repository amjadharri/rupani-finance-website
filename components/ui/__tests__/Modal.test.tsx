import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Modal } from "../Modal";

function open(onClose = jest.fn()) {
  render(
    <Modal open onClose={onClose} title="Get a quote today" description="Fill in the form.">
      <button type="button">Get a Call Back</button>
    </Modal>,
  );
  return onClose;
}

describe("Modal", () => {
  it("stays shut until open is set", () => {
    render(
      <Modal open={false} onClose={jest.fn()} title="Get a quote today">
        <p>Body</p>
      </Modal>,
    );

    expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
  });

  it("labels itself with its own title", () => {
    open();

    expect(screen.getByRole("dialog", { name: "Get a quote today" })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Get a Call Back" })).toBeInTheDocument();
  });

  it("closes from the close control", async () => {
    const onClose = open();

    await userEvent.click(screen.getByRole("button", { name: "Close" }));

    expect(onClose).toHaveBeenCalled();
  });

  it("closes when the shade itself is clicked, not the card", async () => {
    const onClose = open();

    await userEvent.click(screen.getByRole("button", { name: "Get a Call Back" }));
    expect(onClose).not.toHaveBeenCalled();

    await userEvent.click(screen.getByRole("dialog"));
    expect(onClose).toHaveBeenCalled();
  });
});
