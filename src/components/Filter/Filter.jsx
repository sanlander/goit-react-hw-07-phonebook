import { useDispatch } from 'react-redux';
import { textSearch } from 'redux/filtersReducer';
import { Div, Input, Label } from './Filter.modules';

export const Filter = () => {
  const dispatch = useDispatch();

  const onChangeFilter = e => {
    dispatch(textSearch(e.target.value));
  };
  return (
    <Div>
      <Label>
        Find contacts by name
        <br />
        <Input type="text" onChange={onChangeFilter} />
      </Label>
    </Div>
  );
};
