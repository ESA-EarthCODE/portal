# **Contributing to the EarthCODE Catalog**

Catalogue's functionalities described in the previous sections are granted to any user (registered/and non-registered users). Catalogue exploration and content discovery and access to the products is fully open and transparent. In this section we will describe how to make new data accessible through the catalogue and make them available for broad scientific community.

### **Who can contribute?**

If you are an **ESA Project PI, Data Owner or OSC Admin** you can contribute to the content of the Open Science Data Catalogue in following ways:

- Data ingestion
- Updating content (description of products/projects etc.)
- Request removal of existing Item

**Other user requirements include:**

- Only users with an active GitHub account are allowed to contribute to the catalogue. In case of absence of GitHub account, please [create an account first.](https://github.com/join)

### **System requirements**

- Ubuntu OS min version \> 20. Script tested on Ubuntu 22.04 and Ubuntu 20.04 version.
- Minimum requirements: 2 GB RAM, 2 CPUs, 32 GB of disk space.
- User with full sudo privileges to run all Linux commands and install packages as root.
- **Selection of packages to be installed in order to run bash script:** python 3 **,** gdal **,** tree, jq, parallel **,** curl, stactools.
- Python 3.8 or greater
- Following dependencies are necessary to make correct conversion of products to be published: `stactools` - to manage STAC catalogs
`stactools-datacube` - to enrich STAC items with datacube metadata
Please find full documentation and installation instructions here: [https://stactools.readthedocs.io/en/stable/index.html](https://stactools.readthedocs.io/en/stable/index.html)

### **How to ingest new data into catalog?**

Data ingestion to the catalog can be performed in different ways, depending on **where the products are originally stored** , but also depending on **the number of products to be ingested** therefore size.

All themes, variables, project and products are hosted as a metadata repository placed on the GitHub platform: Git and [GitHub API](https://docs.github.com/en/rest). Each update to metadata is handled via [Pull Request](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-pull-requests). This pull request allows for reviewers to see the changes to be applied in advance, to check for validity of the requested changes (via an automated validation script) and to provide reviews as comments. If appropriate, the changes can be merged with the main branch of the repository. When a Pull Request is merged, the updated STAC catalog is deployed as Static Catalog.

![ingest-data-scheme](https://github.com/EOEPCA/open-science-catalog-metadata/assets/120453810/5d6297e7-5d66-4564-9538-bb6eaeb92598)

The design document describes the architecture of Open Science Catalog and its design: [URL here]()

At the moment Open Science Data Catalogue supports ingestion of new products via **GitHub only**. This allows data providers/ projects PI to apply **multiple changes or adding several new products at once**.

In this section the contribution procedure is described in an example of Product. Please note that in the same way new Variables, Projects and Themes and EO Missions can be added. We will be using three Use Case scenarios to better describe the procedure of product ingestion to the catalogue:

1. Adding metadata of a single product (item) to the catalogue manually.
2. Ingesting metadata of assets with STAC Catalog:
  1. Adding multiple or single product(s) stored in external server (open-access storage)
  2. Adding multiple or single product(s) stored locally

### **Which information is needed before I start importing new data?**

Before making any changes to the catalog's content please make sure you have already prepared following information about your product:

- Product should be related to a result of ESA-funded project. Check if the Project's page already existing within the ESA Open Science Data Catalogue: [https://opensciencedata.esa.int/](https://opensciencedata.esa.int/). If not **create a Project page first.**
- **Complete metadata available** (to correctly describe the Product)
- Product should be stored in an external database that is approved and **stable data repository** (. CEDA Data Archive: [https://catalogue.ceda.ac.uk/](https://catalogue.ceda.ac.uk/); Zenodo repository: [https://zenodo.org/](https://zenodo.org/) etc.)
- If the product you would like to ingest is stored elsewhere, see other data ingestion scenarios described in the section xyz.
- Data provided in formats acceptable by GDAL and rasterio library.

Please refer to the graphic below to check which metadata are required for your product **before starting Product upload.**

![metadata-stac](https://github.com/EOEPCA/open-science-catalog-metadata/assets/120453810/71b8e8a7-9a86-491b-ae54-1fb4de9ccf32)


### **Add metadata of a single product (item) to the catalogue**

Manual ingestion of single item into catalogue is rather simple and straightforward when you have all metadata prepared correctly and when you follow these few steps on how to add new product (collection.json) to a publicly open repository of Open Science Data Catalogue.

Please note that this workflow is applicable also to other elements of the catalogue such as Projects, Themes, Variables, EO Missions.
Here the procedure of adding or updating metadata of single item using GitHub on Web browser is provided.

1. Go to **open-science-catalog-metadata-staging** repository:
[https://github.com/EOEPCA/open-science-catalog-metadata-staging](https://github.com/EOEPCA/open-science-catalog-metadata-staging)

![osc-metadata-github](https://github.com/EOEPCA/open-science-catalog-metadata/assets/120453810/b852819b-5ed5-4a51-bc09-cf4cfdf05ff9)

2. Go to **/products/** folder to extend the list of products:

![products-github](https://github.com/EOEPCA/open-science-catalog-metadata/assets/120453810/1b4cd860-c7ed-431b-8b9d-128bbf051e0e)

3. Open any folder with the short product name and check the metadata file stored in _collection.json_ format.

4. Click on Editing mode and open JSON file with github.dev to make changes or to copy the content of JSON file in web-based editor.

![collection-json-github](https://github.com/EOEPCA/open-science-catalog-metadata/assets/120453810/b3c0ea6b-32e0-40ef-9ad9-3cab050d16c1)

5. In GutHub web-based text editor (github.dev), select "Source controller" and "Create a new branch"

![branch-git](https://github.com/EOEPCA/open-science-catalog-metadata/assets/120453810/d69402d5-786b-4304-805e-cd6e47885da2)

6. Switch to new Branch:

![switch-branch](https://github.com/EOEPCA/open-science-catalog-metadata/assets/120453810/9229d871-de81-4921-ba95-1aaaeb51db44)

7. Go to **Explorer** and Add a new folder where you can store the collection.json with metadata of your Product. Name your folder with a unique name (id) that you give to your product!
![github-dev1](https://github.com/EOEPCA/open-science-catalog-metadata/assets/120453810/4ab60f05-5fbf-4d8a-aeb4-c523c2d3557b)


8. Create collection.json file and add all metadata needed for the product. The simplest way to create a new collection.json is to CTRL+A and CTRL+C of existing collection.json (even from different project and CTRL+V to a new empty collection.json created.

![collection-json-inside](https://github.com/EOEPCA/open-science-catalog-metadata/assets/120453810/405aadda-8826-4c8e-a383-c03e7b96378f)

9. You can see the file being modified with the capital letter M.

![github-dev-5](https://github.com/EOEPCA/open-science-catalog-metadata/assets/120453810/8492a338-c15d-4746-86d5-7a2429c3b6e5)

10. Commit and Push changes from Source Control Panel. Write a purpose or a subject of changes made in the "Message" field.

![github-dev-6](https://github.com/EOEPCA/open-science-catalog-metadata/assets/120453810/c90f301d-da5e-4f18-b4fa-77ab0dc1f580)

11. Create Pull Request to request changes in the repository!

![createPR](https://github.com/EOEPCA/open-science-catalog-metadata/assets/120453810/ff7ccbaa-75f1-4568-81ce-ed1a052e0ecd)

12. Once created the Pull Request will be accepted or rejected by open-science-catalog-metadata administrator.

### **Ingest metadata of assets with STAC Catalog**

As mentioned in the previous sub-chapter metadata repository is stored in the GitHub repository. For ingestion of data that are stored in structural catalog, user should convert this file structure to ingest to STAC catalog. Then created STAC collection can be directly imported to GitHub and merged to existing Open Science Data Catalogue repository.

To convert the file structure to STAC collection, please refer to [stactools documentation](https://stactools.readthedocs.io/en/stable/index.html), which describes best practices on creation of such collection.

Data owners interested in ingestion of multiple products to the catalog are asked to convert their dataset directly into STAC items collection. This especially refers to large datasets (e.g. multitemporal .nc files containing monthly products for a time period of 20 years). Is such case data owners or principal investigators of the project will be provided with script which facilitates that process of ingestions if such products, allowing their conversion to .json STAC items collection.

### **Add multiple or single product(s) stored in external server (open-access storage) with STAC Catalogue**

In the previous section the steps applied described a process to ingest metadata and the access to products stored in external server which may provide open data access to anyone or to registered users in some cases.

In this scenario complete instructions are provided for how to import larger datasets when multiple changes to the files stored in open science data catalog in GitHub repository are required. With our current system, it is impossible for the user to keep track 10+ open pull requests, so when user requires multiple changes at once, Git with a code editor is recommended.

The description on how to import STAC catalogue which is preferred method of an ingestion of asset metadata is described in details. This will allow end users to access metadata of individual granules (stored originally in the cloud-native external server) and download them to local storage separately without the need of bulk downloading of all files at once. The workflow includes:

1. **Find the description of the dataset in Open Science Data Catalogue frontend**.
    If the product (dataset) does not exist in the catalog yet, add it to the catalog first! (see subchapter above).

2. **Prepare an upload dataset (assets / granules)**
This step is a **prerequisite that must be met for any data collection to make it publicly available and allow end user to discover and use the data.** This can be done in two modes:
a) uploading data to s3 bucket administrated by OSC developers,
b) **provide link to capable HTTP where files** are already available to download or / and preview.

In this case assets are stored in open-access repository:
[https://zenodo.org/record/7568049#.ZDbG4nbP1aQ](https://zenodo.org/record/7568049#.ZDbG4nbP1aQ).

**Therefore, no preliminary steps are required related to data relocation from this source repository.**
The preparation of the dataset must consist first of assessing the exact full path to original repository for each granule. In this case the list of products is loaded and save in standard text file:
```bash
curl -sL "https://zenodo.org/record/7568049#.ZDbG4nbP1aQ" | grep -oP '<a href="\K([^"]+\.tif)' > tiff_links.txt ; sed -i 's|^|https://zenodo.org|' tiff_links.txt
```
* In case of a long list of files to be converted at once it is advised to split the list of links for each granule into smaller list. It has been confirmed that up to 10 files can be written to JSON format at once using the tool proposed.

3. **Create STAC Catalog for the dataset**

  a. Create a structure of _catalog.json_ (could only be 1, but depending on the dataset size and structure it can be more)
  b. Create STAC Items data items (granules). Either:
    i. **for 2D raster datasets:** _ **`stac create-item`** _
    ii. for netcdfs/ZARRs _`stac datacube create`_
    iii. other tools?
    iv. or manually***

In this scenario a 2D raster datasets are used and the STAC catalog is created with open-source _tool 'stac create-item'_ (i). In case of multiple items to be converted at once, a for loop is created to create stac item .json file for each granule by accessing separate item in a loop:

```bash
mkdir item_files ; for line in $(cat tiff_links.txt); do item_json="item_files/item_$line_number.json"; echo $line ; stac create-item "$line" | tee "$item_json"; sleep 3; ((line_number++)); done < "tiff_links.txt"
```

** Note: once files are created, you can access the metadata by opening and reading single item.json file with cat item.json

*** Future updates in the guide are foreseen and guidance specific to most commonly used data formats will be provided. To manually create JSON file, please refer to general file structure provided in the STAC documentation: [https://github.com/radiantearth/stac-spec/blob/master/examples/core-item.json](https://github.com/radiantearth/stac-spec/blob/master/examples/core-item.json).

  c. **Add STAC Items into Catalog structure**

To create appropriately _catalog.json_ file that lists **all related items** to specific collection and gathers them in the catalog, it is necessary to follow strict _catalog.json_ file formatting as suggested in:

[**https://github.com/radiantearth/stac-spec/blob/master/examples/catalog.json**](https://github.com/radiantearth/stac-spec/blob/master/examples/catalog.json)

**Please download the template on how this catalog.json should looks like and**  **upload it into the directory where the item files are stored.**

- **Make necessary correction to imported catalog.json example file:**

- the only changes which are required is to **remove "child" and "item" entries** from the catalog.json.
- Item entries will be updated automatically once you add the assets.
- Update the default description and title of the catalog

The final catalog.json should looks like this:

```json

{
  "type": "Catalog",
  "id": "examples",
  "title": "Example catalog",
  "stac_version": "1.0.0",
  "description": "This catalog is a simple demonstration of an example catalog that is used to organize STAC Items",
  "links": [
    {
      "rel": "self",
      "href": "https://raw.githubusercontent.com/radiantearth/stac-spec/v1.1.0/examples/catalog.json",
      "type": "application/json"
    },
    {
      "rel": "root",
      "href": "./catalog.json",
      "type": "application/json",
      "title": "Example catalog"
    }
  ]
}
```
NOTE: While working on Linux based environment you can make changes with ```vi catalog.json``` in terminal.

- **Add STAC Items to a common  _**catalog.json** _ **by applying** _ **'stac add'** _ **command**
```bash
for item_file in item_files/item_*.json; do stac add "$item_file" catalog.json; done;
```
- **Export the catalog structure** _ **`stac copy`** _

**Before performing this step, remember to**  **change the directory**  **from the input data collection to output repository which will be copied to s3 bucket!**
```bash
stac copy catalog.json item_10files/out_json/ -l[https://s3.waw2-1.cloudferro.com/swift/v1/AUTH_3f7e5dd853f54cebb046a29a69f1bba6/Catalogs/4DGreenland/supraglacial-storage-and-drainage-lake-features-mapped-by-sentinel1/catalog.json](https://s3.waw2-1.cloudferro.com/swift/v1/AUTH_3f7e5dd853f54cebb046a29a69f1bba6/Catalogs/4DGreenland/supraglacial-storage-and-drainage-lake-features-mapped-by-sentinel1/catalog.json)
```
NOTE: Check first the location of your product within the Open Science Data Catalog repository!

4. **Upload STAC Catalog to S3 or another HTTP service**

With this simple command all JSON files (single granules) are moved to dedicated OSC s3 bucket metadata repository:

```s3cmd sync item_10files/out_json/ s3://Catalogs/4DGreenland/supraglacial-storage-and-drainage-lake-features-mapped-by-sentinel1/```

5. **Add reference to Product's metadata and give access to created STAC Catalog**

In OSC Catalogue find target product which needs to be updated with the STAC Item's collection. To perform this step '_href'_ link must be updated, by inserting the list to catalog.json file stored in s3 repository to Product's collection.json file. As shown below:
```bash
{
"rel": "child",
"href": "https://s3.waw2-1.cloudferro.com/swift/v1/AUTH_3f7e5dd853f54cebb046a29a69f1bba6/Catalogs/4DGreenland/supraglacial-storage-and-drainage-lake-features-mapped-by-sentinel1/catalog.json",
"type": "application/json",
"title": "Items"
}
```
**NOTE:** You can make changes using GitHub Desktop or within web-based editor as shown in the section before.

6. **Commit changes and create Pull Request**

Changes in Product description will be reviewed by OSC administrator and accepted or rejected by administrator.

7. **Preview uploaded STAC granules collection in the Open Science Data Catalogue frontend:**

[**https://opensciencedata.esa.int/products/supraglacial-storage-and-drainage-lake-features-mapped-by-sentinel1/collection**](https://opensciencedata.esa.int/products/supraglacial-storage-and-drainage-lake-features-mapped-by-sentinel1/collection)

### **Add multiple or single product(s) originally stored in local repository with STAC Catalogue**

In this scenario large open-source datacube was investigated and made available to be used by open public. Steps presented in this scenario will allow to first change the location of the dataset to make them accessible to all users and create STAC Catalog filled with metadata from datacube. This will allow end users to access metadata of datacube which is accessible, downloadable and can be visualized or further processed in other locations (e.g. Jupyter Notebooks).

1. **Prepare an upload data (assets / granules)**

This step is a prerequisite that must be met for any data collection to make it publicly available and allow end user to discover and use the data.
This can be done in two modes:

**1) uploading data to s3 bucket administrated by OSC developers,**
2) provide link to capable HTTP where files are already available to download or / and preview.

In this case the first mode will be used. Datacube is stored in .zip archive making it impossible to be directly accessed and explored. Therefore, a preliminary step required related to data relocation from source repository: [**https://zenodo.org/record/8055879**](https://zenodo.org/record/8055879)to a dedicated folder in OSCAssets repository in Open Science Data Catalogue S3 storage.

**File relocation requires configured access to dedicated S3 bucket which in this case is granted only to authorized contributors.**

Once configured, downloaded product should be extracted and relocated into designated storage, where it will become accessible for anyone.
```bash
s3cmd sync SeasFireCube_v3.zarr s3://OSCAssets/seasfire/seasfire-cube/SeasFireCube_v3.zarr
```
2. **Create a STAC Catalog for the data**
a. Create a structure of catalog.json (could only be 1 if not more is necessary)
b. Create STAC Items data items (granules). Either:
    i. for 2D raster datasets_: `stac create-item`_
    ii. **for netcdfs/ZARRs** _ **`stac datacube create-item`** _
    iii. other tools?
    iv. or manually

** Future updates in the guide are foreseen and guidance specific to most commonly used data formats will be provided. To manually create catalog.json please refer to basic file structure provided in the STAC documentation.

In this scenario a 3D datacube is used and the STAC catalog is created with open-source _tool 'stac datacube create-item'_. This command uses _'stactools'_ extension package which allows to create or extend STAC Items dealing with multi-dimensional data formats and to extract datacube related metadata from these assets. Full documentation and the latest release of the package can be found under the link here: [https://pypi.org/project/stactools-datacube/](https://pypi.org/project/stactools-datacube/). Once dataset is placed in designated location, it is possible to create JSON file with the following command:

```bash
stac datacube create-item s3://OSCAssets/seasfire/seasfire-cube/SeasFireCube_v3.zarr/ item.json '--use-driver ZARR
```

** Note: once files are created, you can access the metadata by opening and reading single item.json file with ```cat item.json```

Next steps taken to enable product to be discoverable within STAC Catalog are the same as in previous use case (see point **2c - 5**) and follow the steps described in this previous section.

** Remember to change the folder name and product folder in s3 bucket to relate to adequate product in OSC**

3. **Commit changes and create Pull Request Preview uploaded STAC Item catalog:**
Changes in Product description will be reviewed by OSC administrator and accepted or rejected by administrator.

4. **Preview uploaded STAC granules collection in the Open Science Data Catalogue frontend:**
[https://opensciencedata.esa.int/products/seasfire-cube/collection](https://opensciencedata.esa.int/products/seasfire-cube/collection)

5. **Data can be visualized using Jupyter Notebook and dedicated 'xarray' Python package to further work with the datacube on-the-cloud and visualize variables.**

Full metadata contained in the .zarr file can also be read directly from the browser under: [https://s3.waw2-1.cloudferro.com/swift/v1/AUTH_3f7e5dd853f54cebb046a29a69f1bba6/OSCAssets/seasfire/seasfire-cube/SeasFireCube_v3.zarr/.zmetadata](https://s3.waw2-1.cloudferro.com/swift/v1/AUTH_3f7e5dd853f54cebb046a29a69f1bba6/OSCAssets/seasfire/seasfire-cube/SeasFireCube_v3.zarr/.zmetadata)

### **Add multiple assets at once with GitHub**

Once created the JSON files describing each single asset of larger products collection can be imported to Open Science Data Catalogue repository of metadata at once using GitHub.

For this, GitHub CLI or `gh` should be used. GitHub CLI is a command-line interface to GitHub for use in terminal or scripts. It facilitates the process of making changes in open access github repository as the one at open-science-data-catalog-metadata and allows to ingest several files at once. To work with this command-line tool. Please check the installation steps first: [https://github.com/cli/cli/blob/trunk/docs/install\_linux.md#debian-ubuntu-linux-raspberry-pi-os-apt](https://github.com/cli/cli/blob/trunk/docs/install_linux.md#debian-ubuntu-linux-raspberry-pi-os-apt)

To correctly install `gh` tool, follow these instructions. Please note that instructions provided here refer to Linux Ubuntu OS, and have not been tested on any other software:

1. **Install System dependencies:**
```bash
sudo apt update
sudo apt install -y git python3 python3-pip gdal-bin tree jq parallel curl
```

2. **Install 'gh' tool. In case you encounter any issues please follow instructions from here:** [https://github.com/cli/cli/blob/trunk/docs/install\_linux.md#debian-ubuntu-linux-raspberry-pi-os-apt](https://github.com/cli/cli/blob/trunk/docs/install_linux.md#debian-ubuntu-linux-raspberry-pi-os-apt)
```bash
type -p curl \>/dev/null || (sudo apt update && sudo apt install curl -y)
curl -fsSL https://cli.github.com/packages/githubcli-archive-keyring.gpg | sudo dd of=/usr/share/keyrings/githubcli-archive-keyring.gpg \
&& sudo chmod go+r /usr/share/keyrings/githubcli-archive-keyring.gpg \
&& echo "deb [arch=$(dpkg --print-architecture) signed-by=/usr/share/keyrings/githubcli-archive-keyring.gpg] https://cli.github.com/packages stable main" | sudo tee /etc/apt/sources.list.d/github-cli.list \> /dev/null \
&& sudo apt update \
&& sudo apt install gh -y​
```

3. **Install Python dependencies**

Following dependencies are necessary to make correct conversion of products to be published:

- `stactools` - to manage STAC catalogs
- `stactools-datacube` - to enrich STAC items with datacube metadata

To install following packages copy and paste following in your terminal:
```bash
pip install -U stactools stactools-datacube
```
4.**Ingest products to GitHub metadata repository using GitHub CLI**
```bash
# clone the git repository:
gh repo clone \<insert-user-here\>/open-science-catalog-metadata.git
# enter repository
cd open-science-catalog-metadata
# create a new branch to work on
git checkout -b \<branch-name\>
cd ..
# merge the output catalog to the metadata repository
stac merge --as-child \
\<folder-with-JSON-files/catalog.json \
# go to the repo again and commit all new/changed files
cd open-science-catalog-metadata
git add \<project-name\>/\<product-name\>
git commit -m"Adding woc-l4-se-erastar-h\_v2.0"
git push --set-upstream origin \<branch-name\>
gh pr create -f
```
5. **Check the status of Pull Requests in GitHub:**

[https://github.com/EOEPCA/open-science-catalog-metadata/actions](https://github.com/EOEPCA/open-science-catalog-metadata/actions)

6. **Changes to the Catalogue content will be reviewed and accepted or rejected by the OSC Administrator.**