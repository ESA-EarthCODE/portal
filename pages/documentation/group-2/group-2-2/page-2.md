# Discovering Resources in The EarthCODE Catalog

The OSC frontend is the main user interface component that allows scientists and other parties to interact with the system and consume the contents. It allows users to search for scientific products, as well as to contribute to the contents of the catalogue by ingesting new products in the catalogue or submitting requests for updates of already existing content (to be developed in the future releases).

The OSC Catalog page is based upon the Open Source application STAC Browser (STAC Browser, 2023) which allows users to discover the available contents of the metadata repository, kept as a static STAC Catalogue. It is a collection of inter-linked JSON files (Collections and Items) and supplementary metadata. Catalogue allows for discovery of following elements:

- Themes
- Variables
- EO-Missions
- Projects
- Products
- Processes

Exploration begins from the landing page where user can select one of six themes that group products by the specific research domain:

![themes](https://github.com/EOEPCA/open-science-catalog-metadata/assets/120453810/070f3e88-f2a4-4956-bfc7-00e2a660cbb2)

Description of selected scientific domain is provided together with link to reference given description. 
Each theme lists number of objects associated to that theme via osc:themes field in the STAC Catalogue or STAC Collection. Making products discoverable by specific domain name. 

![cryosphere-theme](https://github.com/EOEPCA/open-science-catalog-metadata/assets/120453810/b1e33838-484d-45c2-bdc0-52c5785c7eef)

From this page user can View the Item _(Theme)_ in open-access GitHub repository and suggest changes to the content.

Or proceed with Product’s further exploration display the full description and metadata of given product and access data. 
![product-page-1](https://github.com/EOEPCA/open-science-catalog-metadata/assets/120453810/2c89b757-2da8-41ef-9422-0456d583c97c)

## **Discovering Catalog content**

The contents of the Open Science Data Catalogue metadata repository are kept as a static STAC Catalogue, a collection of inter-linked JSON files (Items and Collection) with supplementary metadata. The Catalogue host following elements (described in Glossary):

- Themes
- Variables
- EO-Missions
- Projects
- Products
- Processes

Each element lists number of objects of selected type, which are in turn represented as a STAC Catalogue or STAC Collection. These objects use the OSC STAC extension to reference elements of other groups they are associated with. e.g a Product has an "osc:variables" field, that lists the measurement variables this product is comprised of. More information on how the items are linked in **Contribution** section).

![STACBrowser-OSC](https://github.com/EOEPCA/open-science-catalog-metadata/assets/120453810/257daa0c-a567-4ed2-a8bc-3fb594079b2c)

**Overview** button on the top of the page provides possibility to navigate between folders in current Open Science Data Catalogue structure. It also gives access to a list of STAC Static Catalogs and STAC APIs available under STAC Index.

STAC Browser allows to filter existing catalogs by their title, order them by name and display as tiles or list. As a minimum requirement for each STAC catalog, the date of the latest update is provided in metadata field.

![EO-missions-page](https://github.com/EOEPCA/open-science-catalog-metadata/assets/120453810/4b49bdee-61e3-4481-96a3-6416be261761)

Each element in the catalog has associated description, link and product(s) related to that element. In this example we can see 51 products associated with Aqua (EOS/PM-1) EO-Mission.

![Aqua-eomission](https://github.com/EOEPCA/open-science-catalog-metadata/assets/120453810/ba016cfd-ff4e-4684-b159-37cbd7165b89)

For the time being more than 270 products have been imported and made available to discover by scientific community. 

![products-stac](https://github.com/EOEPCA/open-science-catalog-metadata/assets/120453810/0b3e31c8-ce9d-4f8b-99d6-3061628be47d)

The Browser lists all products gathered in the Open Science Data Catalogue, with temporal extent (start and end date of the product) provided next to the product title (in grey box). Filtering by product name is also possible. 
Clicking the product will provide the main information about each item ingested to the catalog. An example page of the selected product published in Open Science Data Catalogue is provided here: 
![product-page-2](https://github.com/EOEPCA/open-science-catalog-metadata/assets/120453810/4753f91b-b646-4255-a948-d2cce0b9adf0)

In the Product page: general description, metadata, access to the resource (URL link), website – URL to documentation of the product and product extent are provided.

Full metadata description of the selected product is provided here. Here the contents of the metadata description from .json file are displayed, and related STAC objects are linked to corresponding files i.e. Project, EO Mission, Variable, Theme etc.
![metadata-product](https://github.com/EOEPCA/open-science-catalog-metadata/assets/120453810/1e8c597d-031f-4763-8a11-382f8b587c22)

Source metadata is used to provide Access to **external** (source) data repository – from data provider or project PI and Documentation, which gives a link to description of the dataset, scientific publications etc.

Additionally search keywords are added to allow product retrieval.

In some cases when the data is publicly available and can be downloaded, the access to single tiles or granules of products are being provided to broader community. Another embedded STAC Catalog is created then to host the spatial data itself. By selecting the catalog you can browse through single items and download one image out of vast collection of files directly from the portal.

![products-assets](https://github.com/EOEPCA/open-science-catalog-metadata/assets/120453810/b229ad19-9868-4f94-a011-1381db43661a)

Select single item from a daily collection of products. Under Assets expand more information about dataset and click Open to download single tile to your local storage.

![metadata-assets](https://github.com/EOEPCA/open-science-catalog-metadata/assets/120453810/8cbd1bf2-1afa-4b99-80a7-13513157e7d1)

Up botton allows to return to the previous element in the hierarchy. Depending on the metadata wirtten in the single file (for example: tif or nc file) additional metadata like projection or image dimensions are provided.

Here additionally an example of Project page is displayed. Catalogs on the right panel represent products collections associated with the given project and discoverable from Project page.

![project-page](https://github.com/EOEPCA/open-science-catalog-metadata/assets/120453810/ae9b723b-383a-434b-941a-9b700eaceace)

Additionally in Project metadata, link to EO4Society page and dedicated project page built by consortium members is provided, as well as list of consortium members and technical officer assigned to the project at ESA.

## **Search**

Once harvested into the resource management, the STAC API of the Resource Catalogue allows efficient searching for Products using text, geospatial, temporal and other metadata attributes. Search results independently from the way the search was performed by user (described in the section above) will present the list of products that match the query.

![search](https://github.com/EOEPCA/open-science-catalog-metadata/assets/120453810/fd73379e-16f9-4649-b1db-4d55f44b8511)

Filters possible to apply to limit products number returned are available on the left side panel. User can search by Theme, Variable, Project, EO Mission and Region. Region parameter can be used by drawing user-defined shape on the interactive world map, and selecting an option to filter the products by their spatial coverage, taking only products that are contained within the selected geometry, or intersecting products.

To select other filters, expand given filter name with the arrow and select or type a name of the filter to be applied.
![search-1](https://github.com/EOEPCA/open-science-catalog-metadata/assets/120453810/3824063b-e89c-4906-9077-8f2d429031d0)

Products that match the query are displayed under the Results list. The number in the brackets indicate how many products match that request.

Click on "RESET" button to clear up all filters previously applied and apply different filtering.
