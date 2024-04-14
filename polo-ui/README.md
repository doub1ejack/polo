# Polo

Polo is a self-hosted url shortner platform. Key features to include:

- Customized, editable short urls
- Traffic analytics
- Batch-creation
- Campaigns for grouping urls

This project was inspired by the php project Polr.

## Why I'm building this:

This is a fairly academic project that serves 3 purposes:

1. A codebase for talking points about React/Next.js
2. A way to refresh/explore some new/updated technologies
3. A coder's "_I'll just build it myself_" reaction to bit.ly's new pricing structure

**What It Demonstrates** – It's a chance to configure and manipulate the many different components of a realworld project – without the constraints of a company paying its bills. As a fullstack developer, one of my strengths is broad enough experience to implement tools, both new & familiar, across engineering boundaries (frontend, backend, data stores, apis, infrastructure, and deployment).

**Quickly Understanding This Project** Trying to grok a project by reading the codebase is drinking from a firehose. Try this instead:

- **Project Ecosystem Overview** (below) links each technology directly to a relevant piece of code in the github project repo. (It's also a heuristic for me to make sure I'm going broad rather than deep on the individual pieces.)
- **My Project Roadmap** (also below) is helpful for planning and prioritizing this thing so it doesn't (🤞) become another half finished experimentation repo.
- **My "Book Club" Questions** (further below) answer some technical and architectural considerations that came up in conversation at some point.

## Project Ecosystem Overview

These are the technologies Polo does/will use. The linked technologies will take you directly to a github page that shows that tool in use.

> **\*Note**: I'm primarily demonstraiting my ability to select & integrate the diversity of technologies used in real-world, modern JS stacks. At this bootstrapping stage, individual samples are not complex, but taken as a whole they represent my broad experience and capability in frontend development.\*

