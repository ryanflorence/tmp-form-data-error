import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { unstable_createRemixStub as createRemixStub } from "@remix-run/testing";

import { Combobox } from "./combobox";

describe("Combobox", () => {
  it("is cool", async () => {
    let RemixStub = createRemixStub([
      {
        path: "/",
        element: <Combobox />,
      },
      // @ts-expect-error
      {
        path: "/users",
        loader: () => {
          return [
            {
              first_name: "Ryan",
              last_name: "Florence",
              username: "ryanflorence",
            },
          ];
        },
      },
    ]);

    render(<RemixStub initialEntries={["/"]} />);
    let input = screen.getByRole("textbox");
    userEvent.type(input, "Ryan");
    await screen.findByText(/Ryan/);
    // @ts-expect-error
    expect(screen.getByText(/Ryan/)).toBeInTheDocument();
  });
});
