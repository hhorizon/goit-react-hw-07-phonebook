import { useSelector } from "react-redux";

import ContactItem from "components/ContactItem";
import { contactsSelectors } from "redux/contacts";
import { useGetContactsQuery } from "redux/contacts/contactsApi";
import { StyledList } from "./ContactList.style";

export default function ContactList() {
  const filter = useSelector(contactsSelectors.getFilter);
  const { data: contacts, isSuccess } = useGetContactsQuery();

  let filteredContactList = [];
  if (isSuccess) {
    filteredContactList = contacts.filter((contact) =>
      contact.name.toLowerCase().includes(filter.toLowerCase().trim())
    );
  }

  return (
    <StyledList>
      {contacts &&
        isSuccess &&
        filteredContactList.map((el) => {
          return <ContactItem key={el.id} contact={el} />;
        })}
    </StyledList>
  );
}
