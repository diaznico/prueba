

mapboxgl.accessToken = 'pk.eyJ1Ijoibmljb2RpYXotMjEyIiwiYSI6ImNsN2oxeHd5bTBjczQ0Mm85OWE3d25sNmIifQ.QZOdwyGdQpjR46U0rvFVNw';


// DEFINO QUE TIPO DE MAPA BASE QUIERO PARA AMBOS LADOS DE LA COMPARACION

const beforeMap = new mapboxgl.Map({
    container: "before",
    style: 'mapbox://styles/mapbox/dark-v11',
    center: [-58.314463, -34.730134],
    pitch: 60,
    bearing: 240, // grados de rotación 
    zoom: 16,
});

const afterMap = new mapboxgl.Map({
    container: "after",
    style: 'mapbox://styles/mapbox/dark-v11',
    center: [-58.314463, -34.730134],
    pitch: 60,
    bearing: 240, // grados de rotación 
    zoom: 16,
    
});


// DEFINO CONTENIDO DEL BEFORE


beforeMap.on("load", () => {

    beforeMap.addLayer({
        id: 'tileset-layer',
        type: 'raster',
        renderWorldCopies: false, // <----
        source: {
          type: 'raster',
          tiles: [
            'prueba/PRUEBA_2.mbtiles'
          ],
        }
    })

    beforeMap.addSource("curva maestra", {
        type: "geojson",
        data: "https://raw.githubusercontent.com/diaznico/data_geojson/main/GEOJSON_FINEXCOR/ALTI_VIALIDAD/CURVA_MAESTRA.geojson",
    });

    beforeMap.addLayer({
        type: 'line',
        source: 'curva maestra',
        id: 'curva maestra',
        paint: {
            'line-color': 'yellow',
            'line-width': 4,
            'line-opacity': 0.4
        },
    });


    // ***********************************************************************


    beforeMap.addSource("curva secundaria", {
        type: "geojson",
        data: "https://raw.githubusercontent.com/diaznico/data_geojson/main/GEOJSON_FINEXCOR/ALTI_VIALIDAD/CURVA_SECUNDARIA_1.geojson",
    });

    beforeMap.addLayer({
        type: 'line',
        source: 'curva secundaria',
        id: 'curva secundaria',
        lineMetrics: true,  // Asegúrate de incluir esta línea
        paint: {
          'line-color': 'red',
          'line-width': 2,
          'line-opacity': 0.4
        },
    });


    // ***********************************************************************


    beforeMap.addSource("curva secundarias", {
        type: "geojson",
        data: "https://raw.githubusercontent.com/diaznico/data_geojson/main/GEOJSON_FINEXCOR/ALTI_VIALIDAD/CURVA_SECUNDARIA_2.geojson",
    });

    beforeMap.addLayer({
        type: 'line',
        source: 'curva secundarias',
        id: 'curva secundarias',
        paint: {
            'line-color': 'red',
            'line-width': 2,
            'line-opacity': 0.4
        },
    });


    // ***********************************************************************


    beforeMap.addSource("arroyo", {
        type: "geojson",
        data: "https://raw.githubusercontent.com/diaznico/data_geojson/main/GEOJSON_FINEXCOR/ALTI_VIALIDAD/ARROYO_FINEXCOR.geojson",
    });

    beforeMap.addLayer({
        type: 'line',
        source: 'arroyo',
        id: 'arroyo',
        paint: {
            'line-color': 'blue',
            'line-width': 5,
            'line-opacity': 0.4
        },
    });


    // ***********************************************************************


    beforeMap.addSource("cordon", {
        type: "geojson",
        data: "https://raw.githubusercontent.com/diaznico/data_geojson/main/GEOJSON_FINEXCOR/ALTI_VIALIDAD/CORDON_FINEXCOR.geojson",
    });

    beforeMap.addLayer({
        type: 'line',
        source: 'cordon',
        id: 'cordon',
        paint: {
            'line-color': 'green',
            'line-width': 5,
            'line-opacity': 0.4
        },
    });


    // ***********************************************************************


    beforeMap.addSource("eje calle", {
        type: "geojson",
        data: "https://raw.githubusercontent.com/diaznico/data_geojson/main/GEOJSON_FINEXCOR/ALTI_VIALIDAD/EJE_CALLE_FINEXCOR.geojson",
    });

    beforeMap.addLayer({
        type: 'line',
        source: 'eje calle',
        id: 'eje calle',
        paint: {
            'line-color': 'purple',
            'line-width': 5,
            'line-opacity': 0.4
        },
    });


    // ***********************************************************************

    beforeMap.addSource("pasillos", {
        type: "geojson",
        data: "https://raw.githubusercontent.com/diaznico/data_geojson/main/GEOJSON_FINEXCOR/ALTI_VIALIDAD/PASILLO_FINEXCOR.geojson",
        });
  
      beforeMap.addLayer({
      id: "pasillos",
      type: "fill-extrusion",
      source: "pasillos",
      paint: {
          // Get the `fill-extrusion-color` from the source `color` property.
          "fill-extrusion-color": ["get", "color"],
  
          // Get `fill-extrusion-height` from the source `height` property.
          "fill-extrusion-height": ["get", "height"],
  
          // Get `fill-extrusion-base` from the source `base_height` property.
          "fill-extrusion-base": ["get", "base_height"],
  
          // Make extrusions slightly opaque to see through indoor walls.
          "fill-extrusion-opacity": 0.7,
      },
      });



    // ***********************************************************************


    beforeMap.addSource("eje pasillo", {
        type: "geojson",
        data: "https://raw.githubusercontent.com/diaznico/data_geojson/main/GEOJSON_FINEXCOR/ALTI_VIALIDAD/EJE_PASILLO_FINEXCOR.geojson",
    });

    beforeMap.addLayer({
        type: 'line',
        source: 'eje pasillo',
        id: 'eje pasillo',
        paint: {
            'line-color': 'purple',
            'line-width': 3,
            'line-opacity': 0.9
        },
    });

});



