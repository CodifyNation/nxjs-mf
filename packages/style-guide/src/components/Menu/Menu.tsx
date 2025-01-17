// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import {
  cloneElement,
  isValidElement,
  memo,
  MouseEvent,
  MouseEventHandler,
  ReactNode,
  useEffect,
  useMemo,
  useState,
} from 'react';
import NavBackArrow from '../../assets/ic_navback_arrow.svg';
import clsx from 'clsx';

import classes from './Menu.module.scss';

export type MenuItemType = {
  label: ReactNode;
  link?: ReactNode;
  icon?: ReactNode;
  // eslint-disable-next-line no-unused-vars
  expanded?: boolean | ((item: MenuItemType) => boolean);
  items?: MenuItemType[];
};
type MenuItemProps = {
  item: MenuItemType;
  expanded: boolean;
  handleExpand: MouseEventHandler;
  accordion?: boolean;
  onClose?: () => void;
};
const MenuItem = memo(function MenuItem({
  item,
  expanded,
  handleExpand,
  accordion,
  onClose,
}: MenuItemProps) {
  const itemContent = (
    <div className={classes.label}>
      {item.icon}
      <label>{item.label}</label>
      {accordion && item && item?.items && item?.items?.length > 0 && (
        <NavBackArrow />
      )}
    </div>
  );

  return (
    <li
      className={clsx(
        classes.item,
        expanded && classes.expanded,
        expanded &&
          item &&
          item?.items &&
          item?.items?.length > 0 &&
          classes.expandedSubmenu,
        accordion && classes.accordion,
      )}
      onClick={item.items?.length === 0 ? onClose : handleExpand}
    >
      {item.link && isValidElement(item.link)
        ? cloneElement<{ draggable?: boolean }>(
            item.link,
            { draggable: false },
            itemContent,
          )
        : itemContent}
      {expanded && item.items?.length > 0 && (
        <Menu items={item.items} submenu onClose={onClose} />
      )}
    </li>
  );
});

type MenuProps = {
  items: MenuItemType[];
  submenu?: boolean;
  accordion?: boolean;
  onClose?: () => void;
};
export const Menu = ({ items, submenu, accordion, onClose }: MenuProps) => {
  const expandedItems = useMemo(
    () =>
      items.filter((it) =>
        typeof it.expanded === 'function' ? it.expanded(it) : it.expanded,
      ),
    [items],
  );
  const [expanded, setExpanded] = useState(expandedItems);

  const handleExpand = (item: MenuItemType) => (e: MouseEvent) => {
    if (!expandedItems.includes(item)) {
      if (expanded.includes(item)) {
        setExpanded(expanded.filter((it) => it !== item));
      } else {
        setExpanded([...expanded, item]);
      }

      e.stopPropagation();
      e.preventDefault();
    }
  };

  useEffect(() => {
    const expandedItems = items
      .filter((it) =>
        typeof it.expanded === 'function' ? it.expanded(it) : it.expanded,
      )
      .filter((it) => !expanded.includes(it));
    if (expandedItems.length > 0) {
      setExpanded([...expanded, ...expandedItems]);
    }
  }, [items, expanded]);

  if (!items || !Array.isArray(items)) return null;
  return (
    <ul className={clsx(classes.root, submenu && classes.submenu)}>
      {items.map((item, index) => (
        <MenuItem
          key={index}
          item={item}
          expanded={expanded.includes(item)}
          handleExpand={handleExpand(item)}
          accordion={accordion}
          onClose={onClose}
        />
      ))}
    </ul>
  );
};
