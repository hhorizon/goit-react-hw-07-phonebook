import { useState } from "react";
import toast from "react-hot-toast";

import {
  useGetContactsQuery,
  useAddContactMutation,
} from "redux/contacts/contactsApi";
import {
  StyledForm,
  StyledLabel,
  StyledInput,
  StyledButton,
} from "./ContactForm.style";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const { data: contacts } = useGetContactsQuery("", {
    skip: name === "",
  });
  const [addContact, { isLoading: isAddingContact }] = useAddContactMutation();

  const handleChangeInput = (event) => {
    const { name, value } = event.target;

    switch (name) {
      case "name":
        setName(value);
        break;

      case "number":
        setNumber(value);
        break;

      default:
        break;
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const newContact = { name, number };

    if (contacts.find((contact) => contact.name === name)) {
      toast.error(`${name} is already in contacts.`);
      return;
    }

    try {
      await addContact(newContact);
      toast.success(`${name} was added to your contacts.`);
      setName("");
      setNumber("");
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <StyledForm onSubmit={handleSubmit}>
      <StyledLabel>
        Name
        <StyledInput
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          value={name}
          onChange={handleChangeInput}
        />
      </StyledLabel>

      <StyledLabel>
        Number
        <StyledInput
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          value={number}
          onChange={handleChangeInput}
        />
      </StyledLabel>

      <StyledButton type="submit">
        {isAddingContact ? "Adding..." : "Add contacts"}
      </StyledButton>
    </StyledForm>
  );
}
