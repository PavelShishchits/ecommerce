import {combineReducers} from 'redux';
import catalogR from './catalogR';
import {prodListR} from './prodListR';
import productR from './productR';
import basketR from './basketR';

export default combineReducers({
  catalog: catalogR,
  prodList: prodListR,
  productPage: productR,
  basket: basketR
});