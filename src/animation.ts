//function turns letters into either bold or italic
export function printFeatureMessage(featureName: string, format: 'bold' | 'italic'): void {
  if (format === 'bold') {
    console.log(`\x1b[1m${featureName}\x1b[0m`); 
  } else {
    console.log(`\x1b[3m${featureName}\x1b[0m`); 
  }
}