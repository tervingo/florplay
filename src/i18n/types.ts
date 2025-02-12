export type Language = 'es' | 'en';

export interface Translation {
  nav: {
    inicio: string;
    trayectoria: string;
    proposito: string;
    proyecto: string;
    ubicacion: string;
  };
  inicio: {
    cita: string;
  };
  trayectoria: {
    titulo: string;
    actualidad: string;
    colegiada: string;
    master: string;
    osteopata: string;
    fisioterapeuta: string;
    anatomia: string;
    edufisica: string;
    especializacion: string;
  };
  proposito: {
    titulo: string;
    proposhead: string;
    propostext: string;
    enfoquehead: string;
    enfoquesubhead: string;
    enfoquetext: string;
    sabermas: string;
    stillquote: string;
    stillpopup: string;
    cajalquote: string;
    cajalpopup: string;
    integracionhead: string;
    integnaturhead: string;
    integnaturtext1: string;
    integnaturtext2: string;
    integnaturtext3: string;
    autocurhead: string;
    autocurtext1: string;
    autocurtext2: string;
    autocurtext3: string;
    integconsultahead: string;
    integconsultatext1: string;
    integconsultatext2: string;
  };
  proyecto: {
    titulo: string;
    proytext1: string;
    proytext2: string;
  };
  ubicacion:
  {
    titulo: string;
    transporte: string;
  };
}

export interface Translations {
  [key: string]: Translation;
}