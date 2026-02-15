import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';


const FeatureList = [
  {
    title: '机器人视觉',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        <strong>Robot Vision</strong><br />
        <span style={{ display: 'block', height: '0.3em' }} />
        图像理解与环境感知，聚焦视觉算法在机器人系统中的落地与应用。
      </>
    ),
  },
  {
    title: '机器人导航',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        <strong>Robot Navigation</strong><br />
        <span style={{ display: 'block', height: '0.3em' }} />
        覆盖定位、建图与路径规划，构建稳定可靠的自主移动能力。
      </>
    ),
  },
  {
    title: '嵌入式开发',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        <strong>Embedded Development</strong><br />
        <span style={{ display: 'block', height: '0.3em' }} />
        关注软硬件协同，从底层系统到设备级工程实践。
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
