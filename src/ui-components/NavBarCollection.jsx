/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import NavBar from "./NavBar";
import { Collection } from "@aws-amplify/ui-react";
export default function NavBarCollection(props) {
  const { items, overrides: overridesProp, ...rest } = props;
  const overrides = { ...overridesProp };
  return (
    <Collection
      type="list"
      direction="column"
      justifyContent="stretch"
      items={items || []}
      {...rest}
      {...getOverrideProps(overrides, "Collection")}
    >
      {(item, index) => (
        <NavBar
          key={item.id}
          {...getOverrideProps(overrides, "Collection.NavBar[0]")}
        ></NavBar>
      )}
    </Collection>
  );
}
