import { NextResponse } from "next/server";

export async function GET() {
  const products = [
    {
      id: 1,
      name: "Bananas",
      description: "Perfect ripeness, ready to eat",
      price: 1.8,
      image: "/images/banana.png",
    },
    {
      id: 2,
      name: "Fresh Oranges",
      description: "Sweet and juicy oranges packed with vitamin C",
      price: 2.5,
      image: "/images/orange.png",
    },
    {
      id: 3,
      name: "Green Grapes",
      description: "Seedless green grapes, sweet and crunchy",
      price: 3.5,
      image: "/images/grapes.png",
    },
  ];

  return NextResponse.json(products);
}
