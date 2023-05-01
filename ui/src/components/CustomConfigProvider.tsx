import React from 'react';

import { ConfigProvider } from 'antd';

function CustomConfigProvider(props: React.PropsWithChildren) {
    const { children } = props;

    return (
        <ConfigProvider theme={{
            token: {
              colorPrimary: '#FFCB2A',
                colorText: '#ffffff',
                colorPrimaryText: '#222327',
                borderRadius: 2,
            },
            components: {
                Button: {
                    fontSizeLG: 20,
                    controlHeightLG: 55,
                    fontSize: 16,
                    controlHeight: 50,
                    colorText: '#222327 !important',
                    colorBorder: ''
                },
                Input: {
                    colorBorder: '#D9D9D9',
                    colorBgContainer: 'transparent',
                    colorTextPlaceholder: 'rgba(255,255,255, 0.7)'
                },
                InputNumber: {
                    colorBorder: '#D9D9D9',
                    colorBgContainer: 'transparent',
                    colorTextPlaceholder: 'rgba(255,255,255, 0.7)'
                }
            }
        }}>
            {children}
        </ConfigProvider>
    )
}

export default CustomConfigProvider;