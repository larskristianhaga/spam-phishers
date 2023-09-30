import {test} from '@playwright/test';
import * as fs from "fs";

// Read JSON file with mock data.
const data = JSON.parse(fs.readFileSync('./tests/MOCK_DATA.json', 'utf8'));

for (const person of data) {
    test(`testing with ${person.full_name}`, async ({page}): Promise<void> => {
        const fullName: string = person.full_name;
        const address: string = person.address;
        const postCode: number = person.postcode
        const email: string = person.email;
        const password: string = person.password;
        const mobileNumber: number = person.mobileNumber;
        const creditCardNumber: number = person.creditCardNumber;
        // Fill out the URL.
        const URL: string = '';

        // Fill in the form.
        // await page.goto(URL);
        // await page.getByPlaceholder('').click();
        // await page.getByPlaceholder('').fill(getRandom(11));
        // await page.getByRole('button', {name: 'Neste'}).click();
    });
}
