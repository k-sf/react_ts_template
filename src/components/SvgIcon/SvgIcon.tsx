import React from 'react';
import { IconSource } from 'custom-types';

type SvgIconProps = {
  className?: string;
  size?: number;
  source: IconSource;
};

const SvgIcon: React.FC<SvgIconProps> = ({
  className,
  size = 32,
  source: IconComp,
}: SvgIconProps) => (
  <IconComp className={className} width={size} height={size} />
);

export default SvgIcon;
