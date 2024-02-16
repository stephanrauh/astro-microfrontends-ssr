import { asset, css, js } from "./entrypoints";

import manifestA from "../../public/app-a/dist/manifest.json";
import manifestB from "../../public/app-b/dist/manifest.json";

export const buildManifest = async () => {
  return {
    mfa: {
      url: `http://localhost:3000/app-a/dist/${manifestA[js][asset]}`,
      css: `http://localhost:3000/app-a/dist/${manifestA[css][asset]}`,
    },
    mfb: {
      url: `http://localhost:3000/app-b/dist/${manifestB[js][asset]}`,
      css: `http://localhost:3000/app-b/dist/${manifestB[css][asset]}`,
    },
  };
};
