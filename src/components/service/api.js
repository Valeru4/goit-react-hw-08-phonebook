import axios from 'axios';

const URL = 'https://64d4be6eb592423e46949d1b.mockapi.io/api/contacts/';

export const fetchContacts = async () => {
  const response = await axios.get(`${URL}contacts`);
  // console.log(response.data);

  return response.data;
};

export const postContacts = async contact => {
  const response = await axios.post(`${URL}contacts`, contact);
  // console.log(response.data);

  return response.data;
};

export const deleteContacts = async contactId => {
  const response = await axios.delete(`${URL}contacts/${contactId}`);
  // console.log(response.data);

  return response.data;
};
