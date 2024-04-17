import React from 'react';
import type { WidgetTaskHandlerProps } from 'react-native-android-widget';
import { HelloAppWidget } from './HelloAppWidget';
import * as RNFS from "@dr.pogodin/react-native-fs";

export async function widgetTaskHandler(props: WidgetTaskHandlerProps) {

  const latestSharePath = `${RNFS.DocumentDirectoryPath}/latest_share.jpg`

  const imageBase64 = await RNFS.readFile(latestSharePath, 'base64');

  switch (props.widgetAction) {
    case 'WIDGET_ADDED':
    case 'WIDGET_UPDATE':
    case 'WIDGET_RESIZED':
      props.renderWidget(<HelloAppWidget widgetInfo={props.widgetInfo} imageBase64={"data:image/jpg;base64," + imageBase64} />);
      break;
    default:
      break;
  }
}