import SmartPhoneImage from "../../assets/smartPhone.jpg";
import RunningShoesImage from "../../assets/runningShoes.jpg";
import DigitalCameraImage from "../../assets/digitalCamera.jpg";
import ElectricToothBrushImage from "../../assets/electricToothBrush.png";
import WirelessHeadphonesImage from "../../assets/WirelessHeadphones.jpg";
import FitnessTrackerWatchImage from "../../assets/fitnessTrackerWatch.jpg";
import PortableSolarChargerImage from "../../assets/portableSolarCharger.jpg";
import WaterproofActionCameraImage from "../../assets/waterproofActionCamera.jpg";
import SmartHomeSecurityCameraImage from "../../assets/homeSecurityCamera.jpg";
import TravelBackpackUsbPortImage from "../../assets/travelBackpackUsbPort.jpg";
import { Product } from "../types";

const products: Product[] = [
  {
    id: 1,
    name: "Smartphone",
    description:
      "Stay connected with our latest smartphone. Featuring a high-resolution display, powerful processor, and advanced camera system, this phone is perfect for keeping up with your busy lifestyle.",
    validityDate: new Date("2024-12-31"),
    cost: 799.99,
    image: SmartPhoneImage
  },
  {
    id: 2,
    name: "Running Shoes",
    description:
      "Hit the ground running with our premium running shoes. Designed for comfort and performance, these shoes feature cushioned soles, breathable mesh uppers, and durable outsoles for maximum traction.",
    validityDate: new Date("2024-12-31"),
    cost: 99.99,
    image: RunningShoesImage
  },
  {
    id: 3,
    name: "Digital Camera",
    description:
      "Capture life's moments in stunning detail with our digital camera. With high-resolution sensors, advanced autofocus, and intuitive controls, this camera delivers professional-quality photos and videos.",
    validityDate: new Date("2024-12-31"),
    cost: 599.99,
    image: DigitalCameraImage
  },
  {
    id: 4,
    name: "Electric Toothbrush",
    description:
      "Upgrade your oral care routine with our electric toothbrush. Featuring oscillating bristles and multiple brushing modes, this toothbrush removes plaque and improves gum health for a brighter smile.",
    validityDate: new Date("2024-12-31"),
    cost: 79.99,
    image: ElectricToothBrushImage
  },
  {
    id: 5,
    name: "Wireless Headphones",
    description:
      "Immerse yourself in your favorite music with our wireless headphones. With noise-cancellation technology and long battery life, these headphones deliver crisp, clear sound wherever you go.",
    validityDate: new Date("2024-12-31"),
    cost: 149.99,
    image: WirelessHeadphonesImage
  },
  {
    id: 6,
    name: "Fitness Tracker Watch",
    description:
      "Stay on top of your fitness goals with our advanced fitness tracker watch. Monitor your heart rate, track your steps, and analyze your sleep patterns to optimize your health and performance.",
    validityDate: new Date("2024-12-31"),
    cost: 79.99,
    image: FitnessTrackerWatchImage
  },
  {
    id: 7,
    name: "Portable Solar Charger",
    description:
      "Harness the power of the sun with our portable solar charger. Charge your devices on the go using clean, renewable energy. Perfect for camping, hiking, or emergency situations.",
    validityDate: new Date("2024-12-31"),
    cost: 49.99,
    image: PortableSolarChargerImage
  },
  {
    id: 8,
    name: "Waterproof Action Camera",
    description:
      "Capture your adventures in stunning detail with our waterproof action camera. With 4K video recording and built-in image stabilization, this camera is perfect for capturing all your outdoor activities.",
    validityDate: new Date("2024-12-31"),
    cost: 129.99,
    image: WaterproofActionCameraImage
  },
  {
    id: 9,
    name: "Smart Home Security Camera",
    description:
      "Keep your home safe and secure with our smart home security camera. Featuring motion detection, night vision, and two-way audio, you can monitor your home from anywhere using your smartphone.",
    validityDate: new Date("2022-12-1"),
    cost: 89.99,
    image: SmartHomeSecurityCameraImage
  },
  {
    id: 10,
    name: "Travel Backpack with USB Charging Port",
    description:
      "Travel in style with our versatile travel backpack. With multiple compartments, a built-in USB charging port, and padded shoulder straps, this backpack is perfect for urban adventures or weekend getaways.",
    validityDate: new Date("2022-12-1"),
    cost: 59.99,
    image: TravelBackpackUsbPortImage
  }
];

export default products;
