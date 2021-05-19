import React from "react";
import DeckGL from "@deck.gl/react";
import { TerrainLayer } from "@deck.gl/geo-layers";

const INITIAL_VIEW_STATE = {
  longitude: 9.2572,
  latitude: 46.016,
  zoom: 12,
  pitch: 60,
  bearing: 0,
};

const MAPBOX_ACCESS_TOKEN = process.env.REACT_APP_ACCESS_TOKEN;
const TERRAIN_IMAGE = `https://api.mapbox.com/v4/mapbox.terrain-rgb/{z}/{x}/{y}.png?access_token=${MAPBOX_ACCESS_TOKEN}`;
const SURFACE_IMAGE = `https://stamen-tiles.a.ssl.fastly.net/terrain-background/{z}/{x}/{y}.jpg`;

const Map = () => {
  const terrain = new TerrainLayer({
    id: "terrain",
    elevationDecoder: {
      rScaler: 6553.6,
      gScaler: 25.6,
      bScaler: 0.1,
      offset: -10000,
    },
    elevationData: TERRAIN_IMAGE,
    texture: SURFACE_IMAGE,
  });

  return (
    <DeckGL
      initialViewState={INITIAL_VIEW_STATE}
      controller={true}
      layers={[terrain]}
    />
  );
};

export default Map;
