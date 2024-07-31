import * as React from 'react';
import Skeleton from '@mui/material/Skeleton';

const SkeletonLoader = ({ variant, height, width }) => {
  return <Skeleton variant={variant} width={width} height={height} />;
};

export default SkeletonLoader;
