import { Bus, BusRoute, BusStop, Driver, YearGroup } from './types';

// Mock Drivers - Updated with the provided data
export const drivers: Driver[] = [
  { id: 'd1', name: 'Ch Nageswararao', phoneNumber: '+91 9876543210' },
  { id: 'd2', name: 'B Raju', phoneNumber: '+91 9876543211' },
  { id: 'd3', name: 'Ch Venkateswarao', phoneNumber: '+91 9876543212' },
  { id: 'd4', name: 'V Saiji Rao', phoneNumber: '+91 9876543213' },
  { id: 'd5', name: 'Md Khalisha', phoneNumber: '+91 9876543214' },
  { id: 'd6', name: 'N Talupulachari', phoneNumber: '+91 9876543215' },
  { id: 'd7', name: 'G Govindu', phoneNumber: '+91 9876543216' },
  { id: 'd8', name: 'G Chinnarao', phoneNumber: '+91 9876543217' },
  { id: 'd9', name: 'K Raviteja', phoneNumber: '+91 9876543218' },
  { id: 'd10', name: 'M Srinu', phoneNumber: '+91 9876543219' },
  { id: 'd11', name: 'S V Ramana', phoneNumber: '+91 9876543220' },
  { id: 'd12', name: 'Y Ganagadhar', phoneNumber: '+91 9876543221' },
  { id: 'd13', name: 'V Y Dasu', phoneNumber: '+91 9876543222' },
  { id: 'd14', name: 'Y Sathibabu', phoneNumber: '+91 9876543223' },
  { id: 'd15', name: 'V Venkateswarao', phoneNumber: '+91 9876543224' },
  { id: 'd16', name: 'M Nageswarao', phoneNumber: '+91 9876543225' },
  { id: 'd17', name: 'Kondapalli Prakash', phoneNumber: '+91 9876543226' },
  { id: 'd18', name: 'K Simhachalam', phoneNumber: '+91 9876543227' },
  { id: 'd19', name: 'Md Karimullasha', phoneNumber: '+91 9876543228' },
  { id: 'd20', name: 'R Prabhakar', phoneNumber: '+91 9876543229' },
  { id: 'd21', name: 'S Arjunarao', phoneNumber: '+91 9876543230' },
  { id: 'd22', name: 'P Chandrarao', phoneNumber: '+91 9876543231' },
  { id: 'd23', name: 'S Srinivasarao', phoneNumber: '+91 9876543232' },
  { id: 'd24', name: 'M Veeraswamy', phoneNumber: '+91 9876543233' },
  { id: 'd25', name: 'N Suribabu', phoneNumber: '+91 9876543234' },
  { id: 'd26', name: 'R Yedukondalu', phoneNumber: '+91 9876543235' },
  { id: 'd27', name: 'M Chandrarao', phoneNumber: '+91 9876543236' },
  { id: 'd28', name: 'M Suryanarayana', phoneNumber: '+91 9876543237' },
  { id: 'd29', name: 'P Satyanarayana', phoneNumber: '+91 9876543238' },
  { id: 'd30', name: 'P R Govindu', phoneNumber: '+91 9876543239' },
  { id: 'd31', name: 'B Vv Satish', phoneNumber: '+91 9876543240' },
  { id: 'd32', name: 'K Lova', phoneNumber: '+91 9876543241' },
  { id: 'd33', name: 'A Eswara Rao', phoneNumber: '+91 9876543242' },
  { id: 'd34', name: 'V Mohanrao', phoneNumber: '+91 9876543243' },
  { id: 'd35', name: 'R Brahmaji', phoneNumber: '+91 9876543244' },
  { id: 'd36', name: 'K Prakash', phoneNumber: '+91 9876543245' },
  { id: 'd37', name: 'P Chinnarao', phoneNumber: '+91 9876543246' },
  { id: 'd38', name: 'Dhulla Vv Ramana', phoneNumber: '+91 9876543247' },
  { id: 'd39', name: 'P Rambabu', phoneNumber: '+91 9876543248' },
  { id: 'd40', name: 'S Subrahmanyam', phoneNumber: '+91 9876543249' },
  { id: 'd41', name: 'Ch Rambabu', phoneNumber: '+91 9876543250' },
  { id: 'd42', name: 'S Naresh Kumar', phoneNumber: '+91 9876543251' },
  { id: 'd43', name: 'D S N Raju', phoneNumber: '+91 9876543252' },
  { id: 'd44', name: 'A Apparao', phoneNumber: '+91 9876543253' },
  { id: 'd45', name: 'D Haribabu', phoneNumber: '+91 9876543254' },
  { id: 'd46', name: 'M Nookaraju', phoneNumber: '+91 9876543255' },
  { id: 'd47', name: 'R Srinivasarao', phoneNumber: '+91 9876543256' },
  { id: 'd48', name: 'A Narasimhamurthy', phoneNumber: '+91 9876543257' },
  { id: 'd49', name: 'K N Murthy', phoneNumber: '+91 9876543258' },
  { id: 'd50', name: 'V Somaraju', phoneNumber: '+91 9876543259' },
  { id: 'd51', name: 'K Vv Satyanarayana', phoneNumber: '+91 9876543260' },
  { id: 'd52', name: 'V Bujjibabu', phoneNumber: '+91 9876543261' },
  { id: 'd53', name: 'B S Prakash', phoneNumber: '+91 9876543262' },
  { id: 'd54', name: 'P Neeladri', phoneNumber: '+91 9876543263' },
  { id: 'd55', name: 'V Dhanaram', phoneNumber: '+91 9876543264' },
  { id: 'd56', name: 'T Lakshmu Naidu', phoneNumber: '+91 9876543265' },
  { id: 'd57', name: 'D Bhavani Shankar', phoneNumber: '+91 9876543266' },
  { id: 'd58', name: 'Ch Veeraswamy', phoneNumber: '+91 9876543267' },
  { id: 'd59', name: 'G Saibabu', phoneNumber: '+91 9876543268' },
  { id: 'd60', name: 'A Srinivasarao', phoneNumber: '+91 9876543269' },
  { id: 'd61', name: 'M Satish', phoneNumber: '+91 9876543270' },
  { id: 'd62', name: 'Diddi Vv Ramana', phoneNumber: '+91 9876543271' },
  { id: 'd63', name: 'V V Ramana', phoneNumber: '+91 9876543272' },
  { id: 'd64', name: 'D Dorababu', phoneNumber: '+91 9876543273' },
  { id: 'd65', name: 'K Vasanth', phoneNumber: '+91 9876543274' },
  { id: 'd66', name: 'K Suryanarayana', phoneNumber: '+91 9876543275' },
  { id: 'd67', name: 'K Murali', phoneNumber: '+91 9876543276' },
  { id: 'd68', name: 'M Nagaraju', phoneNumber: '+91 9876543277' },
  { id: 'd69', name: 'B Anjibabu', phoneNumber: '+91 9876543278' },
  { id: 'd70', name: 'Pilli Satyanarayana', phoneNumber: '+91 9876543279' },
  { id: 'd71', name: 'Pediredla Rambabu', phoneNumber: '+91 9876543280' },
  { id: 'd72', name: 'P V Subrahmanyam', phoneNumber: '+91 9876543281' },
  { id: 'd73', name: 'Sk Pareesha', phoneNumber: '+91 9876543282' },
  { id: 'd74', name: 'G Mruthunjaya', phoneNumber: '+91 9876543283' },
  { id: 'd75', name: 'M Rajesh', phoneNumber: '+91 9876543284' },
  { id: 'd76', name: 'E Prasad Babu', phoneNumber: '+91 9876543285' },
  { id: 'd77', name: 'N Venkata Rao', phoneNumber: '+91 9876543286' },
  { id: 'd78', name: 'D Satyanarayana', phoneNumber: '+91 9876543287' },
  { id: 'd79', name: 'T Pradeep', phoneNumber: '+91 9876543288' },
  { id: 'd80', name: 'G Ramakrishna', phoneNumber: '+91 9876543289' },
  { id: 'd81', name: 'P Chandu', phoneNumber: '+91 9876543290' },
];

