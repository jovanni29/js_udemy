const metodoPago = '';

switch (metodoPago) {
    case 'tarjeta':
        console.log('Pagaste con tarjeta');
        break;
    case 'cheque':
        console.log('Pagaste con cheque');
        break;
    case 'efectivo':
        console.log('Pagaste en efectivo');
        break;
    default:
        console.log('Aun no has pagado');
        break;
}