import type { FC, PropsWithChildren } from 'react';
import { Fragment, memo } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import cn from 'classnames';
import Image from 'next/image';

import { Button } from '@/components/button';

import styles from './dialogWindow.module.scss';

type Size = 'small' | 'normal' | 'large';
type Direction = 'up' | 'down' | 'center';

const sizes: Record<Size, string> = {
  small: `${styles.small}`,
  normal: `${styles.normal}`,
  large: `${styles.large}`,
};

const directions: Record<Direction, string> = {
  up: `${styles.up}`,
  down: `${styles.down}`,
  center: `${styles.center}`,
};

interface DialogWindowProps extends PropsWithChildren {
  isOpen: boolean;
  onClose: VoidFunction;
  buttonName?: string;
  buttonClassName?: string;
  startIcon?: string;
  endIcon?: string;
  withoutPadding?: boolean;
  withoutBlur?: boolean;
  size?: Size;
  direction?: Direction;
  className?: string;
}

const DialogWindow: FC<DialogWindowProps> = ({
  isOpen,
  onClose,
  buttonName,
  buttonClassName,
  startIcon,
  endIcon,
  className,
  children,
  withoutPadding = false,
  withoutBlur = false,
  size = 'normal',
  direction = 'down',
}) => {
  const isShowButtonContent = buttonName || startIcon || endIcon;
  return (
    <>
      {isShowButtonContent && (
        <Button className={buttonClassName} onClickHandler={onClose}>
          {startIcon && <Image src={startIcon} alt={startIcon.toString()} />}
          {buttonName}
          {endIcon && <Image src={endIcon} alt={endIcon.toString()} />}
        </Button>
      )}

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog
          open={isOpen}
          onClose={onClose}
          className={cn(styles.container, withoutBlur && styles.withoutBlur)}
        >
          <Dialog.Panel>
            <div
              className={cn(
                styles.sheet,
                sizes[size],
                directions[direction],
                withoutPadding && styles.withoutPadding,
                className,
              )}
            >
              {children}
            </div>
          </Dialog.Panel>
        </Dialog>
      </Transition>
    </>
  );
};

export default memo(DialogWindow);
