import React from 'react';

import SplashPageLayout from './components/Layout/SplashPageLayout.js';
import SplashPage from './components/SplashPage/SplashPage.js';

export default function Main (props) {
    return (
        <div>
            <SplashPageLayout>
                <Route
                    path="/"
                    render={(props) => {
                    return <SplashPage />;
                    }}
                />
            </SplashPageLayout>
        </div>
    )
}