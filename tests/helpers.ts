// Generates a random number with the specified length
export const getRandom = (length: number): string => {
    // Calculate the range
    let max: number = Math.pow(10, length) - 1;

    // Generate the random number
    let randomNumber: number = Math.floor(Math.random() * (max + 1));

    // Convert to string and pad with leading zeros if necessary
    return String(randomNumber).padStart(length, '0');
};
