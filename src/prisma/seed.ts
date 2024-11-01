import PrismaClientModel from '../models/prisma-client';
import dog_park_data from './data/dog-park-data';

async function main() {
    const prisma_client = PrismaClientModel.prisma;
    const filtered_data = dog_park_data.filter((data, index, self) => {
        return data['Name'] && data['Address'] && data['DogRuns_Type'] && index === self.findIndex(o => o['Name'] === data['Name']);
    });

    for (let data of filtered_data) {
        if (data['Name'] && data['Address']) {
            await prisma_client.dogPark.upsert({
                where: {
                    name: data['Name']
                },
                update: {
                    name: data['Name'],
                    address: data['Address']
                },
                create: {
                    name: data['Name'],
                    address: data['Address']
                }
            });
        }
    }
}

main()
    .then(async () => {
        console.log('--------------------------------\n\nSeeding successful\n\n--------------------------------');
        return;
    })
    .catch(async e => {
        console.log('--------------------------------\n\nError occureding during seeding\n\n--------------------------------');
        console.error(e);
        process.exit(1);
    });
