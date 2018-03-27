import React from 'react';
import { Field } from 'redux-form';

export default function TodoAdder({ handleSubmit }) {
  return (
    <form onSubmit={handleSubmit}>
      <label>Title</label>
      <Field name="text" component="input" />
      <label>Description</label>
      <Field name="description" component="input" />
      <button>Add Todo</button>
    </form>
  );
}
