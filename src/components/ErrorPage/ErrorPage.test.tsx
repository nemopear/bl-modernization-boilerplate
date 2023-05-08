import { prettyDOM } from "@testing-library/dom";
import { render, screen } from "@testing-library/react";
import ErrorPage from "./ErrorPage";

describe("Test ErrorPage", () => {
  it("Can display the provided title", async () => {
    const title = "example";
    const dom = render(<ErrorPage title={title} />);
    console.debug(prettyDOM(dom.container, Number.MAX_VALUE));
    const element = screen.getByText(title);
    console.debug(prettyDOM(element));
    expect(element).toBeInTheDocument();
  });
});
