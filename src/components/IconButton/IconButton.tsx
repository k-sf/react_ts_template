import React from 'react';
import cx from 'classnames';
import SvgIcon from 'components/SvgIcon';

import { IconSource } from 'custom-types';
import styles from './IconButton.module.scss';

type IconButtonProps = {
  className?: string;
  iconClassName?: string;
  icon: IconSource;
  size?: 'small' | 'medium' | 'large';
  disabled?: boolean;
  border?: boolean;
  onClick: () => void;
};

const IconButton: React.FC<IconButtonProps> = ({
  className,
  iconClassName,
  size = 'medium',
  border = false,
  disabled = false,
  icon,
  onClick,
}: IconButtonProps) => (
  <button
    type="button"
    disabled={disabled}
    className={cx(styles.root, className, styles[size], {
      [styles.border]: border,
    })}
    onClick={onClick}
  >
    <SvgIcon className={cx(styles.icon, iconClassName)} source={icon} />
  </button>
);

export default IconButton;
