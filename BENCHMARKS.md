# Benchmarks

## Run

```
$ npm run benchmarks
```

## Results

The following results have been obtained with this configuration:
- CPU: Intel(R) Core(TM) i5-6440HQ CPU @ 2.60GHz
- Engine: Node.js v10.14.0

```
project [ 8.730497222222223, 46.044130555555554 ]
proj4 x 1,487,481 ops/sec ±0.62% (91 runs sampled)
swissgrid x 990,804 ops/sec ±0.47% (90 runs sampled)
swissgrid.fast x 5,835,054 ops/sec ±0.81% (91 runs sampled)
swissgrid.fast (discard result) x 7,021,119 ops/sec ±1.08% (93 runs sampled)
do nothing x 691,038,635 ops/sec ±2.24% (81 runs sampled)
Results:
[ [ 2700000.01830365, 1100000.036081426 ],
  [ 2700000.018303665, 1100000.0360796044 ],
  [ 2699999.7636211636, 1099999.9730950352 ] ]


project [ 7.465273196111111, 46.87709460055556 ]
proj4 x 1,490,821 ops/sec ±0.80% (92 runs sampled)
swissgrid x 971,680 ops/sec ±1.46% (92 runs sampled)
swissgrid.fast x 5,825,663 ops/sec ±0.47% (92 runs sampled)
swissgrid.fast (discard result) x 6,915,113 ops/sec ±0.92% (91 runs sampled)
do nothing x 663,221,880 ops/sec ±1.82% (78 runs sampled)
Results:
[ [ 2602030.750770318, 1191775.051827552 ],
  [ 2602030.750770318, 1191775.051825742 ],
  [ 2602030.7312697386, 1191775.0609446412 ] ]


project [ 7.668606410277778, 47.5670514725 ]
proj4 x 1,494,350 ops/sec ±0.77% (91 runs sampled)
swissgrid x 961,193 ops/sec ±1.75% (90 runs sampled)
swissgrid.fast x 5,832,843 ops/sec ±0.48% (91 runs sampled)
swissgrid.fast (discard result) x 6,850,854 ops/sec ±1.41% (88 runs sampled)
do nothing x 640,990,460 ops/sec ±1.34% (88 runs sampled)
Results:
[ [ 2617306.925903672, 1268507.8824276845 ],
  [ 2617306.925903674, 1268507.8824258845 ],
  [ 2617306.969958962, 1268508.0026460951 ] ]


project [ 9.784360478611111, 47.515325776944444 ]
proj4 x 1,510,129 ops/sec ±0.60% (90 runs sampled)
swissgrid x 976,977 ops/sec ±0.89% (89 runs sampled)
swissgrid.fast x 5,867,169 ops/sec ±0.29% (93 runs sampled)
swissgrid.fast (discard result) x 6,853,859 ops/sec ±1.38% (93 runs sampled)
do nothing x 639,493,451 ops/sec ±1.37% (87 runs sampled)
Results:
[ [ 2776668.606310126, 1265372.2765354996 ],
  [ 2776668.6063101524, 1265372.2765336984 ],
  [ 2776668.5367641654, 1265372.08001309 ] ]


project [ 6.102035100277778, 46.45408056138889 ]
proj4 x 1,492,704 ops/sec ±0.72% (94 runs sampled)
swissgrid x 976,581 ops/sec ±0.80% (90 runs sampled)
swissgrid.fast x 5,834,497 ops/sec ±0.53% (93 runs sampled)
swissgrid.fast (discard result) x 6,861,299 ops/sec ±1.54% (92 runs sampled)
do nothing x 636,277,474 ops/sec ±1.42% (89 runs sampled)
Results:
[ [ 2497312.6616432285, 1145626.167859736 ],
  [ 2497312.661643213, 1145626.1678579182 ],
  [ 2497312.7474251455, 1145626.0879285068 ] ]


project [ 9.021219181388888, 45.92928833888889 ]
proj4 x 1,477,253 ops/sec ±0.97% (92 runs sampled)
swissgrid x 977,094 ops/sec ±0.80% (95 runs sampled)
swissgrid.fast x 5,837,199 ops/sec ±0.42% (91 runs sampled)
swissgrid.fast (discard result) x 6,928,433 ops/sec ±1.06% (90 runs sampled)
do nothing x 620,095,233 ops/sec ±1.41% (88 runs sampled)
Results:
[ [ 2722759.0832458395, 1087648.2254752307 ],
  [ 2722759.083245858, 1087648.2254734035 ],
  [ 2722758.7894081627, 1087648.113954975 ] ]


unproject [ 2700000, 1100000 ]
proj4 x 919,007 ops/sec ±1.05% (92 runs sampled)
swissgrid x 610,436 ops/sec ±0.72% (94 runs sampled)
swissgrid.fast x 4,365,228 ops/sec ±0.69% (96 runs sampled)
swissgrid.fast (discard result) x 4,950,126 ops/sec ±1.21% (94 runs sampled)
do nothing x 637,872,642 ops/sec ±1.36% (89 runs sampled)
Results:
[ [ 8.730496987086799, 46.044130241846176 ],
  [ 8.730496987086994, 46.04413024186256 ],
  [ 8.730499333333333, 46.04412677777778 ] ]


unproject [ 2602030.74, 1191775.03 ]
proj4 x 916,074 ops/sec ±1.58% (95 runs sampled)
swissgrid x 605,791 ops/sec ±0.79% (92 runs sampled)
swissgrid.fast x 4,330,362 ops/sec ±0.60% (94 runs sampled)
swissgrid.fast (discard result) x 4,931,178 ops/sec ±1.29% (92 runs sampled)
do nothing x 639,043,536 ops/sec ±1.40% (91 runs sampled)
Results:
[ [ 7.465273062163004, 46.877094413145066 ],
  [ 7.465273062163009, 46.877094413161316 ],
  [ 7.465276473621471, 46.87709230763104 ] ]


unproject [ 2617306.92, 1268507.87 ]
proj4 x 926,771 ops/sec ±1.09% (92 runs sampled)
swissgrid x 605,247 ops/sec ±1.17% (94 runs sampled)
swissgrid.fast x 4,352,519 ops/sec ±0.36% (93 runs sampled)
swissgrid.fast (discard result) x 4,884,283 ops/sec ±1.16% (93 runs sampled)
do nothing x 640,825,848 ops/sec ±1.39% (89 runs sampled)
Results:
[ [ 7.668606338807655, 47.567051370054216 ],
  [ 7.66860633880769, 47.5670513700704 ],
  [ 7.6686175735762525, 47.56704963305237 ] ]


unproject [ 2776668.59, 1265372.25 ]
proj4 x 927,303 ops/sec ±1.06% (96 runs sampled)
swissgrid x 604,667 ops/sec ±0.87% (87 runs sampled)
swissgrid.fast x 4,336,911 ops/sec ±0.77% (95 runs sampled)
swissgrid.fast (discard result) x 4,906,769 ops/sec ±1.43% (96 runs sampled)
do nothing x 657,292,838 ops/sec ±1.28% (87 runs sampled)
Results:
[ [ 9.784360261134198, 47.51532555130069 ],
  [ 9.78436026113456, 47.51532555131683 ],
  [ 9.784364426862906, 47.515329717371074 ] ]


unproject [ 2497312.65, 1145626.14 ]
proj4 x 920,113 ops/sec ±1.30% (92 runs sampled)
swissgrid x 611,042 ops/sec ±0.76% (95 runs sampled)
swissgrid.fast x 4,321,758 ops/sec ±0.60% (96 runs sampled)
swissgrid.fast (discard result) x 4,898,537 ops/sec ±1.16% (94 runs sampled)
do nothing x 648,457,382 ops/sec ±1.37% (83 runs sampled)
Results:
[ [ 6.102034960939373, 46.45408031798964 ],
  [ 6.102034960939168, 46.454080318006 ],
  [ 6.102026632660036, 46.454096882345034 ] ]


unproject [ 2722759.06, 1087648.19 ]
proj4 x 925,004 ops/sec ±0.98% (93 runs sampled)
swissgrid x 611,459 ops/sec ±0.74% (94 runs sampled)
swissgrid.fast x 4,374,546 ops/sec ±0.31% (96 runs sampled)
swissgrid.fast (discard result) x 4,866,852 ops/sec ±1.59% (95 runs sampled)
do nothing x 659,052,560 ops/sec ±1.91% (79 runs sampled)
Results:
[ [ 9.021218881837799, 45.92928803201253 ],
  [ 9.021218881838035, 45.929288032028914 ],
  [ 9.021222762413561, 45.92928757045515 ] ]
```
