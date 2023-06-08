// Controller for ALl Process
const asyncHandler = require("express-async-handler");

// Schema model
const Contact = require("../models/contactModel");

// Get All Contacts
const getContacts = asyncHandler(async (req, res) => {
  const contacts = await Contact.find();
  console.log(JSON.stringify(contacts), "getcontacts");
  return res.status(200).json(contacts);
});

//  Craete All Contacts
const createContacts = asyncHandler(async (req, res) => {
  const { name, mail, phone } = req.body;
  console.log("there is an message from ", req.body, name, mail, phone);
  if (!name || !mail || !phone) {
    res.status(400);
    throw new Error("All fields need to be filled !");
  }
  console.log("there is an message from ", name, mail, phone);
  const contact = await Contact.create({
    name,
    mail,
    phone,
  });
  res.status(201).json(contact);
});

// Get individual Contacts
const getContact = asyncHandler(async (req, res) => {
  const contact = await Contact.findById(req.params.id);
  if (!contact) {
    res.status(404);
    throw new Error("Content not found");
  }
  res.status(200).json(contact);
});

//   Update Contacts
const updateContacts = asyncHandler(async (req, res) => {
  const contact = await Contact.findById(req.params.id);
  if (!contact) {
    res.status(404);
    throw new Error("Content not found");
  }
  const updatedContact = await Contact.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );
  res.status(200).json(updatedContact);
});

//   Delete Contacts
const deleteContacts = asyncHandler(async (req, res) => {
  const contact = await Contact.findById(req.params.id);
  if (!contact) {
    res.status(404);
    throw new Error("Content not found");
  }
  await Contact.remove();
  res.status(200).json(contact);
});

module.exports = {
  getContacts,
  createContacts,
  getContact,
  updateContacts,
  deleteContacts,
};
