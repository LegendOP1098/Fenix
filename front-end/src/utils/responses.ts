interface HealthResponse {
  keywords: string[];
  response: string;
}

export const healthResponses: HealthResponse[] = [
  {
    keywords: ['cold', 'symptoms', 'flu'],
    response: "Common cold symptoms include: runny nose, sore throat, cough, congestion, mild body aches, and mild fever. Rest, stay hydrated, and consider over-the-counter medications for symptom relief. Consult a doctor if symptoms worsen or persist beyond a week."
  },
  {
    keywords: ['mental', 'health', 'stress', 'anxiety'],
    response: "For mental health maintenance: 1) Establish a regular sleep schedule 2) Practice daily mindfulness or meditation 3) Exercise regularly 4) Maintain social connections 5) Seek professional help when needed. Remember, it's okay to ask for support."
  },
  {
    keywords: ['exercise', 'workout', 'fitness'],
    response: "The WHO recommends: 150 minutes of moderate aerobic activity or 75 minutes of vigorous aerobic activity weekly. Include strength training 2-3 times per week. Start slowly and gradually increase intensity. Always consult your doctor before starting a new exercise routine."
  },
  {
    keywords: ['diet', 'nutrition', 'food'],
    response: "A healthy diet includes: plenty of fruits and vegetables, whole grains, lean proteins, and healthy fats. Limit processed foods, added sugars, and excessive salt. Stay hydrated by drinking 8 glasses of water daily. Consider consulting a nutritionist for personalized advice."
  }
];

export const findResponse = (message: string): string => {
  const lowercaseMessage = message.toLowerCase();
  const matchedResponse = healthResponses.find(item =>
    item.keywords.some(keyword => lowercaseMessage.includes(keyword))
  );
  
  return matchedResponse?.response || 
    "I understand you have a health-related question. For specific medical advice, please consult with a healthcare professional. I can provide general health information and wellness tips.";
};