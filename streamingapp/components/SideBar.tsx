import NextImage from "next/image";
import NextLink from "next/link";

import {
  Box,
  List,
  ListItem,
  ListIcon,
  Divider,
  Center,
  LinkBox,
  LinkOverlay,
} from "@chakra-ui/layout";

import {
  MdHome,
  MdSearch,
  MdLibraryMusic,
  MdPlaylistAdd,
  MdFavorite,
} from "react-icons/md";

const navMenu = [
  {
    name: "Home",
    icon: MdHome,
    route: "/",
  },
  {
    name: "Search",
    icon: MdSearch,
    route: "/search",
  },
  {
    name: "Your Library",
    icon: MdLibraryMusic,
    route: "/library",
  },
];

const SideBar = () => {
  return (
    <Box
      width="100%"
      paddingX="5px"
      bg="black"
      color="gray"
      height="calc(100vh - 100px)"
    >
      <Box marginBottom="20px" width="120px" paddingY="20px">
        <NextImage
          src="/AppLogo.svg"
          width={100}
          height={100}
          alt="streaming_app_logo"
        />
      </Box>
      <Box marginBottom="20px">
        <List spacing={2}>
          {navMenu.map(({ name, icon, route }) => (
            <ListItem key={name} paddingY="2px" fontSize="16px">
              <LinkBox>
                <NextLink href={route} passHref>
                  <LinkOverlay>
                    <ListIcon as={icon} color="white" marginRight="20px" />
                    {name}
                  </LinkOverlay>
                </NextLink>
              </LinkBox>
            </ListItem>
          ))}
        </List>
      </Box>
    </Box>
  );
};

export default SideBar;
