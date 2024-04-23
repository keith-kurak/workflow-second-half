import "ts-node/register";
import { ExpoConfig } from "expo/config";

module.exports = ({ config }: { config: ExpoConfig }) => {
  return {
    name: "workflow-second-half",
    slug: "workflow-second-half",
    version: "1.0.0",
    orientation: "portrait",
    icon: "./assets/images/icon.png",
    scheme: "myapp",
    userInterfaceStyle: "automatic",
    splash: {
      image: "./assets/images/splash.png",
      resizeMode: "contain",
      backgroundColor: "#ffffff",
    },
    assetBundlePatterns: ["**/*"],
    ios: {
      supportsTablet: true,
      bundleIdentifier: "com.keithkurak.workflowsecondhalf",
      entitlements: {
        "com.apple.security.application-groups": [
          "group.com.keithkurak.workflowsecondhalf",
        ],
      },
    },
    android: {
      adaptiveIcon: {
        foregroundImage: "./assets/images/adaptive-icon.png",
        backgroundColor: "#ffffff",
      },
      package: "com.keithkurak.workflowsecondhalf",
    },
    web: {
      bundler: "metro",
      output: "static",
      favicon: "./assets/images/favicon.png",
    },
    plugins: [
      "expo-router",
      [
        "expo-quick-actions",
        {
          androidIcons: {
            fav_icon: {
              foregroundImage: "./assets/images/adaptive-icon-fav.png",
              backgroundColor: "#ffffff",
            },
          },
          iosIcons: {
            fav_icon: "./assets/images/fav.png",
          },
        },
      ],
      ["./plugins/withWidget.ts"],
    ],
    experiments: {
      typedRoutes: true,
    },
  };
};
