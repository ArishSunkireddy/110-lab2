// Define a list of snack names
const snacks: string[] = ['Chips', 'Cookies', 'Popcorn', 'Candy', 'Pretzels'];

// Define and export a function that prints the snacks to the console
export function printSnacks(): void {
    console.log('Available snacks:');
    snacks.forEach(snack => console.log(snack));
}

// Call the function to print the snacks
printSnacks();