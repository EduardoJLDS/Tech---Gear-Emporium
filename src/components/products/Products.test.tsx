import React from "react";
import { render, screen, within } from "@testing-library/react";
import { userEvent } from "@testing-library/user-event";
import { test, describe, beforeEach } from "vitest";
import Body from "../../layout/body/Body";
import Header from "../../layout/header/Header";

describe("Product testing", () => {
  beforeEach(() => {
    render(
      <>
        <Header /> <Body />
      </>
    );
  });

  test("Should render product cards properly", async () => {
    const productCards = screen.getAllByTestId("product-card");
    expect(productCards).toHaveLength(10);
  });

  test("Should render product data properly", async () => {
    const productCards = screen.getAllByTestId("product-card");
    expect(productCards).toHaveLength(10);
    const cameraProduct = productCards[0];
    within(cameraProduct).getByText("Digital Camera");
    within(cameraProduct).getByText(
      "Capture life's moments in stunning detail with our digital camera. With high-resolution sensors, advanced autofocus, and intuitive controls, this camera delivers professional-quality photos and videos."
    );
    within(cameraProduct).getByText("599.99€");
  });

  test("Should change quantity properly", async () => {
    const user = userEvent.setup();
    const productCards = screen.getAllByTestId("product-card");
    expect(productCards).toHaveLength(10);
    const cameraProduct = productCards[0];
    await user.selectOptions(within(cameraProduct).getByRole("combobox"), [
      "4"
    ]);
    const addToCartButton = within(cameraProduct).getByRole("button", {
      name: "Add to Cart"
    });
    await user.click(addToCartButton);
    const camera = screen.getByRole("listitem");
    within(camera).getByText("4");
    within(camera).getByText("599.99€");
    within(camera).getByText("2399.96€");
  });
});
