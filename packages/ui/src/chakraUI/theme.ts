import { createSystem, defaultConfig, defineConfig } from "@chakra-ui/react";
import { breakpoints, semanticTokens, tokens } from "./foundations";

const config = defineConfig({
  theme: {
    breakpoints,
    tokens,
    semanticTokens,
  },
});

const theme = createSystem(defaultConfig, config);

export default theme;
