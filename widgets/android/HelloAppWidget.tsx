import React from "react";
import { FlexWidget, TextWidget, ImageWidget } from "react-native-android-widget";

export function HelloAppWidget({ widgetInfo, image }) {
  return (
    <FlexWidget
      clickAction="OPEN_APP"
      style={{
        height: "match_parent",
        width: "match_parent",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#ffffff",
        borderRadius: 16,
      }}
    >
      {image ? (
        <ImageWidget image={image} imageWidth={widgetInfo.width} imageHeight={widgetInfo.height} />
      ) : (
        <TextWidget
          text="Nothing yet"
          style={{
            fontSize: 32,
            fontFamily: "Inter",
            color: "#000000",
          }}
        />
      )}
    </FlexWidget>
  );
}
