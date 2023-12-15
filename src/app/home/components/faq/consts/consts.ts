export interface Faq {
  question: string;
  answer: string;
}

export const FAQS: Faq[] = [
  {
    question: 'What is included? How is access provided?',
    answer: `Service includes access to our Discord server where we post all information about upcoming concerts, analytics, guides, and provide support, which also serves as a community hub . Access to the Discord server is automatically granted right after the purchase through our dashboard, as you attach your Discord account during the purchase.`,
  },
  {
    question: 'What type of events do you cover?',
    answer: `We cover concerts of popular artists, various sport events, and everything related to the world of entertainment. Our goal is to ensure that you are informed about every upcoming popular event in your region so that you can attend it.`,
  },
  {
    question: 'How much does it cost?',
    answer: `The current price you can always find on our website and social media. The price includes the initial cost plus the subscription.`,
  },
  {
    question: 'How does renewal and cancellation of membership works?',
    answer: `Following the purchase, your card is linked to the payment system, and the subscription is automatically renewed on a monthly basis. You have the option to disable the auto-renewal or update the linked card at any time through the payment system dashboard.`,
  },
  {
    question:
      'For what purposes is the use of your service allowed/prohibited?',
    answer: `The service is available solely for personal use to attend concerts. Using the service for profiting through ticket resale is not allowed and forbidden by our Terms of Service. Our goal is to ensure that each of our members can attend concerts of their favorite artists without overpaying for tickets.`,
  },
];
