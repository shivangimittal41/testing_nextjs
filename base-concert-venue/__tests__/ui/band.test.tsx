import { render, screen } from "@testing-library/react";
import { readFakeData } from "../__mocks__/fakeData";
import BandComp from "@/pages/bands/[bandId]";

test("band comp displays correct information", async () => {
  const { fakeBands } = await readFakeData();
  render(<BandComp band={fakeBands[0]} error={null} />);
  const heading = screen.getByRole("heading", {
    name: /wandering bunnies/i,
  });
  expect(heading).toBeInTheDocument();
});

// test("band component displays error", () => {
//   render(<BandComp band={null} error="EVERYTHING IS FINE" />);
//   const error = screen.getByRole("heading", { name: /everthing is fine/i });
//   expect(error).toBeInTheDocument();
// });
