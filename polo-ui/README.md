# Polo

Polo is a self-hosted url shortner platform. Key features include:

- Customized short urls
- Batch-creating urls
- Usage analytics
- Campaigns for grouping urls

This project was inspired by the php project Polr.

## Project Ecosystem

This project uses the following technologies:

### Frontend Technologies

| Technology          | Library/Framework |
| ------------------- | ----------------- |
| API Integration     | Next.js           |
| CSS Framework       | Tailwind CSS      |
| Code Splitting      | Next.js           |
| Routing             | Next.js           |
| State Management    | Redux             |
| Testing & Debugging | Jest + RTL        |
| UI Framework        | Material-UI (MUI) |
| TypeScript Support  | TypeScript        |

### Backend and Infrastructure

| Technology                     | Library/Framework                                               |
| ------------------------------ | --------------------------------------------------------------- |
| Authentication & Authorization | AWS Cognito                                                     |
| Database Integration           | TypeORM                                                         |
| Deployment & Hosting           | AWS Amplify for CI/CD,<br>AWS services (tbd) for infrastructure |

## Tests

This project utilizes [Jest](https://jestjs.io/) and [React Testing Library (RTL)](https://testing-library.com/docs/react-testing-library/intro/) (RTL) for testing purposes.

This project includes a **pre-commit Git hook** to prompt contributors to consider writing tests before making commits. To enable this feature, ensure that the pre-commit hook is given executable permissions:

`$ chmod +x <rootDir>/.git/hooks/pre-commit`