// --------------------------------------------------------------------------------------------

// DEFINO CONTENIDO DEL AFTER

afterMap.on("load", () => {


    afterMap.addSource("macizo", {
    type: "geojson",
    data: "https://raw.githubusercontent.com/diaznico/data_geojson/main/GEOJSON_FINEXCOR/CARTOGRAFIA/MACIZO_FINEXCOR.geojson",
    });

    afterMap.addLayer({
    id: "macizo",
    type: "fill-extrusion",
    source: "macizo",
    paint: {
        // Get the `fill-extrusion-color` from the source `color` property.
        "fill-extrusion-color": ["get", "color"],

        // Get `fill-extrusion-height` from the source `height` property.
        "fill-extrusion-height": ["get", "height"],

        // Get `fill-extrusion-base` from the source `base_height` property.
        "fill-extrusion-base": ["get", "base_height"],

        // Make extrusions slightly opaque to see through indoor walls.
        "fill-extrusion-opacity": 0.3,
    },
    });


    // SE DEFINE CODIGO PARA MOSTRAR INFORMACIONDE UN LAYER

    afterMap.on('click', 'macizo', (e) => {
        const features = afterMap.queryRenderedFeatures(e.point, {
          layers: ['macizo'] 
        });
      
        if (features.length > 0) {
          const polygonName = features[0].properties.color; 
      
          new mapboxgl.Popup()
            .setLngLat(e.lngLat) 
            .setHTML(`color: ${polygonName}`)
            .addTo(afterMap);
        }
    });


    // ****************************************************************************

    afterMap.addSource("deslinde", {
        type: "geojson",
        data: "https://raw.githubusercontent.com/diaznico/data_geojson/main/GEOJSON_FINEXCOR/CARTOGRAFIA/DESLINDE_FINEXCOR.geojson",
        });
  
      afterMap.addLayer({
      id: "deslinde",
      type: "fill-extrusion",
      source: "deslinde",
      paint: {
          // Get the `fill-extrusion-color` from the source `color` property.
          "fill-extrusion-color": ["get", "color"],
  
          // Get `fill-extrusion-height` from the source `height` property.
          "fill-extrusion-height": ["get", "height"],
  
          // Get `fill-extrusion-base` from the source `base_height` property.
          "fill-extrusion-base": ["get", "base_height"],
  
          // Make extrusions slightly opaque to see through indoor walls.
          "fill-extrusion-opacity": 0.7,
      },
      });


    // SE DEFINE CODIGO PARA MOSTRAR INFORMACIONDE UN LAYER

    afterMap.on('click', 'deslinde', (e) => {
        const features = afterMap.queryRenderedFeatures(e.point, {
          layers: ['deslinde'] 
        });
      
        if (features.length > 0) {
          const polygonColor = features[0].properties.color;
          const polygonHeight = features[0].properties.height;
          
          const html = `
                <div>
                    <p><b>name</b>: ${polygonColor}</p>
                    <p><b>id</b>: ${polygonHeight}</p> 
                </div>
                `;
                    
          new mapboxgl.Popup()
            .setLngLat(e.lngLat) 
            .setHTML(html)
            .addTo(afterMap);
        }
    });      

    // ****************************************************************************

    afterMap.addSource("espacio_interno", {
        type: "geojson",
        data: "https://raw.githubusercontent.com/diaznico/data_geojson/main/GEOJSON_FINEXCOR/CARTOGRAFIA/ESPACIO_INTERNO_FINEXCOR.geojson",
        });
  
      afterMap.addLayer({
      id: "espacio_interno",
      type: "fill-extrusion",
      source: "espacio_interno",
      paint: {
          // Get the `fill-extrusion-color` from the source `color` property.
          "fill-extrusion-color": ["get", "color"],
  
          // Get `fill-extrusion-height` from the source `height` property.
          "fill-extrusion-height": ["get", "height"],
  
          // Get `fill-extrusion-base` from the source `base_height` property.
          "fill-extrusion-base": ["get", "base_height"],
  
          // Make extrusions slightly opaque to see through indoor walls.
          "fill-extrusion-opacity": 0.7,
      },
      });


    // SE DEFINE CODIGO PARA MOSTRAR INFORMACIONDE UN LAYER

    afterMap.on('click', 'espacio_interno', (e) => {
        const features = afterMap.queryRenderedFeatures(e.point, {
          layers: ['espacio_interno'] 
        });
      
        if (features.length > 0) {
          const polygonName = features[0].properties.color; 
      
          new mapboxgl.Popup()
            .setLngLat(e.lngLat) 
            .setHTML(polygonName)
            .addTo(afterMap);
        }
    });

    // ****************************************************************************

    afterMap.addSource("edificaciones", {
      type: "geojson",
      data: "https://raw.githubusercontent.com/diaznico/data_geojson/main/GEOJSON_FINEXCOR/CARTOGRAFIA/EDIFICACIONES.geojson",
      });

    afterMap.addLayer({
    id: "edificaciones",
    type: "fill-extrusion",
    source: "edificaciones",
    paint: {
        // Get the `fill-extrusion-color` from the source `color` property.
        "fill-extrusion-color": ["get", "color"],

        // Get `fill-extrusion-height` from the source `height` property.
        "fill-extrusion-height": ["get", "height"],

        // Get `fill-extrusion-base` from the source `base_height` property.
        "fill-extrusion-base": ["get", "base_height"],

        // Make extrusions slightly opaque to see through indoor walls.
        "fill-extrusion-opacity": 0.7,
    },
    });


    // SE DEFINE CODIGO PARA MOSTRAR INFORMACIONDE UN LAYER

    afterMap.on('click', 'edificaciones', (e) => {
        const features = afterMap.queryRenderedFeatures(e.point, {
          layers: ['edificaciones'] 
        });
      
        if (features.length > 0) {
          const polygonName = features[0].properties.color; 
      
          new mapboxgl.Popup()
            .setLngLat(e.lngLat) 
            .setHTML(polygonName)
            .addTo(afterMap);
        }
    });

    // ****************************************************************************

    afterMap.addSource("semicubierto", {
        type: "geojson",
        data: "https://raw.githubusercontent.com/diaznico/data_geojson/main/GEOJSON_FINEXCOR/CARTOGRAFIA/SEMICUBIERTO.geojson",
        });
  
    afterMap.addLayer({
    id: "semicubierto",
    type: "fill-extrusion",
    source: "semicubierto",
    paint: {
        // Get the `fill-extrusion-color` from the source `color` property.
        "fill-extrusion-color": ["get", "color"],

        // Get `fill-extrusion-height` from the source `height` property.
        "fill-extrusion-height": ["get", "height"],

        // Get `fill-extrusion-base` from the source `base_height` property.
        "fill-extrusion-base": ["get", "base_height"],

        // Make extrusions slightly opaque to see through indoor walls.
        "fill-extrusion-opacity": 0.7,
    },
    });

    // SE DEFINE CODIGO PARA MOSTRAR INFORMACIONDE UN LAYER

    afterMap.on('click', 'semicubierto', (e) => {
        const features = afterMap.queryRenderedFeatures(e.point, {
          layers: ['semicubierto'] 
        });
      
        if (features.length > 0) {
          const polygonName = features[0].properties.color; 
      
          new mapboxgl.Popup()
            .setLngLat(e.lngLat) 
            .setHTML(polygonName)
            .addTo(afterMap);
        }
    });
    // ****************************************************************************

    afterMap.addSource("piscina", {
        type: "geojson",
        data: "https://raw.githubusercontent.com/diaznico/data_geojson/main/GEOJSON_FINEXCOR/CARTOGRAFIA/PISCINA.geojson",
        });
  
    afterMap.addLayer({
    id: "piscina",
    type: "fill-extrusion",
    source: "piscina",
    paint: {
        // Get the `fill-extrusion-color` from the source `color` property.
        "fill-extrusion-color": ["get", "color"],

        // Get `fill-extrusion-height` from the source `height` property.
        "fill-extrusion-height": ["get", "height"],

        // Get `fill-extrusion-base` from the source `base_height` property.
        "fill-extrusion-base": ["get", "base_height"],

        // Make extrusions slightly opaque to see through indoor walls.
        "fill-extrusion-opacity": 0.7,
    },
    });


    // SE DEFINE CODIGO PARA MOSTRAR INFORMACIONDE UN LAYER

    afterMap.on('click', 'piscina', (e) => {
        const features = afterMap.queryRenderedFeatures(e.point, {
          layers: ['piscina'] 
        });
      
        if (features.length > 0) {
          const polygonName = features[0].properties.color; 
      
          new mapboxgl.Popup()
            .setLngLat(e.lngLat) 
            .setHTML(polygonName)
            .addTo(afterMap);
        }
    });

    // ****************************************************************************

    afterMap.addSource("galpon", {
        type: "geojson",
        data: "https://raw.githubusercontent.com/diaznico/data_geojson/main/GEOJSON_FINEXCOR/CARTOGRAFIA/GALPON.geojson",
        });
  
    afterMap.addLayer({
    id: "galpon",
    type: "fill-extrusion",
    source: "galpon",
    paint: {
        // Get the `fill-extrusion-color` from the source `color` property.
        "fill-extrusion-color": ["get", "color"],

        // Get `fill-extrusion-height` from the source `height` property.
        "fill-extrusion-height": ["get", "height"],

        // Get `fill-extrusion-base` from the source `base_height` property.
        "fill-extrusion-base": ["get", "base_height"],

        // Make extrusions slightly opaque to see through indoor walls.
        "fill-extrusion-opacity": 0.7,
    },
    });

    // SE DEFINE CODIGO PARA MOSTRAR INFORMACIONDE UN LAYER

    afterMap.on('click', 'galpon', (e) => {
        const features = afterMap.queryRenderedFeatures(e.point, {
          layers: ['galpon'] 
        });
      
        if (features.length > 0) {
          const polygonName = features[0].properties.color; 
      
          new mapboxgl.Popup()
            .setLngLat(e.lngLat) 
            .setHTML(polygonName)
            .addTo(afterMap);
        }
    });

    // ****************************************************************************

    afterMap.addSource("en construccion", {
        type: "geojson",
        data: "https://raw.githubusercontent.com/diaznico/data_geojson/main/GEOJSON_FINEXCOR/CARTOGRAFIA/EN_CONSTRUCCION.geojson",
        });
  
    afterMap.addLayer({
    id: "en construccion",
    type: "fill-extrusion",
    source: "en construccion",
    paint: {
        // Get the `fill-extrusion-color` from the source `color` property.
        "fill-extrusion-color": ["get", "color"],

        // Get `fill-extrusion-height` from the source `height` property.
        "fill-extrusion-height": ["get", "height"],

        // Get `fill-extrusion-base` from the source `base_height` property.
        "fill-extrusion-base": ["get", "base_height"],

        // Make extrusions slightly opaque to see through indoor walls.
        "fill-extrusion-opacity": 0.7,
    },
    });
    // SE DEFINE CODIGO PARA MOSTRAR INFORMACIONDE UN LAYER

    afterMap.on('click', 'en construccion', (e) => {
        const features = afterMap.queryRenderedFeatures(e.point, {
          layers: ['en construccion'] 
        });
      
        if (features.length > 0) {
          const polygonName = features[0].properties.color; 
      
          new mapboxgl.Popup()
            .setLngLat(e.lngLat) 
            .setHTML(polygonName)
            .addTo(afterMap);
        }
    });
    // ****************************************************************************

    afterMap.addSource("puente", {
        type: "geojson",
        data: "https://raw.githubusercontent.com/diaznico/data_geojson/main/GEOJSON_FINEXCOR/CARTOGRAFIA/PUENTE_FINEXCOR.geojson",
        });
  
    afterMap.addLayer({
    id: "puente",
    type: "fill-extrusion",
    source: "puente",
    paint: {
        // Get the `fill-extrusion-color` from the source `color` property.
        "fill-extrusion-color": ["get", "color"],

        // Get `fill-extrusion-height` from the source `height` property.
        "fill-extrusion-height": ["get", "height"],

        // Get `fill-extrusion-base` from the source `base_height` property.
        "fill-extrusion-base": ["get", "base_height"],

        // Make extrusions slightly opaque to see through indoor walls.
        "fill-extrusion-opacity": 0.7,
    },
    });


    // SE DEFINE CODIGO PARA MOSTRAR INFORMACIONDE UN LAYER

    afterMap.on('click', 'puente', (e) => {
        const features = afterMap.queryRenderedFeatures(e.point, {
          layers: ['puente'] 
        });
      
        if (features.length > 0) {
          const polygonName = features[0].properties.color; 
      
          new mapboxgl.Popup()
            .setLngLat(e.lngLat) 
            .setHTML(polygonName)
            .addTo(afterMap);
        }
    });
    // ****************************************************************************

    afterMap.addSource("vereda", {
        type: "geojson",
        data: "https://raw.githubusercontent.com/diaznico/data_geojson/main/GEOJSON_FINEXCOR/CARTOGRAFIA/VEREDA_FINEXCOR.geojson",
        });
  
    afterMap.addLayer({
    id: "vereda",
    type: "fill-extrusion",
    source: "vereda",
    paint: {
        // Get the `fill-extrusion-color` from the source `color` property.
        "fill-extrusion-color": ["get", "color"],

        // Get `fill-extrusion-height` from the source `height` property.
        "fill-extrusion-height": ["get", "height"],

        // Get `fill-extrusion-base` from the source `base_height` property.
        "fill-extrusion-base": ["get", "base_height"],

        // Make extrusions slightly opaque to see through indoor walls.
        "fill-extrusion-opacity": 0.7,
    },
    });

    // SE DEFINE CODIGO PARA MOSTRAR INFORMACIONDE UN LAYER

    afterMap.on('click', 'vereda', (e) => {
        const features = afterMap.queryRenderedFeatures(e.point, {
          layers: ['vereda'] 
        });
      
        if (features.length > 0) {
          const polygonName = features[0].properties.color; 
      
          new mapboxgl.Popup()
            .setLngLat(e.lngLat) 
            .setHTML(polygonName)
            .addTo(afterMap);
        }
    });
    // ****************************************************************************

    afterMap.addSource("balcon", {
        type: "geojson",
        data: "https://raw.githubusercontent.com/diaznico/data_geojson/main/GEOJSON_FINEXCOR/CARTOGRAFIA/BALCON_FINEXCOR.geojson",
        });
  
    afterMap.addLayer({
    id: "balcon",
    type: "fill-extrusion",
    source: "balcon",
    paint: {
        // Get the `fill-extrusion-color` from the source `color` property.
        "fill-extrusion-color": ["get", "color"],

        // Get `fill-extrusion-height` from the source `height` property.
        "fill-extrusion-height": ["get", "height"],

        // Get `fill-extrusion-base` from the source `base_height` property.
        "fill-extrusion-base": ["get", "base_height"],

        // Make extrusions slightly opaque to see through indoor walls.
        "fill-extrusion-opacity": 0.7,
    },
    });


    // SE DEFINE CODIGO PARA MOSTRAR INFORMACIONDE UN LAYER

    afterMap.on('click', 'balcon', (e) => {
        const features = afterMap.queryRenderedFeatures(e.point, {
          layers: ['balcon'] 
        });
      
        if (features.length > 0) {
          const polygonName = features[0].properties.color; 
      
          new mapboxgl.Popup()
            .setLngLat(e.lngLat) 
            .setHTML(polygonName)
            .addTo(afterMap);
        }
    });

});



