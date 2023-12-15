export interface Feature {
  title: string;
  descriptions: string[];
}

export const FEATURES: Feature[] = [
  {
    title: 'Queue status',
    descriptions: [
      `Keep track of queue status and get notified when it's your time to purchase.`,
    ],
  },
  {
    title: 'Notification systems',
    descriptions: [
      'System-generated notifications for upcoming concerts and ticket onsales.',
      `Personalized recommendations based on the user's musical preferences.`,
    ],
  },
  {
    title: 'Fans community',
    descriptions: [
      `The ability to talk and share experiences with fellow fans through an integrated communication platform - Encore members discord server.`,
    ],
  },
  {
    title: 'Events information',
    descriptions: [
      `Detailed information of upcoming artists tours, events and concerts.`,
      `Stay updated on the latest music happenings and discover new shows to attend.`,
    ],
  },
  {
    title: 'Detailed courses',
    descriptions: [
      `Tutorials for novices: a deep dive into attending concerts of your favorite artists.`,
      `Learn the ins and outs of navigating ticket securing, ensuring you never miss a chance to see your beloved musicians live.`,
    ],
  },
  {
    title: 'Members support',
    descriptions: [
      `Online professional support for members on our Discord server.`,
      `Always available to address your queries and provide uninterrupted assistance about events.`,
    ],
  },
];