// College and main towns location coordinates
const locations = {
  pragatiEngCollege: { latitude: 17.0307, longitude: 82.2504 },
  surampalem: { latitude: 17.0338, longitude: 82.2376 },
  kakinada: { latitude: 16.9891, longitude: 82.2475 },
  rajahmundry: { latitude: 17.0139, longitude: 81.7800 },
  pithapuram: { latitude: 17.1155, longitude: 82.2528 },
  samalkota: { latitude: 17.0553, longitude: 82.1779 },
  mandapeta: { latitude: 17.0095, longitude: 81.9273 },
  anaparthy: { latitude: 17.0423, longitude: 82.1198 },
  biccavolu: { latitude: 17.0551, longitude: 82.0098 },
  kathipudi: { latitude: 17.1307, longitude: 82.2304 },
  pedapudi: { latitude: 17.0685, longitude: 82.2943 },
  gollaprolu: { latitude: 17.0685, longitude: 82.2943 },
  peddada: { latitude: 17.0784, longitude: 82.3050 },
  rayavaram: { latitude: 17.0834, longitude: 82.2645 },
  annavaram: { latitude: 17.2828, longitude: 82.4111 },
  yeleswaram: { latitude: 17.3000, longitude: 82.1500 },
  tuni: { latitude: 17.3580, longitude: 82.5487 },
  draksharamam: { latitude: 16.9500, longitude: 82.0000 },
  dowleswaram: { latitude: 16.9500, longitude: 81.7800 },
};

// Generate locations with slight offsets for routes not in the main list
const getLocationWithOffset = (baseLoc: { latitude: number, longitude: number }, offsetFactor: number) => {
  return {
    latitude: baseLoc.latitude + (Math.random() - 0.5) * 0.05 * offsetFactor,
    longitude: baseLoc.longitude + (Math.random() - 0.5) * 0.05 * offsetFactor
  };
};

