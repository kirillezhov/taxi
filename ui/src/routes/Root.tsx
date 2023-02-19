import React from 'react';

import { Button, Layout, Space } from 'antd';
import { Content, Header } from 'antd/es/layout/layout';

function Root() {
    return (
        <Layout>
            <Header>
                <Space>
                    <Button>Вход</Button>
                    <Button>Регистрация</Button>
                </Space>
            </Header>
            <Content></Content>
        </Layout>
    );
}

export default Root;