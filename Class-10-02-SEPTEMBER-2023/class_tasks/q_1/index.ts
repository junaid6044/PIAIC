export {};

// write a program that print all the car company and year from list of car objects

type carType = { company: string, isUsedCar: boolean, year: number }

var  cars: carType[] = [
    {company: "Honda", isUsedCar: false, year:  2023},
    {company: "Toyota", isUsedCar: false, year:  2021},
    {company: "KIA", isUsedCar: false, year:  2021},
    {company: "BMW", isUsedCar: false, year:  2020},
    {company: "Tasla", isUsedCar: false, year:  2015},
    {company: "Ferrari", isUsedCar: false, year:  2008},
    {company: "Cherry", isUsedCar: false, year:  2023}
]
console.log(`\tCar Company and Year are following\n`);
console.log(`\tYear \tCompany`);
for (let i:number = 0; i < cars.length; i++) {
    // console.log(`Car Company is ${cars[i].company} and Year is ${cars[i].year}`);
    console.log(`\t${cars[i].year} \t${cars[i].company}`);

}