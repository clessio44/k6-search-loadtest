import { Trend, Counter, Rate } from 'k6/metrics';

export const tempoBusca = new Trend('tempo_buscador');
export const errosBusca = new Counter('erros_buscador');
export const taxaSucesso = new Rate('taxa_sucesso');
