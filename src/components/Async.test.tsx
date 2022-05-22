import { render, screen } from "@testing-library/react";
import Async from "./Async";

describe("Async component", () => {
  test("renders posts if requests suceeds", async () => {
    window.fetch = jest.fn();
    (window.fetch as jest.Mock<any, any>).mockResolvedValueOnce({
      json: async () => [{ id: "A", post: "Alma" }],
    });
    render(<Async />);

    const liElements = await screen.findAllByRole("listitem");
    expect(liElements).not.toHaveLength(0);
  });
});
