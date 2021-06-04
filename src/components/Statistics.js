import React from 'react';
import PropTypes from 'prop-types';
// import stats from '../data/statistical-data.json';

const Statistics = ({title, stats}) => (
    <ul>
      {stats.map((item, label, percentage) => (
      <li key={item.id} class="item" >
        <span class="label">{item.label}</span>
        <span class="percentage">{item.percentage}%</span>
      </li>
      ))};
    </ul>
);

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