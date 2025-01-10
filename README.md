<h1>Zoomies-v2</h1>
<p>This is a dog social media application where users can create dog profiles in addition to their profiles. You can check the dog park locations in NYC and check in to a dog park. You can see other dogs who are checked in at the dog park or previously checked in.</p>

<h2>Key features</h2>
<ul>
  <li>CRUD operations with user and dog profiles</li>
  <li>Check in and out from dog parks</li>
  <li>See dog park locations in NYC on a map</li>
  <li>Relational database with check-ins, users, and pets to see the current or previous checked-in pets</li>
  <li>Utilized object-oriented programming in the backend through the base model</li>
  <li>Used PostgreSQL on Docker Container</li>
</ul>

<h2>Tech stacks</h2>
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

<h2>Set-up/Installation</h2>
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


<h2>Usage</h2>

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


<h2>API documentation</h2>

<b>POST /api/public/login</b>

<ul>
  <li>URL: <pre>/api/public/login</pre></li>
  <li>Method: <pre>POST</pre></li>

  <li>Response:</li>
  <ul>
    <li><pre>200 OK</pre></li>
    <li><pre>400 Bad Request</pre></li>
  </ul>
</ul>

<b>Example Request</b>
<pre>
  curl --header "Content-Type: application/json" \
  --request POST \
  --data '{"username":"test","password":"test"}' \
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
  <li>URL: <pre>/api/public/create-user</pre></li>
  <li>Method: <pre>POST</pre></li>

  <li>Response:</li>
  <ul>
    <li><pre>200 OK</pre></li>
    <li><pre>400 Bad Request</pre></li>
  </ul>
</ul>

<b>Example Request</b>
<pre>
  curl --header "Content-Type: application/json" \
  --request POST \
  --data '{"email":"test@test.com","first_name":"Test","last_name":"Test","password":"test","username":"test"}' \
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


<h2>Credentials</h2>
<p>Editing</p>
