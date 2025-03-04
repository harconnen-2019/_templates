import React, { ReactNode } from 'react';
import s from './<FTName % paramcase>.module.scss'


interface Properties extends React.ComponentPropsWithoutRef<'div'> {
  children: ReactNode;
};

const <FTName % pascalcase>: React.FC<Properties> = (properties_) => {
  const { children, ...properties } = properties_

  return <div className={s.container} data-testid="<FTName % pascalcase>" {...properties}>{children}</div>;
}

export { <FTName % pascalcase> }