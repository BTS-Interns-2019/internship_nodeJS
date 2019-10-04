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

## Format requests:

### Sign up

```json
"signUp": {
    "firstName": "string",
    "lastName": "string",
    "email": "string",
    "password": "string",
    "validatePassword": "string"
}
```
> Validator schema
>
>```json
>"signUp": {
>    "type": "object",
>    "properties": {
>        "firstName":{"type":"string"},
>        "lastName": {"type":"string"},
>        "email": {"type":"string", "string":"format(email)"},
>        "password": {"type":"string"},
>        "validatePassword": {"type":"string"}
>    }
>}
>```

### Log in

```json
"login": {
    "email": "string",
    "password": "string"
}
```
> Validator schema
>
>```json
>"login": {
>   "type": "object",
>   "properties":{
>       "email": {"type":"string"},
>       "password": {"type":"string"}
>   }
>}
>```

### Edit team

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

> Validator schema
>
>```json
>"editTeam": {
>   "type": "object",
>   "properties":{
>       "logo": {"type":"string"},
>       "name": {"type":"string"},
>       "location": {"type":"string"},
>       "stadium": {"type":"string"},
>       "position": {"type":"number"},
>       "points": {"type":"number"},
>       "games_played": {"type":"number"},
>       "games_won": {"type":"number"},
>       "games_tied": {"type":"number"},
>       "games_lost": {"type":"number"},
>       "goals_in_favor": {"type":"number"},
>       "goals_against": {"type":"number"},
>       "goal_difference": {"type":"number"}
>   }
>}
>```

--------------------------

## Format responses:

### Generic successful response

```json
{
    "status": "success",
    "message": "",
    "data": [], {} 
}
```

### Generic error response

```json
{
    "status": "failure",
    "message": "",
    "data": [], {}
}
```

+ The message field in the response contains an informative message that describes the interaction of the successful or error response.
+ The data field in the response contains the result obtained of the request. It's all information requested and presented in an object type.