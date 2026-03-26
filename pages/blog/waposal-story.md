---
date: 2026-03-20
title: WAPOSAL Dataset on EarthCODE Catalog
image: https://raw.githubusercontent.com/ESA-EarthCODE/portal-assets/refs/heads/main/blog/Baltic_Norway_av_4.jpg
feature: true
---

# WAPOSAL Dataset on EarthCODE Catalog <!--{ as="img" mode="hero" src="https://raw.githubusercontent.com/ESA-EarthCODE/portal-assets/refs/heads/main/blog/Baltic_Norway_av_4.jpg" }-->

## WAPOSAL Dataset on EarthCODE Catalog
*Published: 20.03.2026*
## WAPOSAL Dataset on EarthCODE Catalog

Oceans represent a primary renewable energy resource that can support the transition to a green economy.

Understanding how much energy is stored in the ocean waves is critical for the future of renewable power. WAPOSAL, an initiative developed under the framework of the European Space Agency (ESA), is demonstrating an innovative approach to utilizing Earth Observation data by delivering a high-resolution database of wave energy measurements across coastal regions.

The [WAPOSAL project](https://eo4society.esa.int/projects/waposal/) combines advanced satellite altimetry with the latest processing techniques to create a new database of wave power density. By analysing years of ocean observations, researchers are now able to identify coastal areas where wave energy could be harvested efficiently and sustainably.

![Average Wave Power](https://raw.githubusercontent.com/ESA-EarthCODE/portal-assets/refs/heads/main/blog/Baltic_Norway_av_4.jpg)

## Measuring wave energy from space
Wave energy has long been recognised as a promising renewable resource. However, accurately measuring the strength and variability of waves has been a major challenge.

The WAPOSAL project utilizes altimeter data from satellite missions, specifically Sentinel-3 A/B and CryoSat-2. This satellite data is used to measure specific ocean wave characteristics, including significant wave height, zero-crossing wave period, and wave power density. 

By processing these along-track observations with the SAMOSA+ retracker, the project generates high-resolution data products. These measurements cover numerous specific regions, such as the Atlantic coast of Europe, the Mediterranean and Baltic Seas, the coastal zone of French Guiana, and various island archipelagos.


## Building a high resolution wave energy database
A key achievement of the project is the development of a state-of-the-art database of wave renewable energy along coastal regions.

The WAPOSAL database contains coastal wave resource data at 300-meter intervals. The specific variables included in this dataset are:

- Core WAPOSAL Products: Wave power density, zero-crossing wave period, and data quality flags

- Foundational Satellite Data: Significant wave height, spatial coordinates (latitude/longitude), observation time, distance to the coastline, Sigma Nought, and model 'misfit' data

The data has been uploaded to EarthCODE and is now available for review in the Open Science Catalog https://doi.org/10.57780/ESA-1AB8CF3

EarthCODE supported the scientists from the WAPOSAL project with data engineering to combine the data into a cloud-native format (Zarr) to make it more accessible, scalable and interoperable. The datasets can be easily accessed here:

```python
import xarray as xr
xr.open_zarr('https://s3.waw4-1.cloudferro.com/EarthCODE/OSCAssets/waposal/AZ-CS2.zarr', decode_times=False)
```

## Improving accuracy in coastal zones

The WAPOSAL project utilizes the coastal zone algorithm SAMOSA+ to generate more precise estimates for coastal wave energy assessments.

To ensure data quality, the processing chain carefully filters the satellite observations by cleaning outliers, eliminating samples with a high model 'misfit', and excluding data where the distance to the coast is less than 1 kilometer.


## Supporting the transition to renewable energy

The project demonstrates how satellite Earth Observation can transform our understanding of the ocean while accelerating the transition to sustainable energy systems.

As satellite missions continue to expand the global record of ocean observations, initiatives like WAPOSAL illustrate the growing roles of space technology in managing Earth’s natural resources. 
