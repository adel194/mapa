var wms_layers = [];


        var lyr_MapaBase_0 = new ol.layer.Tile({
            'title': 'Mapa Base',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_LimiteComunal_1 = new ol.format.GeoJSON();
var features_LimiteComunal_1 = format_LimiteComunal_1.readFeatures(json_LimiteComunal_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LimiteComunal_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LimiteComunal_1.addFeatures(features_LimiteComunal_1);
var lyr_LimiteComunal_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LimiteComunal_1, 
                style: style_LimiteComunal_1,
                popuplayertitle: "Limite Comunal",
                interactive: true,
                title: '<img src="styles/legend/LimiteComunal_1.png" /> Limite Comunal'
            });
var format_LimiteUrbano_2 = new ol.format.GeoJSON();
var features_LimiteUrbano_2 = format_LimiteUrbano_2.readFeatures(json_LimiteUrbano_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LimiteUrbano_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LimiteUrbano_2.addFeatures(features_LimiteUrbano_2);
var lyr_LimiteUrbano_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LimiteUrbano_2, 
                style: style_LimiteUrbano_2,
                popuplayertitle: "Limite Urbano",
                interactive: true,
                title: '<img src="styles/legend/LimiteUrbano_2.png" /> Limite Urbano'
            });
var format_RedHidrografica_3 = new ol.format.GeoJSON();
var features_RedHidrografica_3 = format_RedHidrografica_3.readFeatures(json_RedHidrografica_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RedHidrografica_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RedHidrografica_3.addFeatures(features_RedHidrografica_3);
var lyr_RedHidrografica_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RedHidrografica_3, 
                style: style_RedHidrografica_3,
                popuplayertitle: "Red Hidrografica",
                interactive: true,
                title: '<img src="styles/legend/RedHidrografica_3.png" /> Red Hidrografica'
            });
var format_LimiteHumedal_4 = new ol.format.GeoJSON();
var features_LimiteHumedal_4 = format_LimiteHumedal_4.readFeatures(json_LimiteHumedal_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LimiteHumedal_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LimiteHumedal_4.addFeatures(features_LimiteHumedal_4);
var lyr_LimiteHumedal_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LimiteHumedal_4, 
                style: style_LimiteHumedal_4,
                popuplayertitle: "Limite Humedal",
                interactive: true,
                title: '<img src="styles/legend/LimiteHumedal_4.png" /> Limite Humedal'
            });
var format_Subcuenca_5 = new ol.format.GeoJSON();
var features_Subcuenca_5 = format_Subcuenca_5.readFeatures(json_Subcuenca_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Subcuenca_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Subcuenca_5.addFeatures(features_Subcuenca_5);
var lyr_Subcuenca_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Subcuenca_5, 
                style: style_Subcuenca_5,
                popuplayertitle: "Subcuenca",
                interactive: true,
                title: '<img src="styles/legend/Subcuenca_5.png" /> Subcuenca'
            });

