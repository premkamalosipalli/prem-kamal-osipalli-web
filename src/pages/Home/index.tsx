import { PageContainer } from '@ant-design/pro-components';
import styles from './index.less';

const HomePage: React.FC = () => {
  return (
    <PageContainer ghost>
      <div className={styles.container}>
        <h1>Home Page</h1>
      </div>
    </PageContainer>
  );
};

export default HomePage;
