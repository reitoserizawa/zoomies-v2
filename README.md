<h1>Zoomies-v2</h1>
<p>This is a dog social media application where users can create dog profiles in addition to their profiles. You can check the dog park locations in NYC and check in to a dog park. You can see other dogs who are checked in at the dog park or previously checked in.</p>

<h2>Overview</h2>

- [Key features](#key-features)
- [Tech stacks](#tech-stacks)
- [Set-up/Installation](#set-up-installation)
- [Usage](#usage)
- [API Documentation](#api-documentation)
- [Data Sources](#data-sources)

<h2 id="key-features">Key features</h2>
<ul>
  <li>CRUD operations with user and dog profiles</li>
  <li>Check in and out from dog parks</li>
  <li>See dog park locations in NYC on a map</li>
  <li>Relational database with check-ins, users, and pets to see the current or previous checked-in pets</li>
  <li>Utilized object-oriented programming in the backend through the base model</li>
  <li>Used PostgreSQL on Docker Container</li>
</ul>


<h2 id="upcoming-features">Upcoming Features</h2>
<ul>
  <li>More customization for the profiles including profile images, new sections, and roles</li>
  <li>NYC's pet-friendly dining in the map to be added</li>
  <li>Matching feature for puppy dates</li>
  <li>NYC's shelter profile list and inquiry page for pets looking for home</li>
  <li>Deployment and progressive web app feature</li>
</ul>


<h2 id="tech-stacks">Tech stacks</h2>
<p>Frontend</p>
<ul>
  <li>JavaScript</li>
  <li>TypeScript</li>
  <li>React</li>
  <li>Redux</li>
</ul>

<p>Backend</p>
<ul>
  <li>Node.js</li>
  <li>TypeScript</li>
  <li>Express</li>
</ul>

<p>Database</p>
<ul>
  <li>Docker</li>
  <li>PostgreSQL</li>
</ul>

<h2>Database Diagram</h2>

![Screenshot 2025-01-09 at 4 39 28 PM](https://github.com/user-attachments/assets/f359d602-1fc4-4fea-9f5c-9957b1a33c11)

<p>Some tables or fields are not included but already added in the schema such as pet-friendly dining. They will be added in the upcoming version.</p>

<h2 id="set-up-installation">Set-up/Installation</h2>
<h3>Environment variables</h3>

<p>Frontend (create .env file the client directory and add the below variables)</p>
<ul>
  <li>REACT_APP_MAPBOX_ACCESS_TOKEN</li>
  <ul>
    <li>Add the token from Mapbox.com</li>
  </ul>

  <li>REACT_APP_API_URL</li>
  <ul>
    <li>Add the API URL</li>
  </ul>
</ul>


<p>Backend (create .env file the root and add the below variables)</p>
<ul>
  <li>PORT</li>
  <ul>
    <li>Default is set as 3001, change the port as needed</li>
  </ul>

  <li>POSTGRES_HOST</li>
  <li>POSTGRES_USER</li>
  <li>POSTGRES_PASSWORD</li>
  <li>POSTGRES_DB</li>
  <li>POSTGRES_PORT</li>

  <ul>
    <li>Add the postgres related information</li>
  </ul>

  <li>DATABASE_URL</li>
  <ul>
    <li>Add the database hosted URL</li>
  </ul>

  <li>SALT_ROUNDS</li>
  <ul>
    <li>Set a number</li>
  </ul>
  <li>JWT_SECRET_KEY</li>
  <ul>
    <li>Set it to 'reito-serizawa-zoomies-v2', or preferred secret key</li>
  </ul>

  <li>GOOGLE_API_KEY</li>
  <ul>
    <li>Required to convert the address to the geolocation</li>
    <li>Create and add from Google Maps API</li>
  </ul>
</ul>

<h3>Installation</h3>

<p>Frontend</p>

```
yarn install --prefix client
```

<p>Backend</p>

```
yarn install
```
<ul>
  <li><b>Editing installation for PostgresSQL with Docker container</b></li>
</ul>


<h2 id="usage">Usage</h2>

![Screenshot 2025-01-09 at 5 31 14 PM](https://github.com/user-attachments/assets/daeca090-0f94-4681-9fb8-c7c7efe27fa1)
![Screenshot 2025-01-09 at 5 29 53 PM](https://github.com/user-attachments/assets/ad459c53-57d3-415d-8c6a-a61eb1abe526)
![Screenshot 2025-01-09 at 5 31 36 PM](https://github.com/user-attachments/assets/03f9cb58-7073-4977-957a-51d10b3c6153)

<p>Demo to be added</p>

<h2>Testing</h2>
<p>The app has been manually tested. You can test the following features:</p>
<ol>
<li>**Authentication**: Register, log in, and log out.</li>
<li>**CRUD Operations**: Create, update, and delete records.</li>
<li>**Frontend Interactions**: Verify responsiveness and UI components.</li>
<li>**API Endpoints**: Use tools like Postman to test API responses.</li>
</ol>

<p>Future plans include adding automated tests using Jest and React Testing Library.</p>


<h2 id="api-documentation">API documentation</h2>

<h3>Public</h3>

<b>POST /api/public/login</b>

<ul>
  <li>URL: /api/public/login</li>
  <li>Method: POST</li>

  <li>Headers:</li>
  <ul>
    <li><pre>Content-Type: application/json</pre></li>
  </ul>

  <li>Body:</li>
  <ul>
    <li><pre>{ username:"test", password:"test" }</pre></li>
  </ul>

  <li>Response:</li>
  <ul>
    <li><pre>200 OK</pre></li>
    <li><pre>400 Bad Request</pre></li>
  </ul>
</ul>

<b>Example Request</b>
<pre>
  curl -H "Content-Type: application/json" \
  -X POST \
  -d '{"username":"test","password":"test"}' \
  http://localhost:3001/api/public/login
</pre>

<b>Response</b>
<pre>
  {
    "user": {
        "id": 1,
        "email": "test@test.com",
        "username": "test",
        "first_name": "Test",
        "last_name": "Test",
        "phone": null,
        "avatar_url": null,
        "allergies": [],
        "dog_park_check_ins": [],
        "pets": []
    },
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NCwiaWF0IjoxNzM2NDY4MDYzLCJleHAiOjE3MzY2NDA4NjN9.Mf30NE__vCqHN-66ne9aPtk2z6tXjk_1pgUm7WW5DKI"
}
</pre>

<hr />

<b>POST /api/public/create-user</b>

<ul>
  <li>URL: /api/public/create-user</li>
  <li>Method: POST</li>
  
  <li>Headers:</li>
  <ul>
    <li><pre>Content-Type: application/json</pre></li>
  </ul>

  <li>Body:</li>
  <ul>
    <li><pre>{ email: "test@test.com", first_name: "Test", last_name: "Test", password: "test", username: "test" }</pre></li>
  </ul>

  <li>Response:</li>
  <ul>
    <li><pre>200 OK</pre></li>
    <li><pre>400 Bad Request</pre></li>
  </ul>
</ul>

<b>Example Request</b>
<pre>
  curl -H "Content-Type: application/json" \
  -X POST \
  -d '{"email":"test@test.com","first_name":"Test","last_name":"Test","password":"test","username":"test"}' \
  http://localhost:3001/api/public/create-user
</pre>

<b>Response</b>
<pre>
  {
    "user": {
        "id": 1,
        "email": "test@test.com",
        "username": "test",
        "first_name": "Test",
        "last_name": "Test",
        "phone": null,
        "avatar_url": null,
        "allergies": [],
        "dog_park_check_ins": [],
        "pets": []
    },
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NCwiaWF0IjoxNzM2NDY4MDYzLCJleHAiOjE3MzY2NDA4NjN9.Mf30NE__vCqHN-66ne9aPtk2z6tXjk_1pgUm7WW5DKI"
}
</pre>

<hr />

<h3>Protected</h3>

<b>GET /api/protected/users</b>
<p>Get the user details</p>

<ul>
  <li>URL: /api/protected/users</li>
  <li>Method: GET</li>
  
  <li>Headers:</li>
  <ul>
    <li><pre>Authorization: Bearer <Token></pre></li>
  </ul>

  <li>Response:</li>
  <ul>
    <li><pre>200 OK</pre></li>
    <li><pre>400 Bad Request</pre></li>
    <li><pre>401 Auth Error</pre></li>
  </ul>
</ul>

<b>Example Request</b>
<pre>
  curl -H "Authorization: Bearer <Token>" \
  -X GET \
  http://localhost:3001/api/protected/users
</pre>

<b>Response</b>
<pre>
  {
    "user": {
        "id": 1,
        "email": "test@test.com",
        "username": "test",
        "first_name": "Test",
        "last_name": "Test",
        "phone": null,
        "avatar_url": null,
        "allergies": [],
        "dog_park_check_ins": [],
        "pets": []
    },
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NCwiaWF0IjoxNzM2NDY4MDYzLCJleHAiOjE3MzY2NDA4NjN9.Mf30NE__vCqHN-66ne9aPtk2z6tXjk_1pgUm7WW5DKI"
}
</pre>

<hr />

<b>POST /api/protected/users</b>
<p>Update the user details</p>

<ul>
  <li>URL: /api/protected/users</li>
  <li>Method: POST</li>
  
  <li>Headers:</li>
  <ul>
    <li><pre>Content-Type: application/json</pre></li>
    <li><pre>Authorization: Bearer <Token></pre></li>
  </ul>

  <li>Response:</li>
  <ul>
    <li><pre>200 OK</pre></li>
    <li><pre>400 Bad Request</pre></li>
    <li><pre>401 Auth Error</pre></li>
  </ul>
</ul>

<b>Example Request</b>
<pre>
  curl -H "Content-Type: application/json" \
  -H "Authorization: Bearer <Token>" \
  -X POST \
  -d '{"email":"test@test.com","first_name":"Test","last_name":"Test","password":"test","username":"test"}' \
  http://localhost:3001/api/protected/users
</pre>

<b>Response</b>
<pre>
  {
        "id": 1,
        "email": "test@test.com",
        "username": "test",
        "first_name": "Test",
        "last_name": "Test",
        "phone": null,
        "avatar_url": null,
        "allergies": [],
        "dog_park_check_ins": [],
        "pets": []
  }
</pre>

<hr />

<b>DELETE /api/protected/users</b>
<p>Delete the user</p>

<ul>
  <li>URL: /api/protected/users</li>
  <li>Method: DELETE</li>
  
  <li>Headers:</li>
  <ul>
    <li><pre>Authorization: Bearer <Token></pre></li>
  </ul>

  <li>Response:</li>
  <ul>
    <li><pre>200 OK</pre></li>
    <li><pre>400 Bad Request</pre></li>
    <li><pre>401 Auth Error</pre></li>
  </ul>
</ul>

<b>Example Request</b>
<pre>
  curl -H "Authorization: Bearer <Token>" \
  -X DELETE \
  http://localhost:3001/api/protected/users
</pre>

<b>Response</b>
<pre>
  {
        "success": true
  }
</pre>

<hr />

<b>POST /api/protected/users/change-password</b>
<p>Update the password</p>

<ul>
  <li>URL: /api/protected/users/change-password</li>
  <li>Method: POST</li>
  
  <li>Headers:</li>
  <ul>
    <li><pre>Content-Type: application/json</pre></li>
    <li><pre>Authorization: Bearer <Token></pre></li>
  </ul>

  <li>Body:</li>
  <ul>
    <li><pre>{ current_password: "test", new_password: "test2" }</pre></li>
  </ul>

  <li>Response:</li>
  <ul>
    <li><pre>200 OK</pre></li>
    <li><pre>400 Bad Request</pre></li>
    <li><pre>401 Auth Error</pre></li>
  </ul>
</ul>

<b>Example Request</b>
<pre>
  curl -H "Content-Type: application/json" \
  -H "Authorization: Bearer <Token>" \
  -X POST \
  -d '{"current_password":"test","new_password":"test2"}' \
  http://localhost:3001/api/protected/users
</pre>

<b>Response</b>
<pre>
  {
        "id": 1,
        "email": "test@test.com",
        "username": "test",
        "first_name": "Test",
        "last_name": "Test",
        "phone": null,
        "avatar_url": null,
        "allergies": [],
        "dog_park_check_ins": [],
        "pets": []
  }
</pre>

<hr />

<b>GET /api/protected/users/pets</b>
<p>Get the user's pets</p>

<ul>
  <li>URL: /api/protected/users/pets</li>
  <li>Method: GET</li>
  
  <li>Headers:</li>
  <ul>
    <li><pre>Authorization: Bearer <Token></pre></li>
  </ul>

  <li>Response:</li>
  <ul>
    <li><pre>200 OK</pre></li>
    <li><pre>400 Bad Request</pre></li>
    <li><pre>401 Auth Error</pre></li>
  </ul>
</ul>

<b>Example Request</b>
<pre>
  curl -H "Authorization: Bearer <Token>" \
  -X GET \
  http://localhost:3001/api/protected/users/pets
</pre>

<b>Response</b>
<pre>
  [
    {
        "id": 1,
        "name": "Test",
        "owner_id": 1,
        "type": "Dog",
        "breed": "Golden Doodle",
        "birthday": "2025-01-10T04:51:18.571Z",
        "introduction": "Hi, this is Test!",
        "created_at": "2025-01-10T04:51:30.948Z"
    }
  ]
</pre>

<hr />

<b>DELETE /api/protected/users/dog-park-check-ins</b>
<p>Delete the dog park check-in</p>

<ul>
  <li>URL: /api/protected/users/dog-park-check-ins</li>
  <li>Method: DELETE</li>
  
  <li>Headers:</li>
  <ul>
    <li><pre>Authorization: Bearer <Token></pre></li>
  </ul>

  <li>Body:</li>
  <ul>
    <li><pre>{ check_in_id: 1 }</pre></li>
  </ul>

  <li>Response:</li>
  <ul>
    <li><pre>200 OK</pre></li>
    <li><pre>400 Bad Request</pre></li>
    <li><pre>401 Auth Error</pre></li>
  </ul>
</ul>

<b>Example Request</b>
<pre>
  curl -H "Authorization: Bearer <Token>" \
  -X DELETE \
  -d '{"check_in_id":"1"}' \
  http://localhost:3001/api/protected/users
</pre>

<b>Response</b>
<pre>
  {
        "success": true
  }
</pre>

<hr />

<b>GET /api/protected/users/recent-dog-park-check-ins</b>
<p>Get the recent dog park check-ins</p>

<ul>
  <li>URL: /api/protected/users/recent-dog-park-check-ins</li>
  <li>Method: GET</li>
  
  <li>Headers:</li>
  <ul>
    <li><pre>Authorization: Bearer <Token></pre></li>
  </ul>

  <li>Response:</li>
  <ul>
    <li><pre>200 OK</pre></li>
    <li><pre>400 Bad Request</pre></li>
    <li><pre>401 Auth Error</pre></li>
  </ul>
</ul>

<b>Example Request</b>
<pre>
  curl -H "Authorization: Bearer <Token>" \
  -X GET \
  http://localhost:3001/api/protected/users/recent-dog-park-check-ins
</pre>

<b>Response</b>
<pre>
[
    {
        "id": 1,
        "user_id": 1,
        "pet_id": 1,
        "dog_park_id": 1,
        "active": true,
        "checked_in_at": "2025-01-10T06:12:50.169Z",
        "checked_out_at": null,
        "dog_park": {
            "id": 1,
            "name": "Crotona Park Off-Leash Area",
            "type": "Off-Leash"
        },
        "pet": {
          "id": 1,
          "name": "Test",
          "owner_id": 1,
          "type": "Dog",
          "breed": "Golden Doodle",
          "birthday": "2025-01-10T04:51:18.571Z",
          "introduction": "Hi, this is Test!",
          "created_at": "2025-01-10T04:51:30.948Z"
        },
        "user": {
            "id": 1,
            "email": "test@test.com",
            "username": "test",
            "first_name": "Test",
            "last_name": "Test",
            "phone": null,
            "avatar_url": null,
            "allergies": [],
            "dog_park_check_ins": [],
            "pets": []
        },
        "user_owns_check_in": true
    }
]
</pre>

<hr />

<b>GET /api/protected/users/favorite-dog-parks</b>
<p>Get the user's favorite dog parks</p>

<ul>
  <li>URL: /api/protected/users/favorite-dog-parks</li>
  <li>Method: GET</li>
  
  <li>Headers:</li>
  <ul>
    <li><pre>Authorization: Bearer <Token></pre></li>
  </ul>

  <li>Response:</li>
  <ul>
    <li><pre>200 OK</pre></li>
    <li><pre>400 Bad Request</pre></li>
    <li><pre>401 Auth Error</pre></li>
  </ul>
</ul>

<b>Example Request</b>
<pre>
  curl -H "Authorization: Bearer <Token>" \
  -X GET \
  http://localhost:3001/api/protected/users/favorite-dog-parks
</pre>

<b>Response</b>
<pre>
  [
    {
        "id": 1,
        "user_id": 1,
        "dog_park_id": 1,
        "dog_park": {
            "id": 1,
            "name": "Crotona Park Off-Leash Area",
            "type": "Off-Leash",
            "address": {
                "id": 1,
                "full_address": "Crotona Park, Charlotte St, Bronx, NY 10457, USA",
                "latitude": 40.8384993,
                "longitude": -73.8951228
            }
        }
    }
]
</pre>

<hr />

<b>POST /api/protected/users/favorite-dog-parks</b>
<p>Add the user's favorite dog park</p>

<ul>
  <li>URL: /api/protected/users/favorite-dog-parks</li>
  <li>Method: POST</li>
  
  <li>Headers:</li>
  <ul>
    <li><pre>Content-Type: application/json</pre></li>
    <li><pre>Authorization: Bearer <Token></pre></li>
  </ul>

  <li>Body:</li>
  <ul>
    <li><pre>{ dog_park_id: "1" }</pre></li>
  </ul>

  <li>Response:</li>
  <ul>
    <li><pre>200 OK</pre></li>
    <li><pre>400 Bad Request</pre></li>
    <li><pre>401 Auth Error</pre></li>
  </ul>
</ul>

<b>Example Request</b>
<pre>
  curl -H "Content-Type: application/json" \
  -H "Authorization: Bearer <Token>" \
  -X POST \
  -d '{"dog_park_id":1}' \
  http://localhost:3001/api/protected/users/favorite-dog-parks
</pre>

<b>Response</b>
<pre>
  {
        "success": true
  }
</pre>

<hr />

<b>DELETE /api/protected/users/favorite-dog-parks/:id</b>
<p>Unfavorite the dog park</p>

<ul>
  <li>URL: /api/protected/users/favorite-dog-parks/:id</li>
  <li>Method: DELETE</li>
  
  <li>Headers:</li>
  <ul>
    <li><pre>Authorization: Bearer <Token></pre></li>
  </ul>

  <li>Response:</li>
  <ul>
    <li><pre>200 OK</pre></li>
    <li><pre>400 Bad Request</pre></li>
    <li><pre>401 Auth Error</pre></li>
  </ul>
</ul>

<b>Example Request</b>
<pre>
  curl -H "Authorization: Bearer <Token>" \
  -X DELETE \
  http://localhost:3001/api/protected/users
</pre>

<b>Response</b>
<pre>
  {
        "success": true
  }
</pre>

<hr />

<b>GET /api/protected/users/favorite-dog-parks/dog-parks/:id</b>
<p>Check the favorite status for the dog park</p>

<ul>
  <li>URL: /api/protected/users/favorite-dog-parks/dog-parks/:id</li>
  <li>Method: GET</li>
  
  <li>Headers:</li>
  <ul>
    <li><pre>Authorization: Bearer <Token></pre></li>
  </ul>

  <li>Response:</li>
  <ul>
    <li><pre>200 OK</pre></li>
    <li><pre>400 Bad Request</pre></li>
    <li><pre>401 Auth Error</pre></li>
  </ul>
</ul>

<b>Example Request</b>
<pre>
  curl -H "Authorization: Bearer <Token>" \
  -X GET \
  http://localhost:3001/api/protected/users/favorite-dog-parks/dog-parks/:id
</pre>

<b>Response</b>
<pre>
  { "favorited_dog_park": { "id": 6 ,"user_id": 5 ,"dog_park_id": 1 } }
</pre>

<hr />

<b>POST /api/protected/pets</b>
<p>Add a pet</p>

<ul>
  <li>URL: /api/protected/pets</li>
  <li>Method: POST</li>
  
  <li>Headers:</li>
  <ul>
    <li><pre>Content-Type: application/json</pre></li>
    <li><pre>Authorization: Bearer <Token></pre></li>
  </ul>

  <li>Body:</li>
  <ul>
    <li><pre>{ birthday: "2025-01-10T06:37:01.461Z", breed: "Golden Doodle", introduction: "Hi, this is Test!", name: "Test"}</pre></li>
  </ul>

  <li>Response:</li>
  <ul>
    <li><pre>200 OK</pre></li>
    <li><pre>400 Bad Request</pre></li>
    <li><pre>401 Auth Error</pre></li>
  </ul>
</ul>

<b>Example Request</b>
<pre>
  curl -H "Content-Type: application/json" \
  -H "Authorization: Bearer <Token>" \
  -X POST \
  -d '{"birthday":"2025-01-10T06:37:01.461Z","breed":"Golden Doodle","introduction":"Hi, this is Test!","name":"Test"}' \
  http://localhost:3001/api/protected/pets
</pre>

<b>Response</b>
<pre>
{
    "id": 1,
    "name": "Test",
    "owner_id": 1,
    "type": "Dog",
    "breed": "Golden Doodle",
    "birthday": "2025-01-10T06:37:01.461Z",
    "introduction": "Hi, this is Test!",
    "created_at": "2025-01-10T06:37:09.041Z"
}
</pre>

<hr />

<b>GET /api/protected/pets/unchecked-in</b>
<p>Get the unchecked-in pets</p>

<ul>
  <li>URL: /api/protected/pets/unchecked-in</li>
  <li>Method: GET</li>
  
  <li>Headers:</li>
  <ul>
    <li><pre>Authorization: Bearer <Token></pre></li>
  </ul>

  <li>Response:</li>
  <ul>
    <li><pre>200 OK</pre></li>
    <li><pre>400 Bad Request</pre></li>
    <li><pre>401 Auth Error</pre></li>
  </ul>
</ul>

<b>Example Request</b>
<pre>
  curl -H "Authorization: Bearer <Token>" \
  -X GET \
  http://localhost:3001/api/protected/pets/unchecked-in
</pre>

<b>Response</b>
<pre>
  [
    {
        "id": 1,
        "name": "Test",
        "owner_id": 1,
        "type": "Dog",
        "breed": "Golden Doodle",
        "birthday": "2025-01-10T06:37:01.461Z",
        "introduction": "Hi, this is Test!",
        "created_at": "2025-01-10T06:37:09.041Z"
    }
  ]
</pre>

<hr />

<b>POST /api/protected/pets/:id</b>
<p>Update the pet details</p>

<ul>
  <li>URL: /api/protected/pets/:id</li>
  <li>Method: POST</li>
  
  <li>Headers:</li>
  <ul>
    <li><pre>Content-Type: application/json</pre></li>
    <li><pre>Authorization: Bearer <Token></pre></li>
  </ul>

  <li>Body:</li>
  <ul>
    <li><pre>{ birthday: "2025-01-10T06:37:01.461Z", breed: "Golden Doodle", introduction: "Hi, this is Test!", name: "Test"}</pre></li>
  </ul>

  <li>Response:</li>
  <ul>
    <li><pre>200 OK</pre></li>
    <li><pre>400 Bad Request</pre></li>
    <li><pre>401 Auth Error</pre></li>
  </ul>
</ul>

<b>Example Request</b>
<pre>
  curl -H "Content-Type: application/json" \
  -H "Authorization: Bearer <Token>" \
  -X POST \
  -d '{"birthday":"2025-01-10T06:37:01.461Z","breed":"Golden Doodle","introduction":"Hi, this is Test!","name":"Test"}' \
  http://localhost:3001/api/protected/pets/1
</pre>

<b>Response</b>
<pre>
{
    "id": 1,
    "name": "Test",
    "owner_id": 1,
    "type": "Dog",
    "breed": "Golden Doodle",
    "birthday": "2025-01-10T06:37:01.461Z",
    "introduction": "Hi, this is Test!",
    "created_at": "2025-01-10T06:37:09.041Z"
}
</pre>

<hr />

<b>DELETE /api/protected/pets/:id</b>
<p>Delete the pet</p>

<ul>
  <li>URL: /api/protected/pets/:id</li>
  <li>Method: DELETE</li>
  
  <li>Headers:</li>
  <ul>
    <li><pre>Authorization: Bearer <Token></pre></li>
  </ul>

  <li>Response:</li>
  <ul>
    <li><pre>200 OK</pre></li>
    <li><pre>400 Bad Request</pre></li>
    <li><pre>401 Auth Error</pre></li>
  </ul>
</ul>

<b>Example Request</b>
<pre>
  curl -H "Authorization: Bearer <Token>" \
  -X DELETE \
  http://localhost:3001/api/protected/pets/1
</pre>

<b>Response</b>
<pre>
{
    "success": true
}
</pre>

<hr />

<b>GET /api/protected/dog-parks</b>
<p>Get all the dog parks</p>

<ul>
  <li>URL: /api/protected/dog-parks</li>
  <li>Method: GET</li>
  
  <li>Headers:</li>
  <ul>
    <li><pre>Authorization: Bearer <Token></pre></li>
  </ul>

  <li>Response:</li>
  <ul>
    <li><pre>200 OK</pre></li>
    <li><pre>400 Bad Request</pre></li>
    <li><pre>401 Auth Error</pre></li>
  </ul>
</ul>

<hr />

<b>GET /api/protected/dog-parks/:id</b>
<p>Get the dog park details</p>

<ul>
  <li>URL: /api/protected/dog-parks</li>
  <li>Method: GET</li>
  
  <li>Headers:</li>
  <ul>
    <li><pre>Authorization: Bearer <Token></pre></li>
  </ul>

  <li>Response:</li>
  <ul>
    <li><pre>200 OK</pre></li>
    <li><pre>400 Bad Request</pre></li>
    <li><pre>401 Auth Error</pre></li>
  </ul>
</ul>

<b>Example Request</b>
<pre>
  curl -H "Authorization: Bearer <Token>" \
  -X GET \
  http://localhost:3001/api/protected/dog-parks/1
</pre>

<b>Response</b>
<pre>
{
    "id": 1,
    "name": "Crotona Park Off-Leash Area",
    "type": "Off-Leash",
    "address": {},
    "most_recent_check_in": {
        "id": 1,
        "user_id": 1,
        "pet_id": 1,
        "dog_park_id": 1,
        "active": true,
        "checked_in_at": "2025-01-10T06:12:50.169Z",
        "checked_out_at": null,
        "pet": {
            "id": 1,
            "name": "Test",
            "owner_id": 1,
            "type": "Dog",
            "breed": "Golden Doodle",
            "birthday": "2025-01-10T06:12:31.609Z",
            "introduction": "Hi, this is Test!",
            "created_at": "2025-01-10T06:12:45.541Z"
        },
        "user": {
            "id": 1,
            "email": "test@test.com",
            "username": "test",
            "first_name": "Test",
            "last_name": "Test",
            "phone": null,
            "avatar_url": null,
            "allergies": [],
            "dog_park_check_ins": [],
            "pets": []
        }
    }
}
</pre>

<hr />

<b>POST /api/protected/dog-parks/:id/check-ins</b>
<p>Create a dog park check-in</p>

<ul>
  <li>URL: /api/protected/dog-parks/:id/check-ins</li>
  <li>Method: POST</li>
  
  <li>Headers:</li>
  <ul>
    <li><pre>Content-Type: application/json</pre></li>
    <li><pre>Authorization: Bearer <Token></pre></li>
  </ul>

  <li>Body:</li>
  <ul>
    <li><pre>{ pet_ids: [ 1 ] }</pre></li>
  </ul>

  <li>Response:</li>
  <ul>
    <li><pre>200 OK</pre></li>
    <li><pre>400 Bad Request</pre></li>
    <li><pre>401 Auth Error</pre></li>
  </ul>
</ul>

<b>Example Request</b>
<pre>
  curl -H "Content-Type: application/json" \
  -H "Authorization: Bearer <Token>" \
  -X POST \
  -d '{"pet_ids":[1]}' \
  http://localhost:3001/api/protected/dog-parks/:id/check-ins
</pre>

<b>Response</b>
<pre>
{
    "success": true
}
</pre>

<hr />

<b>GET /api/protected/dog-parks/:id/active-check-ins</b>
<p>Get the active check-ins</p>

<ul>
  <li>URL: /api/protected/dog-parks/:id/active-check-ins</li>
  <li>Method: GET</li>
  
  <li>Headers:</li>
  <ul>
    <li><pre>Authorization: Bearer <Token></pre></li>
  </ul>

  <li>Response:</li>
  <ul>
    <li><pre>200 OK</pre></li>
    <li><pre>400 Bad Request</pre></li>
    <li><pre>401 Auth Error</pre></li>
  </ul>
</ul>

<hr />

<b>GET /api/protected/dog-parks/:id/active-check-ins</b>
<p>Get the past check-ins</p>

<ul>
  <li>URL: /api/protected/dog-parks/:id/past-check-ins</li>
  <li>Method: GET</li>
  
  <li>Headers:</li>
  <ul>
    <li><pre>Authorization: Bearer <Token></pre></li>
  </ul>

  <li>Response:</li>
  <ul>
    <li><pre>200 OK</pre></li>
    <li><pre>400 Bad Request</pre></li>
    <li><pre>401 Auth Error</pre></li>
  </ul>
</ul>

<h2 id="data-sources">Data Sources</h2>

The data used in this project was obtained from the following sources:

- [Directory of Dog Runs and Off-Leash Areas](https://catalog.data.gov/dataset/directory-of-dog-runs-and-off-leash-areas): Utilized name, address, note and dog run type.

Please ensure you comply with the respective licenses and terms of use of these datasets.
