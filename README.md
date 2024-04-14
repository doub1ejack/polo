# Polo

Polo is a self-hosted url shortner platform. This is a monorepo with 3 different applications:

1. **[Polo-ui](./polo-ui)**: This is the most interesting piece, a frontend built in react/redux/next.js. See more in the readme.
2. **[Polo-api](./mockapi/)**: This is exactly what it sounds like, a json-server api to support the UI that's sufficient for now, and easy very to stand up in a ci/cd pipeline. I'll replace this with a legit api when the UI starts to outgrow the mock.
3. **Polo-engine**: (Coming.. soon?) This will be a small server-side app that handles actual URL redirects from public requests.

For more info, check out the [Polo-ui README](./polo-ui/README.md)
