export default interface DropdownProps<T> {
  items: T[];
  getText: (value: T) => string;
  getHref: (value: T) => string;
  isCurrent: (value: T) => boolean;
  className?: string;
}
