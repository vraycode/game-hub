import { HStack, Image, List, ListItem, Spinner, Text } from "@chakra-ui/react";
import useGeneres from "../hooks/useGeneres";
import getCroppedImageUrl from "../services/image-url";

const GenereList = () => {
  const { data, isLoading, error } = useGeneres();
  if (error) return null;
  if (isLoading) return <Spinner></Spinner>;

  return (
    // @ts-ignore
    <List>
      {data.map((genre) => (
        <ListItem key={genre.id} paddingY={"5px"}>
          <HStack>
            <Image
              boxSize={"32px"}
              borderRadius={8}
              src={getCroppedImageUrl(genre.image_background)}
            ></Image>
            <Text fontSize="lg">{genre.name}</Text>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default GenereList;
