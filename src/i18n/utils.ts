export const languages = {
    es: 'Español',
    en: 'English'
  };
  
  export function getLanguageFromURL(pathname: string) {
    const langCodeMatch = pathname.match(/\/([a-z]{2})\//);
    return langCodeMatch ? langCodeMatch[1] : 'es';
  }
  
  export function translatePath(path: string, targetLang: string) {
    const basePath = '/florplay';
    const cleanPath = path.replace('/florplay', '').replace(/^\/[a-z]{2}\//, '/');
    
    if (targetLang === 'es') {
      return `${basePath}${cleanPath}`;
    }
    return `${basePath}/${targetLang}${cleanPath}`;
  }