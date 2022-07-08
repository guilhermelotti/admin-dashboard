import React, { useState } from "react";
import * as S from "./styles";

import { SidebarDropdown } from "../SidebarDropdown";
import { SidebarLink } from "../SidebarLink";

import { data as initialData } from "./data";

import { Input } from "../Input";

export function Sidebar() {
  const [items, setItems] = useState(initialData);

  function filterItems(inputValue) {
    const searchInputIsEmpty = inputValue.length === 0;

    if (searchInputIsEmpty) {
      setItems(initialData);
      return;
    }

    function executeRecursiveFilter(initialData) {
      let matches = [];

      for (let i = 0; i < initialData?.length; i++) {
        if (initialData[i].label.includes(inputValue)) {
          matches.push(initialData[i]);
        } else {
          let subItemResult = executeRecursiveFilter(initialData[i].subItems);
          if (subItemResult.length > 0) {
            matches.push(...subItemResult);
          }
        }
      }

      return matches;
    }

    const filterResults = executeRecursiveFilter(initialData);
    setItems(filterResults);
  }

  function handleInputChange(inputValue) {
    filterItems(inputValue);
  }

  return (
    <S.Container>
      <Input
        placeholder="Search"
        id="search-sidebar-routes"
        name="search-sidebar-routes"
        onInputChange={handleInputChange}
      />
      <S.SidebarItemsWrapper>
        {items.map((item) =>
          item.isDropdown ? (
            <SidebarDropdown
              key={item.label}
              label={item.label}
              icon={item.icon}
              subItems={item.subItems}
            />
          ) : (
            <SidebarLink
              key={item.label}
              label={item.label}
              to={item.to}
              icon={item.icon}
            />
          )
        )}
      </S.SidebarItemsWrapper>
    </S.Container>
  );
}
