import React from "react";
import clsx from "clsx";
import styles from "./styles.module.css";

const FeatureList = [
    {
        title: "Tài liệu",
        Svg: require("@site/static/img/undraw_docusaurus_mountain.svg").default,
        description: <>Xem phần này để ôn lại kiến thức đã học</>
    },
    {
        title: "Bài viết",
        Svg: require("@site/static/img/undraw_docusaurus_tree.svg").default,
        description: <>Xem phần này để biết thêm một số kiến thức hay sẽ cần trong quá trình học và làm sản phẩm cuối khóa</>
    }
];

function Feature({ Svg, title, description }) {
    return (
        <div className={clsx("col col--6")}>
            <div className="text--center">
                <Svg className={styles.featureSvg} role="img" />
            </div>
            <div className="text--center padding-horiz--md">
                <h3>{title}</h3>
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
