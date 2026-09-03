import { screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { renderWithProviders } from "@/test-utils/render";
import { GetAQuote } from "../GetAQuote";

/** jsdom ships no fetch, so we install a mock rather than spying on a global. */
const fetchMock = jest.fn();
const originalFetch = global.fetch;

function jsonResponse(body: unknown, status = 200) {
  return { ok: status >= 200 && status < 300, status, json: async () => body } as Response;
}

beforeAll(() => {
  global.fetch = fetchMock as unknown as typeof fetch;
});

afterAll(() => {
  global.fetch = originalFetch;
});

afterEach(() => {
  fetchMock.mockReset();
});

async function fillAndSubmit() {
  await userEvent.type(screen.getByLabelText("Full Name"), "Dana Reed");
  await userEvent.type(screen.getByLabelText("Email"), "dana@agency.com");
  await userEvent.click(screen.getByRole("button", { name: "Get a Call Back" }));
}

describe("GetAQuote", () => {
  it("posts the form and confirms on success", async () => {
    fetchMock.mockResolvedValue(jsonResponse({ received: true }, 201));

    renderWithProviders(<GetAQuote />);
    await fillAndSubmit();

    await waitFor(() => {
      expect(screen.getByRole("status")).toHaveTextContent(/we will call you back soon/i);
    });

    expect(fetchMock).toHaveBeenCalledTimes(1);
    const [, init] = fetchMock.mock.calls[0];
    expect(JSON.parse(String(init.body))).toMatchObject({
      fullName: "Dana Reed",
      email: "dana@agency.com",
    });
  });

  it("surfaces a fallback phone number when the request fails", async () => {
    fetchMock.mockResolvedValue(jsonResponse({ message: "nope" }, 500));

    renderWithProviders(<GetAQuote />);
    await fillAndSubmit();

    await waitFor(() => {
      expect(screen.getByRole("status")).toHaveTextContent(/Something went wrong/i);
    });
  });
});
