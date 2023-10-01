const contacts = require('./db/contacts');
const argv = require('yargs').argv;

const invokeAction = async ({ actions, id, name, email, phone }) => {
    switch (actions) {
        case 'read':
            const allContacts = await contacts.listContacts();
            return console.log(allContacts);
        case 'getById':
            const contactById = await contacts.getContactById(id);
            return console.log((contactById));
        case 'add':
            const newContact = await contacts.addContact({ name, email, phone });
            return console.log(newContact);
        case 'remove':
            const contactForRemove = await contacts.removeContact(id);
            return console.log(contactForRemove);
        default:
            break;
    }
}

// invokeAction({ actions: "read" });
// invokeAction({ actions: 'getById', id: 'vza2RIzNGIwutCVCs4mCL' });
// invokeAction({ actions: 'add', name: 'Mr Gangster', email: 'gangstermekola@gmail.com', phone: '(777) 497-4895' });
invokeAction({ actions: 'remove', id: 'k5vVyecvRyNyVdL9amEx7' })

