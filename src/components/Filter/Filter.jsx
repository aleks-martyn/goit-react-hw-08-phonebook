import { useDispatch, useSelector } from 'react-redux';
import { selectFilter } from 'redux/filter/selectors';
import { setFilter } from 'redux/filter/filterSlice';
import { Wrap, FilterLabel, Text } from './Filter.styled';

export const Filter = () => {
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();

  const handleChange = event =>
    dispatch(setFilter(event.currentTarget.value.trim()));

  return (
    <Wrap>
      <FilterLabel>
        <Text>Find contacts by name</Text>
        <input type="text" value={filter} onChange={handleChange} />
      </FilterLabel>
    </Wrap>
  );
};
