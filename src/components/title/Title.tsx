import React from 'react';

const Title = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div className={`text-2xl font-bold text-white my-6 ${className}`}>
      {children}
    </div>
  );
};

export default Title;
