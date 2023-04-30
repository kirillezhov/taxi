import React from 'react';

import { ConfigProvider } from 'antd';

function CustomConfigProvider(props: React.PropsWithChildren) {
    const { children } = props;

    return (
        <ConfigProvider theme={{
            token: {
              colorPrimary: '#FFCB2A',
                colorText: '#ffffff',
                colorPrimaryText: '#222327'
            },
            components: {
                Button: {
                    fontSizeLG: 20,
                    controlHeightLG: 55,
                    colorBgContainer: '#FFCB2A',
                    colorText: '#222327',
                    borderRadiusLG: 2,
                    colorBorder: 'transparent'
                }
            }
        }}>
            {children}
        </ConfigProvider>
    )
}

export default CustomConfigProvider;