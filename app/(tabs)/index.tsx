import { useEffect, useState } from "react";
import { StyleSheet, Image } from "react-native";
import { requestWidgetUpdate } from "react-native-android-widget";
import { HelloAppWidget } from "@/widgets/android/HelloAppWidget";

import EditScreenInfo from "@/components/EditScreenInfo";
import { Text, View } from "@/components/Themed";

import * as RNFS from "@dr.pogodin/react-native-fs";

export default function TabOneScreen() {
  const [latestShare, setLatestShare] = useState<string | undefined>(undefined);
  useEffect(() => {
    (async function doAsync() {
      try {
        const latestSharePath = `${RNFS.DocumentDirectoryPath}/latest_share.jpg`;
        const result = await RNFS.downloadFile({
          fromUrl:
            "https://openaccess-cdn.clevelandart.org/1958.67/1958.67_web.jpg",
          toFile: latestSharePath,
        }).promise;
        console.log(result);
        const imageBase64 = await RNFS.readFile(latestSharePath, "base64");
        setLatestShare(imageBase64);
        console.log(imageBase64.substring(0, 100) + "...");
        requestWidgetUpdate({
          widgetName: "HelloAppWidget",
          renderWidget: (props) => <HelloAppWidget image={"data:image/jpg;base64," + imageBase64} widgetInfo={props} />,
          widgetNotFound: () => {
            // Called if no widget is present on the home screen
          },
        });
      } catch (e) {
        console.log(e);
      }
    })();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tab One</Text>
      <View
        style={styles.separator}
        lightColor="#eee"
        darkColor="rgba(255,255,255,0.1)"
      />
      {latestShare && <Image
        source={{ uri: "data:image/jpg;base64," + latestShare }}
        style={{ width: 200, height: 200 }}
      />}
      <EditScreenInfo path="app/(tabs)/index.tsx" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
