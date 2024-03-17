import React from "react";
import { render, screen, within } from "@testing-library/react";
import { userEvent } from "@testing-library/user-event";
import { test, describe, beforeEach, expect } from "vitest";
import Body from "../../layout/body/Body";
import Header from "../../layout/header/Header";

describe("toolbar testing", () => {
  beforeEach(() => {
    render(
      <>
        <Header /> <Body />
      </>
    );
  });

  test("Should sort products properly", async () => {
    const user = userEvent.setup();
    const productCardsNameSorted = screen.getAllByTestId("product-card");
    expect(productCardsNameSorted).toHaveLength(10);
    const firstProductNameSorted = productCardsNameSorted[0];
    const lastProductNameSorted = productCardsNameSorted[9];
    expect(within(firstProductNameSorted).getByText("Digital Camera"));
    expect(within(lastProductNameSorted).getByText("Wireless Headphones"));
    await user.selectOptions(screen.getByRole("combobox", { name: "SortBy" }), [
      "Description A-Z"
    ]);
    const productCardsDescriptionSorted = screen.getAllByTestId("product-card");
    expect(productCardsDescriptionSorted).toHaveLength(10);
    const firstProductDescriptionSorted = productCardsDescriptionSorted[0];
    const lastProductDescriptionSorted = productCardsDescriptionSorted[9];
    expect(within(firstProductDescriptionSorted).getByText("Digital Camera"));
    expect(
      within(lastProductDescriptionSorted).getByText("Electric Toothbrush")
    );
  });

  test("Should search product data", async () => {
    const user = userEvent.setup();
    const searchbar = screen.getByRole("textbox", { name: "products-search" });
    await user.type(searchbar, "camera");
    const productCards = screen.getAllByTestId("product-card");
    expect(productCards).toHaveLength(4);
  });

  test("Should search and sort product data", async () => {
    const user = userEvent.setup();
    const searchbar = screen.getByRole("textbox", { name: "products-search" });
    await user.type(searchbar, "camera");
    const productCardsNameSorted = screen.getAllByTestId("product-card");
    const firstProductNameSorted = productCardsNameSorted[0];
    const lastProductNameSorted = productCardsNameSorted[3];
    expect(within(firstProductNameSorted).getByText("Digital Camera"));
    expect(within(lastProductNameSorted).getByText("Waterproof Action Camera"));
    await user.selectOptions(screen.getByRole("combobox", { name: "SortBy" }), [
      "Description Z-A"
    ]);
    const productCardsDescriptionSorted = screen.getAllByTestId("product-card");
    const firstProductDescriptionSorted = productCardsDescriptionSorted[0];
    const lastProductDescriptionSorted = productCardsDescriptionSorted[3];
    expect(within(firstProductDescriptionSorted).getByText("Smartphone"));
    expect(within(lastProductDescriptionSorted).getByText("Digital Camera"));
  });
});
