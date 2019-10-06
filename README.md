# **Football Project**
This is the *Back-end* portion of the **football web application**.

--------------------------

## Authors:
1. Miguel Vivanco
1. Cristian Plascencia
1. Erick Bardo
1. Héctor Soto

---------------------------

## Endpoints:

<table>
    <tr>
        <th>Interaction</th>
        <th>Endpoint</th>
        <th>HTTP Method</th>
    </tr>
    <tr>
        <td>Sign Up</td>
        <td>/api/user</td>
        <td>POST</td>
    </tr>
    <tr>
        <td>Log In</td>
        <td>/api/user/login</td>
        <td>POST</td>
    </tr>
    <tr>
        <td>Get Teams</td>
        <td>/api/teams</td>
        <td>GET</td>
    </tr>
    <tr>
        <td>Get Team</td>
        <td>/api/teams/:id</td>
        <td>GET</td>
    </tr>
    <tr>
        <td>Get Image</td>
        <td>/api/teams/logo/:img</td>
        <td>GET</td>
    </tr>
    <tr>
        <td>Edit Team</td>
        <td>/api/teams/:id</td>
        <td>PUT</td>
    </tr>
</table>

-------------------------------

## Request formats:

### Sign up

#### Expected request body format
```json
"signUp": {
  "firstName": "string",
  "lastName": "string",
  "email": "string",
  "password": "string",
  "validatePassword": "string"
}
```

#### Validator schema
```js
{
  description: 'Validation for new sign up',
  properties: {
    firstName: {
      type: 'string',
    },
    lastName: {
      type: 'string',
    },
    email: {
      type: 'string',
      format: 'email',
    },
    password: {
      type: 'string',
    },
    validatePassword: {
      type: 'string',
    },
  },
  additionalProperties: false,
  required: [
    'firstName',
    'lastName',
    'email',
    'password',
    'validatePassword',
  ],
}
```

### Log in

#### Expected request body format
```json
"login": {
  "email": "string",
  "password": "string"
}
```

#### Validator schema
```js
{
  description: 'Validation for login',
  properties: {
    email: {
      type: 'string',
    },
    password: {
      type: 'string',
    },
  },
  additionalProperties: false,
  required: [
    'email',
    'password',
  ],
}
```

### Edit team
* **Important:** It is not necessary to send the `points`, `games_played` and `goal_difference` fields as their values will be calculated at the time of the update.
* **Important:** It is vital that the user **must** be logged in to be able to edit the data of a team. In other words, an authentication token must be provided through a header of the request as either `Authorization` or `x-access-token`.
  * Keep in mind, if using the `Authorization` header, the value must have a `Bearer` string right before the token. The format is then as follows:
  ```
  Authorization: Bearer <token>
  ```
  * If the token is omitted, a response with the HTTP status code `401: Forbidden` will be sent as well as a JSON with the following format:
  ```json
  {
    "status": "failure",
    "message": "Authorization token was not provided",
    "data": {}
  }
  ```

#### Expected request body format
```json
"editTeam": {
  "logo": "string",
  "name": "string",
  "location": "string",
  "stadium": "string",
  "position": "number",
  "points": "number",
  "games_played": "number",
  "games_won": "number",
  "games_tied": "number",
  "games_lost": "number",
  "goals_in_favor": "number",
  "goals_against": "number",
  "goal_difference": "number"
}
```

#### Validator schema
```js
{
  description: 'Validation for update team',
  properties: {
    logo: {
      type: 'string',
      minLength: 1,
    },
    name: {
      type: 'string',
      minLength: 1,
    },
    location: {
      type: 'string',
      minLength: 1,
    },
    stadium: {
      type: 'string',
      minLength: 1,
    },
    position: {
      type: 'string',
      minLength: 1,
    },
    games_won: {
      type: 'number',
      minimum: 0,
    },
    games_tied: {
      type: 'number',
      minimum: 0,
    },
    games_lost: {
      type: 'number',
      minimum: 0,
    },
    goals_in_favor: {
      type: 'number',
      minimum: 0,
    },
    goals_against: {
      type: 'number',
      minimum: 0,
    },
  },
}
```

--------------------------

## Responses format:

### Generic successful response

```json
{
    "status": "success",
    "message": "",
    "data": [] | {}
}
```

### Generic error response

```json
{
    "status": "failure",
    "message": "",
    "data": [] | {}
}
```

+ The `message` property in the response contains an informative message that describes the interaction of the successful or error response.
+ The `data` property in the response contains the result obtained of the request. It's all information requested and presented in an object type.