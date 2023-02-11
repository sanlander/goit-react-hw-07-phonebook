import { Filter } from 'components';
import { ContactsItem } from 'components/ContactsItem/ContactsItem';
import { useSelector } from 'react-redux';
import { getVisibleContacts, selectContacts } from 'redux/selectors';
import { Li, Ul } from './ContactsList.modules';

export const ContactsList = () => {
  const contacts = useSelector(selectContacts);
  const visibleContacts = useSelector(getVisibleContacts);

  if (contacts.length > 0) {
    let numberItems = 0;
    return (
      <div>
        <Filter />
        <Ul>
          {visibleContacts.map(contact => {
            numberItems += 1;

            return (
              <Li key={contact.id}>
                <ContactsItem contact={contact} numberItems={numberItems} />
              </Li>
            );
          })}
        </Ul>
      </div>
    );
  }
};
