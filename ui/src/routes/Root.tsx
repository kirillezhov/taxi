import React, { useState } from 'react';
import { replace, toString } from 'lodash';

import { Button, Layout, Space, Form, Modal, Input, InputNumber, Typography } from 'antd';
import { Content, Footer } from 'antd/es/layout/layout';
import { FormContainer } from '../containers';
import { Header }  from '../components';
import { PhoneFilled } from '@ant-design/icons';

import styles from './Root.module.scss';
import { LocationIcon, WalletIcon } from '../components/icons';

interface RegistrationFormProps {
    addressFrom: string;
    addressTo: string;
    additionalAddress: string;
    name: string;
    surname: string;
    phone: string;
    code: string;
    cost: number;
}

function Root() {
    const [visibleModal, setVisibleModal] = useState(false);
    const [registrationForm] = Form.useForm();
    const [verificationCode, setVerificationCode] = useState<string | null>(null);

    const showModal = () => {
        setVisibleModal(true)
    };

    const handleSubmit = (values: RegistrationFormProps) => {
        console.log(values);
    };

    const handleCancel = () => {
        setVisibleModal(false)
        registrationForm.resetFields()
    };

    const handlePhoneChange = () => {
        // TODO
    }

    return (
        <Layout>
            <Header />
            <Content className={styles.mainContent}>
                <div className={styles.overlay}></div>
                <div className={styles.actionBlock}>
                    <div className={styles.description}>
                        <Typography.Title>Закажите ОНЛАЙН!</Typography.Title>
                        <Typography.Paragraph className={styles.paragraph}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore</Typography.Paragraph>
                        <div>
                            <Space align="center">
                                <PhoneFilled style={{ fontSize: '35px' }} />
                                <Typography.Text className={styles.phone}>+7(495) 331 33 67</Typography.Text>
                            </Space>
                        </div>
                        <div className={styles.buttonBlock}>
                            <Button type="primary" size="large" className={styles.button} block>ПОЗВОНИТЬ</Button>
                        </div>
                    </div>
                    <FormContainer
                        actionName="Заказать"
                        title="Заказать онлайн"
                        label="Заполните поля"
                        onClick={() => {}}
                        className={styles.formContainer}
                    >
                        <Form
                            form={registrationForm}
                            onFinish={handleSubmit}
                            layout="vertical"
                        >
                            <Form.Item
                                name={nameof<RegistrationFormProps>(x => x.addressFrom)}
                                rules={[{ required: true, message: "Поле обязательно для заполнения" }]}
                            >
                                <Input
                                    size="large"
                                    placeholder="Откуда"
                                    prefix={<LocationIcon style={{ height: 18, width: 18 }} />}
                                />
                            </Form.Item>
                            <Form.Item
                                name={nameof<RegistrationFormProps>(x => x.addressTo)}
                                rules={[{ required: true, message: "Поле обязательно для заполнения" }]}
                            >
                                <Input
                                    size="large"
                                    placeholder="Куда"
                                    prefix={<LocationIcon style={{ height: 18, width: 18 }} />}
                                />
                            </Form.Item>
                            <Form.Item
                                name={nameof<RegistrationFormProps>(x => x.additionalAddress)}
                            >
                                <Input
                                    size="large"
                                    placeholder="Доп. адрес"
                                    prefix={<LocationIcon style={{ height: 18, width: 18 }} />}
                                />
                            </Form.Item>
                            <Form.Item
                                name={nameof<RegistrationFormProps>(x => x.phone)}
                                rules={[{ required: true, message: "Поле обязательно для заполнения", len: 10 }]}
                            >
                                <InputNumber
                                    size="large"
                                    addonBefore="+7"
                                    style={{ width: '100%' }}
                                    controls={false}
                                    formatter={(value) => replace(toString(value), /[\\w.]+/, '')}
                                    placeholder="Номер телефона"
                                />
                            </Form.Item>
                            <Form.Item
                                name={nameof<RegistrationFormProps>(x => x.cost)}
                            >
                                <Input
                                    size="large"
                                    placeholder="Стоимость поездки"
                                    prefix={<WalletIcon style={{ height: 18, width: 18 }} />}
                                    disabled
                                />
                            </Form.Item>
                            {/*<Form.Item*/}
                            {/*    label="Код подтверждения"*/}
                            {/*    name={nameof<RegistrationFormProps>(x => x.code)}*/}
                            {/*    rules={[{ required: true, message: "Недействительное значение", max: 6 }]}*/}
                            {/*>*/}
                            {/*    <Space>*/}
                            {/*        <InputNumber controls={false} style={{ width: '100%' }} />*/}
                            {/*        <Button size="middle">Отправить код</Button>*/}
                            {/*    </Space>*/}
                            {/*</Form.Item>*/}
                        </Form>
                    </FormContainer>
                </div>
            </Content>
            <Footer className={styles.footer}>
                <div className={styles.content}>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                </div>
            </Footer>

            <Modal
                title="Регистрация"
                open={visibleModal}
                onOk={registrationForm.submit}
                onCancel={handleCancel}
                centered={true}
                cancelText="Отмена"
                okText="Регистрация"
            >

            </Modal>
        </Layout>
    );
}

export default Root;