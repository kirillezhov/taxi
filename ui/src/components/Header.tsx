import React, { FC } from 'react';

import { Row, Layout, Space } from 'antd';
import { LoginOutlined } from '@ant-design/icons';
import { TelegramIcon, VKIcon } from './icons';

import styles from './Header.module.scss';

const Header: FC = () => {
    const { Header, Content } = Layout;

    return (
        <Header className={styles.header}>
            <Content className={styles.content}>
                <Row align="middle">
                    <div className={styles.logo}>LOGO</div>
                    <div className={styles.menuItem}>Инструкция</div>
                    <div className={styles.menuItem}>Контакты</div>
                </Row>
                <Space align="center">
                    <div className={styles.communication}>
                        <TelegramIcon className={styles.socialNetwork} />
                        <VKIcon className={styles.socialNetwork} />
                    </div>

                    <LoginOutlined className={styles.icon} />
                    <div>Вход/Выход</div>
                </Space>
            </Content>
        </Header>
    );
}

export default Header;