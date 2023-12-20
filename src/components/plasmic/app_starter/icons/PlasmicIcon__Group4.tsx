// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Group4IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Group4Icon(props: Group4IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 50 48"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M50 19.156c0-.69-.301-1.483-1.183-2.235L30.52 1.358C29.405.418 28.479 0 27.341 0c-1.577 0-2.713 1.045-2.713 2.444v8.46H5.334C1.97 10.905 0 12.619 0 15.605v7.083c0 2.987 1.971 4.7 5.334 4.7h19.295v8.377c0 1.4 1.136 2.548 2.76 2.548 1.136 0 1.901-.438 3.13-1.483l18.298-15.417C49.722 20.64 50 19.866 50 19.156z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Group4Icon;
/* prettier-ignore-end */
