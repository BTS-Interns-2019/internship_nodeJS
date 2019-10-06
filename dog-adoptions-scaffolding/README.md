# **Dog Adoption Project**

This is the _Back-end_ portion of the **Give Me a Roof and Puppy-App web application**.

---

## Authors:

1. Estefanía Cano
1. Emmanuel Rubio

---

## Endpoints:

<table>
    <tr>
        <th>Interaction</th>
        <th>Endpoint</th>
        <th>HTTP Method</th>
    </tr>
    <tr>
        <td>Sign Up</td>
        <td>/api/auth/user</td>
        <td>POST</td>
    </tr>
    <tr>
        <td>Log In</td>
        <td>/api/user/auth/login</td>
        <td>POST</td>
    </tr>
    <tr>
        <td>Get Dogs</td>
        <td>/api/dogs</td>
        <td>GET</td>
    </tr>
    <tr>
        <td>Post Dog</td>
        <td>/api/dogs/add</td>
        <td>POST</td>
    </tr>
    <tr>
        <td>Delete Dog</td>
        <td>/api/dogs/:id</td>
        <td>DELETE</td>
    </tr>
</table>

---

## Request formats:

### Sign up

````json
"signUp": {
    "name": "string",
    "lastName": "string",
    "email": "string",
    "password": "string",
    "confirm_Password": "string"
}
````

### Log in

```json
"login": {
    "email": "string",
    "password": "string"
}
````

### Add dog

```json
"addDog": {
    "name": "string",
    "age": "number",
    "sex": "string",
    "description": "string",
    "imgUrl": "string",
}
```

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
