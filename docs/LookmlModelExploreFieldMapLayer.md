# LookerApi31Reference.LookmlModelExploreFieldMapLayer

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**url** | **String** | URL to the map layer resource. | [optional] 
**name** | **String** | Name of the map layer, as defined in LookML. | [optional] 
**featureKey** | **String** | Specifies the name of the TopoJSON object that the map layer references. If not specified, use the first object.. | [optional] 
**propertyKey** | **String** | Selects which property from the TopoJSON data to plot against. TopoJSON supports arbitrary metadata for each region. When null, the first matching property should be used. | [optional] 
**propertyLabelKey** | **String** | Which property from the TopoJSON data to use to label the region. When null, property_key should be used. | [optional] 
**projection** | **String** | The preferred geographic projection of the map layer when displayed in a visualization that supports multiple geographic projections. | [optional] 
**format** | **String** | Specifies the data format of the region information. Valid values are: \&quot;topojson\&quot;, \&quot;vector_tile_region\&quot;. | [optional] 
**extentsJsonUrl** | **String** | Specifies the URL to a JSON file that defines the geographic extents of each region available in the map layer. This data is used to automatically center the map on the available data for visualization purposes. The JSON file must be a JSON object where the keys are the mapping value of the feature (as specified by property_key) and the values are arrays of four numbers representing the west longitude, south latitude, east longitude, and north latitude extents of the region. The object must include a key for every possible value of property_key. | [optional] 
**maxZoomLevel** | **Number** | The minimum zoom level that the map layer may be displayed at, for visualizations that support zooming. | [optional] 
**minZoomLevel** | **Number** | The maximum zoom level that the map layer may be displayed at, for visualizations that support zooming. | [optional] 


