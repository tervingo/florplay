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
    vid1: string;
    vid2: string;
    vid3: string;
    vid4: string;
    vid5: string;
    vid6: string;
    vid7: string;
  };
  ubicacion:
  {
    titulo: string;
    transporte: string;
  };
  cookies: {
    mensaje: string;
    aceptar: string;
    rechazar: string;
    politica: string;
    titulo: string;
    quesonhead: string;
    quesontext: string;
    tiposhead: string;
    necesarias: string;
    necesariastext: string;
    preferencias: string;
    preferenciastext: string;
    estadisticas: string;
    estadisticastext: string;
    marketing: string;
    marketingtext: string;
    gestionhead: string;
    gestiontext: string;
    actualizacioneshead: string;
    actualizacionestext: string;
    analiticas: string;
    analiticastext: string;

  }
}

export interface Translations {
  [key: string]: Translation;
}