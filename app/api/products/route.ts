import { NextResponse } from "next/server";

export async function GET() {
  const products = [
    {
  "id": 1,
  "name": "Bardho",
  "description": "1 kiilo",
  "price": 1,
  "image": "/images/bardho.png"
},
{
  "id": 2,
  "name": "Basal",
  "description": "1 kiilo",
  "price": 1,
  "image": "/images/basal.png"
},
{
  "id": 3,
  "name": "liin dhanaan",
  "description": "1 kiilo",
  "price": 1,
  "image": "/images/liin.png"
},
{
  "id": 4,
  "name": "yaanyo simirsan",
  "description": "1 kiilo",
  "price": 1,
  "image": "/images/yaanyomiro.png"
},
{
  "id": 5,
  "name": "Babaay",
  "description": "1kii xabo",
  "price": 1,
  "image": "/images/babaay.png"
},
{
  "id": 6,
  "name": "Barbarooni",
  "description": "1 kiilo",
  "price": 1,
  "image": "/images/barbarooni.png"
},
{
  "id": 7,
  "name": "Tufaax",
  "description": "3 xabo",
  "price": 1,
  "image": "/images/tufaax.png"
},
{
  "id": 8,
  "name": "Liin macaan",
  "description": "3 xabo ",
  "price": 1,
  "image": "/images/liinmacaan.png"
},
{
  "id": 9,
  "name": "Karooto",
  "description": "1 kiilo",
  "price": 1.5,
  "image": "/images/karooto.png"
},
{
  "id": 10,
  "name": "ansalaato",
  "description": "1 kiilo",
  "price": 1.5,
  "image": "/images/ansalaato.png"
},
{
  "id": 11,
  "name": "Bocor Xabo",
  "description": "",
  "price": 1.5,
  "image": "/images/bocor.png"
},
{
  "id": 12,
  "name": "Basbaas Tumi",
  "description": "N",
  "price": 0.5,
  "image": "/images/basbaas.png"
},
{
  "id": 13,
  "name": "Baamiyo",
  "description": "1 kiilo",
  "price": 2,
  "image": "/images/baamiyo.png"
},
{
  "id": 14,
  "name": "Koosto",
  "description": "11 xabo",
  "price": 1.5,
  "image": "/images/koosto.png"
},
{
  "id": 15,
  "name": "Bataati",
  "description": "1 kiilo",
  "price": 0.75,
  "image": "/images/batati.png"
},
{
  "id": 16,
  "name": "Beytu raaf",
  "description": "1 kiilo",
  "price": 2,
  "image": "/images/biitoraaf.png"
},
{
  "id": 17,
  "name": "isbaan dhees",
  "description": "1 kiilo",
  "price": 1.5,
  "image": "/images/isbandhees.png"
},
{
  "id": 18,
  "name": "Batiiq",
  "description": "1 kii xabo",
  "price": 1,
  "image": "/images/batiiq.png"
},
{
  "id": 19,
  "name": "Canbo",
  "description": "3 xabo",
  "price": 1,
  "image": "/images/canbo.png"
}
 
  ];

  return NextResponse.json(products);
}
