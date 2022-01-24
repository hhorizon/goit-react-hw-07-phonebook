import { Toaster } from "react-hot-toast";

import Container from "components/Container";
import Section from "components/Section";
import ContactForm from "components/ContactForm";
import Filter from "components/Filter";
import ContactList from "components/ContactList";

function App() {
  return (
    <Container>
      <Section title="Phonebook">
        <ContactForm />
      </Section>

      <Section title="Contacts">
        <Filter />
        <ContactList />
      </Section>

      <Toaster position="top-right" reverseOrder={false} />
    </Container>
  );
}

export default App;
