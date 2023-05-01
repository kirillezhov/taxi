import React from 'react';
import cn from 'classnames';

import { IFormContainerProps } from './types';

import styles from './FormContainer.module.scss';
import {Button, Row, Typography} from 'antd';
import { TaxiIcon } from '../components/icons';

function FormContainer(props: React.PropsWithChildren<IFormContainerProps>) {
    const { className, label, title } = props;
    const classNames = cn(styles.container, className)

    return (
        <div className={classNames}>
            <Row justify="center">
                <div className={styles.iconWrapper}>
                    <TaxiIcon />
                </div>
            </Row>
            <Row justify="center">
                <Typography.Text className={styles.title}>
                    {title}
                </Typography.Text>
            </Row>
            <Row justify="center">
                <Typography.Text className={styles.label}>
                    {label}
                </Typography.Text>
            </Row>
            {props.children}
            <Row justify="center">
                <Button type="primary" className={styles.actionButton} size="middle" block>{"Заказать".toUpperCase()}</Button>
            </Row>
        </div>
    )
}

export default FormContainer;
