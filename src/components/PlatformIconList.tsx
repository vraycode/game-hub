import { HStack, Icon, Text } from "@chakra-ui/react";
import { Platform } from "../hooks/useGames";
import {
  FaWindows,
  FaPlaystation,
  FaXbox,
  FaApple,
  FaLinux,
  FaAndroid,
} from "react-icons/fa";
interface Props {
  platforms: Platform[];
}
import { MdPhoneIphone } from "react-icons/md";
import { SiNintendo } from "react-icons/si";
import { BsGlobe } from "react-icons/bs";
const PlatformIconList = ({ platforms }: Props) => {
  const iconMap = {
    pc: FaWindows,
    playstation: FaPlaystation,
    xbox: FaXbox,
    mac: FaApple,
    linux: FaLinux,
    android: FaAndroid,
    ios: MdPhoneIphone,
    nintendo: SiNintendo,
    web: BsGlobe,
  };
  return (
    <>
      <HStack marginY={"20px"}>
        {platforms.map((platform) => (
          //@ts-ignore
          <Icon color="gray.500" as={iconMap[platform.slug]}></Icon>
        ))}
      </HStack>
    </>
  );
};
export default PlatformIconList;
