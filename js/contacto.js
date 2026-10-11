/* Aplica datos y enlaces de la sucursal abierta. */
const sucursalActual = document.body.dataset.sucursal;
const datos = configuracionSucursales[sucursalActual];
function enlaceSeguro(enlace) {
  try { const url = new URL(enlace); return url.protocol === 'https:' ? url : null; }
  catch { return null; }
}
function mapaValido(enlace) {
  const url = enlaceSeguro(enlace);
  return url && ['www.google.com', 'maps.google.com'].includes(url.hostname) &&
    (url.pathname.startsWith('/maps/embed') || (url.pathname === '/maps' && url.searchParams.get('output') === 'embed'));
}

if (datos) {
  document.querySelectorAll('[data-texto]').forEach((elemento) => {
    elemento.textContent = datos[elemento.dataset.texto] || 'Consulta con la sucursal';
  });
  document.querySelectorAll('[data-horarios]').forEach((contenedor) => {
    const horarios = Array.isArray(datos.horarios) ? datos.horarios : [];
    contenedor.replaceChildren();
    if (!horarios.length) { contenedor.textContent = 'Consulta nuestros horarios'; return; }
    horarios.forEach((horario) => {
      const columna = document.createElement('div');
      columna.className = 'horario-columna';
      const dias = document.createElement('span');
      dias.className = 'horario-dias';
      dias.textContent = horario.dias;
      const horas = document.createElement('span');
      horas.className = 'horario-horas';
      horas.textContent = horario.horas;
      columna.append(dias, horas);
      contenedor.append(columna);
    });
  });
  const telefonos = [...new Set((datos.telefonos || [datos.telefono])
    .map((telefono) => String(typeof telefono === 'object' ? telefono.numero : telefono).replace(/\D/g, ''))
    .filter((numero) => /^\d{10}$/.test(numero)))];
  document.querySelectorAll('[data-telefonos]').forEach((contenedor) => {
    contenedor.replaceChildren();
    telefonos.forEach((numero) => {
      const link = document.createElement('a');
      link.href = 'tel:+52' + numero;
      link.textContent = numero.replace(/^(\d{3})(\d{3})(\d{4})$/, '$1 $2 $3');
      contenedor.append(link);
    });
    if (!telefonos.length) contenedor.textContent = 'Consulta nuestros teléfonos';
  });
  document.querySelectorAll('[data-llamada]').forEach((link) => {
    if (telefonos.length) link.href = 'tel:+52' + telefonos[0];
    else link.removeAttribute('href');
  });
  document.querySelectorAll('[data-red]').forEach((link) => {
    const url = enlaceSeguro(datos[link.dataset.red]);
    if (url) { link.href = url.href; link.target = '_blank'; link.rel = 'noopener noreferrer'; }
    else link.removeAttribute('href');
    link.setAttribute('aria-label', link.textContent + ' (abre otra pestaña)');
    if (link.hasAttribute('data-facebook-nombre')) link.textContent = datos.facebookNombre || 'Visita nuestra página';
  });
  const mapa = document.querySelector('.mapa-sucursal iframe');
  const abrirMapa = document.querySelector('.mapa-sucursal > a');
  if (abrirMapa && enlaceSeguro(datos.mapaEnlace)) abrirMapa.href = datos.mapaEnlace;
  if (mapa && mapaValido(datos.mapaInsertado)) {
    // Evita volver a cargar el iframe si el generador ya puso la misma URL.
    if (mapa.getAttribute('src') !== datos.mapaInsertado) mapa.src = datos.mapaInsertado;
  }
  else if (mapa) console.warn('El enlace corto va en mapaEnlace; mapaInsertado requiere la URL para insertar.');
}
