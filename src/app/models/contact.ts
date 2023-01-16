export class Contact {
  id: string;
  num: 0;
  nombre: string;
  autor: string;
  valoracion =0;
  resumen: string;
  categoria: LibroCategory;
}

export enum LibroCategory {
  FANTASIA = "Fantasia",
  ROMANTICO= "Romántico",
  SUPERACION = 'Superación Personal',
  TERROR = 'Terror',
  POLICIALES = 'Policiales', 
  HISTORICOS = 'Historia',
  MISTERIO = 'Misterio',
  POESIA = 'Poesia'

}
