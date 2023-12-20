// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type GroupIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function GroupIcon(props: GroupIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 42 21"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M1.557 21h38.865A1.57 1.57 0 0042 19.425c0-.858-.706-1.533-1.578-1.533H1.557c-.872 0-1.557.675-1.557 1.533C0 20.305.685 21 1.557 21zm0-8.936h38.865c.872 0 1.578-.675 1.578-1.533a1.57 1.57 0 00-1.578-1.575H1.557C.685 8.956 0 9.651 0 10.531c0 .858.685 1.533 1.557 1.533zm0-8.915h38.865c.872 0 1.578-.675 1.578-1.534 0-.858-.706-1.554-1.578-1.554H1.557C.685.061 0 .757 0 1.615c0 .86.685 1.534 1.557 1.534z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default GroupIcon;
/* prettier-ignore-end */