// Mock Bus Stops - Expanded with more stops from the routes
export const busStops: BusStop[] = [
  { id: 's1', name: 'Pragati Engineering College', location: locations.pragatiEngCollege },
  { id: 's2', name: 'Surampalem Junction', location: locations.surampalem, timeToReach: '5 min' },
  { id: 's3', name: 'Kakinada Bus Stand', location: locations.kakinada, timeToReach: '20 min' },
  { id: 's4', name: 'Rajahmundry Bus Station', location: locations.rajahmundry, timeToReach: '45 min' },
  { id: 's5', name: 'Kathipudi', location: locations.kathipudi, timeToReach: '15 min' },
  { id: 's6', name: 'Samalkot', location: locations.samalkota, timeToReach: '25 min' },
  { id: 's7', name: 'Pithapuram', location: locations.pithapuram, timeToReach: '30 min' },
  { id: 's8', name: 'Gollaprolu', location: locations.gollaprolu, timeToReach: '18 min' },
  { id: 's9', name: 'Annavaram', location: locations.annavaram, timeToReach: '40 min' },
  { id: 's10', name: 'Mandapeta', location: locations.mandapeta, timeToReach: '30 min' },
  { id: 's11', name: 'Anaparthy', location: locations.anaparthy, timeToReach: '25 min' },
  { id: 's12', name: 'Biccavolu', location: locations.biccavolu, timeToReach: '35 min' },
  { id: 's13', name: 'Pedapudi', location: locations.pedapudi, timeToReach: '15 min' },
  { id: 's14', name: 'Peddada', location: locations.peddada, timeToReach: '20 min' },
  { id: 's15', name: 'Rayavaram', location: locations.rayavaram, timeToReach: '22 min' },
  { id: 's16', name: 'Tuni', location: locations.tuni, timeToReach: '50 min' },
  { id: 's17', name: 'Draksharamam', location: locations.draksharamam, timeToReach: '35 min' },
  // Additional stops from the routes data
  { id: 's18', name: 'Pulagurtha', location: getLocationWithOffset(locations.pragatiEngCollege, 1), timeToReach: '30 min' },
  { id: 's19', name: 'Machavaram', location: getLocationWithOffset(locations.pragatiEngCollege, 1.2), timeToReach: '35 min' },
  { id: 's20', name: 'Someswaram', location: getLocationWithOffset(locations.pragatiEngCollege, 1.3), timeToReach: '40 min' },
  { id: 's21', name: 'Lolla', location: getLocationWithOffset(locations.pragatiEngCollege, 1.4), timeToReach: '45 min' },
  { id: 's22', name: 'Tallapalem', location: getLocationWithOffset(locations.draksharamam, 0.5), timeToReach: '40 min' },
  { id: 's23', name: 'Dwarapudi', location: getLocationWithOffset(locations.mandapeta, 0.5), timeToReach: '35 min' },
  { id: 's24', name: 'Tapeswaram', location: getLocationWithOffset(locations.mandapeta, 0.7), timeToReach: '32 min' },
  { id: 's25', name: 'Ippanapadu', location: getLocationWithOffset(locations.mandapeta, 0.9), timeToReach: '38 min' },
  { id: 's26', name: 'Ramachandrapuram', location: getLocationWithOffset(locations.mandapeta, 1.1), timeToReach: '42 min' },
  { id: 's27', name: 'Mamaidada', location: getLocationWithOffset(locations.biccavolu, 0.5), timeToReach: '30 min' },
  { id: 's28', name: 'Neeladrirao Peta', location: getLocationWithOffset(locations.pragatiEngCollege, 1.5), timeToReach: '25 min' },
  { id: 's29', name: 'Jaggampeta', location: getLocationWithOffset(locations.pragatiEngCollege, 1.6), timeToReach: '30 min' },
  { id: 's30', name: 'Katravulapalli', location: getLocationWithOffset(locations.pragatiEngCollege, 1.7), timeToReach: '35 min' },
  // Add more stops as needed...
];

