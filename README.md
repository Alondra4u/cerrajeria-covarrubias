# Cerrajería Covarrubias

Sitio web para un negocio familiar de cerrajería con cuatro sucursales en Gómez Palacio, Torreón y Durango. Desarrollé este proyecto como un caso práctico para presentar sus servicios y facilitar que los clientes encuentren y contacten la sucursal que necesitan.

## Funcionalidades

- Página principal con presentación del negocio y servicios automotrices, residenciales y comerciales.
- Página independiente para cada sucursal.
- Contacto mediante llamadas, WhatsApp y Facebook.
- Direcciones, horarios y mapas de ubicación por sucursal.
- Diseño adaptable a celulares y computadoras, con identidad visual en azul marino y dorado.
- Iconos SVG para mantener una apariencia uniforme entre dispositivos.

## Tecnologías

HTML5, CSS3 y JavaScript, sin frameworks ni dependencias externas. Los mapas se integran mediante Google Maps.

## Organización del proyecto

```text
index.html          Página principal
sucursales/         Páginas de las cuatro sucursales
css/estilos.css     Estilos compartidos y diseño adaptable
js/configuracion.js Datos de contacto, horarios y ubicaciones
js/contacto.js      Presentación de datos e interacciones de contacto
img/                Recursos gráficos del negocio
```

Los datos de cada sucursal están centralizados en un archivo de configuración, mientras que todas las páginas comparten la hoja de estilos y la lógica de contacto.

