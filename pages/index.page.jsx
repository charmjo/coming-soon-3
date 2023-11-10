import config from '../package.json';
import {getSupportedLanguage} from 'diy-pwa'; 
const documentProps = {
    title: "Bonjour",
    description: "J'mapelle Charm",
    lang: 'en',
    dir: 'ltr',
    isSPA: true
  };

function Page(props){
    const sLang = getSupportedLanguage(config);
    window.location.replace(sLang);
    return(
        <>
        moved permanently
        </>
    )
}

export { Page, documentProps }