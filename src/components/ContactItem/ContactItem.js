import propTypes from "prop-types";
import toast from "react-hot-toast";

import { useDeleteContactMutation } from "redux/contacts/contactsApi";
import { StyledItem, StyledText, StyledButton } from "./ContactItem.style";

export default function ContactItem({ contact }) {
  const { id, name, number } = contact;
  const [deleteContact, { isLoading }] = useDeleteContactMutation();

  const handleDelete = async (id) => {
    try {
      await deleteContact(id);
      toast.success(`${name} was deleted.`);
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <StyledItem>
      <StyledText>
        {name}: {number}
      </StyledText>
      <StyledButton type="button" onClick={() => handleDelete(id)}>
        {isLoading ? "Deleting..." : "Delete"}
      </StyledButton>
    </StyledItem>
  );
}

ContactItem.propTypes = {
  contact: propTypes.object,
};
