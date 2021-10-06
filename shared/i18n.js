import i18next from 'i18next';

function init(lang) {
  
  return i18next.init({
    lng: lang, // if you're using a language detector, do not define the lng option
    debug: true,
    resources: {
      en: {
        translation: {
          "greeting":"Welcome {{user}}",
          "lbl_user":"user",
          "lbl_my_companies":"My companies",
        }
      },
      es: {
      	translation:{
      		"greeting":"Bienvenid@ {{user}}",
      		"lbl_user":"usuario",
          "lbl_my_companies":"Mis empresas",
        }
      }
    }
  });
}




export default init;
