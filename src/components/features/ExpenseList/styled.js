import styled from 'styled-components';

export const ExpenseItem = styled.li`
  width: 100%;
  list-style: none;
  background-color: #f9f9f9;
  border: 1px solid #ddd;
  padding: 10px;
  margin: 5px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ExpenseDate = styled.div`
  flex: 1;
  margin-right: 10px;
`;

export const ExpenseTitle = styled.div`
  flex: 2;
  margin-right: 10px;
`;

export const ExpensePrice = styled.div`
  flex: 1;
  margin-right: 10px;
`;

export const EditButton = styled.button`
  background-color: #007bff;
  color: #fff;
  border: none;
  padding: 5px 10px;
  cursor: pointer;
  margin-right: 5px;

  &:hover {
    background-color: #0056b3;
  }
`;

export const DeleteButton = styled.button`
  background-color: #ff3333;
  color: #fff;
  border: none;
  padding: 5px 10px;
  cursor: pointer;

  &:hover {
    background-color: #ff0000;
  }
`;
