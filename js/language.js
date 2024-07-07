const idiomaRevisado = sessionStorage.getItem('idiomaRevisado');

if(navigator.language.includes("es") && (!idiomaRevisado || idiomaRevisado === null)){
    window.location.pathname = "/es/"
    sessionStorage.setItem('idiomaRevisado', true);
}