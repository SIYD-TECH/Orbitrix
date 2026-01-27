import DroneLogistics from "./BlogContents/DroneLogistics"
import DroneSpeed from "./BlogContents/DroneSpeed"
import EffectiveDrones from "./BlogContents/EffectiveDrones"
import RobotDogs from "./BlogContents/RobotDogs"
import SolarDrones from "./BlogContents/SolarDrones"

const BlogContent = ({ sku }: { sku: string }) => {
  if (sku == "robot-dogs") {
    return <RobotDogs />
  } else if (sku == "drone-logistics") {
    return <DroneLogistics />
  } else if (sku === "solar-drones") {
    return <SolarDrones />
  } else if (sku === "drone-speed") {
    return <DroneSpeed />
  } else if (sku === "effective-drones") {
    return <EffectiveDrones />
  }
}

export default BlogContent