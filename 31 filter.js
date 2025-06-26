const people = [
    {
        id: 1,
        name: "Anvith SG",
        email: "anvith@example.com",
        age: 20,
        city: "Bengaluru"
    },
    {
        id: 2,
        name: "SRK",
        email: "srk@example.com",
        age: 22,
        city: "Mumbai"
    },
    {
        id: 3,
        name: "Tony Stark",
        email: "tony@starkindustries.com",
        age: 45,
        city: "New York"
    },
    {
        id: 4,
        name: "Bruce Wayne",
        email: "bruce@wayneenterprises.com",
        age: 35,
        city: "Gotham"
    },
    {
        id: 5,
        name: "Peter Parker",
        email: "peter@dailybugle.com",
        age: 18,
        city: "Queens"
    }
];

let data = people.filter(({ name, email, age }) => {
    if (age > 25) {
        return { name, email, age }
    }
})

console.log(data)