// MUESTRO LA COMPARACION

const map = new mapboxgl.Compare(
    beforeMap,
    afterMap,
    "#comparison-container"
);



// Después que los mapas estén cargados
afterMap.on('load', () => {

    // Arreglo con ids de capas toggleables  
    const toggleableLayers = [
        'macizo', 
        'deslinde', 
        'espacio_interno',
        'edificaciones', 
        'semicubierto', 
        'piscina', 
        'galpon', 
        'en construccion', 
        'puente', 
        'vereda', 
        'balcon'
    ];
  
    // Iterar capas
    toggleableLayers.forEach(layerId => {
  
      // Crear botón toggle
      const link = document.createElement('a');
      link.id = layerId; 
      link.href = '#';
      link.textContent = layerId;
      link.className = 'active';
  
      // Agregar funcionalidad de toggle al click
      link.onclick = function(e) {
        const clickedLayer = this.textContent;
        e.preventDefault();
        e.stopPropagation();
  
        const visibility = afterMap.getLayoutProperty(
          clickedLayer, 
          'visibility'
        );
  
        if (visibility === 'visible') {
          afterMap.setLayoutProperty(
            clickedLayer, 
            'visibility', 
            'none'
          );
          this.className = '';
        } else { 
          this.className = 'active';
          afterMap.setLayoutProperty(
            clickedLayer, 
            'visibility', 
            'visible'
          );
        }
      }
      
      // Agregar botón al HTML
      const menu = document.getElementById('cartografia');
      menu.appendChild(link);
  
    });
  
});


