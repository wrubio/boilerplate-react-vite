# Vite - React - Boilerplate

This project is a boilerplate configured with various tools and technologies for developing applications with React, Vite, and full support for testing, linting, code formatting, and pre-hooks using PNPM.

## Features

- **React 18**: For building user interfaces.
- **Vite**: Fast development and build tool.
- **TypeScript**: Full support for static typing.
- **Vitest**: For unit and integration testing.
- **Cypress**: For end-to-end testing.
- **ESLint**: For code linting.
- **Prettier**: For automatic code formatting.
- **Husky**: For pre-commit and pre-push hooks.
- **Zustand**: State management for React.

## Prerequisites

* PNPM
```bash
npm i -g pnpm
```

## Installation

1. Clone the repository:
```bash
git clone <your-repository>
```

2. Install dependencies:
```bash
pnpm install
```

## Available Scripts
Here are the available scripts in the package.json file:

- **pnpm dev**: Start the development server with Vite.
- **pnpm test**: Run tests using Vitest.
- **pnpm build**: Build the project for production.
- **pnpm lint**: Run ESLint to check for code errors.
- **pnpm lint:fix**: Automatically fix ESLint errors and format the 
code with Prettier.
- **pnpm format**: Format the code using Prettier.
- **pnpm preview**: Preview the production build with Vite.
- **pnpm cypress:open**: Open the Cypress interface for running end-to-end tests.
- **pnpm run setup-husky**: Initialize Husky and configure pre-commit and pre-push hooks.

## Husky Hooks Configuration
This project uses Husky to ensure that before each commit, tests and linting are run automatically:

* **pre-commit**: Runs pnpm lint-staged and executes Vitest tests.
* **pre-push**: Runs pnpm build before pushing to the repository.


## Main Dependencies
- React: ^18.3.1
- Zustand: ^5.0.0-rc.2
- Vite: ^5.4.1
- Vitest: ^2.1.1
- Cypress: ^13.14.2

## Dev Dependencies

- ESLint: ^9.9.0
- Prettier: ^3.3.3
- Husky: ^9.1.6
- lint-staged: ^15.2.10
- @typescript-eslint/parser: ^8.6.0
- @vitejs/plugin-react-swc: ^3.5.0

## Usage
After installing the dependencies, you can run any of the listed scripts to start the server, run tests, or format the code.


## Contributing

Pull requests are welcome. For major changes, please open an issue first
to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License

[MIT](https://choosealicense.com/licenses/mit/)