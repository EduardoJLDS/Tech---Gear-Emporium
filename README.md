# Tech & Gear Emporium

An online store that allows displaying products, including their name, price, and description, offering users the option to store and manage a shopping cart to keep track of their purchases. The project also includes a search bar and filtering options by name or description. In the shopping cart, users can view the added products and their quantities, along with the option to proceed to checkout, remove all added products, or add more units of a particular product.

## Node Version Needed

v20.11.1

## Getting Started

To get started with this project:

1.Unzip the file.
2.Install dependencies using npm install.
3.Start the project with npm start.

## Available Scripts

Within the project directory, you have several commands available:

`npm start`: Initiates the application in development mode. Access http://localhost:8000 to view it in your web browser. The page automatically refreshes upon any changes made. Additionally, any lint errors will be displayed in the console.

`npm test`: Launches the test runner in an interactive watch mode.

`npm run build`: Compiles the application for production, generating the optimized build in the build folder. React is bundled appropriately for production mode, ensuring optimal performance.

## Folder structure

`components`: Contains all the components and custom hooks to be used in the implementation of the app.

`data`: Contains the local database of the application's products.

`layout`: Contains structural components of the application such as the header, body, and footer.

`store`: Contains the file for global states and their actions.

## Components

`cartListItem`: contains the information to render the list of items added to the shopping cart.

`useCartListItem`: is a custom hook that contains the logical functions for the cartListItem component.

`CartList`: Component that contains the information of the list items and the elements to render in the shopping cart.

`CartListButtons`: Component that contains the buttons to render in the shopping cart.

`useCartListButtons`: Custom hook for the logical functionality of the shopping cart buttons.

`Cart`: Element to render the shopping cart with the other components inside.

`CartToggle`: Component where the elements to render in the header, including the shopping cart and its child components, are contained.

`useCartToggle`: Custom hook containing the logic used in CartToggle.

`ProductCard`: Contains the information for the card where the products will be rendered in the application.

`useProductCard`: Manages the logic controlling the functionality of the product card.

`Products`: Component where the information to render in the cards is contained.

`useProducts`: Handles the logic and functions to be executed on the products to render.

`Searchbar`: Component containing the information to render the search bar in the application.

`useSearchbar`: Custom hook containing the logical functions for the search bar.

`SortBy`: Component rendering the select where the option to choose the type of filter to apply is located.

`useSortBy`: Manages the logic of the filter selector component.

`Toolbar`: Component where the search bar and the filter selector will be rendered.

`product.ts`: Contains the data of the products, including names, descriptions, dates, IDs, and costs.

`Body`: Element to be rendered, containing information and also where products and their cards will be displayed.

`Footer`: Element that is displayed at the bottom with website information.

`Header`: Component that renders the logo and title of the application, also containing the shopping icon and rendering the shopping cart.

`useHeader`: Custom hook where the logic for the application header is located.

`useShopStore`: Contains the information, global states, and actions of the application.
