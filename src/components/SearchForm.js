import React, { useState } from "react";
import {Form, Field, withFormik} from 'formik';
import CharacterList from './CharacterList';

function SearchForm({ values, status }) {
  return (
    <section className='search-bar'>
      <Form>
        <Field type='text' name='search' placeholder='Search for a character' />
        <button type='submit'>Search</button>
      </Form>
    </section>
  );
}

const formikHOC = withFormik({
  mapPropsToValues({ search }) {
      return {
          search: search || ''
      };
  },

  handleSubmit(values, { setStatus }) {
      setStatus(values.search);
     
  },
});

const SearchFormWithFormik = formikHOC(SearchForm);

export default SearchFormWithFormik;