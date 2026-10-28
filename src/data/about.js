import { BookOpen, Camera, PawPrint, Coffee } from "lucide-react";
import azoreancow from "../assets/images/photos/azoreancow.jpeg"
import couplefrogs from "../assets/images/photos/couplefrogs.jpg"
import deer from "../assets/images/photos/deer.jpg"
import sunnyclouds from "../assets/images/photos/sunnyclouds.jpeg"
import pet1 from "../assets/images/photos/dinhas.jpeg"
import pet2 from "../assets/images/photos/toby.jpeg"
import pet3 from "../assets/images/photos/pitu.jpeg"

// The labels of the 4 photography polaroids
export const photos = [
  { caption: 'an Azorean cow', src: azoreancow, alt: 'a cow' },
  { caption: '2 loving frogs', src: couplefrogs, alt: '2 frogs' },
  { caption: 'a bambi', src: deer, alt: 'a deer' },
  { caption: 'sunny clouds in Azores', src: sunnyclouds, alt: 'landscape with sunny clouds' },
];

// "Things I love doing": each one is a draggable sticky note
export const hobbies = [
  {
    title: "Reading",
    text: "Currently reading: Throne of Glass by Sarah J Maas",
    Icon: BookOpen,
    color: "bg-sticky-orange",
    tilt: -2,
  },
  {
    title: "Photography",
    text: "Always with a camera in my bag.",
    Icon: Camera,
    color: "bg-sticky-blue",
    tilt: 2,
  },
  {
    title: "My animals",
    text: "Cuddles are mandatory.",
    Icon: PawPrint,
    color: "bg-sticky-pink",
    tilt: 1,
  },
  {
    title: "Coffee walks",
    text: `"Coffee, coffee, coffee" as Lorelai Gilmore once said`,
    Icon: Coffee,
    color: "bg-sticky-yellow",
    tilt: -1.5,
  },
];

// One polaroid per pet
export const pets = [
  { name: "Dinhas", src: pet1, alt: 'a bunny', tilt: 3 },
  { name: "Toby", src: pet2, alt: 'a dog', tilt: -2 },
  { name: "Pitu", src: pet3, alt: 'a dog', tilt: 4 },
];