lyr_MapaBase_0.setVisible(true);lyr_LimiteComunal_1.setVisible(true);lyr_LimiteUrbano_2.setVisible(true);lyr_RedHidrografica_3.setVisible(true);lyr_LimiteHumedal_4.setVisible(true);lyr_Subcuenca_5.setVisible(true);
var layersList = [lyr_MapaBase_0,lyr_LimiteComunal_1,lyr_LimiteUrbano_2,lyr_RedHidrografica_3,lyr_LimiteHumedal_4,lyr_Subcuenca_5];
lyr_LimiteComunal_1.set('fieldAliases', {'fid': 'fid', 'CUT_REG': 'CUT_REG', 'CUT_PROV': 'CUT_PROV', 'CUT_COM': 'CUT_COM', 'REGION': 'REGION', 'PROVINCIA': 'PROVINCIA', 'COMUNA': 'COMUNA', 'SUPERFICIE': 'SUPERFICIE', });
lyr_LimiteUrbano_2.set('fieldAliases', {'fid': 'fid', 'ID': 'ID', 'NOMBRE': 'NOMBRE', 'Ha': 'Ha', });
lyr_RedHidrografica_3.set('fieldAliases', {'fid': 'fid', 'objectid': 'objectid', 'fid_drenes': 'fid_drenes', 'cod_comuna': 'cod_comuna', 'shape_leng': 'shape_leng', 'st_length_': 'st_length_', 'Nombre': 'Nombre', 'Dren_Tipo': 'Dren_Tipo', 'Region': 'Region', 'Provincia': 'Provincia', 'Comuna': 'Comuna', });
lyr_LimiteHumedal_4.set('fieldAliases', {'fid': 'fid', 'Nombre': 'Nombre', 'Ha': 'Ha', 'M2': 'M2', 'Perimetro': 'Perimetro', });
lyr_Subcuenca_5.set('fieldAliases', {'fid': 'fid', 'COD_CUEN': 'COD_CUEN', 'COD_SUBC': 'COD_SUBC', 'COD_SSUBC': 'COD_SSUBC', 'NOM_SSUBC': 'NOM_SSUBC', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_LimiteComunal_1.set('fieldImages', {'fid': '', 'CUT_REG': '', 'CUT_PROV': '', 'CUT_COM': '', 'REGION': '', 'PROVINCIA': '', 'COMUNA': '', 'SUPERFICIE': '', });
lyr_LimiteUrbano_2.set('fieldImages', {'fid': '', 'ID': '', 'NOMBRE': '', 'Ha': '', });
lyr_RedHidrografica_3.set('fieldImages', {'fid': 'TextEdit', 'objectid': 'TextEdit', 'fid_drenes': 'TextEdit', 'cod_comuna': 'TextEdit', 'shape_leng': 'TextEdit', 'st_length_': 'TextEdit', 'Nombre': 'TextEdit', 'Dren_Tipo': 'TextEdit', 'Region': 'TextEdit', 'Provincia': 'TextEdit', 'Comuna': 'TextEdit', });
lyr_LimiteHumedal_4.set('fieldImages', {'fid': '', 'Nombre': '', 'Ha': '', 'M2': '', 'Perimetro': '', });
lyr_Subcuenca_5.set('fieldImages', {'fid': 'TextEdit', 'COD_CUEN': 'TextEdit', 'COD_SUBC': 'TextEdit', 'COD_SSUBC': 'TextEdit', 'NOM_SSUBC': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_LimiteComunal_1.set('fieldLabels', {'fid': 'no label', 'CUT_REG': 'no label', 'CUT_PROV': 'no label', 'CUT_COM': 'no label', 'REGION': 'no label', 'PROVINCIA': 'no label', 'COMUNA': 'no label', 'SUPERFICIE': 'no label', });
lyr_LimiteUrbano_2.set('fieldLabels', {'fid': 'no label', 'ID': 'no label', 'NOMBRE': 'inline label - always visible', 'Ha': 'inline label - always visible', });
lyr_RedHidrografica_3.set('fieldLabels', {'fid': 'no label', 'objectid': 'no label', 'fid_drenes': 'no label', 'cod_comuna': 'no label', 'shape_leng': 'no label', 'st_length_': 'no label', 'Nombre': 'no label', 'Dren_Tipo': 'no label', 'Region': 'no label', 'Provincia': 'no label', 'Comuna': 'no label', });
lyr_LimiteHumedal_4.set('fieldLabels', {'fid': 'no label', 'Nombre': 'inline label - always visible', 'Ha': 'inline label - always visible', 'M2': 'inline label - always visible', 'Perimetro': 'inline label - always visible', });
lyr_Subcuenca_5.set('fieldLabels', {'fid': 'no label', 'COD_CUEN': 'no label', 'COD_SUBC': 'no label', 'COD_SSUBC': 'no label', 'NOM_SSUBC': 'no label', 'Shape_Leng': 'inline label - always visible', 'Shape_Area': 'inline label - always visible', });
lyr_Subcuenca_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});