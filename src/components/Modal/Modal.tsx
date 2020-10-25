import React from 'react';
import cx from 'classnames';

import IconButton from 'components/IconButton';
import icons from 'icons';
import styles from './Modal.module.scss';

type ModalProps = {
  className?: string;
  children: JSX.Element | JSX.Element[];
  closeable?: boolean;
  onClose?: () => void;
  rounded?: boolean;
};

const Modal: React.FC<ModalProps> = ({
  className,
  children,
  closeable = false,
  onClose,
  rounded = false,
}: ModalProps) => (
  <div className={styles.root}>
    <div
      className={cx(styles.modal, className, {
        [styles.rounded]: rounded,
      })}
    >
      {closeable && onClose && (
        <IconButton
          className={styles.iconClose}
          icon={icons.close}
          onClick={onClose}
        />
      )}
      {children}
    </div>
  </div>
);

export default Modal;
