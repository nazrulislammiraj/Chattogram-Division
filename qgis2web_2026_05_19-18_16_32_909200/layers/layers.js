var wms_layers = [];

var format_bgd_admin2_0 = new ol.format.GeoJSON();
var features_bgd_admin2_0 = format_bgd_admin2_0.readFeatures(json_bgd_admin2_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_bgd_admin2_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_bgd_admin2_0.addFeatures(features_bgd_admin2_0);
var lyr_bgd_admin2_0 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_bgd_admin2_0, 
                style: style_bgd_admin2_0,
                popuplayertitle: 'bgd_admin2',
                interactive: true,
                title: '<img src="styles/legend/bgd_admin2_0.png" /> bgd_admin2'
            });

        var lyr_GoogleMaps_1 = new ol.layer.Tile({
            'title': 'Google Maps',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}'
            })
        });
var format_Chattogram_Division_2 = new ol.format.GeoJSON();
var features_Chattogram_Division_2 = format_Chattogram_Division_2.readFeatures(json_Chattogram_Division_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Chattogram_Division_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Chattogram_Division_2.addFeatures(features_Chattogram_Division_2);
var lyr_Chattogram_Division_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Chattogram_Division_2, 
                style: style_Chattogram_Division_2,
                popuplayertitle: 'Chattogram_Division',
                interactive: true,
    title: 'Chattogram_Division<br />\
    <img src="styles/legend/Chattogram_Division_2_0.png" /> Bandarban<br />\
    <img src="styles/legend/Chattogram_Division_2_1.png" /> Brahmanbaria<br />\
    <img src="styles/legend/Chattogram_Division_2_2.png" /> Chandpur<br />\
    <img src="styles/legend/Chattogram_Division_2_3.png" /> Chattogram<br />\
    <img src="styles/legend/Chattogram_Division_2_4.png" /> Cox\'s Bazar<br />\
    <img src="styles/legend/Chattogram_Division_2_5.png" /> Cumilla<br />\
    <img src="styles/legend/Chattogram_Division_2_6.png" /> Feni<br />\
    <img src="styles/legend/Chattogram_Division_2_7.png" /> Khagrachhari<br />\
    <img src="styles/legend/Chattogram_Division_2_8.png" /> Lakshmipur<br />\
    <img src="styles/legend/Chattogram_Division_2_9.png" /> Noakhali<br />\
    <img src="styles/legend/Chattogram_Division_2_10.png" /> Rangamati<br />' });

lyr_bgd_admin2_0.setVisible(true);lyr_GoogleMaps_1.setVisible(true);lyr_Chattogram_Division_2.setVisible(true);
var layersList = [lyr_bgd_admin2_0,lyr_GoogleMaps_1,lyr_Chattogram_Division_2];
lyr_bgd_admin2_0.set('fieldAliases', {'adm2_name': 'adm2_name', 'adm2_name1': 'adm2_name1', 'adm2_name2': 'adm2_name2', 'adm2_name3': 'adm2_name3', 'adm2_pcode': 'adm2_pcode', 'adm1_name': 'adm1_name', 'adm1_name1': 'adm1_name1', 'adm1_name2': 'adm1_name2', 'adm1_name3': 'adm1_name3', 'adm1_pcode': 'adm1_pcode', 'adm0_name': 'adm0_name', 'adm0_name1': 'adm0_name1', 'adm0_name2': 'adm0_name2', 'adm0_name3': 'adm0_name3', 'adm0_pcode': 'adm0_pcode', 'valid_on': 'valid_on', 'valid_to': 'valid_to', 'area_sqkm': 'area_sqkm', 'version': 'version', 'lang': 'lang', 'lang1': 'lang1', 'lang2': 'lang2', 'lang3': 'lang3', 'adm2_ref_n': 'adm2_ref_n', 'center_lat': 'center_lat', 'center_lon': 'center_lon', });
lyr_Chattogram_Division_2.set('fieldAliases', {'adm2_name': 'adm2_name', 'adm1_name': 'adm1_name', 'area_sqkm': 'area_sqkm', });
lyr_bgd_admin2_0.set('fieldImages', {'adm2_name': '', 'adm2_name1': '', 'adm2_name2': '', 'adm2_name3': '', 'adm2_pcode': '', 'adm1_name': '', 'adm1_name1': '', 'adm1_name2': '', 'adm1_name3': '', 'adm1_pcode': '', 'adm0_name': '', 'adm0_name1': '', 'adm0_name2': '', 'adm0_name3': '', 'adm0_pcode': '', 'valid_on': '', 'valid_to': '', 'area_sqkm': '', 'version': '', 'lang': '', 'lang1': '', 'lang2': '', 'lang3': '', 'adm2_ref_n': '', 'center_lat': '', 'center_lon': '', });
lyr_Chattogram_Division_2.set('fieldImages', {'adm2_name': 'TextEdit', 'adm1_name': 'TextEdit', 'area_sqkm': 'TextEdit', });
lyr_bgd_admin2_0.set('fieldLabels', {'adm2_name': 'no label', 'adm2_name1': 'no label', 'adm2_name2': 'no label', 'adm2_name3': 'no label', 'adm2_pcode': 'no label', 'adm1_name': 'no label', 'adm1_name1': 'no label', 'adm1_name2': 'no label', 'adm1_name3': 'no label', 'adm1_pcode': 'no label', 'adm0_name': 'no label', 'adm0_name1': 'no label', 'adm0_name2': 'no label', 'adm0_name3': 'no label', 'adm0_pcode': 'no label', 'valid_on': 'no label', 'valid_to': 'no label', 'area_sqkm': 'no label', 'version': 'no label', 'lang': 'no label', 'lang1': 'no label', 'lang2': 'no label', 'lang3': 'no label', 'adm2_ref_n': 'no label', 'center_lat': 'no label', 'center_lon': 'no label', });
lyr_Chattogram_Division_2.set('fieldLabels', {'adm2_name': 'header label - always visible', 'adm1_name': 'header label - visible with data', 'area_sqkm': 'header label - visible with data', });
lyr_Chattogram_Division_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});