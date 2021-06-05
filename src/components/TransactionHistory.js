// История транзакций
// Необходимо создать компонент истории транзакций в личном кабинете интернет банка.

// Превью компонента TransactionHistory

// Данные для списка доступны в формате JSON в файле transactions.json. Это массив объектов, 
// каждый объект описывает одну транзакцию со следующими свойствами:

// id — уникальный идентификатор транзакции
// type — тип транзакции
// amount - сумма транзакции
// currency - тип валюты
// Описание компонента
// Необходимо создать компонент <TransactionHistory> принимающий один проп items - массив объектов транзакций 
// из transactions.json. Компонент создает разметку таблицы. Каждая транзакция это строка таблицы. 
// В примере приведена разметка двух транзакций.

import React from 'react';
import PropTypes from 'prop-types';
import Transaction from './Transac/Transaction';


const TransactionHistory = ({items}) => (
<table className="transaction-history">
  <thead>
    <tr>
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </tr>
  </thead>

  <tbody>
      {items.map(item => {
          const {type, amount, currency, id} = item
          return <tr key = {id} ><Transaction 
          type={type}
          amount={amount}
          currency={currency}
          id={id}
          />
        </tr>
      })}
      
  </tbody>
</table>
)

TransactionHistory.propTypes = {
items: PropTypes.arrayOf(
    PropTypes.shape({id: PropTypes.string.isRequired}).isRequired
).isRequired
}

export default TransactionHistory;