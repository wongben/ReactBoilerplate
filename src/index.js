import React from 'react';
import ReactDOM from 'react-dom';
import StadiumTableView from './components/stadium/StadiumTableView'


const  dataSource = [
  {name: 'Ben',imageURL: 'https://godbasin.github.io/img/sun.png'},
  {name: 'Lily',imageURL: 'https://godbasin.github.io/img/sun.png'},
  {name: 'Apple',imageURL: 'https://godbasin.github.io/img/sun.png'}
];

ReactDOM.render(
  <StadiumTableView datasource={ dataSource } />,
  document.getElementById('app')
);
