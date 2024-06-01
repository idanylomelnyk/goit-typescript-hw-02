import { RotatingLines } from 'react-loader-spinner';
import css from './Loader.module.css';

const Loader: React.FC = () => (
  <div className={css.wrapper}>
    <RotatingLines
      visible={true}
      height={50}
      width={50}
      strokeWidth={5}
      animationDuration={0.75}
      ariaLabel="rotating-lines-loading"
      wrapperStyle={{}}
      wrapperClass=""
      strokeColor="orange"
    />
  </div>
);

export default Loader;
