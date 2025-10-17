import React from "react";
import { render, screen, within } from "@testing-library/react";
import { userEvent } from "@testing-library/user-event";
import { test, describe, beforeEach } from "vitest";
import Body from "../../layout/body/Body";
import Header from "../../layout/header/Header";

describe("Cart testing", () => {
  beforeEach(() => {
    render(
      <>
        <Header /> <Body />
      </>
    );
  });

  test("Should display products added in the cart", async () => {
    const user = userEvent.setup();
    const addToCartButtons = screen.getAllByRole("button", {
      name: "Add to Cart"
    });
    expect(addToCartButtons).toHaveLength(10);
    await user.click(addToCartButtons[0]);
    await user.click(addToCartButtons[1]);
    await user.click(addToCartButtons[2]);
    // Find the cart icon by class since it doesn't have proper aria-label
    const cartIcon = document.querySelector('[class*="icon-car-shop"]');
    expect(cartIcon).toBeInTheDocument();
    await user.click(cartIcon as Element);
    const listItems = await screen.findAllByRole("listitem");
    expect(listItems).toHaveLength(3);
  });

  test("Cart list item should work properly", async () => {
    const user = userEvent.setup();
    const addToCartButtons = screen.getAllByRole("button", {
      name: "Add to Cart"
    });
    await user.click(addToCartButtons[0]);
    const cartIcon = document.querySelector('[class*="icon-car-shop"]');
    await user.click(cartIcon as Element);
    const camera = await screen.findByRole("listitem");
    const increaseButton = screen.getByRole("button", {
      name: "cart-list-increase"
    });
    const descreaseButton = screen.getByRole("button", {
      name: "cart-list-decrease"
    });
    await user.click(increaseButton);
    await user.click(increaseButton);
    within(camera).getByText("3");
    within(camera).getByText("599.99€");
    within(camera).getByText("1799.97€");
    await user.click(descreaseButton);
    await user.click(descreaseButton);
    await user.click(descreaseButton);
    expect(camera).not.toBeInTheDocument();
  });

  test("Cart should empty", async () => {
    const user = userEvent.setup();
    const addToCartButtons = screen.getAllByRole("button", {
      name: "Add to Cart"
    });
    expect(addToCartButtons).toHaveLength(10);
    await user.click(addToCartButtons[0]);
    await user.click(addToCartButtons[1]);
    await user.click(addToCartButtons[2]);
    const cartIcon = document.querySelector('[class*="icon-car-shop"]');
    await user.click(cartIcon as Element);
    const deleteItems = screen.getByRole("button", { name: "delete-items" });
    await user.click(deleteItems);
    const listItems = screen.queryByRole("listitem");
    expect(listItems).not.toBeInTheDocument();
  });
});
