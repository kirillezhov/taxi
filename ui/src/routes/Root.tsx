import React, { useState } from 'react';
import { replace, toString } from 'lodash';

import { Button, Layout, Space, Form, Modal, Input, InputNumber } from 'antd';
import { Content, Header } from 'antd/es/layout/layout';

interface RegistrationFormProps {
    name: string;
    surname: string;
    phone: string;
    code: string;
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
            <Header>
                <Space>
                    <Button>Вход</Button>
                    <Button onClick={showModal}>Регистрация</Button>
                </Space>
            </Header>
            <Content></Content>

            <Modal
                title="Регистрация"
                open={visibleModal}
                onOk={registrationForm.submit}
                onCancel={handleCancel}
                centered={true}
                cancelText="Отмена"
                okText="Регистрация"
            >
                <Form
                    labelCol={{ span: 8 }}
                    wrapperCol={{ span: 16 }}
                    form={registrationForm}
                    onFinish={handleSubmit}
                >
                    <Form.Item
                        label="Имя"
                        name={nameof<RegistrationFormProps>(x => x.name)}
                        rules={[{ required: true, message: "Поле обязательно для заполнения" }]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        label="Фамилия"
                        name={nameof<RegistrationFormProps>(x => x.surname)}
                        rules={[{ required: true, message: "Поле обязательно для заполнения" }]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        label="Телефон"
                        name={nameof<RegistrationFormProps>(x => x.phone)}
                        rules={[{ required: true, message: "Поле обязательно для заполнения", len: 10 }]}
                    >
                        <InputNumber
                            addonBefore="+7"
                            style={{ width: '100%' }}
                            controls={false}
                            formatter={(value) => replace(toString(value), /[\\w.]+/, '')}
                        />
                    </Form.Item>
                    <Form.Item
                        label="Код подтверждения"
                        name={nameof<RegistrationFormProps>(x => x.code)}
                        rules={[{ required: true, message: "Недействительное значение", max: 6 }]}
                    >
                        <Space>
                            <InputNumber controls={false} style={{ width: '100%' }} />
                            <Button>Отправить код</Button>
                        </Space>
                    </Form.Item>
                </Form>
            </Modal>
        </Layout>
    );
}

export default Root;