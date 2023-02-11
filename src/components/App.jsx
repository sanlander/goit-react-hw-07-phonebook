import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from 'redux/operations';
import { selectError, selectIsLoading } from 'redux/selectors';
import { ContactsList, ContactForm } from '../components';
import { ContactsHeader } from './ContactsHeader/ContactsHeader';
import { Layout } from './Layout/Layout';
import { Spinner } from './Spinner/Spinner.modules';

export function App() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Layout>
      <ContactForm />
      <ContactsHeader />
      <div>
        <ContactsList />

        {isLoading && !error && <Spinner />}
      </div>
    </Layout>
  );
}
