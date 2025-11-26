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
  "name": "Bocor",
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
  "description": "Rubac",
  "price": 0.5,
  "image": "/images/baamiyo.png"
},
{
  "id": 14,
  "name": "Koosto",
  "description": "1 maas",
  "price": 1.5,
  "image": "/images/koosto.png"
},
{
  "id": 15,
  "name": "Batiiq",
  "description": "1 kiilo",
  "price": 0.75,
  "image": "/images/batiiqo.png"
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
  "name": "Bataati",
  "description": "1 kiilo",
  "price": 1,
  "image": "/images/batiiq.png"
},
{
  "id": 19,
  "name": "Canbo",
  "description": "3 xabo",
  "price": 1,
  "image": "/images/canbo.png"
},

{
  "id": 37,
  "name": "Kabsar",
  "description": "1kii xirmo",
  "price": 0.5,
  "image": "/images/kabsar.png"
},

{
  "id": 38,
  "name": "Yaanyo Miro",
  "description": "",
  "price": 2,
  "image": "/images/yaanyomiro.png"
},
{
  "id": 35,
  "name": "liinmacaan",
  "description": "3 xabo",
  "price": 1,
  "image": "/images/liinmacaan.png"
},

{
  "id": 39,
  "name": "Moos",
  "description": "Gacankii",
  "price": 1,
  "image": "/images/moos.png"
},

{
  "id": 40,
  "name": "qajaar",
  "description": "1 kiilo",
  "price": 0.75,
  "image": "/images/qajaar.png"
},
{
  "id": 20,
  "name": "maceeye",
  "description": "1 xabo",
  "price": 1,
  "image": "/images/maceeye.png"
},
{
  "id": 21,
  "name": "mytom",
  "description": "1 gasac",
  "price": 1.25,
  "image": "/images/mytom.jpg"
},
{
  "id": 22,
  "name": "mytomato",
  "description": "box",
  "price": 2.5,
  "image": "/images/mytomatok.png"
},
{
  "id": 23,
  "name": "paprika",
  "description": "1 xabo",
  "price": 1.5,
  "image": "/images/paprika.png"
},
{
  "id": 24,
  "name": "primo",
  "description": "1 box",
  "price": 3,
  "image": "/images/premoo.jpg"
},
{
  "id": 25,
  "name": "Full",
  "description": "1 xabo",
  "price": 0.75,
  "image": "/images/primo.png"
},
{
  "id": 26,
  "name": "qaro",
  "description": "1 kii xabo",
  "price": 2,
  "image": "/images/qaro.png"
},
{
  "id": 27,
  "name": "shino",
  "description": "gasac",
  "price": 1,
  "image": "/images/shino.png"
},
{
  "id": 28,
  "name": "smart ketchup",
  "description": "1 kii xabo",
  "price": 0.75,
  "image": "/images/smartketchup.png"
},
{
  "id": 29,
  "name": "soya",
  "description": "1 kii xabo",
  "price": 2.5,
  "image": "/images/soya.png"
},
{
  "id": 30,
  "name": "tamaam digag",
  "description": "1 kii xabo",
  "price": 1.25,
  "image": "/images/tamaamdigag.png"
},
{
  "id": 31,
  "name": "xawaji",
  "description": "1 kii xabo",
  "price": 1.5,
  "image": "/images/xawa.png"
},
{
  "id": 32,
  "name": "Baked Beans",
  "description": "1 kii xabo",
  "price": 0.5,
  "image": "/images/baked.png"
},
{
  "id": 33,
  "name": "Bela",
  "description": "1 kii xabo",
  "price": 0.5,
  "image": "/images/bela.png"
},
{
  "id": 34,
  "name": "meceeye",
  "description": "1 kii xabo",
  "price": 1,
  "image": "/images/ekcin.png"
},
{
  "id": 36,
  "name": "jumbo",
  "description": "1 kiixabo",
  "price": 1.75,
  "image": "/images/jumbo.png"
},
    {
  "id": 36,
  "name": "jumbo xilwa",
  "description": "",
  "price": 1.5,
  "image": "/images/jumboxilwa.png"
},



 
  ];

  return NextResponse.json(products);
}
