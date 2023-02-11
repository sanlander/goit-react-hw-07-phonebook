import { FormBox, Label, Input, Button, Error } from './ContactForm.modules';
import { Formik, ErrorMessage } from 'formik';
import * as yup from 'yup';
import 'yup-phone';
import { Notify } from 'notiflix';
import { useDispatch, useSelector } from 'react-redux';
import { selectContacts } from 'redux/selectors';
import { addContact } from '../../redux/operations';

const schema = yup.object().shape({
  name: yup.string().min(2).required('Required field'),
  phone: yup.string().phone('UA', true, `Phone is invalid`),
});

const initialValues = {
  name: '',
  phone: '',
};

export const ContactForm = () => {
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();

  const handleFormSubmit = (values, actions) => {
    const { name, phone } = values;
    const submitName = name.toLowerCase();

    if (contacts.find(({ name }) => submitName === name.toLowerCase())) {
      Notify.warning(`${name} is already in contacts.`, {
        position: 'center-top',
      });
      
      return;
    }

    dispatch(addContact({ submitName, phone }));

    actions.resetForm();
  };

  return (
    <div>
      <h1>Phonebook</h1>
      <Formik
        initialValues={initialValues}
        validationSchema={schema}
        onSubmit={handleFormSubmit}
      >
        <FormBox autoComplete="off">
          <Label htmlFor="name">
            Enter your name
            <br />
            <Input
              id="name"
              type="text"
              name="name"
              placeholder="Enter your name"
            />
            <br />
            <ErrorMessage component={Error} name="name" />
          </Label>
          <br />
          <Label htmlFor="phone">
            Enter your number
            <br />
            <Input
              id="phone"
              type="tel"
              name="phone"
              placeholder="+38 067 122 22 88"
            />
            <br />
            <ErrorMessage component={Error} name="phone" />
          </Label>
          <br />
          <Button type="submit">Add contact</Button>
        </FormBox>
      </Formik>
    </div>
  );
};
