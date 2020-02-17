import Pusher from 'pusher-js';

import { PUSHER_ID, PUSHER_LOG, PUSHER_FORCE_TSL } from '../config/pusher';

// // Enable pusher logging - don't include this in production
Pusher.logToConsole = PUSHER_LOG;

var pusher = new Pusher(PUSHER_ID, {
  cluster: 'us2',
  forceTLS: PUSHER_FORCE_TSL
});

var channel = pusher.subscribe('monka');

export default channel;