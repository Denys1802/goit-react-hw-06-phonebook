import { useDispatch, useSelector } from 'react-redux';
import { List, Item, ContactsBtn } from './ContactsList.styled';
import { getContacts, removeContacts } from 'redux/addContactsSlice';
import { getFilter } from 'redux/filterSlice';

const Contacts = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  const deleteContact = id => dispatch(removeContacts(id));

  const filterContacts = contacts.filter(contact =>
    contact.name?.toLowerCase().includes(filter.toLowerCase())
  );

  return filterContacts.map(contact => (
    <List key={contact.id}>
      <Item>
        <p>
          {contact.name}: {contact.number}
        </p>
        <ContactsBtn
          type="button"
          onClick={() => deleteContact(contact.id)}
          id={contact.id}
        >
          Delete
        </ContactsBtn>
      </Item>
    </List>
  ));
};

export default Contacts;
