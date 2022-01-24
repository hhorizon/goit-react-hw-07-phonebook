import { useSelector, useDispatch } from "react-redux";

import { contactsActions, contactsSelectors } from "redux/contacts";
import { StyledLabel, StyledInput } from "./Filter.style";

export default function Filter() {
  const filter = useSelector(contactsSelectors.getFilter);
  const dispatch = useDispatch();

  return (
    <StyledLabel>
      Find contacts by name
      <StyledInput
        type="text"
        name="filter"
        value={filter}
        onChange={(e) => dispatch(contactsActions.changeFilter(e.target.value))}
      />
    </StyledLabel>
  );
}