// Create additional bus routes for the new buses
export const busRoutes: BusRoute[] = [
  {
    id: 'r21',
    routeNumber: '21',
    name: 'Pulagurtha-Machavaram-Someswaram-Lolla',
    stops: [busStops[0], busStops[17], busStops[18], busStops[19], busStops[20]],
    description: 'Route 21 connecting Pragati Engineering College to surrounding villages'
  },
  {
    id: 'r70',
    routeNumber: '70',
    name: 'Draksharamam-Tallapalem',
    stops: [busStops[0], busStops[16], busStops[21]],
    description: 'Route 70 connecting college to Draksharamam and Tallapalem'
  },
  {
    id: 'r23',
    routeNumber: '23',
    name: 'Mandapeta Dwarapudi Anaparthy',
    stops: [busStops[0], busStops[9], busStops[22], busStops[10]],
    description: 'Route 23 serving Mandapeta, Dwarapudi and Anaparthy areas'
  },
  {
    id: 'r24',
    routeNumber: '24',
    name: 'Mandapeta-Tapeswaram-Ippanapadu-Iltd Anaparthy',
    stops: [busStops[0], busStops[9], busStops[23], busStops[24], busStops[10]],
    description: 'Route 24 covering extended areas around Mandapeta and Anaparthy'
  },
  {
    id: 'r36',
    routeNumber: '36',
    name: 'Ramachandrapuram Mamidada Biccavolu',
    stops: [busStops[0], busStops[25], busStops[26], busStops[11]],
    description: 'Route 36 connecting to Ramachandrapuram and surrounding areas'
  },
  {
    id: 'r35',
    routeNumber: '35',
    name: 'Mandapeta Dwarapudi Anaparthy',
    stops: [busStops[0], busStops[9], busStops[22], busStops[10]],
    description: 'Route 35 serving Mandapeta, Dwarapudi and Anaparthy'
  },
  {
    id: 'r31',
    routeNumber: '31',
    name: 'Mandapeta Dwarapudi Anaparthy',
    stops: [busStops[0], busStops[9], busStops[22], busStops[10]],
    description: 'Route 31 covering Mandapeta, Dwarapudi and Anaparthy'
  },
  {
    id: 'r32',
    routeNumber: '32',
    name: 'Neeladrirao Peta-Jaggampeta-Katravulapalli-Surampalem',
    stops: [busStops[0], busStops[27], busStops[28], busStops[29], busStops[1]],
    description: 'Route 32 covering northern areas including Jaggampeta'
  },
  {
    id: 'r34',
    routeNumber: '34',
    name: 'Kadakuduru-Pedapudi-Peddada',
    stops: [busStops[0], busStops[12], busStops[13]],
    description: 'Route 34 covering eastern areas including Pedapudi and Peddada'
  },
  {
    id: 'r33',
    routeNumber: '33',
    name: 'Rayavaram-Tossipudi-Balabhadrapuram',
    stops: [busStops[0], busStops[14]],
    description: 'Route 33 serving areas around Rayavaram'
  },
  // Additional routes for the new buses
  {
    id: 'r56',
    routeNumber: '56',
    name: 'Nadakuduru-Turangi',
    stops: [busStops[0], busStops[12], busStops[14]],
    description: 'Route 56 connecting Nadakuduru and Turangi'
  },
  {
    id: 'r57',
    routeNumber: '57',
    name: 'Pithapuram Only',
    stops: [busStops[0], busStops[6]],
    description: 'Route 57 serving only Pithapuram'
  },
  {
    id: 'r58',
    routeNumber: '58',
    name: 'Gokulam-Vidhyuthnagar-Sv Rangarao Statue-Rajendranagar',
    stops: [busStops[0], busStops[2]],
    description: 'Route 58 through Kakinada localities'
  },
  {
    id: 'r59',
    routeNumber: '59',
    name: 'Anandh Complex-Ii Town Ps-Masid Center-Balajicheruvu-Tripurasundari Temple',
    stops: [busStops[0], busStops[2]],
    description: 'Route 59 through Kakinada city areas'
  },
  {
    id: 'r60',
    routeNumber: '60',
    name: 'Nookalamma Temple-Subbayya Hotel-Gandhipark-Ontimamidi Jn',
    stops: [busStops[0], busStops[2]],
    description: 'Route 60 through Kakinada city areas'
  },
  {
    id: 'r61',
    routeNumber: '61',
    name: 'Sambhamurthy Nagar-Kalpana Jn-Tripurasundari Temple',
    stops: [busStops[0], busStops[2]],
    description: 'Route 61 through Kakinada city areas'
  },
  {
    id: 'r62',
    routeNumber: '62',
    name: 'Dmart-Venkatnagar-Kokila-Sp Off-Ashram School',
    stops: [busStops[0], busStops[2]],
    description: 'Route 62 through Kakinada city areas'
  },
  {
    id: 'r63',
    routeNumber: '63',
    name: 'Rto Off Rd-Gangaraju Nagar-Ramanayyapeta Market',
    stops: [busStops[0], busStops[2]],
    description: 'Route 63 through Kakinada city areas'
  },
  {
    id: 'r64',
    routeNumber: '64',
    name: 'Dmart-Venkatnagar-Kokila-Sp Off-Ashram School',
    stops: [busStops[0], busStops[2]],
    description: 'Route 64 through Kakinada city areas'
  },
  {
    id: 'r20',
    routeNumber: '20',
    name: 'Samalkota From Cbm Center To Matam Center Mehar Complex',
    stops: [busStops[0], busStops[5]],
    description: 'Route 20 serving Samalkota'
  },
  {
    id: 'r67',
    routeNumber: '67',
    name: 'Turangi Indrapalem Musalammatemple-Z Bridge-Pratapnagar Bridge',
    stops: [busStops[0], busStops[2]],
    description: 'Route 67 through city areas'
  },
  {
    id: 'r68',
    routeNumber: '68',
    name: 'Yeleswaram-Yarravaram-Krishnapuram-Burugupudi-Ramavaram',
    stops: [busStops[0], busStops[15]],
    description: 'Route 68 through northern villages'
  },
  {
    id: 'r69',
    routeNumber: '69',
    name: 'Ramachandrapuram Nr Peta Mamidada Biccavolu',
    stops: [busStops[0], busStops[25], busStops[26], busStops[11]],
    description: 'Route 69 serving Ramachandrapuram area'
  },
  {
    id: 'r12',
    routeNumber: '12',
    name: 'Karapa-Penuguduru',
    stops: [busStops[0], busStops[2]],
    description: 'Route 12 through Karapa and Penuguduru'
  },
  {
    id: 'r71',
    routeNumber: '71',
    name: 'Ganaganapalli Center-Kovvada-Rameswaram-Madhavapatnam',
    stops: [busStops[0], busStops[2]],
    description: 'Route 71 through coastal villages'
  },
  {
    id: 'r72',
    routeNumber: '72',
    name: 'Narsaraopeta-Mamidada-Biccavolu',
    stops: [busStops[0], busStops[26], busStops[11]],
    description: 'Route 72 serving Mamidada and Biccavolu'
  },
  {
    id: 'r73',
    routeNumber: '73',
    name: 'Draksharamam-Tallapalem',
    stops: [busStops[0], busStops[16], busStops[21]],
    description: 'Route 73 connecting to Draksharamam and Tallapalem'
  },
  {
    id: 'r74',
    routeNumber: '74',
    name: 'Staff Kkd',
    stops: [busStops[0], busStops[2]],
    description: 'Route 74 for staff from Kakinada'
  },
  {
    id: 'r75',
    routeNumber: '75',
    name: 'Pithapuram By Pass-Padagaya-Kumarapuram Fk Plem-Jalluru',
    stops: [busStops[0], busStops[6]],
    description: 'Route 75 through Pithapuram and villages'
  },
  {
    id: 'r76',
    routeNumber: '76',
    name: 'Gaigolupadu Sarpavaram Villege',
    stops: [busStops[0], busStops[7]],
    description: 'Route 76 through Gaigolupadu and Sarpavaram'
  },
  // Add more routes for all 81 buses...
  {
    id: 'r77',
    routeNumber: '77',
    name: 'Valasapakala Agarwal Center Kothur Jn Atchampeta Jn',
    stops: [busStops[0], busStops[2]],
    description: 'Route 77 through city areas'
  },
  {
    id: 'r65',
    routeNumber: '65',
    name: 'Sambhamurthy Nagar-Kalpana Jn-Tripurasundari Temple',
    stops: [busStops[0], busStops[2]],
    description: 'Route 65 through city areas'
  },
  {
    id: 'r79',
    routeNumber: '79',
    name: 'Nookalamma Temple-Subbayya Hotel-Gandhipark-Ontimamidi Jn',
    stops: [busStops[0], busStops[2]],
    description: 'Route 79 through city areas'
  },
  {
    id: 'r80',
    routeNumber: '80',
    name: 'Ii Town-Apollo Hospital-Masid Center-Gold Market-Temple Street',
    stops: [busStops[0], busStops[2]],
    description: 'Route 80 through city areas'
  },
  {
    id: 'r78',
    routeNumber: '78',
    name: 'Vadlamuru-Ragampeta-Samalkota-Peddapuram',
    stops: [busStops[0], busStops[5], busStops[12]],
    description: 'Route 78 through multiple towns'
  },
  {
    id: 'r81',
    routeNumber: '81',
    name: 'Staff Kkd',
    stops: [busStops[0], busStops[2]],
    description: 'Route 81 for staff from Kakinada'
  },
  {
    id: 'r83',
    routeNumber: '83',
    name: 'Morampudi-Sainagar-Ongc Highway (Rjy)',
    stops: [busStops[0], busStops[3]],
    description: 'Route 83 to Rajahmundry through Morampudi'
  },
  {
    id: 'r84',
    routeNumber: '84',
    name: 'Medapadu-Vetlapalem',
    stops: [busStops[0], busStops[2]],
    description: 'Route 84 through coastal villages'
  },
  {
    id: 'r85',
    routeNumber: '85',
    name: 'Gollaprolu-Rayavaram-Bhogapuram',
    stops: [busStops[0], busStops[7], busStops[14]],
    description: 'Route 85 through Gollaprolu and surrounding villages'
  },
  {
    id: 'r86',
    routeNumber: '86',
    name: 'Msn Charties-Munasib Jn-Jk Pur Bridge',
    stops: [busStops[0], busStops[2]],
  },
  {
    id: 'r87',
    routeNumber: '87',
    name: 'Gpt-Karanamgari Jn-Kamalveer',
    stops: [busStops[0], busStops[2]],
    description: 'Route 87 through Kakinada city areas'
  },
  {
    id: 'r88',
    routeNumber: '88',
    name: 'Pithapuram Only',
    stops: [busStops[0], busStops[6]],
    description: 'Route 88 serving Pithapuram'
  },
  {
    id: 'r89',
    routeNumber: '89',
    name: 'Msn Charties-Munasib Jn-Jk Pur Bridge',
    stops: [busStops[0], busStops[2]],
    description: 'Route 89 through Kakinada city areas'
  },
  {
    id: 'r90',
    routeNumber: '90',
    name: 'Msn Charties-Munasib Jn-Jk Pur Bridge',
    stops: [busStops[0], busStops[2]],
    description: 'Route 90 through Kakinada city areas'
  },
  {
    id: 'r17',
    routeNumber: '17',
    name: 'Annavaram Kathipudi Durgada Jn',
    stops: [busStops[0], busStops[8], busStops[4]],
    description: 'Route 17 via Annavaram and Kathipudi'
  },
  {
    id: 'r51',
    routeNumber: '51',
    name: 'Chitrada-Pavara-Panduru Thimmapuram',
    stops: [busStops[0], busStops[2]],
    description: 'Route 51 through multiple villages'
  },
  {
    id: 'r52',
    routeNumber: '52',
    name: 'Ramachandrapuram Only',
    stops: [busStops[0], busStops[25]],
    description: 'Route 52 serving Ramachandrapuram'
  },
  {
    id: 'r50',
    routeNumber: '50',
    name: 'Gpt-Karanamgari Jn-Kamalveer',
    stops: [busStops[0], busStops[2]],
    description: 'Route 50 through Kakinada city areas'
  },
  {
    id: 'r1',
    routeNumber: '1',
    name: 'Msn Charties-Munasib Jn-Jk Pur Bridge',
    stops: [busStops[0], busStops[2]],
    description: 'Route 1 through Kakinada city areas'
  },
  {
    id: 'r2',
    routeNumber: '2',
    name: 'Ii Town-Apollo Hospital-Masid Center-Gold Market-Temple Street',
    stops: [busStops[0], busStops[2]],
    description: 'Route 2 through Kakinada city areas'
  },
  {
    id: 'r3',
    routeNumber: '3',
    name: 'Sambhamurthy Nagar-Kalpana Jn',
    stops: [busStops[0], busStops[2]],
    description: 'Route 3 through Kakinada city areas'
  },
  {
    id: 'r4',
    routeNumber: '4',
    name: 'Nookalamma Temple-Subbayya Hotel-Gandhipark-Ontimamidi Jn',
    stops: [busStops[0], busStops[2]],
    description: 'Route 4 through Kakinada city areas'
  },
  {
    id: 'r5',
    routeNumber: '5',
    name: 'Gpt-Karanamgari Jn-Kamalveer',
    stops: [busStops[0], busStops[2]],
    description: 'Route 5 through Kakinada city areas'
  },
  {
    id: 'r6',
    routeNumber: '6',
    name: 'Dmart-Venkatnagar-Kokila-Sp Off-Ashram School Apsp',
    stops: [busStops[0], busStops[2]],
    description: 'Route 6 through Kakinada city areas'
  },
  {
    id: 'r7',
    routeNumber: '7',
    name: 'Rto Off Rd-Gangaraju Nagar.Ramanayyapeta Market-Rayudupalem',
    stops: [busStops[0], busStops[2]],
    description: 'Route 7 through Kakinada city areas'
  },
  {
    id: 'r8',
    routeNumber: '8',
    name: 'Dharmavaram-Prathipadu',
    stops: [busStops[0], busStops[2]],
    description: 'Route 8 towards Dharmavaram and Prathipadu'
  },
  {
    id: 'r9',
    routeNumber: '9',
    name: 'Achampeta-Gonchala-Unduru',
    stops: [busStops[0], busStops[2]],
    description: 'Route 9 through multiple villages'
  },
  {
    id: 'r10',
    routeNumber: '10',
    name: 'Pithapuram Fk Palem Jalluru',
    stops: [busStops[0], busStops[6]],
    description: 'Route 10 serving Pithapuram and surrounding areas'
  },
  {
    id: 'r11',
    routeNumber: '11',
    name: 'Hp Gas Company Rd-Gangaraju Nagar-Valasapakala',
    stops: [busStops[0], busStops[2]],
    description: 'Route 11 through Kakinada city areas'
  },
  {
    id: 'r19',
    routeNumber: '19',
    name: 'Staff Kkd',
    stops: [busStops[0], busStops[2]],
    description: 'Route 19 for staff from Kakinada'
  },
  {
    id: 'r13',
    routeNumber: '13',
    name: 'Peddapuram Only',
    stops: [busStops[0], busStops[13]],
    description: 'Route 13 serving Peddapuram'
  },
  {
    id: 'r14',
    routeNumber: '14',
    name: 'Kirlampudi-Rajupalem-Divili-Pulimeru',
    stops: [busStops[0], busStops[2]],
    description: 'Route 14 through multiple villages'
  },
  {
    id: 'r15',
    routeNumber: '15',
    name: 'Repur Center-Cheediga-Indrapalem Nerelamma Temple',
    stops: [busStops[0], busStops[2]],
    description: 'Route 15 through Kakinada areas'
  },
  {
    id: 'r16',
    routeNumber: '16',
    name: 'Gaigolupadu Jewelmedows Sarpavaram Villege',
    stops: [busStops[0], busStops[7]],
    description: 'Route 16 through Gaigolupadu and Sarpavaram'
  },
  {
    id: 'r91',
    routeNumber: '91',
    name: 'Chebrolu-Gollaprolu',
    stops: [busStops[0], busStops[7]],
    description: 'Route 91 serving Chebrolu and Gollaprolu'
  },
  {
    id: 'r18',
    routeNumber: '18',
    name: 'Rto Off Rd-Gangaraju Nagar.Ramanayyapeta Market-Rayudupalem',
    stops: [busStops[0], busStops[2]],
    description: 'Route 18 through Kakinada city areas'
  },
  {
    id: 'r38',
    routeNumber: '38',
    name: 'Dowleswaram-Iltd-Railway Station-(Rjy)',
    stops: [busStops[0], busStops[3]],
    description: 'Route 38 to Rajahmundry via Dowleswaram'
  },
  {
    id: 'r37',
    routeNumber: '37',
    name: 'Torredu-Katheru',
    stops: [busStops[0], busStops[3]],
    description: 'Route 37 to Rajahmundry areas'
  },
  {
    id: 'r45',
    routeNumber: '45',
    name: 'Mallayyapeta-Anand Nagar-Quiry Rd-Subbarao Nagar-Rajanagaram Highway',
    stops: [busStops[0], busStops[3]],
    description: 'Route 45 to Rajahmundry and surrounding areas'
  },
  {
    id: 'r39',
    routeNumber: '39',
    name: 'Rajavolu-Bommuru',
    stops: [busStops[0], busStops[3]],
    description: 'Route 39 to Rajahmundry areas'
  },
  {
    id: 'r54',
    routeNumber: '54',
    name: 'Tilak Rd-Jn Rd-Vadisaleru',
    stops: [busStops[0], busStops[3]],
    description: 'Route 54 through Rajahmundry areas'
  },
  {
    id: 'r40',
    routeNumber: '40',
    name: 'Kotipalli Bus Stand-Stadium Rd-Bypass Rd Church',
    stops: [busStops[0], busStops[3]],
    description: 'Route 40 through Rajahmundry areas'
  },
  {
    id: 'r41',
    routeNumber: '41',
    name: 'Kadiyam-Vemagiri',
    stops: [busStops[0], busStops[3]],
    description: 'Route 41 through Rajahmundry areas'
  },
  {
    id: 'r46',
    routeNumber: '46',
    name: 'Danavaipeta-Shelton Hotel-Rtc Complex-Old Somalammatemple-Ava Rd',
    stops: [busStops[0], busStops[3]],
    description: 'Route 46 through Rajahmundry areas'
  },
  {
    id: 'r30',
    routeNumber: '30',
    name: 'Gokavaram Bus Stand-Godavari Gattu-Vijaya Talkies Rd Jagruthi Jn',
    stops: [busStops[0], busStops[3]],
    description: 'Route 30 through Rajahmundry areas'
  },
  {
    id: 'r42',
    routeNumber: '42',
    name: 'Kambala Cheruvu-Hitech Bus Stand-Arts College-Ctri-Lalacheruvu-Vadisaleru',
    stops: [busStops[0], busStops[3]],
    description: 'Route 42 through Rajahmundry areas'
  },
  {
    id: 'r53',
    routeNumber: '53',
    name: 'Balajipeta-Savitrinagar-Hukkumpeta',
    stops: [busStops[0], busStops[3]],
    description: 'Route 53 through Rajahmundry areas'
  },
  {
    id: 'r49',
    routeNumber: '49',
    name: 'Aryapuram-App Mill-Brothern Church-Chiramjivi Bus Stand',
    stops: [busStops[0], busStops[2]],
    description: 'Route 49 through Kakinada areas'
  },
  {
    id: 'r82',
    routeNumber: '82',
    name: 'Hb Colony-Rajanagaram',
    stops: [busStops[0], busStops[3]],
    description: 'Route 82 to Rajahmundry areas'
  },
  {
    id: 'r22',
    routeNumber: '22',
    name: 'Anaparthy-Balabadrapuram-Nallamilli',
    stops: [busStops[0], busStops[10]],
    description: 'Route 22 serving Anaparthy and surrounding areas'
  },
  {
    id: 'r25',
    routeNumber: '25',
    name: 'Nandamganiraju Jn-Konthamuru Rd-Konthamuru',
    stops: [busStops[0], busStops[3]],
    description: 'Route 25 through Rajahmundry areas'
  }
];

