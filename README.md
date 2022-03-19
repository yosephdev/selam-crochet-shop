# Selam-crochet-shopping site

- HTML:

  - Home page
    - Heading
    - link to products page
    - footer
  - products page
    - Heading
    - Li element
    - (dynamic products)
      - one temp hard coded product
    - footer

- Js:

  - create data model for crochet items
    - garments.js
      - name, price, etc 
      - ver: log
  - create render function
    - TDD render function based on hard coded example
    - ver: tests will pass
  - generate product list on product page Li.
    - Ver: products will render properly

- css: unified style, then individual page stylings.

- admin page: 
    - HTML: 
        - Create Header w/ nav
        - Create form element with inputs for products
            - what do we need to add product?
                - name
                - img
                - id
                - category
                - price
                - description
            - create submit button
    - JS: 
        - add hardcoded data to localStorage
           - func: seedAndGetProducts
                - check local storage for product, if not add []
                - get parsed products from localStorage
                - return 
        - TDD func for addProduct
            - takes product obj
            - grabs products arr from local storage
            - const parsedProducts = seedAndGetProducts();
            - parsedProducts.push(product)
            - add new arr to local storage

            takes obj, returns arr(test will compare old arr to new arr) 

        - products.js ->
            - grab form element
            - add event listener for submit button
            - create new product obj using form data
            - addProduct(new product obj)
            - reset form 