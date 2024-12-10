import NodeGeocoder from 'node-geocoder';

import nyc_dog_park_data from './data/dog-park-data';
import PrismaClientModel from '../models/prisma-client';

const main = async () => {
    // const prisma_client = PrismaClientModel.prisma;
    // const dog_park_names = nyc_dog_park_data.filter(park => park.Name).map(park => park.Name);
    // const options = {
    //     provider: 'google' as const,
    //     apiKey: 'AIzaSyD2UFZE6Ks2ajO8keOYXbfhARqRgI37C54',
    //     formatter: null
    // };
    // const geocoder = NodeGeocoder(options);
    // for (let name of dog_park_names) {
    //     const result = await geocoder.geocode(name);
    //     const full_address = result[0].formattedAddress;
    //     const address = result[0].formattedAddress?.split(',')[0];
    //     const city = result[0].formattedAddress?.split(',')[1];
    //     const district = result[0].administrativeLevels?.level1short;
    //     const postal_code = result[0].zipcode;
    //     const country = result[0].countryCode;
    //     const latitude = result[0].latitude;
    //     const longitude = result[0].longitude;
    //     if (!full_address || !city || !district || !address || !postal_code || !country || !latitude || !longitude) {
    //         continue;
    //     }
    //     await prisma_client.address.upsert({
    //         where: {
    //             full_address: full_address
    //         },
    //         update: {
    //             name: dog_park_props.PROPERTY_NAME ? dog_park_props.PROPERTY_NAME : dog_park_props.DP_NAME,
    //             address: dog_park_props.ADDRESS,
    //             geo: dog_park_geo.coordinates
    //         },
    //         create: {
    //             name: dog_park_props.PROPERTY_NAME ? dog_park_props.PROPERTY_NAME : dog_park_props.DP_NAME,
    //             address: dog_park_props.ADDRESS,
    //             geo: dog_park_geo.coordinates
    //         }
    //     });
    // }
};

main()
    .then(() => {
        console.log('--------------------------------\n\nSeeding successful\n\n--------------------------------');
        return;
    })
    .catch(e => {
        console.error('--------------------------------\n\nError occureding during seeding\n\n--------------------------------');
        console.error(e);
        return;
    });
