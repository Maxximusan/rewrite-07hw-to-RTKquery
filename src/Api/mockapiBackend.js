import axios from 'axios';

axios.defaults.baseURL = 'https://63a2db089704d18da07e574d.mockapi.io';

export async function fetchContacts() {
  const response = await axios.get('/contacts');
  return response.data;
}

export async function addContact(contact) {
  const { data } = await axios.post('/contacts', contact);
  return data;
}

export async function deleteContact(contactId) {
  const { data } = await axios.delete(`/contacts/${contactId}`);
  return data;
}
