function generateRandomNumber(num) {
    // Gets # from 0 -> num - 1
    return Math.floor(Math.random() * num)
  }
  
  const messageGenerator = {
    name: ['Simon', 'Logan', 'Fiona', 'Nylah'],
    motivationalQuote: ['Success is not final; failure is not fatal: It is the courage to continue that counts.', 'I never dreamed about success. I worked for it.', 'Don’t let yesterday take up too much of today.', 'Setting goals is the first step in turning the invisible into the visible.', 'One secret of success in life is to be ready for the opportunity when it comes'],
    daysMoto: ['Live life to the fullest, and focus on the positive', 'You\'ll never do a whole lot unless you\'re brave enough to try', 'Happiness is not by chance but by choice', 'Even miracles take a little time']
  };
  
  // Store the 'positive messages' in an array
  let messageTemplate = [];
  
  // Iterate over the object
  for(let prop in messageGenerator) {
    let optionIdx = generateRandomNumber(messageGenerator[prop].length);
  
    // use the object's properties to customize the message being added to messageTemplate  
    switch(prop) {
      case 'name':
        messageTemplate.push(`${messageGenerator[prop][optionIdx]}, this is your inspirational quote for the day.`);
        break;
      case 'motivationalQuote':
        messageTemplate.push(`"${messageGenerator[prop][optionIdx]}."`);
        break;
      case 'daysMoto':
        messageTemplate.push(`Our moto for today is,  "${messageGenerator[prop][optionIdx]}".`);
        break;
      default:
        messageTemplate.push('There is not enough info.');
    }
  }
  
  function formatMessage() {
    return messageTemplate.join('\n');
  }
  
  console.log(formatMessage());