---
layout: page
---

<section class="blue hero">

# ESA Antarctica Datacube

The **ESA Antarctica Datacube** brings together openly available datasets for Antarctica and the Southern Ocean in analysis-ready, cloud-optimised formats that can be accessed and analysed together. The datasets were produced in the frame of [ESA Polar Science Cluster](https://eo4society.esa.int/communities/scientists/esa-polar-science-cluster/) activities.


The collection has two thematic datacubes:

- **Antarctic land ice:** datasets are combined on a 100 × 100 m grid in EPSG:3031.
- **Antarctic sea ice and ocean surface:** datasets are combined on a 12.5 km grid in EPSG:6932.

Together, these two components form the ESA Antarctica Datacube. The collection brings together key Earth science indicators and variables including topography, ice thickness, basal melt, temperature, elevation change, grounding lines, subglacial lakes, sea-ice thickness, concentration, snow depth and sea-surface salinity.

The source products come from ESA missions and research programmes, including CryoSat-2, SMOS, Sentinel-1 and the ESA Climate Change Initiative, alongside complementary products from partner institutions. Each source dataset retains its own attribution, licence and scientific reference and remains openly available through the [EarthCODE Open Science Catalog](https://opensciencedata.esa.int/products/catalog).

Putting related datasets on shared grids reduces the preparation needed before analysis. Scientists can compare variables at the same spatial coordinates while retaining source-specific dimensions such as time, depth, uncertainty, quality flags and categories.

The public data stores can be accessed directly over HTTPS. The [land-ice](https://esa-earthcode.github.io/polar_hackathon/remote-cube-access/) and [sea-ice and ocean-surface](https://esa-earthcode.github.io/polar_hackathon/remote-sea-cube-access/) getting-started notebooks provide runnable examples.

</section>

<section class="light-grey">

## Collection at a Glance

| Metadata | Description |
| --- | --- |
| **Geographic coverage** | Antarctica and the Southern Ocean |
| **Scientific scope** | Land-ice geometry and dynamics, ice-shelf change, sea-ice state and ocean-surface conditions |
| **Temporal coverage** | Varies by source dataset, including static layers and time series from the 1990s to the early 2020s |
| **Spatial resolution** | Land ice: 100 m in EPSG:3031; sea ice and ocean surface: 12.5 km in EPSG:6932 |
| **Source datasets** | 12 core datasets: 9 land-ice datasets and 3 sea-ice and ocean-surface datasets |
| **Data formats** | Cloud-optimised GeoZarr and GeoParquet |

</section>

<section class="blue hero">

## The Two Thematic Datacubes

### Antarctic Land-Ice Datacube

The land-ice datacube combines data describing Antarctic topography, ice thickness, basal melt, temperature, velocity, elevation change, grounding lines and lakes on a common 100 m grid.

![ESA Antarctica Datacube land-ice variables](https://raw.githubusercontent.com/ESA-EarthCODE/polar_hackathon/refs/heads/main/static/polar-cube-viz.jpeg)

*Example land-ice variables in the ESA Antarctica Datacube.*

#### Source Datasets

- **Ice-shelf basal melt:** basal melt rate and ice-shelf time series. [View in the Open Science Catalog](https://opensciencedata.esa.int/products/antarctic-ice-shelf-melt-rates/collection).
- **BedMachine Antarctica:** bed elevation, surface elevation, ice thickness and masks. [View in the Open Science Catalog](https://opensciencedata.esa.int/products/bedrock-topography-antarctica-bedmachine/collection).
- **Calving fronts:** time-varying coastline and calving-front masks. [View in the Open Science Catalog](https://opensciencedata.esa.int/products/antarctic-ice-shelf-calving-fronts/collection).
- **Grounding lines:** grounding-line positions and sensor information. [View in the Open Science Catalog](https://opensciencedata.esa.int/products/grounding-line-position-antarctica/collection).
- **Ice-temperature profiles:** englacial temperature profiles and quality flags. [View in the Open Science Catalog](https://opensciencedata.esa.int/products/ice-temperature-profiles-antarctica/collection).
- **Ice velocity:** velocity components, magnitude and uncertainties. [View in the Open Science Catalog](https://opensciencedata.esa.int/products/ice-sheet-velocity-antarctic-2021/collection).
- **Surface-elevation change:** elevation-change rates and uncertainties. [View in the Open Science Catalog](https://opensciencedata.esa.int/products/sec-antarctic-ice-sheet/collection).
- **Subglacial lakes:** active lake boundaries and surface-elevation change. [View in the Open Science Catalog](https://opensciencedata.esa.int/products/subglacial-lakes-boundries/collection).
- **Supraglacial lakes:** lake and channel extent. [View in the Open Science Catalog](https://opensciencedata.esa.int/products/supraglacial-lakes-west-4dantarctica/collection).

### Antarctic Sea-Ice and Ocean-Surface Datacube

The sea-ice and ocean-surface datacube brings together sea-ice thickness, concentration, snow depth, sea-surface salinity and tidal-elevation data on a common Southern Ocean grid. Summary levels at 25 km and 50 km support faster regional exploration.

![Antarctic sea-ice and ocean-surface data](https://raw.githubusercontent.com/ESA-EarthCODE/polar_hackathon/refs/heads/main/static/sea-ice-ocean-datacube.png)

*Example sea-ice, sea-surface salinity and tidal-elevation data for April 2019.*

#### Source Datasets

- **CS+AO Southern Ocean sea-ice thickness:** sea-ice thickness, concentration, freeboard, snow depth and related quality variables. [View in the Open Science Catalog](https://opensciencedata.esa.int/products/southern-ocean-sit-from-cryosat-2/collection).
- **SOFRESH sea-surface salinity:** sea-surface salinity and uncertainty. [View in the Open Science Catalog](https://opensciencedata.esa.int/products/sofresh-sea-surface-salinity/collection).
- **ALBATROS tidal elevation:** CryoSat-2 tidal-elevation predictions. [View in the Open Science Catalog](https://opensciencedata.esa.int/products/tidal-elevation-cryosat2-2019/collection).

</section>

<section class="light-grey">

## Built with the Polar Science Community

EarthCODE supports the [ESA Polar Science Cluster community](https://earthcode.esa.int/community/scientists/science-clusters) with open data, cloud infrastructure, tools and hackathons. Scientists shape the datacubes by defining priorities, recommending datasets and testing the collections through real research use cases.

![Example pixel-wise trend analysis across Southern Ocean salinity and sea-ice variables](https://github.com/user-attachments/assets/e201b46f-8913-43d4-a46b-a719c0dc4bc2)

*Example multi-variable trend analysis developed through community exploration of the polar data.*

Read the [Antarctica Datacube Hackathon summary](https://earthcode.esa.int/blog/polar-hackathon-summary) and [Explore Antarctica Data with Open Resources](https://earthcode.esa.int/blog/polar-hackathon-polar-data).

</section>

<section class="blue hero">

## Access and Explore

- **Explore the dashboard:** Link TBD.
- **Get started:** [open the land-ice notebook](https://esa-earthcode.github.io/polar_hackathon/remote-cube-access/) or [open the sea-ice notebook](https://esa-earthcode.github.io/polar_hackathon/remote-sea-cube-access/).
- **View the collection in the Open Science Catalog:** Link TBD.
- **View the source datasets:** [browse the dataset overview and access examples](https://esa-earthcode.github.io/polar_hackathon/datasets-sumary/).
- **Extend the collection:** [follow the build-a-cube example](https://esa-earthcode.github.io/polar_hackathon/build-single-cube-demo/).
- **Visit the Science Cluster:** [learn about the ESA Polar Science Cluster and other Science Clusters](https://earthcode.esa.int/community/scientists/science-clusters).
- **Join the discussion:** [ask questions and share ideas in the EarthCODE Forum](https://discourse-earthcode.eox.at/t/polar-hackathon-general-q-a-and-discussion/144).
- **Contribute code:** [visit the Antarctica Datacube Hackathon repository](https://github.com/ESA-EarthCODE/polar_hackathon).

### Data Stores

- **Antarctic land ice:** [`antarctica-combined.zarr`](https://s3.waw4-1.cloudferro.com/EarthCODE/OSCAssets/antarctica_cube/antarctica-combined.zarr), [`icetemp.zarr`](https://s3.waw4-1.cloudferro.com/EarthCODE/OSCAssets/antarctica_cube/icetemp.zarr), [`sec.zarr`](https://s3.waw4-1.cloudferro.com/EarthCODE/OSCAssets/antarctica_cube/sec.zarr), [`icemask_composite.zarr`](https://s3.waw4-1.cloudferro.com/EarthCODE/OSCAssets/antarctica_cube/icemask_composite.zarr/) and [`ice_velocity.zarr`](https://s3.waw4-1.cloudferro.com/EarthCODE/OSCAssets/antarctica_cube/ice_velocity.zarr).
- **Antarctic sea ice and ocean surface:** [`sea-ice-cube-geozarr-v2.zarr`](https://s3.waw4-1.cloudferro.com/EarthCODE/OSCAssets/sea-ice-cube/sea-ice-cube-geozarr-v2.zarr) and ALBATROS GeoParquet point data.

The two datacubes use different grids and should be opened separately. The [example notebooks](https://esa-earthcode.github.io/polar_hackathon/remote-sea-cube-access/) show how to reproject selected variables when an analysis combines land, sea-ice and ocean data.

## Contribute

To suggest a dataset, share a use case, or help extend the collection

<a class="VPButton cta" href="mailto:earth-code@esa.int" target="_blank">Contact us</a>

</section>
