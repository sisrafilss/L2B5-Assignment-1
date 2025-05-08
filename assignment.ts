function formatString(input: string, toUpper?: boolean): string {
  if (toUpper || typeof toUpper === "undefined") {
    return input.toUpperCase();
  } else {
    return input.toLocaleLowerCase();
  }
}

function filterByRating(
  items: { title: string; rating: number }[]
): { title: string; rating: number }[] {
  return items.filter((item) => item.rating >= 4);
}

function concatenateArrays<T>(...arrays: T[][]): T[] {
  const result: T[] = [];
  arrays.forEach((arr: T[]): void => {
    result.push(...arr);
  });
  return result;
}

class Vehicle {
  constructor(private make: string, private year: number) {}
  getInfo(): void {
    console.log(`Make: ${this.make}, Year: ${this.year}`);
  }
}
class Car extends Vehicle {
  constructor(make: string, year: number, private model: string) {
    super(make, year);
  }
  getModel() {
    console.log(`Model: ${this.model}`);
  }
}

function processValue(value: string | number): number {
  if (typeof value === "string") return value.length;
  else return value * 2;
}

interface Product {
  name: string;
  price: number;
}

function getMostExpensiveProduct(products: Product[]): Product | null {
  if (products.length) {
    let expensiveProduct: Product = products[0];
    products.forEach((product) => {
      if (product.price > expensiveProduct.price) {
        expensiveProduct = product;
      }
    });
    return expensiveProduct;
  } else return null;
}

enum Day {
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
  Sunday,
}

function getDayType(day: Day): string {
  if (Day[day] === "Saturday" || Day[day] === "Sunday") return "Weekend";
  else return "Weekday";
}

async function squareAsync(n: number): Promise<number> {
  return new Promise<number>((resolve, reject) => {
    setTimeout(() => {
      if (n < 0) reject(new Error("Negative number not allowed"));
      else resolve(n * n);
    }, 1000);
  });
}