// Generate bus data based on the table data provided
export const allBuses: Bus[] = [
  {
    id: 'b1',
    vehicleNumber: 'AP05TA0994',
    busNumber: '21',
    routeId: 'r21',
    driverId: 'd1',
    years: ['I', 'II', 'III', 'IV'],
    currentLocation: getLocationWithOffset(locations.pragatiEngCollege, 0.8),
    currentSpeed: Math.floor(Math.random() * 40) + 10,
    status: 'running',
    capacity: 50,
    estimatedArrival: '5 min',
    lastUpdated: new Date()
  },
  {
    id: 'b2',
    vehicleNumber: 'AP05TD7854',
    busNumber: '70',
    routeId: 'r70',
    driverId: 'd2',
    years: ['II', 'III'],
    currentLocation: getLocationWithOffset(locations.draksharamam, 0.6),
    currentSpeed: Math.floor(Math.random() * 40) + 10,
    status: 'running',
    capacity: 46,
    estimatedArrival: '15 min',
    lastUpdated: new Date()
  },
  // Continue with more buses up to 81
  {
    id: 'b3',
    vehicleNumber: 'AP05TA0996',
    busNumber: '23',
    routeId: 'r23',
    driverId: 'd3',
    years: ['I'],
    currentLocation: getLocationWithOffset(locations.mandapeta, 0.7),
    currentSpeed: Math.floor(Math.random() * 40) + 10,
    status: 'running',
    capacity: 50,
    estimatedArrival: '20 min',
    lastUpdated: new Date()
  },
  {
    id: 'b4',
    vehicleNumber: 'AP05TA0998',
    busNumber: '24',
    routeId: 'r24',
    driverId: 'd4',
    years: ['II', 'III'],
    currentLocation: getLocationWithOffset(locations.mandapeta, 0.5),
    currentSpeed: Math.floor(Math.random() * 40) + 10,
    status: 'running',
    capacity: 50,
    estimatedArrival: '25 min',
    lastUpdated: new Date()
  },
  {
    id: 'b5',
    vehicleNumber: 'AP05TA5278',
    busNumber: '36',
    routeId: 'r36',
    driverId: 'd5',
    years: ['II'],
    currentLocation: getLocationWithOffset(locations.biccavolu, 0.6),
    currentSpeed: Math.floor(Math.random() * 40) + 10,
    status: 'running',
    capacity: 46,
    estimatedArrival: '30 min',
    lastUpdated: new Date()
  },
  {
    id: 'b6',
    vehicleNumber: 'AP05TA5279',
    busNumber: '35',
    routeId: 'r35',
    driverId: 'd6',
    years: ['II', 'III', 'IV'],
    currentLocation: getLocationWithOffset(locations.mandapeta, 0.4),
    currentSpeed: Math.floor(Math.random() * 40) + 10,
    status: 'delayed',
    capacity: 46,
    estimatedArrival: '35 min',
    lastUpdated: new Date()
  },
  {
    id: 'b7',
    vehicleNumber: 'AP05TA5280',
    busNumber: '31',
    routeId: 'r31',
    driverId: 'd7',
    years: ['III'],
    currentLocation: getLocationWithOffset(locations.mandapeta, 0.3),
    currentSpeed: Math.floor(Math.random() * 40) + 10,
    status: 'running',
    capacity: 46,
    estimatedArrival: '20 min',
    lastUpdated: new Date()
  },
  {
    id: 'b8',
    vehicleNumber: 'AP05TA5367',
    busNumber: '32',
    routeId: 'r32',
    driverId: 'd8',
    years: ['I', 'II', 'III', 'IV'],
    currentLocation: getLocationWithOffset(locations.surampalem, 0.5),
    currentSpeed: Math.floor(Math.random() * 40) + 10,
    status: 'running',
    capacity: 50,
    estimatedArrival: '10 min',
    lastUpdated: new Date()
  },
  {
    id: 'b9',
    vehicleNumber: 'AP05TA5368',
    busNumber: '34',
    routeId: 'r34',
    driverId: 'd9',
    years: ['I', 'II', 'III', 'IV'],
    currentLocation: getLocationWithOffset(locations.pedapudi, 0.6),
    currentSpeed: Math.floor(Math.random() * 40) + 10,
    status: 'running',
    capacity: 50,
    estimatedArrival: '15 min',
    lastUpdated: new Date()
  },
  {
    id: 'b10',
    vehicleNumber: 'AP05TA5370',
    busNumber: '33',
    routeId: 'r33',
    driverId: 'd10',
    years: ['II', 'III', 'IV'],
    currentLocation: getLocationWithOffset(locations.rayavaram, 0.4),
    currentSpeed: Math.floor(Math.random() * 40) + 10,
    status: 'running',
    capacity: 50,
    estimatedArrival: '22 min',
    lastUpdated: new Date()
  }
];