| **Frontend Technologies**                                                                                                  |                                                                                                                                                                                 | Implemented |
| -------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------- |
| [API Integration](https://github.com/doub1ejack/polo-code-sandbox/blob/main/lib/features/links/linksApiSlice.ts#L43-L84)   | Next.js                                                                                                                                                                         | Y           |
| [CSS Framework](https://github.com/doub1ejack/polo-code-sandbox/blob/main/app/links/%5Bid%5D/page.tsx#L6-L15)              | Tailwind CSS                                                                                                                                                                    | Y           |
| Code Splitting                                                                                                             | Next.js                                                                                                                                                                         |             |
| Language/Framework                                                                                                         | [TypeScript](https://github.com/doub1ejack/polo-code-sandbox/blob/main/lib/helpers/env.ts) / [React 18](https://github.com/doub1ejack/polo-code-sandbox/blob/main/lib/store.ts) | Y           |
| Pre-fetching / Performance                                                                                                 | Next.js                                                                                                                                                                         |             |
| [Routing](https://github.com/doub1ejack/polo-code-sandbox/tree/main/app)                                                   | Next.js                                                                                                                                                                         | Y           |
| [State Management](https://github.com/doub1ejack/polo-code-sandbox/blob/main/app/links/page.tsx#L9-L15)                    | Redux                                                                                                                                                                           | Y           |
| [Testing & Debugging](https://github.com/doub1ejack/polo-code-sandbox/blob/main/lib/features/links/linksApiSlice.test.tsx) | Jest + RTL                                                                                                                                                                      | Y           |
| [UI Framework](https://github.com/doub1ejack/polo-code-sandbox/blob/main/app/_components/navigation/Nav.tsx#L19-L29)       | Material-UI (MUI)                                                                                                                                                               | Y           |
|                                                                                                                            |
| **Backend & Infrastructure**                                                                                               |
| Authentication                                                                                                             | AWS Cognito                                                                                                                                                                     |             |
| Language/Framework                                                                                                         | Elixir/Phoenix                                                                                                                                                                  |             |
| Database                                                                                                                   | PostgreSQL                                                                                                                                                                      |             |
| Mock Database (For dev)                                                                                                    | [JSON-server](https://github.com/doub1ejack/polo/blob/main/mockapi/README) / [Docker](https://github.com/doub1ejack/polo/blob/main/mockapi/Dockerfile)                          | Y\*         |
| Database ORM                                                                                                               | TypeORM                                                                                                                                                                         |             |
| Deployment & Hosting                                                                                                       | AWS Amplify, Lambda                                                                                                                                                             |             |
|                                                                                                                            |
| \* Not available on CodeSandbox instance                                                                                   |

## Project MVP Roadmap

**Definition of Done**: A user can perform these actions:

- Create an account
- Create short urls with custom tails
- View, edit, and disable existing urls
- View some traffic analytics for individual urls
- Use short urls and be redirected to the dest url

### Prioritized MVP Milestones

This is a prioritized list of milestones for this project. Short descriptions are provided below the table.

| Milestone                      | Completion | Type         |
| ------------------------------ | ---------- | ------------ |
| Polo-UI Environment Setup      | ✔️         | Dev          |
| Polo-API Mock Server           | ✔️         | Dev          |
| View Short URLs                | ✔️         | Feature      |
| Create/Edit Short URLs         |            | Feature      |
| Federated Authentication       |            | Feature      |
| CI/CD & Infrastructure Config  |            | Dev          |
| Polo-API Elixir/Phoenix Server |            | Dev          |
| Redirect Short URLs            |            | Feature      |
| View Analytics Dashboard       |            | Feature      |
| Campaigns for Grouping URLs    |            | Stretch Goal |
| Batch URL Creation             |            | Stretch Goal |

### Milestone Descriptions

- **Polo-UI Environment Setup** - Setting up the frontend technologies specified in the Project Ecosystem Overview above.
- **Polo-API Mock Server** - Setup [JSON-server](https://github.com/typicode/json-server) as a full-featured a mock API server to quickly develop frontend-driven API models. (Postgres will not be used yet.)
- **View Short URLs** - The user should be able to view lists of short urls fetched via API from the Polo-API backend.
- **Create/Edit Short URLs** - Users can create and edit short URLs within the Polo-UI application.
- **Federated Authentication** - Integrating federated authentication using Google and/or GitHub for account creation and user sign-in.
- **CI/CD & Infrastructure Config** - Use AWS Amplify to run tests and deploy test & prod environments for the 3 apps (Polo-UI, Polo-API, and Polo-Redirect) on scalable services (most likley Lambda).
- **Polo-API Elixir/Phoenix Server** - Replace the JSON-server mock with a real backend api powered by Elixir/Phoenix and Postgres.
- **Redirect Short URLs** - Create a simple server-side application to recording traffic and redirect users to the destination url. Probably built with Elixir/Phoenix
- **View Analytics Dashboard** - A simple a dashboard to view analytics and statistics for short URLs in Polo. Very simple initially, but more interesting if/when Campaigns are implemented.
- **Campaigns for Grouping URLs** - Adding support for creating campaigns to group related short URLs together.
- **Batch URL Creation** - Implementing functionality to create multiple short URLs in bulk, improving efficiency for users managing large or recuring sets of URLs.

## "Book Club" Questions

### Why use Next.js for a content-light, authenticated web app?

<details>

  <summary><i>Mostly as a learning opportunity (click for more)</i></summary>

These are the pros/cons that caught my attention while making this decision:
| Pros | Cons |
|-------------------------------------------------------------|-------------------------------------------------------------------------|
| **Server-side Rendering (SSR):** Next.js provides SSR "out of the box", enabling fast initial page loads with little configuration. | **Node Dependency:** Next.js typically requires a production Node.js server environment. |
| **Performance:** Next.js offers a streamlined development experience for implementing peformance practices like pre-fetching pages and automatic code splitting. | **Complexity:** Next.js is likely overkill for a simple application with restricted access, especially if SSR or SSG features are not necessary. |
| **Authentication:** Next.js can easily integrate with authentication providers, making it straightforward to implement authentication. | **Learning Curve:** As an opinionated framework, Next.js will require additional time to learn its conventions and best practices. |
| **Simplified Routing:** Node.js uses a file-based routing pattern that removes routing requirements. |**Routing Limitations:** While file-based routing can simplify navigation, it can become convoluted for complex routing requirements. ||

**My Preferences**:

- **Backend API** - Next.js API routes would probably allow me to build both the backend and frontend in one repo for a project as simple as this. However, I want a separate (simple) backend that I can experiment with and refactor without affecting the application frontend.
- **Infrastructure** - The dependency on a Node.js server does make the CI/CD & DevOps side more complex, but the tradeoffs are worth it to me as long as the complexity doesn't prevent me from reaching a stable MVP.
- **Routing** - I am already quite familiar with dynamic routing from React Router and Apache/Nginx projects. When file-based routing is viable, I prefer its simplicity and intuitive project structure.

**Decision**: Let's try Next.js!

**Rationale**: This project is both an learning opportunity for me and a demo project for my job search. Overall, I want to keep the project small, but not so small that it feels trivial. And I want to include one big, beefy technology that will advance my learning nicely. With Next.js I'll definitely learn a valuable tool, but with the flexibility to incrementally learn and implement new features (pre-fetching, SSG, etc) if I feel I'm making good progress on my MVP.

</details>

### How to implement scalable, performant url redirection?

<details>

  <summary><i>K.I.S.S. (click for more)</i></summary>

**Constraints**:

1. Each redirect should increment the number of clicks for that url
2. Retain option to record other user data (geolocation of IP, etc)
3. Spend minimal time on this solution for the MVP

**Considerations**: There are many approaches for redirecting short urls:

- Client-side redirection: Use a simple web page that contains client-side JavaScript code to redirect the user. Probably not very efficient, but using a CDN this would be very cheap and scalable.

- DNS-based redirection: I could set up DNS records to redirect traffic to another domain using DNS provider APIs. This redirect would probably be the fastest experience for users, but I'm not sure how it would scale. It would introduce another external dependency and I don't see how I could track clicks, etc. This may be viable, but has the greatest learning curve for me.

- HTTP server configuration: Using a web server (either Apache or Nginx for me), I could programatically configure URL rewriting rules to redirect traffic based on predefined patterns. URL request details could be sent to a processer (AWS Kenesis, etc) using log forwarding for real-time, aggregated analysis. But it seems like a configuration heavy solution.

- Serverless-Side redirection: Use a serverless function to receive requests, look up the destination URL in the db, responds with an HTTP redirect, and record traffic info in the db.

**Decision**: K.I.S.S.: Serverless-Side redirection.

**Rationale**: Server-side redirection on Lambda (or EC2 Auto Scaling) is simple, pretty performant, scalable, and familiar for me to implement. It can be nicely contained within my single repo and I can configure my CI/CD system (Amplify) to deploy to a self scaling solution. But honestly, I don't anticipate heavy usage (unless the bots get through) so it makes sense to go with the most familiar & pragmatic option for me to implement.

</details>

## Testing

This project utilizes [Jest](https://jestjs.io/) and [React Testing Library (RTL)](https://testing-library.com/docs/react-testing-library/intro/) (RTL) for testing purposes.

This project includes a **pre-commit Git hook** to prompt contributors to consider writing tests before making commits. To enable this feature, ensure that the pre-commit hook is given executable permissions:

`$ chmod +x <rootDir>/.git/hooks/pre-commit`
