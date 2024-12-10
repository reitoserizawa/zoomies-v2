import PrismaClientModel from '../models/prisma-client';
import dog_park_with_geo from './data/dog-park-data-with-geo';

const main = async () => {
    const prisma_client = PrismaClientModel.prisma;

    // for (let data of dog_park_with_geo.features) {
    //     const dog_park_props = data.properties;
    //     const dog_park_geo = data.geometry;
    //     await prisma_client.dogPark.upsert({
    //         where: {
    //             name: dog_park_props.PROPERTY_NAME ? dog_park_props.PROPERTY_NAME : dog_park_props.DP_NAME
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
