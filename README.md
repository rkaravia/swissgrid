# swissgrid

Transform coordinates between the Swiss projected coordinate systems (LV95/LV03) and WGS 84.

## About LV95 / LV03

From \[[1](#literature)\]:

> The local reference system CH1903+ with its reference frame **LV95** (Landesvermessung 1995) is
> derived from CHTRS95 and is the official system for national and cadastral survey since 2016.

> CH1903 is the classical local reference system derived from triangulation. Its reference frame **LV03**
> (Landesvermessung 1903) was the official frame for cadastral surveying in most of the cantons until
> the end of 2016.

## Install

```
$ npm install swissgrid
```

Or download the library from here: https://unpkg.com/swissgrid

The unpkg URL forwards to the latest version, which can also be used to
[generate an SRI Hash](https://www.srihash.org/) and include the library using the `<script>` tag.

## Usage

### Browser

```javascript
var lonLat = [7, 47];
var EN = swissgrid.project(lonLat);
```

```javascript
var EN = [2600000, 1200000];
var lonLat = swissgrid.unproject(EN);
```

### Node.js

#### CommonJS

```javascript
var swissgrid = require('swissgrid');

var EN = swissgrid.project([7, 47]);
var lonLat = swissgrid.unproject([2600000, 1200000]);
```

#### ES Module

```javascript
import { project, unproject } from 'swissgrid';

var EN = project([7, 47]);
var lonLat = unproject([2600000, 1200000]);
```

### Full API

The examples above are for transformations to and from LV95.

LV03 is also available:

```javascript
var yx = swissgrid.lv03.project([7, 47]);
var lonLat = swissgrid.lv03.unproject([600000, 200000]);
```

The approximate formulas from \[[1](#literature)\] are also available. They are ~ 5x faster (see [benchmarks](BENCHMARKS.md)), but
introduce an error up to 1 meter:

```javascript
var EN = swissgrid.fast.project([7, 47]);
var lonLat = swissgrid.fast.unproject([2600000, 1200000]);
var yx = swissgrid.fast.lv03.project([7, 47]);
```

All projection and unprojection functions also support transformation of heights in meters:

```javascript
var ENh = project([7, 47, 650]);
var lonLatH = unproject([2600000, 1200000, 600]);
```

## Coordinates

### Format

In this library, coordinates are always represented as arrays of numbers.

### Order

Geographic coordinates are always in the order \[longitude, latitude \[, height\]\] because that's
[the right way](http://www.macwright.org/2016/07/15/longitude-latitude-is-the-right-way.html).

Coordinates in LV95 / LV03 are in the order \[easting, northing \[, height\]\].

### Naming

All code and examples use the traditional way of naming easting and northing in LV95 / LV03
which can be a bit confusing and is therefore explained here.

#### LV95

From \[[1](#literature)\]:

> In LV95, the easting is usually abbreviated
> by the letter E, whereas the northing gets the letter N.

=> For example E = 2600000, N = 1200000

#### LV03

From \[[1](#literature)\]:

> In LV03, the easting is usually abbreviated by the letter y, whereas the
> northing gets the letter x.

=> For example y = 600000, x = 200000

The naming of coordinates in LV03 can be confusing because in the context of maps, north is usually
oriented upwards, which means that the x axis is also oriented upwards. This is different from common
usage in mathematics, physics, and engineering, where the x axis is oriented to the right.

## Precision

### LV95 vs LV03

From \[[1](#literature)\]:

> \[The parameters for CH1903+\] can also be used \[...\] for CH1903.
> But in the case of CH1903, one must be aware that because of the local
> distortions of this network the transformed coordinates can be false by up to 1.6 meters compared to
> the official coordinates in CH1903.

And further:

> The reference frames LV03 and LV95 show differences of up to 1.6 metres because of the local distortions
> of LV03. These local distortions are modelled with a local affine transformation (program
> FINELTRA, data set CHENyx06) or the derived distortion grids in various formats for GIS software or
> GPS receivers.

This library uses the same parameters for both LV95 and LV03 and does not model the local distortions of LV03.
Transformations to and from LV03 can therefore have errors up to 1.6 meters. Using the approximate formulas
(`swissgrid.fast`) introduces an additional error of up to 1 meter within Switzerland and more outside.

## License

This library is licensed under the MIT license, see the LICENSE file.

## See Also

### Comparison with Proj4js

[Proj4js](https://github.com/proj4js/proj4js) is able to do transformations between many different
coordinate systems and also includes the "Swiss Oblique Mercator" projection and the CH1903 datum.
The swissgrid library aims to provide a simpler alternative for projects that require only LV95/LV03
and WGS 84 by providing:
- a simpler API
- a smaller bundle
- CommonJS, UMD, and ES Modules versions built by [microbundle](https://github.com/developit/microbundle)

### Literature

1. [Formulas and constants for the calculation of the Swiss conformal cylindrical projection and for the transformation between coordinate systems](https://www.swisstopo.admin.ch/content/swisstopo-internet/en/online/calculation-services/_jcr_content/contentPar/tabs/items/documents_publicatio/tabPar/downloadlist/downloadItems/20_1467104436749.download/refsys_e.pdf), swisstopo, December 2016
2. [Verordnung des Bundesamtes für Landestopografie über Geoinformation (GeoIV-swisstopo)](https://www.admin.ch/opc/de/classified-compilation/20071096/index.html)
3. [Collection of the Society for the history of Geodesy in Switzerland](https://emuseum.gggs.ch/literatur-lv/liste.htm#Landesvermessung%201903%20(LV03)), in particular:
   - [Die Projektionen der Schweizerischen Plan- und Kartenwerke](https://emuseum.gggs.ch/literatur-lv/liste-Dateien/1967_Bolliger_a.pdf), J. Bolliger, 1967
