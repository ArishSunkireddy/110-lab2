
import { printFeatureMessage } from "./animation";

// Define a list of snack names
export const snacks: string[] = ['chips', 'cookies', 'popcorn', 'candy', 'pretzels', 'doritos', 'oreos', 'brownies'];

// Define and export a function that prints the snacks
export function printSnacks(): void {
    printFeatureMessage("Party! Party! Party! - Snacks Time", "bold");
    console.log('Available snacks:');
    snacks.forEach(snack => console.log(snack));
}

// Call the function to print the snacks
printSnacks();
