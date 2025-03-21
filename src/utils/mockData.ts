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
    name: 'Ramachandrapuram Mamaidada Biccavolu',
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
