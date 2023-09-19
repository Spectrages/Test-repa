import bathroomImage from "@/assets/images/bathroom.png";
import roomImage from "@/assets/images/room.png";
import hallwayImage from "@/assets/images/hallway.png";
import kitchenImage from "@/assets/images/room.png";

export const cleaningArray = ["KITCHEN", "ROOM", "BATHROOM", "HALLWAY"];
export const cards = [
  {
    image: kitchenImage,
    name: "KITCHEN",
  },
  {
    image: roomImage,
    name: "ROOM",
  },
  {
    image: bathroomImage,
    name: "BATHROOM",
  },
  {
    image: hallwayImage,
    name: "HALLWAY",
  },
];

export const singleCardData = [
  {
    image: kitchenImage,
    name: "KITCHEN",
    title: "In the kitchen",
    description: [
      "We wash the dishes, clean the sink and plumbing",
      "We wipe all accessible surfaces, switches, doors and door handles",
      "We wash the outside of the stove, countertop, kitchen apron and refrigerator",
      "We wipe household appliances",
      "Wipe down kitchen cabinet fronts",
      "We vacuum and wash the floor, wipe the baseboards",
      "Taking out the trash",
    ],
  },
  {
    image: roomImage,
    name: "ROOM",
    title: "In the room",
    description: [
      "We fold clothes and arrange things",
      "Making the bed or changing bed linen",
      "We wipe all accessible surfaces, switches, doors and door handles",
      "We wipe household appliances",
      "Cleaning mirrors and glass surfaces",
      "We vacuum carpets, wash the floor and wipe baseboards",
    ],
  },
  {
    image: bathroomImage,
    name: "BATHROOM",
    title: "In the bathroom",
    description: [
      "We wipe all accessible surfaces, switches, doors and door handles",
      "We wash plumbing, shower and bathroom",
      "Cleaning mirrors and glass surfaces",
      "Cleaning the sink and disinfecting the toilet",
      "We vacuum the rugs, wash the floor and wipe the baseboards",
      "Taking out the trash",
    ],
  },
  {
    image: hallwayImage,
    name: "HALLWAY",
    title: "In the hallway",
    description: [
      "We wipe all accessible surfaces, switches, the front door and door handles",
      "Cleaning mirrors and glass surfaces",
      "We vacuum carpets, wash the floor and wipe baseboards",
      "Fixing shoes",
    ],
  },
];
