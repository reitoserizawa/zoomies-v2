import { Prisma } from '@prisma/client';
import NodeGeocoder from 'node-geocoder';

import nyc_dog_park_data from './data/dog-park-data';

import PrismaClientModel from '../models/prisma-client';

const main = async () => {
    const prisma_client = PrismaClientModel.prisma;

    const dog_park_items = nyc_dog_park_data
        .filter(park => park.Name)
        .map(park => {
            return {
                name: park.Name,
                notes: park?.Notes,
                type: park?.DogRuns_Type
            };
        });

    const options = {
        provider: 'google' as const,
        apiKey: process.env.GOOGLE_API_KEY,
        formatter: null
    };
    const geocoder = NodeGeocoder(options);

    for (let dog_park_item of dog_park_items) {
        const result = await geocoder.geocode(dog_park_item.name);

        const full_address = result[0]?.formattedAddress;
        const address = result[0]?.formattedAddress?.split(',')[0];
        const city = result[0]?.formattedAddress?.split(',')[1];
        const district = result[0]?.administrativeLevels?.level1short;
        const postal_code = result[0]?.zipcode;
        const country = result[0]?.countryCode;
        const latitude = result[0]?.latitude;
        const longitude = result[0]?.longitude;

        if (!full_address || !city || !district || !address || !postal_code || !country || !latitude || !longitude) {
            continue;
        }

        const address_item = await prisma_client.address.upsert({
            where: {
                full_address: full_address
            },
            update: {},
            create: {
                full_address,
                address,
                city,
                district,
                postal_code,
                country,
                latitude,
                longitude
            }
        });

        const address_where_input = Prisma.validator<Prisma.AddressWhereInput>()({
            id: address_item.id
        });

        await prisma_client.dogPark.upsert({
            where: {
                name: dog_park_item.name
            },
            update: {},
            create: {
                name: dog_park_item.name,
                address: {
                    connect: address_where_input
                },
                type: dog_park_item.type,
                notes: dog_park_item.notes
            }
        });
    }
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
