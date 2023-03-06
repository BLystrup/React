const {faker} = require('@faker-js/faker');
const express = require('express');

const app = express();
const port = 8000;

const newUser = () => ({
    id: faker.database.mongodbObjectId(),
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    phoneNumber: faker.phone.number(),
    email: faker.internet.email(),
    password: faker.internet.password()
})

const newCompany = () => ({
    id: faker.database.mongodbObjectId(),
    name: faker.company.name(),
    address: {
        street: faker.address.streetAddress(),
        city: faker.address.cityName(),
        state: faker.address.state(),
        zipCode: faker.address.zipCode(),
        country: faker.address.country()
    }
})

app.get("/api/users/new", (req,res) => {
    res.json(newUser());
})

app.get("/api/companies/new", (req,res) => {
    res.json(newCompany());
})

app.get("/api/user/company", (req,res) => {
    res.json({user: newUser(), company: newCompany()});
})

app.listen(port, () => console.log(`Listening on port: ${port}`));