# koa-graphql-starter
__WORK IN PROGRESS__

:chart_with_upwards_trend: A simple GraphQL implementation built on top of Koa (v2).

You can also utilize this using my [starter-kit](https://github.com/mikemclaren/starter-kit) utility!

## Using with Starter-Kit utility
```
starterkit use koa-graphql-starter
```

## Using from Github
Clone it down, `npm install` and then `npm run dev`!
Go to [http://127.0.0.1:3100](http://127.0.0.1:3100) and you're good to go!

# Utilizing
You can view the GraphiQL interface here: [http://127.0.0.1:3100/query](http://127.0.0.1:3100/query),
as well as query your GraphQL server from the same endpoint.

## File Structure
```
- models           // This is where the data models go.
- schema           // This is where we house all the GraphQL definitions.
    |- types       // This is where all the GraphQL Type definitions live.
    |- Mutation.js // This is where the Root Mutation Query definition lives.
    |- Query.js    // This is where the Root Query definition lives.
    |- Schema.js   // This is where the base Schema definition is
- bin
    |- bootstrap   // The bootstrap script every starter kit requires.
- .babelrc         // babel configuration
- .gitignore
- package.json
- README.md
- server.js        // The root file for the Koa app
```
