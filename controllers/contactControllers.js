const asyncHandler = require("express-async-handler");
const Contact = require("../models/contactModel");

//@description Get all contacts
//@route GET /api/contacts
//@access private
const getContacts = asyncHandler(async (req, res) => {
    const contacts = await Contact.find({ user_id: req.user.id });
    res.status(200).json(contacts);
});

//@description create all contacts
//@route POST /api/contacts
//@access private

const createContact = asyncHandler(async (req, res) => {
    console.log("the created contact is :", req.body);
    const { name, email, phone } = req.body;
    if (!name || !email || !phone) {
        res.status(400);
        throw new Error("All the fields are mandatory!!");
    }
    const contact = await Contact.create({
        name,
        email,
        phone,
        user_id: req.user.id
    });
    res.status(201).json(contact);
});

//@description GET contacts
//@route GET /api/contacts/:id
//@access private

const getContact = asyncHandler(async (req, res) => {
    const contact = await Contact.findById(req.params.id);
    if (!contact) {
        res.status(404).json;
        throw new Error("Contacts not found");
    }
    res.status(200).json(contact);
});

//@description UPDATE contacts
//@route PUT /api/contacts/:id
//@access private

const updateContact = asyncHandler(async (req, res) => {
    const contact = await Contact.findById(req.params.id);
    if (!contact) {
        res.status(404).json;
        throw new Error("Contacts not found");
    }

    if (contact.user_id.toString() !== contact.user_id){
        res.status(403);
        throw new Error("User dont have permission to update this contact");
    }
    const updatedContact = await Contact.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
    );
    res.status(200).json(updatedContact);
});

//@description DELETE contacts
//@route DELETE /api/contacts/:id
//@access private

const deleteContact = asyncHandler(async (req, res) => {
    const contact = await Contact.findById(req.params.id);
    if (!contact) {
        res.status(404).json;
        throw new Error("Contacts not found");
    }
    if (contact.user_id.toString() !== contact.user_id){
        res.status(403);
        throw new Error("User dont have permission to delete this contact");
    }
    await Contact.remove();
    res.status(200).json(contact);
});


module.exports = { getContacts, createContact, getContact, updateContact, deleteContact };