import { ReactNode } from 'react';

import styles from './<FTName % paramcase>.module.scss';

type <FTName % pascalcase>Props = {
  children: ReactNode;
};

function <FTName % pascalcase>({ children }: <FTName % pascalcase>Props) {
  return <div className={styles.container} data-testid="<FTName % pascalcase>">{children}</div>;
}

export { <FTName % pascalcase> }
