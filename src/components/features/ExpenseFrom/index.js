import React, { useEffect, useState } from 'react';
import {
  FormContainer,
  Title,
  FormGroup,
  Label,
  InputField,
  SubmitButton,
} from './styled.js';
const ExpenseForm = ({
  expenseData: editExpenseData,
  addExpenseListHandler,
  updatedExpenseHandler,
}) => {
  const [expenseData, setExpenseData] = useState({
    title: '',
    price: '',
    date: '',
  });

  useEffect(() => {
    // console.log('effect run');
    setExpenseData({
      title: editExpenseData?.title ?? '',
      price: editExpenseData?.price ?? '',
      date: editExpenseData?.date ?? '',
    });
  }, [editExpenseData]);

  const onChangeHandler = (e) => {
    // setExpenseData({ ...expenseData, [e.target.name]: e.target.value });
    setExpenseData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const submitHandler = (e) => {
    e.preventDefault();

    editExpenseData !== null
      ? updatedExpenseHandler({ id: editExpenseData?.id, ...expenseData })
      : addExpenseListHandler({
          id: Math.floor(Math.random() * 100),
          ...expenseData,
        });

    setExpenseData({
      title: '',
      price: '',
      date: '',
    });
  };
  return (
    <FormContainer onSubmit={submitHandler}>
      <Title>Expense Form</Title>
      <FormGroup>
        <Label htmlFor="title">Title</Label> <br />
        <InputField
          type="text"
          name="title"
          value={expenseData.title}
          onChange={onChangeHandler}
        />
      </FormGroup>
      <FormGroup>
        <Label htmlFor="price">Price</Label> <br />
        <InputField
          type="number"
          name="price"
          value={expenseData.price}
          onChange={onChangeHandler}
        />
      </FormGroup>
      <FormGroup>
        <Label htmlFor="date">Date</Label> <br />
        <InputField
          type="date"
          name="date"
          value={expenseData.date}
          onChange={onChangeHandler}
        />
      </FormGroup>

      <FormGroup>
        <SubmitButton type="submit">
          {editExpenseData !== null ? 'Update' : 'Submit'}
        </SubmitButton>
      </FormGroup>
    </FormContainer>
  );
};

export default ExpenseForm;
