// Секция статистики
// Создать компонет <Statistics>, который бы отображал статистику по переданным пропам.
// К примеру загрузки в облако по типу файлов, посещение веб-страницы пользователями разных стран, финансовые траты и т. п.
//  Данные о статистике лежат в файле statistical-data.json.

//  Описание компонента
//  Компонент должен принимать два пропа title и stats, в которых указывается заголовок и объект статистики.
 
//  title - не обязателен, и если он не передан, не должна рендериться разметка заголовка <h2>.
//  stats - массив объектов содержащих информацию о элементе статистики. Может иметь произвольное кол-во элементов.
//  Цвет фона элемента статистики в оформлении можно пропустить, либо создать функцию для генерации случайного цвета.



import React from 'react';
import PropTypes from 'prop-types';
import './Statistics.css';

const Statistics = ({title, stats}) => {
  return <section className= "statistics">

    {title && <h2 className="statistics__title">{title}</h2>}
  
    <ul className="statistics__list">
      {stats.map(item => {
        const{id, label, percentage} = item
        return <li className=".statistics__item" key={id} >
        <span className="label">{label}</span>
        <span className="percentage">{percentage}%</span>
      </li>
})}
    </ul>
  </section>
};

Statistics.defaultProps = {
  title: 'Statistics:',
};


Statistics.propTypes = { 
  title: PropTypes.string, 
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }),
  ).isRequired,
};

export default Statistics;