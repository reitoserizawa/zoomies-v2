interface DogParkProperties {
    OBJECTID: number;
    PROPERTY_NAME: string | null;
    DP_NAME: string;
    ADDRESS: string;
}

interface DogParkGeometry {
    type: string;
    coordinates: number[];
}

interface DogParkDeails {
    type: string;
    name: string;
    crs: {
        type: string;
        properties: { name: string };
    };
    features: { type: string; properties: DogParkProperties; geometry: DogParkGeometry }[];
}

const dog_park_with_geo: DogParkDeails = {
    type: 'FeatureCollection',
    name: 'Dog_Parks',
    crs: { type: 'name', properties: { name: 'urn:ogc:def:crs:OGC:1.3:CRS84' } },
    features: [
        { type: 'Feature', properties: { OBJECTID: 1, PROPERTY_NAME: 'Margaret T. Hance Park', DP_NAME: 'Margaret T. Hance Dog Park  ', ADDRESS: '323 W Culver St' }, geometry: { type: 'Point', coordinates: [-112.078418991575091, 33.462401638814796] } },
        { type: 'Feature', properties: { OBJECTID: 2, PROPERTY_NAME: 'Deem Hills Park', DP_NAME: 'Deem Hills Dog Park', ADDRESS: '26606 N Deem Hills Pkwy' }, geometry: { type: 'Point', coordinates: [-112.165903979515633, 33.727606207930833] } },
        { type: 'Feature', properties: { OBJECTID: 3, PROPERTY_NAME: 'Pecos Park', DP_NAME: 'RJ Dog Park at Pecos Park', ADDRESS: '17010 S 48th St' }, geometry: { type: 'Point', coordinates: [-111.974303576859384, 33.291732757002457] } },
        { type: 'Feature', properties: { OBJECTID: 4, PROPERTY_NAME: 'Cesar Chavez Park', DP_NAME: 'Cesar Chavez Dog Park', ADDRESS: '7858 S 35th Ave' }, geometry: { type: 'Point', coordinates: [-112.142479413344091, 33.373586316606982] } },
        { type: 'Feature', properties: { OBJECTID: 5, PROPERTY_NAME: 'Steele Indian School Park', DP_NAME: 'Steele Indian School Dog Park', ADDRESS: '300 E Indian School Rd' }, geometry: { type: 'Point', coordinates: [-112.067398796546357, 33.501085176388337] } },
        { type: 'Feature', properties: { OBJECTID: 6, PROPERTY_NAME: 'Washington Park', DP_NAME: 'PETsMART Dog Park at Washington Park', ADDRESS: '6655 N 23rd Ave' }, geometry: { type: 'Point', coordinates: [-112.104612230768993, 33.532372168480144] } },
        { type: 'Feature', properties: { OBJECTID: 7, PROPERTY_NAME: 'Grovers Basin Park', DP_NAME: 'Grovers Basin Dog Park', ADDRESS: '17447 N 20th St' }, geometry: { type: 'Point', coordinates: [-112.033148885482632, 33.648769438837839] } },
        { type: 'Feature', properties: { OBJECTID: 8, PROPERTY_NAME: 'Esteban Park', DP_NAME: 'Esteban Dog Park', ADDRESS: '3345 E Roeser Rd' }, geometry: { type: 'Point', coordinates: [-112.006686688038357, 33.398011145348356] } },
        { type: 'Feature', properties: { OBJECTID: 9, PROPERTY_NAME: 'Paradise Valley Park', DP_NAME: 'Paradise Valley Dog Park', ADDRESS: '17642 N 40th St' }, geometry: { type: 'Point', coordinates: [-111.999408444184539, 33.649705467894428] } },
        { type: 'Feature', properties: { OBJECTID: 12, PROPERTY_NAME: 'Deer Valley Park', DP_NAME: 'Petsmart Dog Park at Deer Valley Park', ADDRESS: '19602 N 19th Ave' }, geometry: { type: 'Point', coordinates: [-112.100655105330645, 33.664719439552755] } },
        { type: 'Feature', properties: { OBJECTID: 668, PROPERTY_NAME: 'Pinnacle Park', DP_NAME: 'Pinnacle Dog Park', ADDRESS: '20900 N Black Mountain Blvd' }, geometry: { type: 'Point', coordinates: [-112.006792002025406, 33.675943727502727] } },
        { type: 'Feature', properties: { OBJECTID: 669, PROPERTY_NAME: 'Rose Mofford Sports Complex', DP_NAME: 'Rose Mofford Sports Complex Dog Park', ADDRESS: '9833 N 25th Ave' }, geometry: { type: 'Point', coordinates: [-112.111466882560336, 33.572847086420687] } },
        { type: 'Feature', properties: { OBJECTID: 670, PROPERTY_NAME: null, DP_NAME: 'Thelda Williams Paw Pup Park', ADDRESS: '200 W Jefferson St' }, geometry: { type: 'Point', coordinates: [-112.076824034607526, 33.448322607474452] } }
    ]
};

export default dog_park_with_geo;
