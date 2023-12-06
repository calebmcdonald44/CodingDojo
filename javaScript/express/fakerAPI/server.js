const express = require("express");
const app = express();
const port = 8000
app.use( express.json() );
app.use( express.urlencoded({ extended: true }) );
const {faker} = require('@faker-js/faker')

const createCompany = () => {
  const newCompany = {
    id: faker.database.mongodbObjectId(),
    name: faker.company.name(),
    address: {
      number: faker.location.streetAddress(),
      street: faker.location.street(),
      city: faker.location.city(),
      state: faker.location.state(),
      zipCode: faker.location.zipCode(),
      country: faker.location.country()
    }
  }
  return newCompany
}

const createUser = () => {
  const newUser = {
    password: faker.internet.password(),
    email: faker.internet.email(),
    phoneNumber: faker.phone.number(),
    lastName: faker.person.lastName(),
    firstName: faker.person.firstName(),
    id: faker.database.mongodbObjectId()
  }
  return newUser
}
const createUserCompany = () => {
  return [createUser(), createCompany()]
}

// req is short for request
// res is short for response
app.get("/api", (req, res) => {
  res.json({message: "Hello World"});
});

app.get("/api/users/new", (req, res) => {
  res.json( createUser() )
})

app.get("/api/companies/new", (req, res) => {
  res.json(createCompany())
})
app.get("/api/user/company", (req, res) => {
  res.json(createUserCompany())
})

const server = app.listen(port, () =>
  console.log(`Server is locked and loaded on port ${server.address().port}!`)
);
