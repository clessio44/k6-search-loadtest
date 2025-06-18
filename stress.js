import { options } from './config.js';
import { buscarHoteisComToken } from './tests/search.js';

export { options };

export default function () {
  buscarHoteisComToken();
}
