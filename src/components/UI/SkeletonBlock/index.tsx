import { ComponentProps, FC, ReactNode } from 'react';
import Skeleton from 'react-loading-skeleton';

interface ISkeletonBlockProps {
  loading: boolean;
  skeletonProps?: ComponentProps<typeof Skeleton>;
  children: ReactNode;
}

export const SkeletonBlock: FC<ISkeletonBlockProps> = ({
  loading,
  skeletonProps,
  children,
}) => {
  if (loading) {
    return <Skeleton {...skeletonProps} />;
  }
  return <>{children}</>;
};