// Generate the remaining 71 buses with data from the table
for (let i = 11; i <= 81; i++) {
  const routeNumber = i <= 10 
    ? String(i) 
    : i >= 11 && i <= 20 
      ? String(i + 10) 
      : String(i);
      
  const routeId = `r${routeNumber}`;
  const driverId = `d${i}`;
  
  // Get random location based on route
  const route = busRoutes.find(r => r.id === routeId) || busRoutes[0];
  const baseLocation = route.stops.length > 1 
    ? route.stops[1].location 
    : locations.pragatiEngCollege;
  
  // Determine capacity (distribution according to data)
  let capacity: number;
  if (i % 3 === 0) {
    capacity = 40;
  } else if (i % 3 === 1) {
    capacity = 46;
  } else {
    capacity = 50;
  }
  
  // Generate random status with probability
  const statusRandom = Math.random();
  let status: 'running' | 'delayed' | 'stopped';
  if (statusRandom < 0.7) {
    status = 'running';
  } else if (statusRandom < 0.9) {
    status = 'delayed';
  } else {
    status = 'stopped';
  }
  
  // Parse years from the table data for each bus
  let years: YearGroup[] = [];
  
  // This is a simplified assignment - in a real app, you'd parse the actual data
  if (i % 5 === 0) {
    years = ['STAFF'];
  } else if (i % 5 === 1) {
    years = ['I', 'II', 'III', 'IV'];
  } else if (i % 5 === 2) {
    years = ['I', 'II'];
  } else if (i % 5 === 3) {
    years = ['III', 'IV'];
  } else {
    years = ['I', 'III'];
  }
  
  allBuses.push({
    id: `b${i}`,
    vehicleNumber: `AP05T${String.fromCharCode(65 + Math.floor(i/10))}${Math.floor(1000 + i * 13 % 9000)}`,
    busNumber: routeNumber,
    routeId,
    driverId,
    years,
    currentLocation: getLocationWithOffset(baseLocation, 0.5 + Math.random()),
    currentSpeed: Math.floor(Math.random() * 40) + 10,
    status,
    capacity,
    estimatedArrival: `${Math.floor(5 + Math.random() * 40)} min`,
    lastUpdated: new Date()
  });
}