// Después que los mapas estén cargados
beforeMap.on('load', () => {


    // Arreglo con ids de capas toggleables  
    const toggleableLayers = [
        'curva maestra', 
        'curva secundaria', 
        'curva secundarias', 
        'arroyo', 
        'cordon', 
        'eje calle', 
        'pasillos', 
        'eje pasillo'
    ];
  
    // Iterar capas
    toggleableLayers.forEach(layerId => {
  
      // Crear botón toggle
      const link = document.createElement('a');
      link.id = layerId; 
      link.href = '#';
      link.textContent = layerId;
      link.className = 'active';
  
      // Agregar funcionalidad de toggle al click
      link.onclick = function(e) {
        const clickedLayer = this.textContent;
        e.preventDefault();
        e.stopPropagation();
  
        const visibility = beforeMap.getLayoutProperty(
          clickedLayer, 
          'visibility'
        );
  
        if (visibility === 'visible') {
            beforeMap.setLayoutProperty(
            clickedLayer, 
            'visibility', 
            'none'
          );
          this.className = '';
        } else { 
          this.className = 'active';
          beforeMap.setLayoutProperty(
            clickedLayer, 
            'visibility', 
            'visible'
          );
        }
      }
      
      // Agregar botón al HTML
      const menu = document.getElementById('vialidad');
      menu.appendChild(link);
  
    });
  
});




