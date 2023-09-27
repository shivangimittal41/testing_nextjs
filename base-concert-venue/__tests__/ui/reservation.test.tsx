import { render, screen } from "@testing-library/react";
import { Reservation } from "@/components/reservations/Reservation";

test("correct number of seats?", async () => {
  render(<Reservation showId={0} submitPurchase={jest.fn()} />);
  const seatCountText = await screen.findByText(/10 seats left/i);
  expect(seatCountText).toBeInTheDocument();
});

test("reservation page shows 'sold out' and no purchase button when no seats are there", async () => {
  render(<Reservation showId={1} submitPurchase={jest.fn()} />);

  const soldOutMsg = await screen.findByRole("heading", {
    name: /sold out/i,
  });

  expect(soldOutMsg).toBeInTheDocument();

  const purchaseButton = screen.queryByRole("button", { name: /purchase/i });
});
