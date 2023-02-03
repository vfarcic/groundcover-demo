import http from 'k6/http';
import { sleep } from 'k6';

export const options = {
  vus: 100,
  duration: '60s',
};

export default function () {
  http.get('http://silly-demo.34.148.163.97.nip.io');
  sleep(1);
}
