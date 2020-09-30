import React from 'react';

const CompletedListItem = ({ todoCompleted }) => {
  const date = new Date();
  return (
    <>
      <tr>
        <td>{todoCompleted.title}</td>
        <td>{todoCompleted.author}</td>
        <td>{todoCompleted.description}</td>
        <td>{`${date.getDate()}.${
          date.getMonth() + 1
        }.${date.getFullYear()}`}</td>
      </tr>
    </>
  );
};

export default CompletedListItem;
