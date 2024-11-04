const dog_park_data = [
    {
        Prop_ID: 'X004',
        Name: 'Bronx River Park Off-Leash Area',
        Address: 'Unionport & Sagamore on Bronx Park East to 233rd Street',
        DogRuns_Type: 'Off-Leash',
        Accessible: 'N',
        Notes: null
    },
    { Prop_ID: 'X008', Name: 'Claremont Park Off-Leash Area', Address: null, DogRuns_Type: 'Off-Leash', Accessible: 'N', Notes: null },
    {
        Prop_ID: 'X010',
        Name: 'Crotona Park Off-Leash Area',
        Address: 'Except for playgrounds and other areas where dogs are expressly prohibited via signage, all areas of the park are off-leash during designated hours.',
        DogRuns_Type: 'Off-Leash',
        Accessible: 'N',
        Notes: null
    },
    { Prop_ID: 'X019', Name: 'Ewen Park Dog Run', Address: 'Riverdale to Johnson avenues, south of West 232nd Street', DogRuns_Type: 'Run', Accessible: 'N', Notes: null },
    { Prop_ID: 'X110A', Name: 'Frank S. Hackett Park Dog Run', Address: 'Riverdale Avenue at Henry Hudson Parkway', DogRuns_Type: 'Run', Accessible: 'N', Notes: null },
    {
        Prop_ID: 'X047',
        Name: 'Franz Sigel Park Dog Run',
        Address: 'Center of the park, just north of the ballfields which would line up with around 155th Street.',
        DogRuns_Type: 'Run',
        Accessible: 'N',
        Notes: null
    },
    { Prop_ID: 'X080', Name: 'Henry Hudson Park Off-Leash Area', Address: 'Kappock Street and Independence Avenue', DogRuns_Type: 'Off-Leash', Accessible: 'N', Notes: null },
    { Prop_ID: 'X015', Name: 'Joseph Rodham Drake Park Off-Leash Area', Address: null, DogRuns_Type: 'Off-Leash', Accessible: 'N', Notes: null },
    { Prop_ID: 'X034', Name: 'Foster Park Off-Leash Area', Address: null, DogRuns_Type: 'Off-Leash', Accessible: 'N', Notes: null },
    {
        Prop_ID: 'X039',
        Name: 'Pelham Bay Park Off-Leash Area',
        Address: 'Middletown Road & Stadium Avenue, northwest of parking lot.',
        DogRuns_Type: 'Off-Leash',
        Accessible: 'N',
        Notes: 'The dog run at Pelham Bay Park is close to Watt Avenue and Middletown Road.  Both streets merge at the entrance to the parking lot on Middletown Road. The dog run is about 100 yards east of that point.<br><a href="http://nycgovparks.org/parks/X039/map/pelhambay_dogonleasharea.pdf">Please download our map of permitted on-leash dog areas.</a>'
    },
    { Prop_ID: 'X201', Name: 'Seton Park Dog Run', Address: 'West 232nd Street & Independence Avenue', DogRuns_Type: 'Run', Accessible: 'N', Notes: null },
    {
        Prop_ID: 'X010A',
        Name: 'Tremont Park Off-Leash Area',
        Address: 'Except for playgrounds and other areas where dogs are expressly prohibited via signage, all areas of the park are off-leash during designated hours.',
        DogRuns_Type: 'Off-Leash',
        Accessible: 'N',
        Notes: null
    },
    {
        Prop_ID: 'X092',
        Name: 'Van Cortlandt Park: Canine Court',
        Address: 'Broadway and 252 Street',
        DogRuns_Type: 'Run',
        Accessible: 'N',
        Notes: '<a href="https://vancortlandt.org/visit/things-to-see-and-do/">More info.</a>'
    },
    {
        Prop_ID: 'X092',
        Name: 'Van Cortlandt Park: Dog Bone Run',
        Address: 'Gun Hill Road and Jerome Avenue',
        DogRuns_Type: 'Run',
        Accessible: 'N',
        Notes: '<a href="https://vancortlandt.org/visit/things-to-see-and-do/">More info.</a>'
    },
    { Prop_ID: 'X104', Name: 'Williamsbridge Oval Dog Run', Address: '3225 Reservoir Oval East', DogRuns_Type: 'Run', Accessible: 'N', Notes: null },
    {
        Prop_ID: 'B080',
        Name: 'Asser Levy Park Off-Leash Area',
        Address: 'Surf Avenue, Sea Breeze Avenue, West 5th Street, Ocean Parkway',
        DogRuns_Type: 'Off-Leash',
        Accessible: 'N',
        Notes: ''
    },
    { Prop_ID: 'B247', Name: 'Breukelen Park Off-Leash Area', Address: 'All areas excluding the playground and ballfields', DogRuns_Type: 'Off-Leash', Accessible: 'N', Notes: '' },
    { Prop_ID: 'B431', Name: 'Brooklyn Bridge Park Dog Run', Address: 'Pier 6', DogRuns_Type: 'Run', Accessible: 'N', Notes: null },
    {
        Prop_ID: 'B113A',
        Name: 'Brooklyn War Memorial Off-Leash Area',
        Address: 'Cadman Plaza Park, Cadman Plaza West & East & Prospect Street ',
        DogRuns_Type: 'Off-Leash',
        Accessible: 'N',
        Notes: ''
    },
    {
        Prop_ID: 'B018',
        Name: 'Canarsie Park Off-Leash Area',
        Address: 'All areas excluding the playground, ballfields, and Natural Areas.',
        DogRuns_Type: 'Off-Leash',
        Accessible: 'N',
        Notes: ''
    },
    { Prop_ID: 'B223B', Name: 'DiMattina Park Dog Run', Address: 'Hicks & Woodhull streets', DogRuns_Type: 'Run', Accessible: 'N', Notes: '' },
    { Prop_ID: 'B028', Name: 'Dyker Beach Park Dog Run', Address: '7th Avenue and 86th Street', DogRuns_Type: 'Run', Accessible: 'N', Notes: null },
    { Prop_ID: 'B028', Name: 'Dyker Beach Park Off-Leash Area', Address: 'Cropsey Avenue, Bay 8th Street, and Poly Place', DogRuns_Type: 'Off-Leash', Accessible: 'N', Notes: null },
    {
        Prop_ID: 'B032',
        Name: 'Fort Greene Park Off-Leash Area',
        Address: 'All areas excluding the playgrounds, tennis courts, and lawns with posted signs.',
        DogRuns_Type: 'Off-Leash',
        Accessible: 'N',
        Notes: null
    },
    { Prop_ID: 'B372', Name: 'Friends Field Park Off-Leash Area', Address: 'East 4th Street, Avenue L, and McDonald Avenue', DogRuns_Type: 'Off-Leash', Accessible: 'N', Notes: '' },
    { Prop_ID: 'B038', Name: 'Fulton Park Off-Leash Area', Address: '', DogRuns_Type: 'Off-Leash', Accessible: 'N', Notes: '' },
    { Prop_ID: 'B401', Name: 'Grand Ferry Park Off-Leash Area', Address: '', DogRuns_Type: 'Off-Leash', Accessible: 'N', Notes: '' },
    { Prop_ID: 'B088', Name: 'Herbert Von King Park Dog Run', Address: 'Marcy Avenue & Lafayette Avenue', DogRuns_Type: 'Run', Accessible: 'N', Notes: '' },
    { Prop_ID: 'B223G', Name: 'Hillside Park Dog Run', Address: 'Columbia Heights & Middagh Street', DogRuns_Type: 'Run', Accessible: 'N', Notes: '' },
    { Prop_ID: 'B111A', Name: 'Washington Park Dog Run', Address: '3rd to 4th streets, 4th to 5th avenues', DogRuns_Type: 'Run', Accessible: 'N', Notes: null },
    { Prop_ID: 'B035', Name: 'John Paul Jones Park Off-Leash Area', Address: '4th Avenue and 101st Street ', DogRuns_Type: 'Off-Leash', Accessible: 'N', Notes: '' },
    {
        Prop_ID: 'B129',
        Name: 'Kaiser Park Off-Leash Area',
        Address: 'Neptune Avenue between West 24th Street & Bayview Avenue, Coney Island Creek',
        DogRuns_Type: 'Off-Leash',
        Accessible: 'N',
        Notes: ''
    },
    { Prop_ID: 'B052', Name: 'Leif Ericson Park Off-Leash Area', Address: '67th Street between 6th Avenue and 7th Avenue', DogRuns_Type: 'Off-Leash', Accessible: 'N', Notes: '' },
    {
        Prop_ID: 'B054',
        Name: 'Lincoln Terrace Park Off-Leash Area',
        Address: 'Eastern Parkway between Buffalo and Rochester avenues',
        DogRuns_Type: 'Off-Leash',
        Accessible: 'N',
        Notes: ''
    },
    {
        Prop_ID: 'B223S',
        Name: 'Macri Square Park Off-Leash Area',
        Address: 'Union Turnpike and Metropolitan Avenue',
        DogRuns_Type: 'Off-Leash',
        Accessible: 'N',
        Notes: 'Off-leash dogs are permitted throughout this small park.'
    },
    { Prop_ID: 'B251', Name: 'Manhattan Beach Dog Run', Address: 'East of Ocean Avenue, North Shore Rockaway inlet', DogRuns_Type: 'Run', Accessible: 'N', Notes: '' },
    {
        Prop_ID: 'B057',
        Name: 'Marine Park Off-Leash Area',
        Address: 'All areas excluding the playgrounds, ballfields, and Natural Areas.',
        DogRuns_Type: 'Off-Leash',
        Accessible: 'N',
        Notes: ''
    },
    { Prop_ID: 'B058', Name: 'McCarren Park Dog Run', Address: 'North 12th Street, Driggs Avenue and Union Avenue', DogRuns_Type: 'Run', Accessible: 'N', Notes: '' },
    { Prop_ID: 'B114', Name: 'McGolrick Park Dog Run', Address: 'North Henry Street and Driggs Avenue', DogRuns_Type: 'Run', Accessible: 'N', Notes: '' },
    {
        Prop_ID: 'B060',
        Name: 'McKinley Park Off-Leash Area',
        Address: 'Fort Hamilton Parkway, 7th Avenue, 73rd Street to 75th Street',
        DogRuns_Type: 'Off-Leash',
        Accessible: 'N',
        Notes: ''
    },
    {
        Prop_ID: 'B159',
        Name: 'Mount Prospect Park Off-Leash Area',
        Address: 'Eastern Parkway between Washington and Underhill avenues',
        DogRuns_Type: 'Off-Leash',
        Accessible: 'N',
        Notes: ''
    },
    { Prop_ID: 'B066', Name: 'Owls Head Park Dog Run', Address: '68th Street and Shore Road', DogRuns_Type: 'Run', Accessible: 'N', Notes: '' },
    { Prop_ID: 'B223DA', Name: 'Adam Yauch Park Dog Run', Address: 'Columbia Place & State Street', DogRuns_Type: 'Run', Accessible: 'N', Notes: null },
    {
        Prop_ID: 'B073',
        Name: 'Prospect Park Off-Leash Area',
        Address: 'Middle & Upper Long Meadow (excludes ballfield area in the Lower Long Meadow), Nethermead, Peninsula.',
        DogRuns_Type: 'Off-Leash',
        Accessible: 'N',
        Notes: ''
    },
    { Prop_ID: 'B082', Name: 'Frank Decolvenaere Dog Run', Address: 'Shore Road & 3rd Ave', DogRuns_Type: 'Run', Accessible: 'Y', Notes: null },
    {
        Prop_ID: 'B087',
        Name: 'Sunset Park Off-Leash Area',
        Address: 'Sunset Park Oval lawn area only, center of park 44th Street, 41st Street, 6th Avenue',
        DogRuns_Type: 'Off-Leash',
        Accessible: 'N',
        Notes: ''
    },
    {
        Prop_ID: 'M081',
        Name: 'Carl Schurz Park Dog Run (2 runs)',
        Address: 'East End Avenue to East River from Gracie Square (East 84th Street) to 89th Street',
        DogRuns_Type: 'Run',
        Accessible: 'N',
        Notes: ''
    },
    {
        Prop_ID: 'M010',
        Name: 'Central Park Off-Leash Area',
        Address: 'Though there are no enclosed dog runs, there are 23 particularly dog-friendly areas scattered throughout the Park.',
        DogRuns_Type: 'Off-Leash',
        Accessible: 'N',
        Notes: 'Please see Central Park Conservancy\'s <a href="http://assets.centralparknyc.org/pdfs/about/Dog_Owner_Guide_to_Central_Park.pdf">Dog-Friendly Areas</a> document for details.'
    },
    {
        Prop_ID: 'M',
        Name: 'Chelsea Waterside Park Dog Run',
        Address: '11th Ave and 22nd Street',
        DogRuns_Type: 'Run',
        Accessible: 'N',
        Notes: '<em>*Please note: this dog run is administered by the Hudson River Park Trust.</em>\r\n<br /><a href="http://www.hudsonriverpark.org/explore/dogruncw.html">More information.</a>'
    },
    { Prop_ID: 'M019', Name: 'Coleman Oval Park Dog Run', Address: 'Pike and Monroe streets', DogRuns_Type: 'Run', Accessible: 'N', Notes: '' },
    {
        Prop_ID: 'M022',
        Name: 'De Witt Clinton Park Dog Run (2 runs)',
        Address: 'West 52nd Street & West 54th Street, between 10th & 11th avenues',
        DogRuns_Type: 'Run',
        Accessible: 'N',
        Notes: null
    },
    { Prop_ID: 'M291', Name: 'Fishbridge Park Garden Dog Run', Address: 'Dover Street, between Pearl & Water Street', DogRuns_Type: 'Run', Accessible: 'N', Notes: null },
    {
        Prop_ID: 'M029',
        Name: 'Fort Tryon Park Dog Run',
        Address: 'Margaret Corbin Drive',
        DogRuns_Type: 'Run',
        Accessible: 'N',
        Notes: '<a href="http://www.ftdog.org/">More information.</a>'
    },
    { Prop_ID: 'M028', Name: 'Ft. Washington Park Dog Run', Address: '165th Street & Riverside Drive', DogRuns_Type: 'Run', Accessible: 'N', Notes: null },
    {
        Prop_ID: 'M037',
        Name: 'Highbridge Park Dog Run',
        Address: 'Amsterdam and Fort George avenues',
        DogRuns_Type: 'Run',
        Accessible: 'N',
        Notes: '<a href="http://www.highbridgek9club.org/">More Information</a>.'
    },
    {
        Prop_ID: 'M',
        Name: 'Hudson River Park Dog Run (Greenwich Village)',
        Address: 'Leroy Street at the northeast corner of Pier 40',
        DogRuns_Type: 'Run',
        Accessible: 'N',
        Notes: '<a href="http://www.hudsonriverpark.org/explore/dogrunleroyst.html">More information.</a>'
    },
    {
        Prop_ID: 'M',
        Name: 'Hudson River Park Dog Run (North Chelsea)',
        Address: 'Pier 84 at West 44th Street',
        DogRuns_Type: 'Run',
        Accessible: 'N',
        Notes: '<a href="http://www.hudsonriverpark.org/explore/dogrunpier84.html">More information.</a>'
    },
    {
        Prop_ID: 'M042',
        Name: "Inwood Hill Park Dog Run: Homer's Run",
        Address: 'Seaman Avenue & Isham Street',
        DogRuns_Type: 'Run',
        Accessible: 'N',
        Notes: 'Seaman Avenue & Isham Street, just north of the flagpole. More information at <a href="http://www.inwoof.com/">www.inwoof.com </a>.'
    },
    { Prop_ID: 'M099', Name: 'J. Hood Wright Park Dog Run', Address: 'Fort Washington & Haven Avenues, West 173rd Street', DogRuns_Type: 'Run', Accessible: 'N', Notes: '' },
    {
        Prop_ID: 'M052',
        Name: 'Madison Square Park Dog Run',
        Address: 'Madison Avenue to 5th Avenue between East 23rd Street & East 26th Street',
        DogRuns_Type: 'Run',
        Accessible: 'N',
        Notes: ''
    },
    { Prop_ID: 'M058', Name: 'Marcus Garvey Park Dog Run', Address: 'Madison Avenue and East 120th Street', DogRuns_Type: 'Run', Accessible: 'N', Notes: '' },
    { Prop_ID: 'M056', Name: 'Morningside Park Dog Run', Address: 'Morningside Avenue between 114th and 119th streets', DogRuns_Type: 'Run', Accessible: 'N', Notes: '' },
    { Prop_ID: 'M108N', Name: 'Peter Detmold Park Dog Run', Address: 'West of FDR Drive, between East 49th & East 51st streets', DogRuns_Type: 'Run', Accessible: 'N', Notes: '' },
    {
        Prop_ID: 'M104',
        Name: 'Randalls Island Park Off-Leash Area',
        Address: 'Except for areas where dogs are expressly prohibited via signage, all areas of the park are off-leash during designated hours.',
        DogRuns_Type: 'Off-Leash',
        Accessible: 'N',
        Notes: 'Off-leash hours for the island are before 9:00 a.m. and after 9:00 p.m.'
    },
    {
        Prop_ID: 'M071',
        Name: 'Riverside Park Dog Run (3 runs)',
        Address: 'Riverside Drive at West 72nd, West 87th, West 105th',
        DogRuns_Type: 'Run',
        Accessible: 'N',
        Notes: '<a href="http://nycgovparks.org/sub_your_park/vt_riverside_park/images/dog_owners_guide_riverside_park.pdf">Dog Owners\' Guide to Riverside Park </a>'
    },
    { Prop_ID: 'M158', Name: 'Robert Moses Park Dog Run', Address: '41st & 42nd streets at 1st Avenue', DogRuns_Type: 'Run', Accessible: 'N', Notes: '' },
    {
        Prop_ID: 'M077',
        Name: 'St. Nicholas Park Dog Run',
        Address: 'St Nicholas Avenue to St. Nicholas Terrace, West 128th to West 141 streets',
        DogRuns_Type: 'Run',
        Accessible: 'N',
        Notes: ''
    },
    { Prop_ID: 'M053', Name: 'Theodore Roosevelt Park Dog Run', Address: 'Central Park West at West 81st Street', DogRuns_Type: 'Run', Accessible: 'N', Notes: '' },
    { Prop_ID: 'M047', Name: 'Thomas Jefferson Park Dog Run', Address: 'East 112th Street and FDR Drive', DogRuns_Type: 'Run', Accessible: 'N', Notes: '' },
    { Prop_ID: 'M088', Name: 'Tompkins Square Park Dog Run', Address: '1st Avenue to Avenue B, from East 7th to East 10th streets', DogRuns_Type: 'Run', Accessible: 'Y', Notes: null },
    { Prop_ID: 'M089', Name: 'Union Square Dog Run', Address: '15th Street & Union Square West', DogRuns_Type: 'Run', Accessible: 'N', Notes: '' },
    {
        Prop_ID: 'M098',
        Name: 'Washington Square Park Dog Run',
        Address: '5th Avenue, Waverly Place, West 4th Street, between McDougal & Thompson streets, south side of the park (behind building)',
        DogRuns_Type: 'Run',
        Accessible: 'N',
        Notes: ''
    },
    {
        Prop_ID: 'Q001',
        Name: 'Alley Pond Park Off-Leash Area',
        Address: 'Grand Central Parkway/Winchester Boulevard/Kingsbury Avenue',
        DogRuns_Type: 'Off-Leash',
        Accessible: 'N',
        Notes: ''
    },
    { Prop_ID: 'Q004', Name: 'Astoria Park Off-Leash Area', Address: '', DogRuns_Type: 'Off-Leash', Accessible: 'N', Notes: '' },
    { Prop_ID: 'Q005', Name: 'Baisley Pond Park Off-Leash Area', Address: 'Between119th and 123rd avenues', DogRuns_Type: 'Off-Leash', Accessible: 'N', Notes: '' },
    {
        Prop_ID: 'Q005',
        Name: 'Baisley Pond Park Off-Leash Area',
        Address: 'Lakeview Lane between Foch Boulevard and Lakeview Lane East',
        DogRuns_Type: 'Off-Leash',
        Accessible: 'N',
        Notes: null
    },
    { Prop_ID: 'Q007', Name: 'Bayswater Park Off-Leash Area', Address: '', DogRuns_Type: 'Off-Leash', Accessible: 'N', Notes: '' },
    { Prop_ID: 'Q012', Name: 'Crocheron Park Off-Leash Area', Address: null, DogRuns_Type: 'Off-Leash', Accessible: 'N', Notes: null },
    { Prop_ID: 'Q021', Name: 'Cunningham Park Dog Run', Address: '193rd Street between Aberdeen Road & Radnor Road', DogRuns_Type: 'Run', Accessible: 'N', Notes: '' },
    { Prop_ID: 'Q099', Name: 'Flushing Meadows Corona Park Off-Leash Area', Address: '', DogRuns_Type: 'Off-Leash', Accessible: 'N', Notes: '' },
    {
        Prop_ID: 'Q015',
        Name: 'Forest Park: Overlook Dog Park/The Barking Lot',
        Address: 'Corner of Park Lane and Forest Park Drive, behind the Overlook building at 80-30 Park Lane',
        DogRuns_Type: 'Run',
        Accessible: 'N',
        Notes: null
    },
    { Prop_ID: 'Q015', Name: 'Forest Park: K9 Korral', Address: 'Park Lane South and 85th Street', DogRuns_Type: 'Run', Accessible: 'N', Notes: null },
    { Prop_ID: 'Q102', Name: 'Juniper Valley Park Off-Leash Area', Address: '', DogRuns_Type: 'Off-Leash', Accessible: 'N', Notes: '' },
    { Prop_ID: 'Q393D', Name: 'La Guardia Landing Lights Off-Leash Area', Address: '', DogRuns_Type: 'Off-Leash', Accessible: 'N', Notes: '' },
    {
        Prop_ID: 'Q393D',
        Name: 'Landing Lights Off-Leash Area',
        Address: 'Grand Central Parkway, 81 Street & 82 Street & Astoria Boulevard, 23 Avenue 84, 24 thru 30 Avenues, 77 Street through 81 Street',
        DogRuns_Type: 'Off-Leash',
        Accessible: 'N',
        Notes: ''
    },
    { Prop_ID: 'Q010A', Name: 'Little Bay Park Dog Run', Address: 'North side of the Cross Island Parkway & Utopia Parkway', DogRuns_Type: 'Run', Accessible: 'N', Notes: '' },
    { Prop_ID: 'Q009', Name: 'MacNeil Park Off-Leash Area: 6:00 a.m. - 9:00 a.m. Only', Address: 'Mainly zone #1', DogRuns_Type: 'Off-Leash', Accessible: 'N', Notes: null },
    { Prop_ID: 'Q141', Name: 'Murray Playground Dog Run', Address: '21st Street & 45th Road (southeastern side of the park)', DogRuns_Type: 'Run', Accessible: 'N', Notes: null },
    { Prop_ID: 'Q104', Name: 'Queensbridge Park Off-Leash Area', Address: '', DogRuns_Type: 'Off-Leash', Accessible: 'N', Notes: '' },
    { Prop_ID: 'Q048', Name: 'Rainey Park Off-Leash Area', Address: '', DogRuns_Type: 'Off-Leash', Accessible: 'N', Notes: '' },
    { Prop_ID: 'Q004A', Name: 'Ralph DeMarco Park Off-Leash Area', Address: '', DogRuns_Type: 'Off-Leash', Accessible: 'N', Notes: '' },
    {
        Prop_ID: 'Q371',
        Name: 'Rockaway Community Park Off-Leash Area',
        Address: 'Almeda Avenue between Beach 51st Street and Beach 54th Street',
        DogRuns_Type: 'Off-Leash',
        Accessible: 'N',
        Notes: ''
    },
    { Prop_ID: 'Q219', Name: 'Rockaway Freeway Dog Park', Address: 'Rockaway Freeway and Beach 84th Street', DogRuns_Type: 'Run', Accessible: 'N', Notes: '' },
    { Prop_ID: 'Q341C', Name: 'Sherry Park Dog Run', Address: 'Queens Boulevard, 65 Place, and the Brooklyn-Queens Expressway', DogRuns_Type: 'Run', Accessible: 'N', Notes: '' },
    { Prop_ID: 'Q107', Name: 'Springfield Park Off-Leash Area', Address: '', DogRuns_Type: 'Off-Leash', Accessible: 'N', Notes: '' },
    { Prop_ID: 'Q451', Name: 'Underbridge Playground Dog Run', Address: '64th Avenue/64th Road on Grand Central Parkway service road', DogRuns_Type: 'Run', Accessible: 'N', Notes: '' },
    { Prop_ID: 'Q013', Name: "Veteran's Grove Dog Run", Address: 'Judge Street & Whitney Avenue (south side of Park)', DogRuns_Type: 'Run', Accessible: 'N', Notes: '' },
    { Prop_ID: 'Q031A', Name: 'Windmuller Park Dog Run (Doughboy Plaza)', Address: 'Woodside Avenue, 54-56 streets', DogRuns_Type: 'Run', Accessible: 'N', Notes: '' },
    {
        Prop_ID: 'Q425',
        Name: 'Yellowstone Park Off-Leash Area',
        Address: 'Sitting area located at 68 Road and Yellowstone Boulevard.  ',
        DogRuns_Type: 'Off-Leash',
        Accessible: 'N',
        Notes: 'Hours: 6:00 a.m. to 9:00 a.m. only '
    },
    {
        Prop_ID: 'R052',
        Name: 'Allison Park Off-Leash Area',
        Address: 'Field at the end of the trail bordered by Prospect Avenue, Sailors Snug Harbor Cemetery, and the pond.',
        DogRuns_Type: 'Off-Leash',
        Accessible: 'N',
        Notes: null
    },
    { Prop_ID: 'R059', Name: 'Arthur Von Briesen Park Off-Leash Area', Address: 'Lawn area, mid-park right side \r\n', DogRuns_Type: 'Off-Leash', Accessible: 'N', Notes: null },
    {
        Prop_ID: 'R005',
        Name: 'Clove Lakes Park Off-Leash Area',
        Address: 'Open field above picnic area near Royal Oak Rd. & Rice Ave.',
        DogRuns_Type: 'Off-Leash',
        Accessible: 'N',
        Notes: null
    },
    {
        Prop_ID: 'R070',
        Name: 'Clove&rsquo;s Tail Park Off-Leash Area',
        Address: 'Lawn area, corner of Victory Boulevard & Little Clove Road\r\n',
        DogRuns_Type: 'Off-Leash',
        Accessible: 'N',
        Notes: null
    },
    { Prop_ID: 'R121', Name: 'Siedenburg Park Off-Leash Area', Address: 'Greaves Avenue & Evergreen Street', DogRuns_Type: 'Off-Leash', Accessible: 'N', Notes: null },
    { Prop_ID: 'R075A', Name: 'Father Macris Park Off-Leash Area', Address: 'Lawn area beyond ballfield', DogRuns_Type: 'Off-Leash', Accessible: 'N', Notes: null },
    {
        Prop_ID: 'R079',
        Name: 'Lemon Creek Park Off-Leash Area',
        Address: 'Bottom of Seguine Avenue at Johnston Terrace; just below playground',
        DogRuns_Type: 'Off-Leash',
        Accessible: 'N',
        Notes: null
    },
    {
        Prop_ID: 'R022',
        Name: 'Silver Lake Park Dog Run',
        Address: 'Victory Boulevard below the pavilion, across from the Parkview Apartments',
        DogRuns_Type: 'Run',
        Accessible: 'N',
        Notes: ''
    },
    { Prop_ID: 'R046', Name: 'South Beach Park Off-Leash Area', Address: null, DogRuns_Type: 'Off-Leash', Accessible: 'N', Notes: 'On sand after Labor Day and before Memorial Day' },
    { Prop_ID: 'R030', Name: 'Willowbrook Park Off-Leash Area', Address: 'Archery Range Field', DogRuns_Type: 'Off-Leash', Accessible: 'N', Notes: null },
    { Prop_ID: 'R031', Name: "Wolfe's Pond Park Dog Run", Address: 'Run is to left of Cornelia Avenue', DogRuns_Type: 'Run', Accessible: 'N', Notes: null },
    {
        Prop_ID: 'R005',
        Name: 'Clove Lakes Park Off-Leash Area',
        Address: 'Brookside Avenue between Alpine Court & Kingsley Avenue (lawn area)',
        DogRuns_Type: 'Off-Leash',
        Accessible: 'N',
        Notes: null
    },
    {
        Prop_ID: 'B077',
        Name: 'Coffey Park Off-Leash Area',
        Address: 'King Street, Richards Street, and Verona Street at Dwight and Pioneer Streets',
        DogRuns_Type: 'Off-Leash',
        Accessible: 'N',
        Notes: null
    },
    {
        Prop_ID: 'M017',
        Name: 'Corlears Hook Park Dog Run',
        Address: 'Cherry Street and Jackson Street (on the north side of the park building)',
        DogRuns_Type: 'Run',
        Accessible: 'N',
        Notes: null
    },
    { Prop_ID: 'M108Q1', Name: 'Andrew Haswell Green Park Dog Run', Address: 'East River at 63rd Street', DogRuns_Type: 'Run', Accessible: 'N', Notes: null },
    { Prop_ID: 'R065', Name: 'Amundsen Trail Off-Leash Area', Address: 'Between Amboy Road and Hylan Boulevard', DogRuns_Type: 'Off-Leash', Accessible: 'N', Notes: null },
    { Prop_ID: 'R106', Name: 'Bloomingdale Park Dog Run', Address: 'Maguire Avenue behind athletic fields closer to Romona Avenue ', DogRuns_Type: 'Run', Accessible: 'N', Notes: null },
    { Prop_ID: 'Q471', Name: "Hunter's Point South Park Dog Run", Address: null, DogRuns_Type: 'Run', Accessible: 'N', Notes: null },
    { Prop_ID: 'Q340', Name: 'Torsney/Lou Lodati Playground Dog Run', Address: '43rd Street & Skillman Avenue', DogRuns_Type: 'Run', Accessible: 'N', Notes: null },
    {
        Prop_ID: 'B012',
        Name: 'Brower Park Off-Leash Area',
        Address: "St. Mark's Ave., Park Pl. bet. Brooklyn Ave. and Kingston Ave.",
        DogRuns_Type: 'Off-Leash',
        Accessible: 'N',
        Notes: 'Except for playgrounds and other areas where dogs are expressly prohibited via signage, all areas of the park are off-leash during designated hours.'
    },
    { Prop_ID: 'B025', Name: 'Cooper Park Dog Run', Address: 'At the intersection of Morgan Avenue and Sharon Street', DogRuns_Type: 'Run', Accessible: 'N', Notes: null },
    { Prop_ID: 'M042', Name: 'Dyckman Fields Off-Leash Area', Address: 'Dyckman Street, near the Hudson River', DogRuns_Type: 'Off-Leash', Accessible: 'N', Notes: null },
    { Prop_ID: 'X045', Name: "St. Mary's Dog Run", Address: 'Near corner of Cypress Ave and East 143rd St', DogRuns_Type: 'Run', Accessible: 'N', Notes: null },
    { Prop_ID: 'R006', Name: 'Conference House Park Dog Run', Address: 'Clermont Avenue and Massachusetts Street', DogRuns_Type: 'Run', Accessible: 'N', Notes: null },
    {
        Prop_ID: 'X118',
        Name: 'Soundview Dog Run',
        Address: 'Lafayette Avenue Between Colgate and Boynton Avenues',
        DogRuns_Type: null,
        Accessible: 'Y',
        Notes: 'Large and small dog runs.'
    },
    {
        Prop_ID: 'X092',
        Name: 'Van Cortlandt Park: Oneida Run',
        Address: 'Van Cortlandt Park East between Oneida Avenue and East 238th Street',
        DogRuns_Type: 'Run',
        Accessible: 'Y',
        Notes: '<a href="https://vancortlandt.org/visit/things-to-see-and-do/">More info.</a>'
    },
    { Prop_ID: 'B016', Name: 'Maria Hernandez Park Dog Run', Address: 'Irving Ave. & Suydam St.', DogRuns_Type: 'Run', Accessible: 'Y', Notes: null },
    {
        Prop_ID: 'Q015',
        Name: 'Forest Park Off-Leash Area',
        Address: null,
        DogRuns_Type: 'Off-Leash',
        Accessible: 'N',
        Notes: 'Some park areas allow dogs to be off leash from the time the park opens until 9:00 a.m. and from 9:00 p.m. until the park closes. Dogs are not permitted in playgrounds, fountains, natural areas/trails, ballfields, and on athletic courts.'
    },
    { Prop_ID: 'X002', Name: 'Bronx Park Dog Run', Address: 'Boston Road & Bronx Park East', DogRuns_Type: 'Run', Accessible: 'Y', Notes: null },
    { Prop_ID: 'Q066C', Name: 'Triborough Bridge Playground C Dog Run', Address: 'Hoyt Ave & 24th St', DogRuns_Type: 'Run', Accessible: 'Y', Notes: null },
    { Prop_ID: 'X039', Name: 'Pelham Bay Park Dog Run', Address: 'Middletown Road Parking Lot (off Stadium Ave.)', DogRuns_Type: 'Run', Accessible: 'N', Notes: null },
    { Prop_ID: 'X020', Name: 'Fort Independence Playground Dog Run', Address: 'Sedgwick Ave & W. 238th St', DogRuns_Type: 'Run', Accessible: 'N', Notes: null },
    { Prop_ID: 'X247', Name: 'Fox Park Dog Run', Address: 'Fox St & E. 15th St', DogRuns_Type: 'Run', Accessible: 'N', Notes: null },
    { Prop_ID: 'B055', Name: 'Sternberg Park Dog Run', Address: 'Leonard St between Montrose Ave & Boerum St', DogRuns_Type: 'Run', Accessible: 'N', Notes: null },
    { Prop_ID: 'B130', Name: 'Greenwood Playground Dog Run', Address: 'E. 5th St & Fort Hamilton Parkway', DogRuns_Type: 'Run', Accessible: 'N', Notes: null },
    { Prop_ID: 'M086', Name: 'Stuyvesant Square Dog Park', Address: 'E. 15th St between 2nd Ave & Perlman Pl', DogRuns_Type: 'Run', Accessible: 'N', Notes: null },
    { Prop_ID: 'M366', Name: 'Tribeca Dog Run', Address: 'Warren St between West St  & Greenwich St', DogRuns_Type: 'Run', Accessible: 'N', Notes: null },
    { Prop_ID: 'M353', Name: 'Riverside Park South Dog Run', Address: 'Hudson River Greenway at W. 72nd St', DogRuns_Type: 'Run', Accessible: 'N', Notes: null },
    { Prop_ID: 'M072', Name: 'Riverside Park: 142nd Street Dog Run', Address: 'W. 142nd St & Riverside Dr', DogRuns_Type: 'Run', Accessible: 'N', Notes: null },
    { Prop_ID: 'M263', Name: 'Bellevue South Park Dog Run', Address: 'Mt. Carmel Pl & E. 26th St', DogRuns_Type: 'Run', Accessible: 'N', Notes: null },
    { Prop_ID: 'R097', Name: 'Ida Court Playground Dog Run', Address: 'Ida Court between N. Railroad St & Drumgoole Road E', DogRuns_Type: 'Run', Accessible: 'N', Notes: null },
    { Prop_ID: 'X307', Name: 'Barretto Point Park Off-Leash Area', Address: 'Tiffany Street and Viele Avenue', DogRuns_Type: 'Off-Leash', Accessible: 'N', Notes: null },
    {
        Prop_ID: 'X305',
        Name: 'Concrete Plant Park   Off-Leash Area',
        Address: 'Along Bronx River between Bruckner Blvd & Westchester Avenue',
        DogRuns_Type: 'Off-Leash',
        Accessible: 'N',
        Notes: null
    },
    { Prop_ID: 'X126', Name: 'Ferry Point Park Off-Leash Area', Address: 'Schley Avenue between Brush and Balcom Avenues', DogRuns_Type: 'Off-Leash', Accessible: 'N', Notes: null },
    { Prop_ID: 'X196', Name: 'Haffen Park  Off-Leash Area', Address: 'Gunther and Hammersley Avenues', DogRuns_Type: 'Off-Leash', Accessible: 'N', Notes: null },
    { Prop_ID: 'X046', Name: 'Seton Falls Park Off-Leash Area', Address: 'Baychester Avenue and East 233 Street', DogRuns_Type: 'Off-Leash', Accessible: 'N', Notes: null },
    { Prop_ID: 'X147A', Name: 'Starlight Park   Off-Leash Area', Address: 'Sheridan Blvd and East 172 Street', DogRuns_Type: 'Off-Leash', Accessible: 'N', Notes: null },
    { Prop_ID: 'B068', Name: 'Kensington Dog Run', Address: 'Coney Island Ave at Kermit Pl', DogRuns_Type: 'Run', Accessible: 'Y', Notes: null },
    { Prop_ID: 'Q393A', Name: 'LaGuardia Landing Lights Dog Run', Address: '78th Street between 25th and 30th Avenue', DogRuns_Type: null, Accessible: 'N', Notes: null },
    { Prop_ID: 'X013', Name: 'Devoe Park Dog Run', Address: 'Sedgwick Avenue between Webb Ave and West Fordham Road', DogRuns_Type: 'Run', Accessible: 'N', Notes: null },
    { Prop_ID: 'X044', Name: 'St. James Park', Address: 'Jerome Ave., E. 193 St., Creston Ave., E', DogRuns_Type: 'Run', Accessible: 'N', Notes: null },
    {
        Prop_ID: 'R116',
        Name: 'Snug Harbor Cultural Center',
        Address: 'Richmond Ter., Tysen St., Kissel Ave., Henderson Ave.',
        DogRuns_Type: 'Off-Leash',
        Accessible: 'Y',
        Notes: 'Off-leash hours are from 6AM to 9AM. Pets should be leashed from 9 AM &ndash; 10 PM. Only service animals are permitted inside buildings, the NY Chinese Scholar&rsquo;s Garden, and the Heritage Farm. We discourage people bringing dogs on outdoor tours for the safety and comfort of the other attendees.'
    },
    { Prop_ID: 'Q044', Name: 'L/CPL Thomas P. Noonan Jr. Playground', Address: 'Greenpoint Ave. bet. 42 St. and 43 St.', DogRuns_Type: 'Run', Accessible: 'N', Notes: null }
];

export default dog_park_data;