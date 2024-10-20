export const separarParrafos = (texto) => {
    let parrafos = texto.split('\n')
    parrafos = parrafos.filter(parrafo => parrafo)
    return parrafos
}