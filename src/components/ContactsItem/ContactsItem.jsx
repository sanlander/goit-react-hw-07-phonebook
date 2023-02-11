import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/operations';
import { DeleteBtn, Div, DivInfo, ItemNumber } from './ContactsItem.modules';

export const ContactsItem = ({ contact, numberItems }) => {
  const { name, phone, id } = contact;
  const dispatch = useDispatch();

  return (
    <Div>
      <DivInfo>
        <ItemNumber>{numberItems}</ItemNumber>
        {name}, tel: {phone}
      </DivInfo>
      <div>
        <DeleteBtn type="button" onClick={() => dispatch(deleteContact(id))}>
          Delete
        </DeleteBtn>
      </div>
    </Div>
  );
};
