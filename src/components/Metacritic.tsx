import { Badge } from "@chakra-ui/react";

interface Props {
  score: number;
}

const Metacritic = ({ score }: Props) => {
  let color = score > 75 ? "green" : score > 60 ? "yellow" : "";
  return (
    //@ts-ignore
    <Badge
      colorScheme={color}
      fontSize={"12px"}
      paddingX={2}
      borderRadius={"4px"}
    >
      {score}
    </Badge>
  );
};

export default Metacritic;
