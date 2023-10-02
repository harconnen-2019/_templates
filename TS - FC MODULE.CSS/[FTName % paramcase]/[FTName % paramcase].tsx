import { ReactNode } from 'react';

import styles from './<FTName % paramcase>.module.css';

type <FTName % pascalcase>Props = {
  children: ReactNode;
};

export function <FTName % pascalcase>({ children }: <FTName % pascalcase>Props) {
  return <div className={styles.container} data-testid="<FTName % pascalcase>">{children}</div>;
}
