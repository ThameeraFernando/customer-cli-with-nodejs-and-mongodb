const mongoose = require("mongoose");
const Customer = require("./modals/customer");

//Map global promise - get rid of warnings
mongoose.Promise = global.Promise;

//Connect to DB
const db = mongoose.connect("mongodb://localhost:27017/customercli", {
  useMongoClient: true,
});

//Add Customer
const addCustomer = (customer) => {
  Customer.create(customer).then((customer) => {
    console.log("New customer Added");
    db.close();
  });
};
//Find Customer
const findCustomer = (name) => {
  //Make case insensitive
  const search = new RegExp(name, "i");
  Customer.find({ $or: [{ firstName: search }, { lastName: search }] })
    .lean()
    .then((customer) => {
      console.info(customer);
      console.info(`${customer.length} matches`);
      db.close();
    });
};
// Update customer
const updateCustomer = (_id, customer) => {
  Customer.update({ _id }, customer).then((customer) => {
    console.info("Customer Updated");
    db.close();
  });
};

// Remove customer
const removeCustomer = (_id) => {
  Customer.remove({ _id }).then((customer) => {
    console.info("Customer Removed");
    db.close();
  });
};

//List Customers
const listCustomer = () => {
  Customer.find()
    .lean()
    .then((customers) => {
      console.info(customers);
      console.info(`${customers.length} customers`);
      db.close();
    });
};

module.exports = {
  addCustomer,
  findCustomer,
  updateCustomer,
  removeCustomer,
  listCustomer,
};
