import { faker } from "@faker-js/faker";

export const generateTableData = () => {
    const randomNoOfEntries = faker.datatype.number({
        min: 40,
        max: 70,
    });
    return Array(randomNoOfEntries)
        .fill()
        .map((a, i) => ({
            name: faker.name.fullName(),
            position: faker.helpers.arrayElement([
                "Accountant",
                "Junior Techincal Author",
                "Frontend Developer",
                "Backend Developer",
                "Sales Assistant",
                "Senior Javascript Developer",
                "SDE-II Frontend",
                "SDE-III Frontend",
                "Tech Lead",
                "Chief Technical Officer(CTO)",
                "Chief Executive Officer(CEO)",
            ]),
            office: faker.address.city(),
            age: faker.datatype.number({
                min: 23,
                max: 45,
            }),
            start_date: faker.date.past(10, "2023-01-01"),
            salary: `$${faker.datatype.number({
                min: 65000,
                max: 150000,
            })}`,
        }));
};
