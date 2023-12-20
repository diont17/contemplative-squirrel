// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: sKQ28BLFUJrwEqPEuPR1D8
// Component: LLf4UpIDnKMo

import * as React from "react";

import * as p from "@plasmicapp/react-web";
import * as ph from "@plasmicapp/react-web/lib/host";
import * as plasmicAuth from "@plasmicapp/react-web/lib/auth";
import { usePlasmicDataSourceContext } from "@plasmicapp/data-sources-context";
import {
  executePlasmicDataOp,
  usePlasmicDataOp,
  usePlasmicInvalidate
} from "@plasmicapp/react-web/lib/data-sources";

import {
  hasVariant,
  classNames,
  wrapWithClassName,
  createPlasmicElementProxy,
  makeFragment,
  MultiChoiceArg,
  SingleBooleanChoiceArg,
  SingleChoiceArg,
  pick,
  omit,
  useTrigger,
  StrictProps,
  deriveRenderOpts,
  ensureGlobalVariants
} from "@plasmicapp/react-web";
import PageLayout from "../../PageLayout"; // plasmic-import: gbLIUkABup4F/component
import { RichDetails } from "@plasmicpkgs/plasmic-rich-components/skinny/rich-details";
import { AntdSingleSlider } from "@plasmicpkgs/antd5/skinny/registerSlider";
import { AntdSliderMark } from "@plasmicpkgs/antd5/skinny/registerSlider";
import { AntdButton } from "@plasmicpkgs/antd5/skinny/registerButton";
import { Fetcher } from "@plasmicapp/react-web/lib/data-sources";

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_antd_5_hostless_css from "../antd_5_hostless/plasmic_antd_5_hostless.module.css"; // plasmic-import: ohDidvG9XsCeFumugENU3J/projectcss
import plasmic_plasmic_rich_components_css from "../plasmic_rich_components/plasmic_plasmic_rich_components.module.css"; // plasmic-import: jkU633o1Cz7HrJdwdxhVHk/projectcss
import projectcss from "./plasmic_app_starter.module.css"; // plasmic-import: sKQ28BLFUJrwEqPEuPR1D8/projectcss
import sty from "./PlasmicViewScan.module.css"; // plasmic-import: LLf4UpIDnKMo/css

import image2KGqFsPsdFsn7 from "./images/image2.png"; // plasmic-import: kGQFsPsdFsn7/picture

createPlasmicElementProxy;

export type PlasmicViewScan__VariantMembers = {};
export type PlasmicViewScan__VariantsArgs = {};
type VariantPropType = keyof PlasmicViewScan__VariantsArgs;
export const PlasmicViewScan__VariantProps = new Array<VariantPropType>();

export type PlasmicViewScan__ArgsType = {};
type ArgPropType = keyof PlasmicViewScan__ArgsType;
export const PlasmicViewScan__ArgProps = new Array<ArgPropType>();

export type PlasmicViewScan__OverridesType = {
  root?: p.Flex<"div">;
  pageLayout?: p.Flex<typeof PageLayout>;
  img?: p.Flex<typeof p.PlasmicImg>;
  dataDetails?: p.Flex<typeof RichDetails>;
  slider?: p.Flex<typeof AntdSingleSlider>;
  sliderMark?: p.Flex<typeof AntdSliderMark>;
  exportToPacs?: p.Flex<typeof AntdButton>;
};

export interface DefaultViewScanProps {
  className?: string;
}

const $$ = {};

