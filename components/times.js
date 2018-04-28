const relativeTimes = [
  'tomorrow',
  'this evening',
  'tomorrow evening',
  'this weekend',
  'next month',
  'next year',
  'this spring',
  'this summer',
  'this fall',
  'this winter',
]

const untils = [
  'we can remember the words to Careless Whisper',
  'mountain skip like rams, hills like sheep',
  'Gozer the Traveller comes in one of the pre-chosen forms',
  'the rectification of the Vuldronaii',
  'the third reconciliation of the last of the Meketrex Supplicants',
  'further notice',
  'Amtrak gets their act together and standardizes all-door boarding',
  'the identities of the Final Five are revealed',
  'a suitable source of Tylium is identified',
]

export const specificTime = () => new Date(Math.floor(Math.random()*1000*60*60*24)).toLocaleTimeString('en-US')

export const relativeTime = () => relativeTimes[Math.floor(Math.random()*relativeTimes.length)]

export const until = () => untils[Math.floor(Math.random()*untils.length)]
