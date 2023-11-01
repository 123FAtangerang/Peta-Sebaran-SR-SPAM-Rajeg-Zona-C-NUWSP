var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_Kelurahan_1 = new ol.format.GeoJSON();
var features_Kelurahan_1 = format_Kelurahan_1.readFeatures(json_Kelurahan_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Kelurahan_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Kelurahan_1.addFeatures(features_Kelurahan_1);
var lyr_Kelurahan_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Kelurahan_1, 
                style: style_Kelurahan_1,
                interactive: true,
    title: 'Kelurahan<br />\
    <img src="styles/legend/Kelurahan_1_0.png" /> SUKAMANAH<br />\
    <img src="styles/legend/Kelurahan_1_1.png" /> SUKATANI<br />\
    <img src="styles/legend/Kelurahan_1_2.png" /> TANJAKAN MEKAR<br />\
    <img src="styles/legend/Kelurahan_1_3.png" /> RAJEG MULYA<br />\
    <img src="styles/legend/Kelurahan_1_4.png" /> <br />'
        });
var format_PIPA_2 = new ol.format.GeoJSON();
var features_PIPA_2 = format_PIPA_2.readFeatures(json_PIPA_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PIPA_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PIPA_2.addFeatures(features_PIPA_2);
var lyr_PIPA_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PIPA_2, 
                style: style_PIPA_2,
                interactive: true,
    title: 'PIPA<br />\
    <img src="styles/legend/PIPA_2_0.png" /> NUWSP<br />\
    <img src="styles/legend/PIPA_2_1.png" /> RKAP<br />\
    <img src="styles/legend/PIPA_2_2.png" /> NON PUBLIK<br />\
    <img src="styles/legend/PIPA_2_3.png" /> <br />'
        });
var format_PipaEksisting_3 = new ol.format.GeoJSON();
var features_PipaEksisting_3 = format_PipaEksisting_3.readFeatures(json_PipaEksisting_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PipaEksisting_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PipaEksisting_3.addFeatures(features_PipaEksisting_3);
var lyr_PipaEksisting_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PipaEksisting_3, 
                style: style_PipaEksisting_3,
                interactive: true,
                title: '<img src="styles/legend/PipaEksisting_3.png" /> Pipa Eksisting'
            });
var format_IPACikokol_4 = new ol.format.GeoJSON();
var features_IPACikokol_4 = format_IPACikokol_4.readFeatures(json_IPACikokol_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_IPACikokol_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_IPACikokol_4.addFeatures(features_IPACikokol_4);
var lyr_IPACikokol_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_IPACikokol_4, 
                style: style_IPACikokol_4,
                interactive: true,
                title: '<img src="styles/legend/IPACikokol_4.png" /> IPA Cikokol'
            });
var format_Reservoir_5 = new ol.format.GeoJSON();
var features_Reservoir_5 = format_Reservoir_5.readFeatures(json_Reservoir_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Reservoir_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Reservoir_5.addFeatures(features_Reservoir_5);
var lyr_Reservoir_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Reservoir_5, 
                style: style_Reservoir_5,
                interactive: true,
                title: '<img src="styles/legend/Reservoir_5.png" /> Reservoir'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_Kelurahan_1.setVisible(true);lyr_PIPA_2.setVisible(true);lyr_PipaEksisting_3.setVisible(true);lyr_IPACikokol_4.setVisible(true);lyr_Reservoir_5.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_Kelurahan_1,lyr_PIPA_2,lyr_PipaEksisting_3,lyr_IPACikokol_4,lyr_Reservoir_5];
lyr_Kelurahan_1.set('fieldAliases', {'id': 'id', 'Nama': 'Nama', 'Dftr Tnggu': 'Dftr Tnggu', 'Target SR': 'Target SR', });
lyr_PIPA_2.set('fieldAliases', {'id': 'id', 'Jenis': 'Jenis', 'Diameter': 'Diameter', 'Panjang': 'Panjang', 'Smber Dana': 'Smber Dana', });
lyr_PipaEksisting_3.set('fieldAliases', {'id': 'id', 'Jenis': 'Jenis', });
lyr_IPACikokol_4.set('fieldAliases', {'id': 'id', 'Kapasitas': 'Kapasitas', });
lyr_Reservoir_5.set('fieldAliases', {'id': 'id', 'Smber Dana': 'Smber Dana', });
lyr_Kelurahan_1.set('fieldImages', {'id': 'TextEdit', 'Nama': 'TextEdit', 'Dftr Tnggu': 'TextEdit', 'Target SR': 'TextEdit', });
lyr_PIPA_2.set('fieldImages', {'id': 'TextEdit', 'Jenis': 'TextEdit', 'Diameter': 'TextEdit', 'Panjang': 'TextEdit', 'Smber Dana': 'TextEdit', });
lyr_PipaEksisting_3.set('fieldImages', {'id': 'TextEdit', 'Jenis': 'TextEdit', });
lyr_IPACikokol_4.set('fieldImages', {'id': 'TextEdit', 'Kapasitas': 'TextEdit', });
lyr_Reservoir_5.set('fieldImages', {'id': '', 'Smber Dana': '', });
lyr_Kelurahan_1.set('fieldLabels', {'id': 'no label', 'Nama': 'header label', 'Dftr Tnggu': 'header label', 'Target SR': 'header label', });
lyr_PIPA_2.set('fieldLabels', {'id': 'no label', 'Jenis': 'header label', 'Diameter': 'header label', 'Panjang': 'header label', 'Smber Dana': 'header label', });
lyr_PipaEksisting_3.set('fieldLabels', {'id': 'no label', 'Jenis': 'header label', });
lyr_IPACikokol_4.set('fieldLabels', {'id': 'no label', 'Kapasitas': 'header label', });
lyr_Reservoir_5.set('fieldLabels', {'id': 'no label', 'Smber Dana': 'header label', });
lyr_Reservoir_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});