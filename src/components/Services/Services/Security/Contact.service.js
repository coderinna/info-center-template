import { client, gql } from './../../Server/services.js'; 

const createDMCA = async (contactData) => {

 if (!contactData) {  return; }

  try  {
    const SIGN_UP_MUTATION = gql`
  mutation CreateDMCA( $contactData: ContactObject!) {
    createDMCA(contactData: $contactData) {
res
    }
  }
`;

  const variables = { contactData};
  
    const { data } = await client.mutate({
      mutation: SIGN_UP_MUTATION,
      variables,
  fetchPolicy: "no-cache",
    });

    if (data.createDMCA) {
      return data.createDMCA;

    } else {
      throw new Error('Sign-in failed: No signIn data returned.');
    }
  } catch (error) {
    throw new Error(error.message || 'Error signing in.');
  }
};

const createContact = async ( contactData) => {

 if (!contactData) {  return; }
 
  try  {
    const SIGN_UP_MUTATION = gql`
  mutation CreateContact( $contactData: ContactObject!) {
    createContact(contactData: $contactData) {
res
    }
  }
`;

  const variables = {contactData};
  
    const { data } = await client.mutate({
      mutation: SIGN_UP_MUTATION,
      variables,
  fetchPolicy: "no-cache",
    });

    if (data.createContact) {
      return data.createContact;

    } else {
      throw new Error('Sign-in failed: No signIn data returned.');
    }
  } catch (error) {
    throw new Error(error.message || 'Error signing in.');
  }
};



export default {
createContact,
createDMCA
};