function PlasmicViewScan__RenderFunc(props: {
  variants: PlasmicViewScan__VariantsArgs;
  args: PlasmicViewScan__ArgsType;
  overrides: PlasmicViewScan__OverridesType;
  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;

  const args = React.useMemo(() => Object.assign({}, props.args), [props.args]);

  const $props = {
    ...args,
    ...variants
  };

  const $ctx = ph.useDataEnv?.() || {};
  const refsRef = React.useRef({});
  const $refs = refsRef.current;

  const currentUser = p.useCurrentUser?.() || {};

  let [$queries, setDollarQueries] = React.useState<
    Record<string, ReturnType<typeof usePlasmicDataOp>>
  >({});
  const stateSpecs: Parameters<typeof p.useDollarState>[0] = React.useMemo(
    () => [
      {
        path: "slider.value",
        type: "private",
        variableType: "text",
        initFunc: ({ $props, $state, $queries, $ctx }) => undefined
      },
      {
        path: "pageLayout.scannerstatus",
        type: "private",
        variableType: "text",
        initFunc: ({ $props, $state, $queries, $ctx }) => "Ready \ud83d\udfe2"
      },
      {
        path: "pageLayout.user",
        type: "private",
        variableType: "text",
        initFunc: ({ $props, $state, $queries, $ctx }) => "GRAPE, GREG"
      }
    ],
    [$props, $ctx, $refs]
  );
  const $state = p.useDollarState(stateSpecs, {
    $props,
    $ctx,
    $queries: $queries,
    $refs
  });

  const new$Queries: Record<string, ReturnType<typeof usePlasmicDataOp>> = {
    scaninfo: usePlasmicDataOp(() => {
      return {
        sourceId: "rp2KGdrnivkunXp7r598rC",
        opId: "189757f6-c2d8-481c-9f3b-eae39c25a2f8",
        userArgs: {
          filters: [$ctx.params.scanid]
        },
        cacheKey: `plasmic.$.189757f6-c2d8-481c-9f3b-eae39c25a2f8.$.`,
        invalidatedKeys: null,
        roleId: null
      };
    })
  };
  if (Object.keys(new$Queries).some(k => new$Queries[k] !== $queries[k])) {
    setDollarQueries(new$Queries);

    $queries = new$Queries;
  }

  return (
    <React.Fragment>
      <div className={projectcss.plasmic_page_wrapper}>
        <div
          data-plasmic-name={"root"}
          data-plasmic-override={overrides.root}
          data-plasmic-root={true}
          data-plasmic-for-node={forNode}
          className={classNames(
            projectcss.all,
            projectcss.root_reset,
            projectcss.plasmic_default_styles,
            projectcss.plasmic_mixins,
            projectcss.plasmic_tokens,
            plasmic_antd_5_hostless_css.plasmic_tokens,
            plasmic_plasmic_rich_components_css.plasmic_tokens,
            sty.root
          )}
        >
          <PageLayout
            data-plasmic-name={"pageLayout"}
            data-plasmic-override={overrides.pageLayout}
            className={classNames("__wab_instance", sty.pageLayout)}
            onScannerstatusChange={p.generateStateOnChangeProp($state, [
              "pageLayout",
              "scannerstatus"
            ])}
            onUserChange={p.generateStateOnChangeProp($state, [
              "pageLayout",
              "user"
            ])}
            scannerstatus={p.generateStateValueProp($state, [
              "pageLayout",
              "scannerstatus"
            ])}
            user={p.generateStateValueProp($state, ["pageLayout", "user"])}
          >
            <ph.DataCtxReader>
              {$ctx => (
                <div className={classNames(projectcss.all, sty.freeBox__mij1K)}>
                  {(() => {
                    try {
                      return $queries.scaninfo.data[0].errorcode == 0;
                    } catch (e) {
                      if (
                        e instanceof TypeError ||
                        e?.plasmicType === "PlasmicUndefinedDataError"
                      ) {
                        return true;
                      }
                      throw e;
                    }
                  })() ? (
                    <p.PlasmicImg
                      data-plasmic-name={"img"}
                      data-plasmic-override={overrides.img}
                      alt={""}
                      className={classNames(sty.img)}
                      displayHeight={"auto"}
                      displayMaxHeight={"none"}
                      displayMaxWidth={"100%"}
                      displayMinHeight={"0"}
                      displayMinWidth={"0"}
                      displayWidth={"651px"}
                      loading={"lazy"}
                      src={{
                        src: image2KGqFsPsdFsn7,
                        fullWidth: 789,
                        fullHeight: 571,
                        aspectRatio: undefined
                      }}
                    />
                  ) : null}
                  {(() => {
                    try {
                      return $queries.scaninfo.data[0].errorcode != 0;
                    } catch (e) {
                      if (
                        e instanceof TypeError ||
                        e?.plasmicType === "PlasmicUndefinedDataError"
                      ) {
                        return true;
                      }
                      throw e;
                    }
                  })() ? (
                    <div
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.text__je8Oy
                      )}
                    >
                      <React.Fragment>
                        {(() => {
                          try {
                            return (
                              "Scan failed: E" +
                              String($queries.scaninfo.data[0].errorcode) +
                              " - " +
                              $queries.scaninfo.data[0].errormessage
                            );
                          } catch (e) {
                            if (
                              e instanceof TypeError ||
                              e?.plasmicType === "PlasmicUndefinedDataError"
                            ) {
                              return "";
                            }
                            throw e;
                          }
                        })()}
                      </React.Fragment>
                    </div>
                  ) : null}
                  <RichDetails
                    data-plasmic-name={"dataDetails"}
                    data-plasmic-override={overrides.dataDetails}
                    bordered={true}
                    className={classNames("__wab_instance", sty.dataDetails)}
                    column={3}
                    data={(() => {
                      try {
                        return $queries.scaninfo;
                      } catch (e) {
                        if (
                          e instanceof TypeError ||
                          e?.plasmicType === "PlasmicUndefinedDataError"
                        ) {
                          return undefined;
                        }
                        throw e;
                      }
                    })()}
                    fields={(() => {
                      const __composite = [
                        {
                          key: "__airtable_id",
                          fieldId: "__airtable_id",
                          isHidden: null
                        },
                        {
                          key: "Surname (from patient)",
                          fieldId: "Surname (from patient)"
                        },
                        { key: "scanid", fieldId: "scanid" },
                        { key: "protocol", fieldId: "protocol", span: null },
                        { key: "starttime", fieldId: "starttime", title: null },
                        { key: "result", fieldId: "result", isHidden: null },
                        { key: "patient", fieldId: "patient", isHidden: null },
                        { key: "users", fieldId: "users", isHidden: null },
                        {
                          key: "Surname (from users)",
                          fieldId: "Surname (from users)",
                          isHidden: null
                        },
                        {
                          key: "errorcode",
                          fieldId: "errorcode",
                          isHidden: null
                        },
                        {
                          key: "errormessage",
                          fieldId: "errormessage",
                          isHidden: null
                        },
                        {},
                        { key: "snr", fieldId: "snr" }
                      ];
                      __composite["0"]["isHidden"] = true;
                      __composite["3"]["span"] = 2;
                      __composite["4"]["title"] = "Start time";
                      __composite["5"]["isHidden"] = false;
                      __composite["6"]["isHidden"] = true;
                      __composite["7"]["isHidden"] = true;
                      __composite["8"]["isHidden"] = true;
                      __composite["9"]["isHidden"] = true;
                      __composite["10"]["isHidden"] = true;
                      return __composite;
                    })()}
                    size={"small"}
                  />

                  <AntdSingleSlider
                    data-plasmic-name={"slider"}
                    data-plasmic-override={overrides.slider}
                    className={classNames("__wab_instance", sty.slider)}
                    onChange={p.generateStateOnChangeProp($state, [
                      "slider",
                      "value"
                    ])}
                    sliderScopeClassName={sty["slider__slider"]}
                    stylableMarks={
                      <AntdSliderMark
                        data-plasmic-name={"sliderMark"}
                        data-plasmic-override={overrides.sliderMark}
                        className={classNames("__wab_instance", sty.sliderMark)}
                        mark={50}
                      >
                        <div
                          className={classNames(
                            projectcss.all,
                            projectcss.__wab_text,
                            sty.text__qVkF
                          )}
                        >
                          {"Window / Level"}
                        </div>
                      </AntdSliderMark>
                    }
                    tooltipVisible={"unset"}
                    value={p.generateStateValueProp($state, [
                      "slider",
                      "value"
                    ])}
                  />

                  <div
                    className={classNames(projectcss.all, sty.freeBox__pFf6A)}
                  >
                    <p.Stack
                      as={"div"}
                      hasGap={true}
                      className={classNames(projectcss.all, sty.freeBox__uusry)}
                    >
                      <p.Stack
                        as={"div"}
                        hasGap={true}
                        className={classNames(
                          projectcss.all,
                          sty.freeBox__uhzPk
                        )}
                      >
                        <AntdButton
                          className={classNames(
                            "__wab_instance",
                            sty.button__n5Toa
                          )}
                          onClick={async () => {
                            const $steps = {};

                            $steps["goToViewScan"] = true
                              ? (() => {
                                  const actionArgs = {
                                    destination: `/view-scan/${"Number($ctx.params.scanid)+1"}`
                                  };
                                  return (({ destination }) => {
                                    if (
                                      typeof destination === "string" &&
                                      destination.startsWith("#")
                                    ) {
                                      document
                                        .getElementById(destination.substr(1))
                                        .scrollIntoView({ behavior: "smooth" });
                                    } else {
                                      location.assign(destination);
                                    }
                                  })?.apply(null, [actionArgs]);
                                })()
                              : undefined;
                            if (
                              $steps["goToViewScan"] != null &&
                              typeof $steps["goToViewScan"] === "object" &&
                              typeof $steps["goToViewScan"].then === "function"
                            ) {
                              $steps["goToViewScan"] = await $steps[
                                "goToViewScan"
                              ];
                            }
                          }}
                          type={"primary"}
                        >
                          <div
                            className={classNames(
                              projectcss.all,
                              projectcss.__wab_text,
                              sty.text__kgYeo
                            )}
                          >
                            {"Next image"}
                          </div>
                        </AntdButton>
                        <AntdButton
                          className={classNames(
                            "__wab_instance",
                            sty.button__yr91C
                          )}
                          onClick={async () => {
                            const $steps = {};

                            $steps["goToViewScan"] = true
                              ? (() => {
                                  const actionArgs = {
                                    destination: `/view-scan/${(() => {
                                      try {
                                        return Number($ctx.params.scanid) - 1;
                                      } catch (e) {
                                        if (
                                          e instanceof TypeError ||
                                          e?.plasmicType ===
                                            "PlasmicUndefinedDataError"
                                        ) {
                                          return undefined;
                                        }
                                        throw e;
                                      }
                                    })()}`
                                  };
                                  return (({ destination }) => {
                                    if (
                                      typeof destination === "string" &&
                                      destination.startsWith("#")
                                    ) {
                                      document
                                        .getElementById(destination.substr(1))
                                        .scrollIntoView({ behavior: "smooth" });
                                    } else {
                                      location.assign(destination);
                                    }
                                  })?.apply(null, [actionArgs]);
                                })()
                              : undefined;
                            if (
                              $steps["goToViewScan"] != null &&
                              typeof $steps["goToViewScan"] === "object" &&
                              typeof $steps["goToViewScan"].then === "function"
                            ) {
                              $steps["goToViewScan"] = await $steps[
                                "goToViewScan"
                              ];
                            }
                          }}
                          type={"primary"}
                        >
                          <div
                            className={classNames(
                              projectcss.all,
                              projectcss.__wab_text,
                              sty.text__wBxsF
                            )}
                          >
                            {"Previous image"}
                          </div>
                        </AntdButton>
                      </p.Stack>
                      <AntdButton
                        className={classNames(
                          "__wab_instance",
                          sty.button___32L8K
                        )}
                        onClick={async () => {
                          const $steps = {};

                          $steps["goToPatientdetails"] = true
                            ? (() => {
                                const actionArgs = {
                                  destination: `/patients/${(() => {
                                    try {
                                      return $queries.scaninfo.data[0].patient;
                                    } catch (e) {
                                      if (
                                        e instanceof TypeError ||
                                        e?.plasmicType ===
                                          "PlasmicUndefinedDataError"
                                      ) {
                                        return undefined;
                                      }
                                      throw e;
                                    }
                                  })()}`
                                };
                                return (({ destination }) => {
                                  if (
                                    typeof destination === "string" &&
                                    destination.startsWith("#")
                                  ) {
                                    document
                                      .getElementById(destination.substr(1))
                                      .scrollIntoView({ behavior: "smooth" });
                                  } else {
                                    location.assign(destination);
                                  }
                                })?.apply(null, [actionArgs]);
                              })()
                            : undefined;
                          if (
                            $steps["goToPatientdetails"] != null &&
                            typeof $steps["goToPatientdetails"] === "object" &&
                            typeof $steps["goToPatientdetails"].then ===
                              "function"
                          ) {
                            $steps["goToPatientdetails"] = await $steps[
                              "goToPatientdetails"
                            ];
                          }
                        }}
                        type={"primary"}
                      >
                        <div
                          className={classNames(
                            projectcss.all,
                            projectcss.__wab_text,
                            sty.text__oCLuH
                          )}
                          onClick={async event => {
                            const $steps = {};

                            $steps["goToPatientdetails"] = true
                              ? (() => {
                                  const actionArgs = {
                                    destination: `/patients/${(() => {
                                      try {
                                        return $queries.scaninfo.data[0]
                                          .patient;
                                      } catch (e) {
                                        if (
                                          e instanceof TypeError ||
                                          e?.plasmicType ===
                                            "PlasmicUndefinedDataError"
                                        ) {
                                          return undefined;
                                        }
                                        throw e;
                                      }
                                    })()}`
                                  };
                                  return (({ destination }) => {
                                    if (
                                      typeof destination === "string" &&
                                      destination.startsWith("#")
                                    ) {
                                      document
                                        .getElementById(destination.substr(1))
                                        .scrollIntoView({ behavior: "smooth" });
                                    } else {
                                      location.assign(destination);
                                    }
                                  })?.apply(null, [actionArgs]);
                                })()
                              : undefined;
                            if (
                              $steps["goToPatientdetails"] != null &&
                              typeof $steps["goToPatientdetails"] ===
                                "object" &&
                              typeof $steps["goToPatientdetails"].then ===
                                "function"
                            ) {
                              $steps["goToPatientdetails"] = await $steps[
                                "goToPatientdetails"
                              ];
                            }
                          }}
                        >
                          {"Back to patient"}
                        </div>
                      </AntdButton>
                    </p.Stack>
                    <p.Stack
                      as={"div"}
                      hasGap={true}
                      className={classNames(projectcss.all, sty.freeBox__wWsy)}
                    >
                      <AntdButton
                        className={classNames(
                          "__wab_instance",
                          sty.button__iqt0V
                        )}
                        type={"primary"}
                      >
                        <div
                          className={classNames(
                            projectcss.all,
                            projectcss.__wab_text,
                            sty.text__oxNQi
                          )}
                        >
                          {"Export to PACs"}
                        </div>
                      </AntdButton>
                      <AntdButton
                        data-plasmic-name={"exportToPacs"}
                        data-plasmic-override={overrides.exportToPacs}
                        className={classNames(
                          "__wab_instance",
                          sty.exportToPacs
                        )}
                        type={"primary"}
                      >
                        <div
                          className={classNames(
                            projectcss.all,
                            projectcss.__wab_text,
                            sty.text__jMxd
                          )}
                        >
                          {"Export to USB"}
                        </div>
                      </AntdButton>
                    </p.Stack>
                  </div>
                </div>
              )}
            </ph.DataCtxReader>
          </PageLayout>
        </div>
      </div>
    </React.Fragment>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: [
    "root",
    "pageLayout",
    "img",
    "dataDetails",
    "slider",
    "sliderMark",
    "exportToPacs"
  ],
  pageLayout: [
    "pageLayout",
    "img",
    "dataDetails",
    "slider",
    "sliderMark",
    "exportToPacs"
  ],
  img: ["img"],
  dataDetails: ["dataDetails"],
  slider: ["slider", "sliderMark"],
  sliderMark: ["sliderMark"],
  exportToPacs: ["exportToPacs"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "div";
  pageLayout: typeof PageLayout;
  img: typeof p.PlasmicImg;
  dataDetails: typeof RichDetails;
  slider: typeof AntdSingleSlider;
  sliderMark: typeof AntdSliderMark;
  exportToPacs: typeof AntdButton;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicViewScan__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicViewScan__VariantsArgs;
    args?: PlasmicViewScan__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicViewScan__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicViewScan__ArgsType,
      ReservedPropsType
    > &
    /* Specify overrides for each element directly as props*/ Omit<
      NodeOverridesType<T>,
      ReservedPropsType | VariantPropType | ArgPropType
    > &
    /* Specify props for the root element*/ Omit<
      Partial<React.ComponentProps<NodeDefaultElementType[T]>>,
      ReservedPropsType | VariantPropType | ArgPropType | DescendantsType<T>
    >;

function makeNodeComponent<NodeName extends NodeNameType>(nodeName: NodeName) {
  type PropsType = NodeComponentProps<NodeName> & { key?: React.Key };
  const func = function <T extends PropsType>(
    props: T & StrictProps<T, PropsType>
  ) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: PlasmicDescendants[nodeName],
          internalArgPropNames: PlasmicViewScan__ArgProps,
          internalVariantPropNames: PlasmicViewScan__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicViewScan__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicViewScan";
  } else {
    func.displayName = `PlasmicViewScan.${nodeName}`;
  }
  return func;
}

function withPlasmicPageGuard<P extends object>(
  WrappedComponent: React.ComponentType<P>
) {
  const PageGuard: React.FC<P> = props => (
    <p.PlasmicPageGuard
      minRole={null}
      appId={"sKQ28BLFUJrwEqPEuPR1D8"}
      authorizeEndpoint={"https://studio.plasmic.app/authorize"}
      canTriggerLogin={true}
    >
      <WrappedComponent {...props} />
    </p.PlasmicPageGuard>
  );

  return PageGuard;
}

function withUsePlasmicAuth<P extends object>(
  WrappedComponent: React.ComponentType<P>
) {
  const WithUsePlasmicAuthComponent: React.FC<P> = props => {
    const dataSourceCtx = usePlasmicDataSourceContext() ?? {};
    const { isUserLoading, user, token } = plasmicAuth.usePlasmicAuth({
      appId: "sKQ28BLFUJrwEqPEuPR1D8"
    });

    return (
      <p.PlasmicDataSourceContextProvider
        value={{
          ...dataSourceCtx,
          isUserLoading,
          userAuthToken: token,
          user
        }}
      >
        <WrappedComponent {...props} />
      </p.PlasmicDataSourceContextProvider>
    );
  };
  return WithUsePlasmicAuthComponent;
}

export const PlasmicViewScan = Object.assign(
  // Top-level PlasmicViewScan renders the root element
  withUsePlasmicAuth(withPlasmicPageGuard(makeNodeComponent("root"))),
  {
    // Helper components rendering sub-elements
    pageLayout: makeNodeComponent("pageLayout"),
    img: makeNodeComponent("img"),
    dataDetails: makeNodeComponent("dataDetails"),
    slider: makeNodeComponent("slider"),
    sliderMark: makeNodeComponent("sliderMark"),
    exportToPacs: makeNodeComponent("exportToPacs"),

    // Metadata about props expected for PlasmicViewScan
    internalVariantProps: PlasmicViewScan__VariantProps,
    internalArgProps: PlasmicViewScan__ArgProps,

    // Page metadata
    pageMetadata: {
      title: "",
      description: "",
      ogImageSrc: "",
      canonical: ""
    }
  }
);

export default PlasmicViewScan;
/* prettier-ignore-end */