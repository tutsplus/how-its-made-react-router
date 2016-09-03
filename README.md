# tuts-react-router

### Coverage

- Use of ES2015+ syntax
- Webpack: `devServer.historyApiFallback`, `output.publicPath`
- `<Route>` configuration
- `<IndexRoute>`
- Nested Routes (relative and absolute URLs)
- Params to routes
- Navigation via `<Link>` (absolute URLs)
- histories: browser | hash


### JSON Data
Mock data generated using [JSON Generator](http://www.json-generator.com/)

The following template was used to generate the data.

```js

{
  categories: [
  '{{repeat(5, 7)}}',
  {
    id: '{{objectId()}}',
    picture: 'http://placehold.it/128x128',
    name: '{{lorem(1, "words")}}',
    products: [
      '{{repeat(3,7)}}',
      {
	    id: '{{objectId()}}',
        name: '{{lorem(1, "words")}}',
        price: '{{integer(100, 2000)}}',
        reviews: [
          '{{repeat(1, 10)}}',
          {
		    id: '{{objectId()}}',
            author: '{{firstName()}} {{surname()}}',
            date: '{{date(new Date(2015, 0, 1))}}',
            text: '{{lorem(3)}}'

          }
        ]
      }
    ]
  }
]
}

```