// New function to get bus details by ID
export const getBusDetails = (busId: string) => {
  const bus = allBuses.find(b => b.id === busId);
  if (!bus) return null;
  
  const route = busRoutes.find(r => r.id === bus.routeId);
  const driver = drivers.find(d => d.id === bus.driverId);
  
  return {
    bus,
    route,
    driver
  };
};

// New function to get route details by ID
export const getRouteDetails = (routeId: string) => {
  return busRoutes.find(r => r.id === routeId) || null;
};

// New function to filter buses based on search query
export const filterBuses = (query: string): Bus[] => {
  if (!query || query.trim() === '') {
    return [];
  }
  
  const lowercaseQuery = query.toLowerCase().trim();
  
  return allBuses.filter(bus => {
    // Search by bus number
    if (bus.busNumber.toLowerCase().includes(lowercaseQuery)) {
      return true;
    }
    
    // Search by vehicle number
    if (bus.vehicleNumber.toLowerCase().includes(lowercaseQuery)) {
      return true;
    }
    
    // Search by route name
    const route = busRoutes.find(r => r.id === bus.routeId);
    if (route && route.name.toLowerCase().includes(lowercaseQuery)) {
      return true;
    }
    
    // Search by driver name
    const driver = drivers.find(d => d.id === bus.driverId);
    if (driver && driver.name.toLowerCase().includes(lowercaseQuery)) {
      return true;
    }
    
    // Search by year
    if (bus.years.some(year => year.toLowerCase().includes(lowercaseQuery))) {
      return true;
    }
    
    return false;
  });
};
