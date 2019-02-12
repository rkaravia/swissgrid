# Benchmarks

## Run

```
$ npm run benchmarks
```

## Results

#### Configuration

The following results have been obtained with this configuration:
- CPU: Intel(R) Core(TM) i5-6440HQ CPU @ 2.60GHz
- Engine: Node.js v10.14.0

#### Notes

- Performance is similar for all input values.
- Proj4js is a bit faster, probably because of lower epsilon values for iteration termination,
  which implies that swissgrid is also slightly more precise.
- `swissgrid.fast` is about 5 times faster than `swissgrid`.

```
project [ 8.730497222222223, 46.044130555555554 ]
proj4 x 1,484,322 ops/sec ±0.67% (90 runs sampled)
swissgrid x 980,731 ops/sec ±0.76% (93 runs sampled)
swissgrid.fast x 5,888,837 ops/sec ±0.42% (92 runs sampled)
Results:
[ [ 2700000.01830365, 1100000.036081426 ],
  [ 2700000.018303665, 1100000.0360796044 ],
  [ 2699999.7636211636, 1099999.9730950352 ] ]


project [ 7.465273196111111, 46.87709460055556 ]
proj4 x 1,477,448 ops/sec ±0.81% (94 runs sampled)
swissgrid x 977,763 ops/sec ±0.89% (94 runs sampled)
swissgrid.fast x 5,829,358 ops/sec ±0.41% (93 runs sampled)
Results:
[ [ 2602030.750770318, 1191775.051827552 ],
  [ 2602030.750770318, 1191775.051825742 ],
  [ 2602030.7312697386, 1191775.0609446412 ] ]


project [ 7.668606410277778, 47.5670514725 ]
proj4 x 1,497,738 ops/sec ±0.85% (90 runs sampled)
swissgrid x 967,562 ops/sec ±0.91% (92 runs sampled)
swissgrid.fast x 5,793,718 ops/sec ±0.63% (93 runs sampled)
Results:
[ [ 2617306.925903672, 1268507.8824276845 ],
  [ 2617306.925903674, 1268507.8824258845 ],
  [ 2617306.969958962, 1268508.0026460951 ] ]


project [ 9.784360478611111, 47.515325776944444 ]
proj4 x 1,483,164 ops/sec ±0.79% (96 runs sampled)
swissgrid x 969,774 ops/sec ±1.03% (95 runs sampled)
swissgrid.fast x 5,798,608 ops/sec ±0.56% (94 runs sampled)
Results:
[ [ 2776668.606310126, 1265372.2765354996 ],
  [ 2776668.6063101524, 1265372.2765336984 ],
  [ 2776668.5367641654, 1265372.08001309 ] ]


project [ 6.102035100277778, 46.45408056138889 ]
proj4 x 1,498,932 ops/sec ±0.70% (92 runs sampled)
swissgrid x 973,717 ops/sec ±0.86% (94 runs sampled)
swissgrid.fast x 5,817,183 ops/sec ±0.58% (92 runs sampled)
Results:
[ [ 2497312.6616432285, 1145626.167859736 ],
  [ 2497312.661643213, 1145626.1678579182 ],
  [ 2497312.7474251455, 1145626.0879285068 ] ]


project [ 9.021219181388888, 45.92928833888889 ]
proj4 x 1,495,101 ops/sec ±0.82% (90 runs sampled)
swissgrid x 977,402 ops/sec ±0.78% (93 runs sampled)
swissgrid.fast x 5,795,462 ops/sec ±0.99% (91 runs sampled)
Results:
[ [ 2722759.0832458395, 1087648.2254752307 ],
  [ 2722759.083245858, 1087648.2254734035 ],
  [ 2722758.7894081627, 1087648.113954975 ] ]


unproject [ 2700000, 1100000 ]
proj4 x 916,054 ops/sec ±1.41% (92 runs sampled)
swissgrid x 609,930 ops/sec ±0.90% (93 runs sampled)
swissgrid.fast x 4,334,701 ops/sec ±0.61% (94 runs sampled)
Results:
[ [ 8.730496987086799, 46.044130241846176 ],
  [ 8.730496987086994, 46.04413024186256 ],
  [ 8.730499333333333, 46.04412677777778 ] ]


unproject [ 2602030.74, 1191775.03 ]
proj4 x 926,090 ops/sec ±0.78% (90 runs sampled)
swissgrid x 606,185 ops/sec ±1.17% (91 runs sampled)
swissgrid.fast x 4,325,675 ops/sec ±0.61% (92 runs sampled)
Results:
[ [ 7.465273062163004, 46.877094413145066 ],
  [ 7.465273062163009, 46.877094413161316 ],
  [ 7.465276473621471, 46.87709230763104 ] ]


unproject [ 2617306.92, 1268507.87 ]
proj4 x 926,303 ops/sec ±0.75% (94 runs sampled)
swissgrid x 602,874 ops/sec ±0.96% (92 runs sampled)
swissgrid.fast x 4,336,259 ops/sec ±0.46% (96 runs sampled)
Results:
[ [ 7.668606338807655, 47.567051370054216 ],
  [ 7.66860633880769, 47.5670513700704 ],
  [ 7.6686175735762525, 47.56704963305237 ] ]


unproject [ 2776668.59, 1265372.25 ]
proj4 x 920,471 ops/sec ±0.92% (95 runs sampled)
swissgrid x 607,024 ops/sec ±0.87% (93 runs sampled)
swissgrid.fast x 4,325,996 ops/sec ±0.64% (93 runs sampled)
Results:
[ [ 9.784360261134198, 47.51532555130069 ],
  [ 9.78436026113456, 47.51532555131683 ],
  [ 9.784364426862906, 47.515329717371074 ] ]


unproject [ 2497312.65, 1145626.14 ]
proj4 x 932,562 ops/sec ±0.71% (94 runs sampled)
swissgrid x 606,798 ops/sec ±0.81% (93 runs sampled)
swissgrid.fast x 4,344,428 ops/sec ±0.50% (95 runs sampled)
Results:
[ [ 6.102034960939373, 46.45408031798964 ],
  [ 6.102034960939168, 46.454080318006 ],
  [ 6.102026632660036, 46.454096882345034 ] ]


unproject [ 2722759.06, 1087648.19 ]
proj4 x 924,561 ops/sec ±0.98% (93 runs sampled)
swissgrid x 609,246 ops/sec ±1.14% (93 runs sampled)
swissgrid.fast x 4,325,287 ops/sec ±0.61% (92 runs sampled)
Results:
[ [ 9.021218881837799, 45.92928803201253 ],
  [ 9.021218881838035, 45.929288032028914 ],
  [ 9.021222762413561, 45.92928757045515 ] ]
```
