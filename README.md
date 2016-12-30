# example-generic-website
This repo serves as an example website generated with the [`generic-website` package](https://github.com/quite-nice/generic-website). It's super minimalistic, as it is meant to be.

## A brief explanation of all the files in this repo
* `.gitignore` -> Assuming this is fairly straightforward as you're browsing this on github.
* `.gwrc` -> This is probably the most important file as it describes the website you want generated in `JSON`.
* `package.json` -> No fields are truly filled in (on purpose). the only things that really matter are within the `dependencies` field. You notice the `generic-website` package + `express`. Of course, you can use any nodejs server with the `generic-website` package (like Koa or Hapi), I'm just familiar with `express`. Next to `dependencies` we have 1 `devDependency`, `nodemon` is currently used to run the `express` server. Considering the fact that this package should only be used for very simple static websites, `nodemon` will probably suffice. Sorry `webpack` lovers.
* `server.js` -> Probably the most standard server config ever. There is, however, 1 interesting line:

```js
res.send(generateWebsite())
```

The `generateWebsite` function is provided by the `generic-website` package. It parses the `.gwrc` file to an html string (yes a string! Server-side rendering ftw!).
