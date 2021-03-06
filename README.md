# Team Members
1. Scrum Master - Brian Ruff
2. Backend Dev - Tyrone Cartwright
3. React App - Josuha Disney
4. React App - Chelsea Tolnai
5. UI Dev - Thomas Hessburg
6. UI Dev - Terrell Tullis
7. UI Dev - Victor Goico

# Links
1. Landing Page - https://angry-cray-eb6e34.netlify.com/
2. React App Page - https://mytop9.herokuapp.com/login
3. Backend NodeJS - https://my-top-9.herokuapp.com/api/users

# team_my_top_nine_backend

1. `yarn global add knex`
2. `yarn install`
3. `knex migrate:latest`
4. `knex seed:run`
5. `yarn server`

## LOGIN ENDPOINTS

### GET endpoint

--- To get all users type in `localhost:5000/api/users`
..\* This will give you all users in the database

--- To get users by ID type in `localhost:5000/api/users/{ID}` ---make sure when you using this endpoint, you include the ID number after the forward slash, for example `api/users/2`

--- To log a user out, the endpoint is `localhost:5000/api/logout`
..\* No parameters needed to logout

### POST endpoint

--- To register a new user, the register endpoint is `localhost:5000/api/register`
..\* username and password is required

--- To login a user, the endpoint is `localhost:5000/api/login`
.._ After registration, use those credentials to login
.._ username and password is required to login

### PUT endpoint

--- To update category, use the following endpoint
.._ `localhost:5000/api/updateRank/{usersId}`
.._ Use `rankInTop9` for old category rank
..\* Use `newCategoryId` for new category rank

--- `localhost:5000/api/updateRank/2`
.._ `rankInTop9: 3`
.._ `newCategoryId: 1`
--- So category that was in rank 3 will not be placed in rank1

--- To update a users username and password
.._ Use endpoint `localhost:5000/api/update/id`
.._ Then pass in new username and password as follows
.._ `localhost:5000/api/update/1`
.._ `username: kevinSmith`
..\* `password: java` then submit
--- This will update user with a ID of 1 to kevinSmith with a password of java

### DELETE endpoint

--- To delete a user, use endpoint `localhost:5000/api/delete/id`
.._ Select a specified user by ID
.._ `localhost:5000/delete/3`
.._ Once you pass the ID in the URL
.._ That specified user will be deleted once submitted

## CATEGORY ENDPOINTS

### GET endpoint

--- To get all categories type in `localhost:5000/api/categories`
..\* This will give you all the category information
..\* Including `id, img, name, description`

--- To get categories by id use
.._ `localhost:5000/api/categories/id`
.._ Make sure when using the endpoint to pass in the ID
..\* `localhost:5000/api/categories/2`
..\* This will return `id, img, name of category: celebrities, description`

### POST endpoint

--- To add a new category use endpoint
.._ `localhost:5000/api/categories`
.._ Pass in `img, name, description`
.._ Once request is sent should receive a `1`
.._ Then check `localhost:5000/api/categories` to make sure your category was added

### PUT endpoint

--- To update an category use endpoint
.._ `localhost:5000/api/categories/id`
.._ When you specify the categories id number
.._ Include `img, name, description`
.._ Example: `localhost:5000/api/categories/2`
..\* `img: https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0Zy21Fa9jms1CxV1JSneA2-4mRv2SqTRQqYgWt6h_4tKXacgp-w, name: sallySmith, description: Travel`
..\* This will update category at rank 2

### DELETE endpoint

--- To delete a user, use endpoint `localhost:5000/api/categories/id`
.._ Select a specified category by ID
.._ `localhost:5000/categories/3`
.._ Once you pass the ID in the URL
.._ That specified category will be deleted once submitted
