# [How it Works: React Router][published url]
## Instructor: [Pavan Podila][instructor url]


When creating a single-page web app, routing is how we break up the various functional areas. Routing lets us use URLs to navigate between the *logical* pages of the application, without having to refresh the browser page. When working with React apps, React Router is the de facto routing solution.

In this course, you'll learn about the underlying concepts of React Router. By following along as Pavan Podila adds routing to a sample application, you'll learn about the React Router API, including: configuration, nested routes, navigation, and URL matching.

The app will be built using Webpack and Babel and will use the ECMAScript 2015+ syntax.


## Source Files Description


The repository contains the React app we are going to use as an example application in this course. It consists of a dashboard, categories, products, and reviews. As well as the route configuration to navigate between these logical pages.


## JSON Data
The mock data was generated using [JSON Generator](http://www.json-generator.com/)

The following template was used to generate the data.

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


------

These are source files for the Envato Tuts+ course: [How it Works: React Router][published url]

Available on [Tuts+](https://tutsplus.com). Teaching skills to millions worldwide.

[published url]: https://code.tutsplus.com/courses/how-it-works:-react-router
[instructor url]: https://tutsplus.com/authors/pavan-podila
